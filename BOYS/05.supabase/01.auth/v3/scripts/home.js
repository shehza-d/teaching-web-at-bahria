async function getMyUser() {
  const response = await supabaseClient.auth.getUser();

  if (response.data.user) {
    // user login hy
    window.location.href = "./pages/profile.html";
  } else {
    // user login nhi hy
    window.location.href = "./pages/login.html";
  }
}
getMyUser();
