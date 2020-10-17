let now = new Date();
let hours = now.getHours();
let minutes = now.getMinutes();
if (minutes < 10) {
  minutes = "0" + minutes;
}

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];
let h4 = document.querySelector("#current-time");
h4.innerHTML = `${day} ${hours}:${minutes} `;

function searchCity(event) {
  event.preventDefault();
  let textInput = document.querySelector("#new-city");
  let h1 = document.querySelector(".current-location");
  if (textInput.value) {
    h1.innerHTML = `${textInput.value}`;
  }
}

let form = document.querySelector("#search-city");
form.addEventListener("submit", searchCity);

let weather = {
  paris: {
    temp: 19.7,
    humidity: 80,
  },
  tokyo: {
    temp: 17.3,
    humidity: 50,
  },
  lisbon: {
    temp: 30.2,
    humidity: 20,
  },
  "san francisco": {
    temp: 20.9,
    humidity: 100,
  },
  moscow: {
    temp: -5,
    humidity: 20,
  },
};

let city = prompt("Enter a city:");
city = city.trim().toLowerCase();
if (weather[city] !== undefined) {
  let temperature = Math.round(weather[city].temp);
  let fahrenheit = Math.round(temperature + 9 / 5 + 32);
  let humidity = weather[city].humidity;
  alert(
    `It is currently ${temperature}°C (${fahrenheit}°F) in ${city} with a humidity of ${humidity}%`
  );
} else {
  alert(
    `Sorry, we don't know the weather for this city. Try going to https://www.google.com`
  );
}
