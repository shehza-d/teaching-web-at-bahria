function printName(myName) {
  console.log(myName);
  console.log(myName);
  console.log(myName);
  console.log(myName);
  console.log(myName);
  console.log(myName);
}

printName("Shehzad");
printName("Fatima");
printName("Ayesha");

// a and b are parameters
function multiply(a, b) {
  let result = a * b;
  console.log(`Result is ${result}`);
}

multiply(3, 5); // 3 and 5 are arguments
multiply(2, 2);
multiply(5, 5);

// Rest parameters
function test2(a, ...b) {
  console.log(a); // apple
  console.log(b); // all other values
}
test2("apple", "banana", "pineapple", "grapes");

console.log(5, 6, 7, 5, 3, 3); // example use of rest parameter

function sum(a, b) {
  console.log("Testing 1");
  let result = a + b;
  return result; // return ky baad function nhi chalta
  console.log("Testing 2");
}

let result = sum(10, 20);

console.log(result);
console.log(sum(5, 3));

// -----------------------
function multiply(a, b, c = 1) {
  let result = a * b * c;
  console.log(`Result is ${result}`);
}

multiply(3, 3, 5); // TODO: multiply 3 numbers!
multiply(2, 2); // phale is else
multiply(5, 2);

function newFn2(something = "bahria") {
  console.log(something);
}
newFn2();

console.log(Math.round(4.1));

function someFunction() {
  console.count("workinggg....");
}

setTimeout(someFunction, 2500);
setInterval(someFunction, 1000);

// Arrow functions

function sum(a, b) {
  return a + b;
}

console.log(sum());
