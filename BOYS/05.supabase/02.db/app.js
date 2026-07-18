const ul = document.querySelector("#todos-ul");
const input = document.querySelector("#todo-input");

const supabaseClient = supabase.createClient(
  "https://iedjcburzbpsvwkiegkd.supabase.co",
  "sb_publishable_ijufavYdM1ThTDXY6AAhhQ_nQcx_2K5",
);

// from ma table ka name aaye ga

async function addTodo(event) {
  event.preventDefault();

  await supabaseClient.from("todos").insert({
    todo: input.value,
  });

  showTodo();
}

async function showTodo() {
  const response = await supabaseClient.from("todos").select();

  ul.innerHTML = "";

  const todos = response.data;

  for (let i = 0; i < todos.length; i++) {
    ul.innerHTML += `<li>${todos[i].todo}</li>`;
  }
}
showTodo();
