![image](https://github.com/sherry-huang/parking/blob/main/banner.png)

[English Version](https://github.com/sherry-huang/parking/blob/main/README.md) | [中文版](https://github.com/sherry-huang/parking/blob/main/README.zh-TW.md)

# Parking Space

每次去高雄玩都不知道哪裡有停車場，只好自己來做一個！

## 如何開發

1. 前端使用 [React](https://zh-hant.reactjs.org/) 開發
2. 申請 Google Maps JavaScript API 的密鑰以使用 google maps，並使用 [@react-google-maps/api 套件](https://www.npmjs.com/package/@react-google-maps/api) (文件連結：[文件](https://react-google-maps-api-docs.netlify.app/))
3. 後端資料則使用高雄市政府開放資料的 [高雄市公有路外停車場一覽表](https://data.kcg.gov.tw/dataset/department-of-transportation30) 串接其 CKAN 資料 API 
4. 針對幾種常用的裝置做 RWD 設計

## 如何使用

1. 可將游標移動至停車符號 P 上，可看到該停車場的名稱
2. 再點擊停車符號 P 即可於停車場資訊部分看見該停車場的詳細資訊，包含名稱、行政區、地址、型式及收費標準

![gif](https://github.com/sherry-huang/parking/blob/main/introduction.gif)
