// let humidityDiv = document.querySelector("#humidity-result");
let weatherCondition = document.querySelector("#weather_condition");
let imgTag = document.querySelector("#weather_icon");


// imgTag.src = 'https://cdn.vectorstock.com/i/1000v/34/76/sun-simple-icon-weather-summer-symbol-sign-vector-29443476.jpg'

async function getWeather(event) {
  event.preventDefault();

  let city = document.querySelector("#city").value;

  let response = await axios(
    `https://api.weatherapi.com/v1/current.json?key=25175e31b7074cfc895204529222906&q=${city}`,
  );

  console.log("response: ", response);

  let temperature = response.data.current.temp_c;

  //   console.log("temperature: ", temperature);
  document.querySelector("#tempC").innerHTML = temperature;

  //   humidityDiv.innerHTML = "Humidity: " + response.data.current.humidity;

  weatherCondition.innerHTML = response.data.current.condition.text
  // image wala kam

  let icon = response.data.current.condition.icon;

  console.log("Icon: ", icon);

  imgTag.src = icon;
}
