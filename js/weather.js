function onGeoOk(position){

    const API_KEY = "394ca1568159a00a3bf40d29dc3b430d";
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;

    console.log("You live in", lat, lon);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    console.log(url);
    fetch(url).then(response => response.json())
    .then(data => {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");

        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}ºC`;
    });
}

function onGeoError(){
    alert("Can't find your location. No weather for you");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError)