function printName(myName) {
  // Parameter
  console.log(myName);
  console.log(myName);
  console.log(myName);
  console.log(myName);
  console.log(myName);
}

printName("Shehzad"); // calling or invoking a function
printName("Talha"); // Arguments

function multiply(a, b, c = 1) {
  let result = a * b * c;
  console.log(`Result is ${result}`);
}

function greet() {
  console.log("Hello!");
}

multiply(3, 4, 5);
multiply(9, 2);
multiply(0, 3);

// Default parameter
function newFunc(b, a = "hello") {
  console.log(a);
}
newFunc(8, 6);

// Rest operator
function newFunc(a, ...c) {
  console.log(`all other values: ${c}`);
}
newFunc(4, 5, 6, 7, 8);

console.log(5, 6, 7, 9);

// Built in function
let a = Math.max(6, 5);
console.log(a);

// Return value

function myFn(a, b) {
  console.log("Testing 1");
  return a + b; // return ky baad code nhi chalta
  console.log("Testing 2");
}

console.log(myFn(5, 2));
