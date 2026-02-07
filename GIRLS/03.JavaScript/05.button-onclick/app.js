//

document.querySelector("#my-btn").addEventListener("click", function () {
  alert("Are you sure?");
});

document.querySelector("#color-btn").addEventListener("click", function () {
  document.body.style.backgroundColor = "red";
});

document.querySelector("#green-btn").addEventListener("click", function () {
  document.body.style.backgroundColor = "green";
});
