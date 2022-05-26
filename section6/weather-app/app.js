const request = require("request");
const forecast = require("./utils/forecast");

// const url =
//   "http://api.weatherstack.com/current?access_key=21a5fa91385bbeab220922702a43f112&query=New%20York&units=f";

// request({ url: url, json: true }, (error, response) => {
//   // console.log(response.body.current);
//   if (error) {
//     console.log("Unable to connect to weather service!");
//   } else if (response.body.error) {
//     console.log("Unable to find location");
//   } else {
//     console.log(
//       `${response.body.current.weather_descriptions[0]}. It is currently ${response.body.current.temperature}. It feel like ${response.body.current.feelslike} degress out.`
//     );
//   }
// });

//
// Goal: Create a reusable function for getting the forecast
//
// 1. Setup the "forecast" function in utils/forecast.js
// 2. Require the function in app.js and call it as shown below
// 3. The forecast function should have three potential calls to callback:
//    - Low level error, pass string for error
//    - Coordinate error, pass string for error
//    - Success, pass forecast string for data (same format as from before)

forecast(-75.7088, 44.1545, (error, data) => {
  console.log("Error", error);
  console.log("Data", data);
});
