async function logout() {
  const response = await supabaseClient.auth.signOut();

  if (response.error) {
    console.log(response.error.message);
  } else {
    // alert("Logged out successfully!");
    window.location.href = "./login.html";
  }
}
