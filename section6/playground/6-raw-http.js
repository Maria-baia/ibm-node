const http = require("http");
const url = `http://api.weatherstack.com/current?access_key=21a5fa91385bbeab220922702a43f112&query=45,-75`;

const request = http.request(url, (response) => {
  let data = "";
  response.on("data", (chunk) => {
    data = data + chunk.toString();
  });

  response.on("end", () => {
    const body = JSON.parse(data);
    console.log(body);
  });
});

request.on("error", (error) => {
  console.log("An error", error);
});

request.end();
