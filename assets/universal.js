const input = document.querySelector("#floatingInput");
const button = document.querySelector(".btn");

function clearForm(e) {
  e.preventDefault();
  input.value = "";
}

button.addEventListener("click", clearForm);
