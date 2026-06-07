// document.querySelector("h1").style.color = 'red'
// document.querySelector("#temperature-result").innerHTML = " hello"

async function getWeather(event) {
  event.preventDefault(); // page ko refresh hone se rokta hy

  let city = document.querySelector("#city-input").value;

  let response = await axios(
    `https://api.weatherapi.com/v1/current.json?key=25175e31b7074cfc895204529222906&q=${city}`,
  );

  console.log("response: ", response);
  console.log("temp: ", response.data.current.temp_c);

  let temperature = response.data.current.temp_c;

  document.querySelector("#temperature-result").innerHTML = temperature;
}
