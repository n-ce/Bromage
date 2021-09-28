fetch('https://api.quotable.io/random')
.then(response => response.json())
.then(data => {
  document.getElementById('quotes').innerText="\""+data.content+"\"\n\n"+data.author;
})

let temperature = document.querySelector(".temp");
let weather = document.querySelector(".weather");
let loc = document.querySelector(".location");

let longitude,latitude;
window.addEventListener("load", () => {
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => 
    {
        console.log(position);
        longitude = position.coords.longitude;
        latitude = position.coords.latitude;
        fetch(
            `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&` +
            `lon=${longitude}&appid=6d055e39ee237af35ca066f35474e9df`)
            .then((response) => {
            return response.json();
            })
            .then((data) => {
            console.log(data);
            temperature.textContent =
                Math.floor(data.main.temp - 273) + "°C";
            weather.textContent = data.weather[0].description;
            loc.textContent = data.name + "," + data.sys.country;
            });
	});
}
});