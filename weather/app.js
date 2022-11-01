const API_KEY = "db48ec985625d40bbc131f6f4f4eaa7d";

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    console.log("You live in", lat, lon);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then((response) => response.json())
    .then((data)=> {
        const weatherContatiner = document.querySelector("#weather span:first-child")
        const cityContatiner = document.querySelector("#weather span:last-child")
        cityContatiner.innerText = data.name; 
        weatherContatiner.innerText = data.weather[0].main;
    });
}
function onGeoError(){
    alert("Can't find you. No weather for you.");
}
    
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);