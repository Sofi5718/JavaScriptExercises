function blueFallover() {
  document.querySelector("#blue_container").classList.add("fallover");
}
document
  .querySelector("#blue_container")
  .addEventListener("click", blueFallover);
