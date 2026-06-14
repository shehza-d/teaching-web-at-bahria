const input = document.querySelector("#city-input");
const tempResult = document.querySelector("#temp-result");
const msg = document.querySelector("#msg");

const apiKey = "60e0a3d2f152486e950213038260606";

async function getWeather(event) {
  event.preventDefault(); // page refresh na ho

  msg.innerHTML = "loading...";
  tempResult.innerHTML = "";

  const response = await axios(
    `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${input.value}`,
  );

  msg.innerHTML = "";
  tempResult.innerHTML = response.data.current.temp_c;
}
