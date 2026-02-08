// agar
// if (boolean) {
// }

if (5.5 <= 5) {
  // true
  console.log("cold drink");
} else {
  // false
  console.log("tea");
}

let userInput = prompt("enter your password");
let password = "1234";

if (userInput === password) {
  console.log("unlocked");
} else {
  console.log("try again");
}

// A+ = 90+
// A = 80-90
// B = 70-80
// C  = 60-70
// D = 50-60
// F = 50<

let percentage = 45;

if (percentage >= 90) {
  console.log("A+");
} else if (percentage > 80) {
  console.log("A");
} else if (percentage > 70) {
  console.log("B");
} else if (percentage >= 60) {
  console.log("C");
} else if (percentage > 50) {
  console.log("D");
} else {
  console.log("Fail");
}

// let input = document.querySelector("#my-input");
// let form = document.querySelector("#my-form");
// let para = document.querySelector("#result");

// form.addEventListener("submit", function (event) {
//   event.preventDefault();

//   let percentage = Number(input.value);

//   if (percentage >= 90) {
//     para.innerText = "Your grade is A+";
//   } else if (percentage > 80) {
//     para.innerText = "A";
//   } else if (percentage > 70) {
//     para.innerText = "B";
//   } else if (percentage >= 60) {
//     para.innerText = "C";
//   } else if (percentage > 50) {
//     para.innerText = "D";
//   } else {
//     para.innerText = "Fail";
//   }
// });
