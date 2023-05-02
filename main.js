const navBar = document.getElementById("nav-bar");
const burgerMeniu = document.getElementById("burger-meniu");
const meniuIcon = document.getElementById("meniu-icon");
const body = document.getElementsByTagName("body")[0];
let delateIcon = false;

navBar.addEventListener("click", () => {
  burgerMeniu.classList.toggle("active");
  if (delateIcon) {
    meniuIcon.src = "../../assets/features/mobile/burger-icon.svg";
    delateIcon = false;
    body.style.overflow = "visible";
  } else {
    meniuIcon.src = "../../assets/features/mobile/close-icon.svg";
    delateIcon = true;
    body.style.overflow = "hidden";
  }
});
