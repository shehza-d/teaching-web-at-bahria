async function login(event) {

  event.preventDefault();

  const emailInput = document.querySelector("#email-input");
  const passwordInput = document.querySelector("#password-input");
  const msg = document.querySelector("#msg");

  msg.innerHTML = "";
  //

  const response = await supabaseClient.auth.signInWithPassword({
    email: emailInput.value,
    password: passwordInput.value,
  });

  console.log("response: ", response);

  if (response.error) {
    msg.innerHTML = response.error.message;
  } else {
    window.location.href = "./profile.html";
  }
}
