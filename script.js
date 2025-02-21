const weatherImage = document.querySelector(".weather-condition");
const temperature = document.querySelector(".temperature");
const cityName = document.querySelector(".city-name");
const humidity = document.querySelector("#humidity-text");
const windSpeed = document.querySelector("#wind-speed-text");
const searchButton = document.querySelector(".search img");
const searchBar = document.querySelector(".search input");

let city = "new york";
let weatherCondition;

searchButton.addEventListener("click", (e) => {
  city = searchBar.value;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=ac142acd5cd53bedd35c7216837b1dad&units=metric`;

  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      temperature.innerHTML = data.main.temp;
      humidity.innerHTML = data.main.humidity + "%";
      windSpeed.innerHTML = data.wind.speed + "km/h";
      cityName.innerHTML = city;
      if(weatherCondition == 'Clouds'){
        document.querySelector('.weather-condition').src = 'images/clouds.png';
      }
      else if(data.weather[0].main == 'Clouds')
    })
    .catch((er) => {
      alert("enter a valid location");
    });

});


searchBar.addEventListener("keypress", (e) => {
  if (e.key == "Enter") {
    city = searchBar.value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=ac142acd5cd53bedd35c7216837b1dad&units=metric`;

    fetch(url).then((response) => {
        return response.json();
    }).then((data) => {
        temperature.innerHTML = data.main.temp;
        humidity.innerHTML = data.main.humidity + "%";
        windSpeed.innerHTML = data.wind.speed + "km/h";
        cityName.innerHTML = city;
        weatherCondition = data.weather[0].main;
    }).catch((er) => {
        alert("enter a valid location");
    });

  }
});

const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=ac142acd5cd53bedd35c7216837b1dad&units=metric`;

fetch(url).then((response) => {
    return response.json();
}).then((data) => {
    temperature.innerHTML = data.main.temp;
    humidity.innerHTML = data.main.humidity + "%";
    windSpeed.innerHTML = data.wind.speed + "km/h";
    weatherCondition = data.weather[0].main;
}).catch((er) => {
    alert("enter a valid location");
});