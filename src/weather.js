const LS_COORDS = "coords";
const API_KEY = "c6bdb7036840ac04954ce1cab02c1223";
const weather = document.querySelector(".weather-js");

function getWeather(lat, lon) {
  fetch(
    `api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
  )
    .then(function (response) {
      const json = response.json();
      const temp = json.main.temp;
      const place = json.name;
      weather.innterText = `${temp} @ ${place}`;
    });
}
function handleGeoError() {
  console.log("Cnat access geo location");
}
function handleGeoSuccess(position) {
  const latitiude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const coordsObj = {
    latitiude: latitiude,
    longitude: longitude
  };
  localStorage.setItem(LS_COORDS, JSON.stringify(coordsObj));
  getWeather(latitiude, longitude);
}

function askForCoords() {
  navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
}
function loadCoords() {
  const loadCoords = localStorage.getItem(LS_COORDS);
  if (loadCoords === null) {
    askForCoords();
  } else {
    const parseCoords = JSON.parse(loadCoords);
    getWeather(parseCoords.latitiude, parseCoords.longitude);
  }
}

function init() {
  loadCoords();
}

init();
