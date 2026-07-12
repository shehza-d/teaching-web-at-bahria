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
