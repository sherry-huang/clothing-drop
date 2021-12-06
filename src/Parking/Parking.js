import React, { Component } from 'react';
import styles from './Parking.module.scss';
import { GoogleMap, LoadScript, OverlayView } from '@react-google-maps/api';
import { fetchParkingData } from './ParkingConst';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faParking, faCarSide, faWind, faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons';

const containerStyle = {
    position: "relative",
    width: "100%",
    height: "100%"
};

const center = {
    lat: 22.6027253,
    lng: 120.305000
};

const getPixelPositionOffset = (width, height) => ({
    x: -(width / 2),
    y: -(height / 2),
  })

class Parking extends Component {
    formRef = React.createRef();

    state = {
        data: [],
        title: "尚無資料",
        type: "尚無資料",
        adminInfo: "尚無資料",
        address: "尚無資料",
        district: "尚無資料",
        charge: "尚無資料"
    };

    componentDidMount() {
        const fetchingData = async () => {
            const data = await Promise.all([
                fetchParkingData()
            ]);
            this.setState({
                data: data[0]
            })
        }
        fetchingData();
    }

    onChange = (value, key) => {
        this.setState({
            [key]: value
        })
    };

    onClick = (item) => {
        this.setState({
            title: item.title,
            type: item.type,
            adminInfo: item.adminInfo,
            address: item.address,
            district: item.district,
            charge: item.charge,
        })
    };

    render() {
        return (
            <div className={styles['parking-space']}>
                <div className={styles['parking-header']}>
                    <FontAwesomeIcon icon={faParking} className={styles['icon-p']}/>
                    <div className={styles['parking-title']}>arking </div>
                </div>
                <div className={styles['parking-content']}>
                    <div className={styles['parking-map']}>
                        <LoadScript
                            googleMapsApiKey="AIzaSyA22_dQ87p0Do1JoEdmqAV9f4U15xjx5zA"
                        >
                            <div className={styles['google-map']}>
                                <GoogleMap
                                    mapContainerStyle={containerStyle}
                                    center={center}
                                    zoom={15}
                                    clickableIcons={false}
                                    isMarkerShown
                                >
                                    { this.state.data.map((item, idx) => {
                                        return <OverlayView
                                            key={idx}
                                            position={{lat: parseFloat(item.lat), lng: parseFloat(item.lng)}}
                                            mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
                                            getPixelPositionOffset={getPixelPositionOffset}
                                        >
                                            <div
                                                className={styles['label-box']}
                                                onClick={() => this.onClick(item)}
                                            >
                                                <div className={styles['label-content']}>
                                                    <FontAwesomeIcon icon={faParking} size="xm" color="#fff"/> 
                                                    <div className={styles['box-title']}>{item.title}</div>
                                                </div>
                                            </div>
                                        </OverlayView>
                                    })}
                                </GoogleMap>
                            </div>
                        </LoadScript>
                    </div>
                    <div className={styles['parking-empty']} />
                    <div className={styles['parking-info']}>
                        <div className={styles['parking-info-box']}>
                            <FontAwesomeIcon icon={faCarSide} className={styles['icon-car']}/>
                            <FontAwesomeIcon icon={faWind} className={styles['icon-wind']} rotation={180}/>
                            <div className={styles['parking-detail']}>
                                <div className={styles['parking-info-header-box']}>
                                    <div className={styles['parking-info-header']}>
                                        <FontAwesomeIcon icon={faMapMarkedAlt} className={styles['icon-map']}/>
                                        <div className={styles['parking-info-title']}>停車場資訊</div>
                                    </div>
                                    <div className={styles['parking-info-desc']}>請點擊停車場獲得更多詳細資訊</div>
                                </div>
                                <div className={styles['parking-info-content-box']}>
                                    <div>
                                        <li>{`名稱：${this.state.title}`}</li>
                                        <li>{`行政區：${this.state.district}`}</li>
                                        <li>{`地址：${this.state.address}`}</li>
                                        <li>{`型式：${this.state.type}`}</li>
                                        <li>{`收費標準：${this.state.charge}`}</li>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Parking;