(function () {
  
  const url = "https://api.openweathermap.org/data/2.5/weather?q=Albany&units=metric&appid=fada96de47ae8a516ca0917a1196a438"
  
  axios.get(url).then(response => console.log(response));

})();