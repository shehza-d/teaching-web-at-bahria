async function getWeather(event) {
  event.preventDefault(); // page ko refresh hone se rokta hy

  const city = document.querySelector("#city-input").value;

  const response = await axios(
    `https://api.weatherapi.com/v1/current.json?key=25175e31b7074cfc895204529222906&q=${city}`,
  );

  const temperature = response.data.current.temp_c;

  document.querySelector("#temperature-result").innerHTML = temperature;
}
