(function () {

  const apiKey = "fada96de47ae8a516ca0917a1196a438";
  let city = "Albany";
  const url = "https://api.openweathermap.org/data/2.5/weather?q="
   + city
   + "&units=metric&appid="
   + apiKey;
  
  axios.get(url)
  .then(response => console.log(response));

  let displayWeather = (response) => {

  };

})();