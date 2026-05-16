// AND
// console.log(true && true);
// console.log(false && true);
// console.log(true && false);
// console.log(false && false);

// OR (koi ak bhi true tw true)
// console.log(true || true);
// console.log(false || true);
// console.log(true || false);
// console.log(false || false);

let food = false;
let tea = false;
let drink = true;
// OR
if (food || tea || drink) {
  // console.log("order");
}

let isEnroll = true;
let passed = true;
let age = 20;

if (isEnroll && passed && age > 18) {
  // console.log("aajao");
} else {
  // console.log("ghar jao");
}

// if (' ') {
//   // Runs if true
//   console.log("hello");
//   console.log("hello");
// } else {
//   // Runs if false
//   console.log("something else");
// }


// ! false ko true aur true ko false kare ga
// console.log(!false);

let x = 5;
let y = 6;

// console.log(!(x === y));
// console.log(x == 5 || y == 5);
// console.log(5 < 10 && y < 1);


// aakhir truthy value return kare ga
let test2 = true && "shehzad";
let test3 = "shehzad" && true;
let test4 = null && "shehzad" && 56;
let test = "shehzad" && null && 56;
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

console.log(test17);
