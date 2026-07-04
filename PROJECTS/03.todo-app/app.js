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
  ul.innerHTML = "";

  for (let i = 0; i < tasks.length; i++) {
    ul.innerHTML += `<li>${tasks[i]}
    <button onclick="deleteTodo(${i})">delete</button>
    </li>`;
  }
}
showTask();

function addTodo(event) {
  event.preventDefault();

  const task = todoKaInput.value;

  tasks.push(task);

  showTask();

  todoKaInput.value = "";
}

function deleteTodo(index) {
  tasks.splice(index, 1);

  showTask();
}

function clearAllTodos() {
  tasks.length = 0; // array ko empty karna

  showTask();
}
