const settingsMenu = document.querySelector(".settings-menu");
const darkBTN = document.getElementById("dark-btn");
function settingsMenuToggle() {
  settingsMenu.classList.toggle("settings-menu-height");
}
darkBTN.onclick = function () {
  darkBTN.classList.toggle("dark-btn-on");
  document.body.classList.toggle("dark-theme");

  if (localStorage.getItem("theme") == "light") {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
};
if (localStorage.getItem("theme") == "light") {
  darkBTN.classList.remove("dark-btn-on");
  document.body.classList.remove("dark-theme");
} else if (localStorage.getItem("theme") == "dark") {
  darkBTN.classList.add("dark-btn-on");
  document.body.classList.add("dark-theme");
} else {
  localStorage.setItem("theme", "light");
}
// localStorage.setItem("theme", "dark");
// localStorage.getItem("theme")
