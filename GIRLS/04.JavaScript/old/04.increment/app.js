let myName = "Shehzad";

console.log("my name is ", myName);

// changing variable value
myName = "Saylani";

console.log(myName);

myName = "testing";

// document.querySelector("h1").style.color = "red"

//

let a = 7;

a = a + 1;
a += 1;
a++;
// all 3 are same

console.log(--a);

console.log(a--);

let num1 = 5;

num1++; // post increment
num1--; // post decrement

++num1; // pre increment
--num1; // pre decrement

//

// 1

let nr1 = 4;
let nr2 = 5;
let nr3 = 2;

console.log(nr1++ + ++nr2 * nr3++); // 16
console.log("4    +    6  *  2  ");

// 2

let a = 5;
let b = 3;

let result = a + b-- * ++a + b / --b - a++;

console.log("result: ", result); //
console.log("a: ", a); // also guess what will be the value of a
console.log("b: ", b); //

// 3

let input = 5; // 6  7

let result = input + 1 + ++input + input++ + --input + input--;
//             5   + 1 +   6     +   6     +    6   +   6

console.log("result: ", result);
console.log("input: ", input);

// 4
let num1 = 3; // 2, 1
let num2 = 5; // 6 , 5

let result = --num1 + num2++ - num2-- - num1--;
