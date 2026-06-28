// while loop 1
let i = 0;

while (i < 11) {
  console.log(i);
  i++;
}

// while loop 2
const arr = ["ahmed", "huzaifa", "faizan", "talha"];

while (arr.length) {
  console.log(arr.pop()); // 0
}

// Nested Loop
for (let i = 0; i <= 4; i++) {
  for (let j = 0; j <= 2; j++) {
    console.log(`i=${i}, j=${j}`);
  }
}

// Nested Loop Row, column exmaple
for (let i = 1; i <= 4; i++) {
  console.log("Row ", i);

  for (let j = 1; j <= 6; j++) {
    console.log("    Student ", j);
  }
}

// nested array
const matrix1 = [
  [4, 6, 7],
  [9, 100, 0],
  [1, 7, 2],
];

const matrix2 = [
  [3, 5, 1],
  [11, 3, 5],
  [8, 3, 2],
];
// example addition result
// [
//   [7, 11, 8],
//   [20, 103, 5],
//   [9, 10, 4],
// ];

// manual addition of matrix
console.log(matrix1[0][0] + matrix2[0][0]);
console.log(matrix1[0][1] + matrix2[0][1]);
console.log(matrix1[0][2] + matrix2[0][2]);

console.log(matrix1[1][0] + matrix2[1][0]);
console.log(matrix1[1][1] + matrix2[1][1]);
console.log(matrix1[1][2] + matrix2[1][2]);

console.log(matrix1[2][0] + matrix2[2][0]);
console.log(matrix1[2][1] + matrix2[2][1]);
console.log(matrix1[2][2] + matrix2[2][2]);

// addition of 2 matrix with loop
let resultMatrix = [[], [], []];

for (let i = 0; i < matrix1.length; i++) {
  for (let j = 0; j < matrix1.length; j++) {
    const result = matrix1[i][j] + matrix2[i][j];

    resultMatrix[i].push(result);
  }
}
console.log("resultMatrix: ", resultMatrix);
