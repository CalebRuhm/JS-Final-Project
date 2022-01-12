(function () {
  // Converts variable to usable API URL string
  const apiKey = "fada96de47ae8a516ca0917a1196a438";
  let city = "Kyoto";
  const url = "https://api.openweathermap.org/data/2.5/weather?q="
   + city
   + "&units=metric&appid="
   + apiKey;

  // Axios to get API
  axios({
    method: "GET",
    url: url,
  })
  // Push axios response data to html
  .then((response) => {
    const cityName = response.data.name;
    const temp = response.data.main.temp;
    const newTemp = Math.round((temp * 9 / 5) + 32);
    const icon = response.data.weather.map(e => e.icon);
    const detail = response.data.weather.map(e => e.description);
    const humidity = response.data.main.humidity;
    const wind = response.data.wind.speed;
    let newWind = Math.round((wind / 1.609344) * 100) / 100;
    document.querySelector(".city").textContent = cityName;
    document.querySelector(".temperature").textContent = newTemp + "°" + "F";
    document.querySelector(".weatherIcon").src = "https://openweathermap.org/img/wn/" + icon +"@2x.png";
    document.querySelector(".info").textContent = detail;
    document.querySelector(".humidity").textContent = `Humidity: ${humidity}%`;
    document.querySelector(".wind").textContent = `${newWind} mp/h`;
  });


  // Search bar event listener calls search function
  document.querySelector(".searchBtn").addEventListener("click", (e) => {
    search();
  })
  
  // Search function to update city
  const search = (city) => {
    let searchVale = document.querySelector(".searchBar").value;
    city = searchVale;
    console.log(city);
  }

})();