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
      if(data.weather[0].main == 'Clouds'){
        document.querySelector('.weather-condition').src = 'images/clouds.png';
      }
      else if(data.weather[0].main == 'Clear'){
        document.querySelector('.weather-condition').src = 'images/clear.png';
      }
      else if(data.weather[0].main == 'Snow'){
        document.querySelector('.weather-condition').src = 'images/snow.png';
      }
      else if(data.weather[0].id > '700' && data.weather[0].id < '800'){
        document.querySelector('.weather-condition').src = 'images/mist.png';
      }
      else if(data.weather[0].main == 'Rain'){
        document.querySelector('.weather-condition').src = 'images/rain.png';
      }
      else if(data.weather[0].main == 'Drizzle' || data.weather[0].main == 'Thunderstorm'){
        document.querySelector('.weather-condition').src = 'images/drizzle.png';
      }
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
        if(data.weather[0].main == 'Clouds'){
          document.querySelector('.weather-condition').src = 'images/clouds.png';
        }
        else if(data.weather[0].main == 'Clear'){
          document.querySelector('.weather-condition').src = 'images/clear.png';
        }
        else if(data.weather[0].main == 'Snow'){
          document.querySelector('.weather-condition').src = 'images/snow.png';
        }
        else if(data.weather[0].id > '700' && data.weather[0].id < '800'){
          document.querySelector('.weather-condition').src = 'images/mist.png';
        }
        else if(data.weather[0].main == 'Rain'){
          document.querySelector('.weather-condition').src = 'images/rain.png';
        }
        else if(data.weather[0].main == 'Drizzle' || data.weather[0].main == 'Thunderstorm'){
          document.querySelector('.weather-condition').src = 'images/drizzle.png';
        }
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