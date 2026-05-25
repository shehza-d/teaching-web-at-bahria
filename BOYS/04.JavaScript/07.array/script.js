let fruits = ["apple", "Banana", "grapes", "watermelon", "cherry", "mango"];

let marks = [450, 1000, 90, 230, 500];

console.log(fruits[2]); // grapes

// prints last element
// console.log(fruits[fruits.length - 1]);

// last ma add
fruits.push("cherry");
fruits.push("jawwad");

// last ma remove
fruits.pop();

// shuru ma add
fruits.unshift("hello");
fruits.unshift("pakistan");

// shuru ma remove
fruits.shift();

fruits.reverse();
fruits.sort(); // sabko alphabetically sort kare ga
marks.sort((a, b) => b - a);

// only to change value not for adding new values
fruits[2] = "hasnain";

fruits.join(", ");
fruits.includes("apple"); // true
fruits.indexOf("apple"); // 0

console.log(fruits); // -1 ka mtlb hy value nhi hy array ma

console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[3]);
console.log(fruits[4]);
console.log(fruits[7]);

// looping over array
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// ------ Ternary Operator -----------

let a = 3 > 6 ? "pass" : "fail";

console.log(a);

let age = 10;

let message = "";
if (age >= 18) {
  message = "Access Allowed";
} else {
  message = "Access Denied";
}

let message = `Access ${age >= 18 ? "Allowed" : "Denied"}`;

console.log(message);
