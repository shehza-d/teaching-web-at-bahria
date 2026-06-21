const todoKaInput = document.querySelector("#todo-input");
const ul = document.querySelector("#all-task");

const tasks = [
  "complete weather app",
  "bike safai",
  "running",
  "namaz",
  "GYM",
  "complete video lecture",
];

function showTask() {
  for (let i = 0; i < tasks.length; i++) {
    ul.innerHTML += `<li>${tasks[i]}</li>`;
  }
}
showTask();

// function addTodo(event) {
//     event.preventDefault()

//     const task = todoKaInput.value

//     ul.innerHTML += `<li>${task}</li>`

// }

function clearAllTodos() {
  ul.innerHTML = "";
}
