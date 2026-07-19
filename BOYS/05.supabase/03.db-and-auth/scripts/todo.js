const ul = document.querySelector("#todos-ul");
const input = document.querySelector("#todo-input");

// TODO

const TABLE = "todos2";

// from ma table ka name aaye ga

async function addTodo(event) {
  event.preventDefault();

  await supabaseClient.from(TABLE).insert({
    todo: input.value,
  });

  showTodo();
}

async function showTodo() {
  const response = await supabaseClient.from(TABLE).select("*");
  // .eq("is_completed", true);// SEARCH

  ul.innerHTML = "";

  const todos = response.data;

  if (!todos) {
    return;
  }

  for (let i = 0; i < todos.length; i++) {
    ul.innerHTML += `<li>${todos[i].todo} (${todos[i].is_completed})

    <button onclick="deleteTodo(${todos[i].id})"> delete </button>

    </li>`;
  }
}
showTodo();

async function deleteTodo(id) {
  const response = await supabaseClient.from(TABLE).delete().eq("id", id);

  showTodo();
}

//

async function logout() {
  const response = await supabaseClient.auth.signOut();

  if (response.error) {
    console.log(response.error.message);
  } else {
    // alert("Logged out successfully!");
    window.location.href = "./login.html";
  }
}

async function protectPage() {
  const response = await supabaseClient.auth.getUser();

  if (!response.data.user) {
    window.location.href = "./login.html";
  }
}
protectPage();
