const supabaseClient = supabase.createClient(
  "https://iedjcburzbpsvwkiegkd.supabase.co",
  "sb_publishable_ijufavYdM1ThTDXY6AAhhQ_nQcx_2K5",
);

async function login(event) {
  msg.innerHTML = "";

  event.preventDefault();

  const emailInput = document.querySelector("#email-input");
  const passwordInput = document.querySelector("#password-input");
  const msg = document.querySelector("#msg");

  //

  const response = await supabaseClient.auth.signInWithPassword({
    email: emailInput.value,
    password: passwordInput.value,
  });

  console.log("response: ", response);

  if (response.error) {
    msg.innerHTML = response.error.message;
  }
}
