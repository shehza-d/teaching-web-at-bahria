// weather condition based on temperature

let input = document.querySelector("#mera-input");
let form = document.querySelector("#my-form");
let para = document.querySelector("#result-wala-para");

form.addEventListener("submit", function (event) {
  event.preventDefault(); // page ko refresh nhi karna

  let percentage = Number(input.value);

  if (percentage > 90) {
    para.innerText = "A+";
  } else if (percentage > 80) {
    para.innerText = "A";
  } else if (percentage > 70) {
    para.innerText = "B";
  } else if (percentage > 60) {
    para.innerText = "C";
  } else if (percentage > 50) {
    para.innerText = "D";
  } else {
    para.innerText = "fail";
  }
});
