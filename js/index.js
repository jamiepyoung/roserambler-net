$(document).ready(function() {

  $.getJSON("http://ip-api.com/json", function(data) {
    // var city = data.city;
    $('#city2').html(data.city);
    
    
    //  showWeather(data.city);
  });

  var api = "http://ip-api.com/json";
  $.getJSON(api, function(data2) {
    $("#country").html(data2.country);
    $("#lat").html(data2.lat);
    $("#lng").html(data2.lon);
    $("#coord").text(data2.lat + ", " + data2.lon);
    $("#location").text(data2.city + ", " + data2.country);
    var lat = data2.lat;
    var lng = data2.lon;
    

    // weather http://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=b1b15e88fa797225412429c1c50c122a1
    var apiK = "04516818c109107d34a115a68a6196a6";
    var apiWeather = "http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lng + "&appid=" + apiK;
    
    $.getJSON(apiWeather,function(weatherData) {
        $("#weatherSummary").html(weatherData.weather[0].main);
        $("#weatherDetail").html(weatherData.weather[0].description);
        var weatherKTemp=weatherData.main.temp;
        var weatherCTemp=(weatherKTemp-273).toFixed(1);
        $("#weatherCTemp").html(weatherCTemp + " &#8451;");


      
      
  var smileys = weatherData.weather[0].description;
      switch (smileys) {
    case "clear sky":
        $("#icons").attr("src", "http://openweathermap.org/img/w/01d.png");
        break;
    case "few clouds":
        $("#icons").attr("src", "http://openweathermap.org/img/w/02d.png");
        break;
    case "scattered clouds":
        $("#icons").attr("src", "http://openweathermap.org/img/w/03d.png");
        break;
    case "broken clouds":
        $("#icons").attr("src", "http://openweathermap.org/img/w/04d.png");
        break;
    case "shower rain":
        $("#icons").attr("src", "http://openweathermap.org/img/w/09d.png");
        break;
    case "rain":
        $("#icons").attr("src", "http://openweathermap.org/img/w/10d.png");
        break;
    case "thunderstorm":
        $("#icons").attr("src", "http://openweathermap.org/img/w/11d.png");
        break;
    case "snow":
        $("#icons").attr("src", "http://openweathermap.org/img/w/13d.png");
        break;
    case "mist":
        $("#icons").attr("src", "http://openweathermap.org/img/w/50d.png");
        break;
}
  })

      
 /*   
 // weather darksky https://api.darksky.net/forecast/fc6677adda8fa7ac4d71ff35622fbb1c/37.8267,-122.4233   
  var apiK = "fc6677adda8fa7ac4d71ff35622fbb1c";
    var apiWeather = "https://api.darksky.net/forecast/" + apiK + "/" + lat + "," + lng;
    
    $.getJSON(apiWeather,function(weatherData) {
        $("#weatherSummary").html(weatherData.currently.summary);
      //  $("#weatherDetail").html(weatherData.weather[0].description);   
  */
  
  });
});