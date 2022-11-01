const weather = document.querySelector("#weather span:first-child");
const city = document.querySelector("#weather span:last-child");
const API_KEY = "db48ec985625d40bbc131f6f4f4eaa7d";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      city.innerText = data.name;

      const images = ["Clear.jpg", "Cloud.jpg", "Rain.jpg", "Snow.jpg"];
      const bgImage = document.createElement("img");
      bgImage.className = "bgimg-id";
      let weatherIcon = "";

      if (data.weather[0].main == "Clear") {
        bgImage.src = "img/Clear.jpg";
        weatherIcon = "☀️";
      } else if (data.weather[0].main == "Clouds") {
        bgImage.src = "img/Cloud.jpg";
        weatherIcon = "☁️";
      } else if (data.weather[0].main == "Snow") {
        bgImage.src = "img/Snow.jpg";
        weatherIcon = "☃️";
      } else if (data.weather[0].main == "Rain") {
        bgImage.src = "img/Rain.jpg";
        weatherIcon = "☔";
      } else {
        bgImage.src = "img/Default.jpg";
      }

      document.body.appendChild(bgImage);
      weather.innerText = `${data.weather[0].main}${weatherIcon} ${Math.round(data.main.temp)}°C
      `;
    });
}
function onGeoError() {
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);