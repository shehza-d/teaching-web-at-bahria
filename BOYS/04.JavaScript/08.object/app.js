// var (old way)
// let (new way for variables)
// const (reassignment nhi hoga)

// array and object hamesha const se banty hyn

const a = ["value 1", "value 2"];

a = []; // error

a.push("value 3");

a.pop();
a.pop();

// console.log(a);

// ---------- Object ---------------
const student = {
  name: "shehzad",
  age: 24,
  // key: "value",
  zinda: false,
  hobbies: ["coding", "cricket"],
  address: {
    // nested object
    city: "Karachi",
    area: "naval colony",
  },
};

// editing value
student.age = 25;

// deleting value
delete student.zinda;

console.log(student); // printing pura object

console.log(student.address.area); // printing nested array ki value
console.log(student.hobbies[1]); // printing array ki value
