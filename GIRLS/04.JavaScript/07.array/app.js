let fruits = ["grapes", "banana", "mango", "watermelon", "apple", "cherry"];

let marks = [90, 1000, 450, 230, 500];

console.log(fruits);
console.log(fruits[0]);
console.log(fruits.length);

// LAST VALUE
console.log(fruits[fruits.length - 1]);

// last ma add
fruits.push("cherry");
fruits.push("testing");
fruits.push("shugufta");

// last se remove
fruits.pop();
fruits.pop();

// shuru ma add
fruits.unshift("hello");

// shuru se remove
fruits.shift();

fruits.reverse();
fruits.join(" / ");

fruits.sort(); // sabko alphabetically sort kare ga
marks.sort((a, b) => a - b);
marks.sort((a, b) => b - a);

console.log(fruits.includes("apple")); // batata hy value array ma hy ya nhi
console.log(fruits.indexOf("pakistan")); // agar value nhi mili tw -1

for (let i = 1; i < 13; i++) {
  console.log(`6 x ${i} = ${i * 6}`);
  // both lines are correct
  console.log("6 x ", i, " = ", i * 6);
}

// ---------------------

const fruits = [
  "apple",
  "banana",
  "watermelon",
  "cherry",
  "grapes",
  "mango",
  "orange",
];

// console.log(fruits.slice(2,6) );
