![image](https://github.com/sherry-huang/parking/blob/main/banner.png)
[English Version](https://github.com/sherry-huang/parking/blob/main/README.md) | [中文版](https://github.com/sherry-huang/parking/blob/main/README.zh-TW.md)

# Parking Space
Every time I go to Kaohsiung, I don’t know where is a parking space, so I have to make one by myself!

## How to develop

1. The front-end is developed using [React](https://zh-hant.reactjs.org/).
2. Apply for the Google Maps JavaScript API key to use google maps, and use [@react-google-maps/api package](https://www.npmjs.com/package/@react-google-maps/api) (Document link: [Document](https://react-google-maps-api-docs.netlify.app/)).
3. The back-end data uses the [Kaohsiung City Public Off-street Parking List](https://data.kcg.gov.tw/dataset/department-of-transportation30) published by the Kaohsiung City Government to link its CKAN data API.
4. Design RWD for several commonly used devices.

## How to use

1. You can move the cursor to the parking symbol P, you can see the name of the parking space.
2. Click the parking symbol P again to see the detailed information of the parking space in the parking space information section, including name, administrative area, address, type and charging standard.

## Example

![gif](https://github.com/sherry-huang/parking/blob/main/introduction.gif)
