// JavaScript Document
var deButton = document.querySelector("button");

deButton.addEventListener("click", openMenu);

function openMenu() {
  document.body.classList.toggle("menuOpen");
}