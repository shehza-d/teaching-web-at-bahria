async function signup(event) {
  event.preventDefault();

  const fullNameInput = document.querySelector("#full-name-input");
  const emailInput = document.querySelector("#email-input");
  const passwordInput = document.querySelector("#password-input");

  //

  const obj = {
    email: emailInput.value,
    password: passwordInput.value,
    options: {
      data: {
        name: fullNameInput.value,
      },
    },
  };

  await supabaseClient.auth.signUp(obj);
}
