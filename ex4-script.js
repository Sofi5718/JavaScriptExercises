window.addEventListener("load", start);

function start() {
  document
    .querySelector("#orange_container")
    .addEventListener("click", orangeJump);
}

function orangeJump() {
  document.querySelector("#orange_container").classList.add("jump-once");
  document
    .querySelector("#orange_container")
    .addEventListener("animationend", remove);
}
function remove() {
  document.querySelector("#orange_container").classList.remove("jump-once");
}
