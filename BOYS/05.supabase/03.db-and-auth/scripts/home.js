async function getMyUser() {
  const response = await supabaseClient.auth.getUser();

  if (response.data.user) {
    // user login hy
    window.location.href = "./pages/todo.html";
  } else {
    // user login NHI hy
    window.location.href = "./pages/login.html";
  }
}
getMyUser();
