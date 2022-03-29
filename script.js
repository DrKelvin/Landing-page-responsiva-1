const buttonMenu = document.getElementById("buttonMenu");

function showMenu() {
  let menu = document.getElementById("menu");
  buttonMenu.classList.toggle("close");
  menu.classList.toggle("show");
}
