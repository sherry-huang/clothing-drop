export const fetchParkingData = () => {
    return fetch(
        `https://data.kcg.gov.tw/api/action/datastore_search?resource_id=fe3f93da-9673-4f7b-859c-9017d793f798&limit=1000`
    )
    .then((response) => response.json())
    .then((data) => (
        data.result.records.map((item) => {
            return {
                lng: item['座標-經度'],
                lat: item['座標-緯度'],
                type: item['型式'], // 立體 | 平面
                title: item['場名'],
                address: item['位置'],
                district: item['行政區'],
                charge: item['收費標準\n(未標示車種者，為小型車費率)'],
                adminInfo: item['管理者資訊'],
            }
        })
    ));
};