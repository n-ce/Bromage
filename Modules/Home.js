// Weather

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition((position) =>
  {
    console.log(position);
    fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&` + `lon=${position.coords.longitude}&appid=6d055e39ee237af35ca066f35474e9df`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        document.getElementById("temp").innerText = Math.floor(data.main.temp - 273) + "°C";
        document.getElementById("weather").innerText = data.weather[0].description;
        document.getElementById("location").innerText = data.name + "," + data.sys.country;
      })
  })
}

// Quotes

fetch('https://api.quotable.io/random')
  .then(res => res.json())
  .then(data => {
    document.getElementById('quotes').innerText = "\"" + data.content + "\"\n\n" + data.author;
  })
