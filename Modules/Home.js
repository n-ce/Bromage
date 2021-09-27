$(document).ready(function()
{
$("#form-submit").submit(
    function(event)
    {
        fetch_data(event);
    }
)
});

function fetch_data(event)
{
    var request;
    event.preventDefault();
    request=$.ajax
    (
        {
            url:'https://api.openweathermap.org/data/2.5/weather',
            type : "GET",
            data :
            {
                q: $("#city").val(),
                /*Enter here user key provided when you register on the website
                https://home.openweathermap.org/api_keys*/
                appid:'user_api_key',
                units:'metric'
            }
        }
    );
    request.done(function(response)
    {
        format_data(response);
    });
}

function format_data(jsonObject)
{
    var city_name=jsonObject.name;
    var city_weather =jsonObject.weather[0].main;
    var city_temp=jsonObject.main.temp;
    $("#city-name").text("Displaying result for the city "+ city_name);
    $("#city-weather").text("Current Weather is "+city_weather);
    $("#city-temp").text("Current Temperature is "+ city_temp +" Celsius");
}