function printName(myName) {
  console.log(myName);
  console.log(myName);
  console.log(myName);
  console.log(myName);
  console.log(myName);
  console.log(myName);
  console.log(myName);
  console.log(myName);
  console.log(myName);
  console.log(myName);
}

// printName("Shehzad")
// printName("Fatima")
// printName("Ayesha")

function multiply(a, b) {
  // a and b are parameters
  let result = a * b;
  console.log(`Result is ${result}`);
}

// multiply(3, 5); // 3 and 5 are arguments
// multiply(2, 2);
// multiply(5, 5);

// function multiply(a, ...c) Rest parameters

// console.log(5, 6, 7, 5, 3, 3);

function sum(a, b) {
  console.log("Testing 1");
  return a + b; // return ky baad function nhi chalta
  console.log("Testing 2");
}

let result = sum(10, 20);

console.log(result);
console.log(sum(5, 3));

