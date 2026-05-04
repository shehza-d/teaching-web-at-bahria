// https://www.w3schools.com/js/js_logical.asp
// https://www.programiz.com/javascript/comparison-logical

// OR Operator (koi ak bhi side true tw true)

let test = false || true || false;
// console.log(test);

//

// let food = true;
// let tea = false;
// let drink = false;

// if (food || tea || drink) {
//   console.log("le aao");
// } else {
//   console.log("ghar jao");
// }

//

let x = 1;
let y = 2;
let z = 3;

if (x < y && y < z) {
  //   console.log("running...");
}
// console.log(x < y && y < z && x == 3);

// AND Operator (dono side true tw true)
let test1 = true && true && true;
// console.log(test1);

let isEnroll = true;
let passed = false;
let age = 20;

// if (isEnroll && passed && age > 18) {
//   console.log("Pharai karo class ma");
// } else {
//   console.log("ghar jao");
// }

// // OR (||):
// console.log(true || false);
// console.log(5 > 10 || 8 > 3);
// console.log(2 > 5 || 1 > 3);

// // NOT (!):
// console.log(!true);
// console.log(!(5 > 3));
// console.log(!(3 < 1));

// // AND (&&)
// console.log(3 < 5 && 3 > 6);
// console.log(5 > 3 && 10 > 7);
// console.log(5 > 3 && 10 < 7);
// console.log(3 < 5 && 3 > 6);
// console.log(4 === 4 && 2 !== 2);

// Home work
// console.log(5 > 3 && (10 < 5 || 2 < 4));
// console.log(!(4 > 2 && 1 > 5));

let x = 5;
let y = 6;

// console.log(!(x === y));
// console.log(x == 5 || y == 5);
// console.log(5 < 10 && y < 1);

// aakhir truthy value return kare ga
let test2 = true && "shehzad";
let test3 = "shehzad" && true;
let test4 = null && "shehzad" && 56;
let test22 = "shehzad" && null && 56;
let test5 = true && "shehzad" && 56;
let test6 = true && 0 && 56;
let test7 = "hh" && null;
let test8 = "hh" && "kk";

// Phale truthy value return kare ga
let test9 = "shehzad" || true;
let test10 = "" || null;
let test11 = "" || true;
let test12 = "shehzad" || 0 || null || true;
let test13 = null || "shehzad" || 56;
let test14 = true || "shehzad" || 56;
let test15 = false || 0 || 56;
let test16 = "hh" || null;
let test17 = "hh" || "kk";

// console.log("result: ", test);

// true = 1
// false = 0

// AND ( · ) → works like multiplication

// 1 · 1 = 1

// 1 · 0 = 0

// 0 · 1 = 0

// 0 · 0 = 0

//

// OR ( + ) → works like addition

// 0 + 0 = 0

// 0 + 1 = 1

// 1 + 0 = 1

// 1 + 1 = 1

// simple rule is if both the inputs are same the output will also be same

// console.log(true && true);
// console.log(false && false);

// console.log(true || true);
// console.log(false || false);

// 


