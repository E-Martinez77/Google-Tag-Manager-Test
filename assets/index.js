// let modal = document.getElementById("staticBackdrop");
var modal = new bootstrap.Modal(document.getElementById("staticBackdrop"));
window.addEventListener("load", function (e) {
  modal.toggle();
});
