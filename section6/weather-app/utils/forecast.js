const request = require("request");
const forecast = (long, lati, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=21a5fa91385bbeab220922702a43f112&query=${lati},${long}`;

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to weather service!");
    } else if (body.error) {
      callback("Unable to find location");
    } else {
      callback(
        undefined,
        `${body.location.name}: ${body.current.weather_descriptions[0]}. It is currently ${body.current.temperature}. It feel like ${body.current.feelslike} degress out.`
      );
    }
  });
};

module.exports = forecast;

//process.argv => array com o caminho do documento, caminho de arquivo e paramentos passados no comando.
