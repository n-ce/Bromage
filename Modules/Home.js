fetch('https://api.quotable.io/random')
  .then(response => response.json())
  .then(data => {
    document.getElementById('quotes').innerText = "\"" + data.content + "\"\n\n" + data.author;
  })



let longitude, latitude;
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition((position) =>
  {
    console.log(position);
    longitude = position.coords.longitude;
    latitude = position.coords.latitude;
    fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&` + `lon=${longitude}&appid=6d055e39ee237af35ca066f35474e9df`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        document.querySelector("#temp").innerText = Math.floor(data.main.temp - 273) + "°C";
        document.querySelector("#weather").innerText = data.weather[0].description;
        document.querySelector("#location").innerText = data.name + "," + data.sys.country;
      });
  });
}