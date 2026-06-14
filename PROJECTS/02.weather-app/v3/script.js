const input = document.querySelector("#city-input");
const tempResult = document.querySelector("#temp-result");
const msg = document.querySelector("#msg");

const apiKey = "60e0a3d2f152486e950213038260606";

async function getWeather(event) {
  try {
    event.preventDefault(); // page refresh na ho

    msg.innerHTML = "loading...";
    tempResult.innerHTML = "";

    const response = await axios(
      `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${input.value}`,
    );

    msg.innerHTML = "";
    tempResult.innerHTML = response.data.current.temp_c;
  } catch (error) {
    msg.innerHTML =
      error.response.data.error.message || "Unknown error, please try again!";
  }
}

// try {
//   difjdifdjf;
// } catch (error) {
// } finally {
//   console.log("hello");
// }

// https://vscodethemes.com/?language=javascript&sortBy=updatedAt&type=dark
