// Current Date & Time

let now = new Date();
let hours = now.getHours();
let minutes = now.getMinutes();
if (minutes < 10) {
  minutes = "0" + minutes;
}
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let day = days[now.getDay()];
let months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
let month = months[now.getMonth()];
let date = now.getDate();
let h4 = document.querySelector("#currentDate");
h4.innerHTML = `${day}, ${month} ${date}`

let currentTime = document.querySelector("#currentTime");
currentTime.innerHTML = `Last Updated: ${hours}:${minutes}`;
let threeHours = document.querySelector("#update-one");
threeHours.innerHTML = `${hours + 3}:${minutes}`;
let sixHours = document.querySelector("#update-two");
sixHours.innerHTML = `${hours + 6}:${minutes}`;
let nineHours = document.querySelector("#update-three");
if (`${hours +9}` > 24) nineHours.innerHTML = `${hours-15}:${minutes}`; else nineHours.innerHTML = `${hours + 12}:${minutes}`;
let twelveHours = document.querySelector("#update-four");
if (`${hours +12}` > 24) twelveHours.innerHTML = `${hours-12}:${minutes}`; else twelveHours.innerHTML = `${hours + 12}:${minutes}`;
let fifteenHours = document.querySelector("#update-five");
if (`${hours +15}` > 24) fifteenHours.innerHTML = `${hours-9}:${minutes}`; else fifteenHours.innerHTML = `${hours + 12}:${minutes}`;

// Current Location

let apiKey = "e959d3b8f294d5e24acf7b30e2b48feb";

function showLocation(position) {
  let lat = position.coords.latitude;
  console.log(lat);
  let lon = position.coords.longitude;
  console.log(lon);
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}`;
  axios.get(`${apiUrl}&units=imperial&appid=${apiKey}`).then(showTemperature);
}

function pickCurrentLocation(event) {
navigator.geolocation.getCurrentPosition(showLocation);
}
let element = document.querySelector("#getLocation");
element.addEventListener("click", pickCurrentLocation);

function showTemperature(response) {
  console.log(response);
  let temp = Math.round(response.data.main.temp);
  let rightNow = document.querySelector("#currentTemp");
  rightNow.innerHTML = `${temp}°F`
  let here = document.querySelector("#here");
  here.innerHTML = (response.data.name);
}

// Search city

function searchCity(event) {
  event.preventDefault();
  let cityName = document.querySelector("#cityInput");
  console.log(cityName.value);
  let apiUrlCity = `https://api.openweathermap.org/data/2.5/weather?q=${cityName.value}&units=imperial&appid=${apiKey}`;
  axios.get(apiUrlCity).then(showTemperature);
}

let searchButton = document.querySelector("#searchButton");
searchButton.addEventListener("click", searchCity);


