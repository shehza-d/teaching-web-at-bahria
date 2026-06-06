let myInput = document.querySelector("#my-input");
let resultDiv = document.querySelector("#result");

function printTable(event) {
  event.preventDefault(); // page refresh na ho

  resultDiv.innerHTML = ""

  let tableOf = Number(myInput.value);

  for (let i = 1; i <= 12; i++) {
    let result = tableOf + " x " + i + " = " + tableOf * i;
    // let result = `${tableOf} x ${i} = ${tableOf * i}`;
    resultDiv.innerHTML += result + "<br>";
  }
}

// SHEHZAD
// S***H***E***H***Z***A***D
