// var (old way)
// let (new way for variables)
// const (reassignment nhi hoga)

// array and object hamesha const ky sath

const fruits = ["apple", "banana", "watermelon"];

// error
// fruits = "some other value";

// console.log(fruits);

// -------------------Objects----------------------
// Collection of key-value pairs.
// Used to represent real-world entities.

const student = {
  isPresent: true,
  age: 99,
  // key: "value",
  gender: "male",
  name: "shehzad",
  hobbies: ["coding", "cricket"],
  address: {
    // nested object
    city: "karachi",
    country: "pakistan",
    area: "naval colony",
  },
};

// to change value in object
student.age = 5;

// deleting value
delete student.zinda;

// console.log(student); // printing pura object

// console.log(student.address.area); // printing nested array ki value
// console.log(student.hobbies[1]); // printing array ki value

const student2 = {
  gender: "female",
  name: "fatima",
};
let a = 5;

// const students_data = [{ name: "shehzad", class: "web" }, { name: "ahmed" }];

// console.log(students_data);
// console.log(Object.keys(student2));

// object ma order matter nhi karta
// object ko iterate nhi karty
