const todoKaInput = document.querySelector("#todo-input")
const ul = document.querySelector("#all-task")

function addTodo(event) {
    event.preventDefault()

    ul.innerHTML += `<li>${todoKaInput.value}</li>`

}

function clearAllTodos(){
    ul.innerHTML = ""
}
