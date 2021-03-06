(function () {

  const displayWeather = (city) => {
    // Converts variable to usable API URL string
    const apiKey = "fada96de47ae8a516ca0917a1196a438";
    const url = "https://api.openweathermap.org/data/2.5/weather?q="
     + city
     + "&units=imperial&appid="
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
      const newTemp = Math.round((temp));
      const icon = response.data.weather.map(e => e.icon);
      const detail = response.data.weather.map(e => e.description);
      const humidity = response.data.main.humidity;
      const wind = response.data.wind.speed;
      let newWind = Math.round(wind);
      document.querySelector(".city").textContent = cityName;
      document.querySelector(".temperature").textContent =newTemp + "°" + "F";
      document.querySelector(".weatherIcon").src = "https://openweathermap.org/img/wn/" + icon +"@2x.png";
      document.querySelector(".info").textContent = detail;
      document.querySelector(".humidity").textContent = `Humidity: ${humidity}%`;
      document.querySelector(".wind").textContent = `Wind: ${newWind}mp/h`;
    });
  }

  // Search button listener to update city
  const search = () => {
    document.querySelector(".searchBtn").addEventListener("click", () => {
      let city = document.querySelector(".searchBar").value;
      displayWeather(city);
      document.querySelector(".weatherIcon").classList.remove("hidden");
      document.querySelector(".searchBar").value = "";
      let searchBox = document.querySelector(".searchBox");
      searchBox.classList.remove("searchBox2");
      let cardContainer = document.querySelector(".card-container");
      cardContainer.style.backgroundColor = "";
      cardContainer.style.border = "";
      cardContainer.style.backdropFilter = "";
    })
  }
  search();

  // Initial State
  const cardContainer = document.querySelector(".card-container");
  cardContainer.style.backgroundColor = "rgba(255, 255, 255, 0)";
  cardContainer.style.border = 'none';
  cardContainer.style.backdropFilter = "none";
  const searchBox = document.querySelector(".searchBox");
  searchBox.classList.add("searchBox2");

// Light / Dark mode toggle 
  const toggle = document.querySelector("#toggle");
  const card = document.querySelector(".card-container");
  toggle.addEventListener('change', () => {
    document.body.classList.toggle("light");
  });

// BSOD Easter Egg
  document.querySelector("#jokeBtn").addEventListener("click", () => {
    document.querySelector(".blueScreen").classList.add("hidden");
    document.querySelector(".searchBar").value = "";
  });

  const searchBlue = document.querySelector(".searchBox");
  searchBlue.addEventListener("input", (event) => {
    if (event.target.value == "Blue" || event.target.value == "blue") {
      document.querySelector(".blueScreen").classList.remove("hidden");
    }
  })

})();