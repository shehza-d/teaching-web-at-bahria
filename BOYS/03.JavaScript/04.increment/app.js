document.querySelector("h1").style.color = "red";

let myName = "Shehzad";

console.log(myName);

// changing variable value
myName = "Saylani";

console.log(myName);

myName = "testing";

//

let a = 6;

console.log(--a);
console.log(a);

//

num1++; // post increment
num1--; // post decrement

++num1; // pre increment
--num1; // pre decrement

//

let nr1 = 4;
let nr2 = 5;
let nr3 = 2;

console.log(nr1++ + ++nr2 * nr3++); // 16
console.log("4    +    6  *  2  ");

let input = 5; // 6  7

let result = input + 1 + ++input + input++ + --input + input--;
//             5   + 1 +    6    +   6     +    6    +   6

console.log("result:", result);
console.log("input:", input);
