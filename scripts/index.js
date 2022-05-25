

const menuButton = document.querySelector(".nav__hmburger-button");
const menuLinks = document.querySelector(".nav__links")
const linksList = Array.from(menuLinks.querySelectorAll(".nav__link"))
const barOne = document.querySelector(".nav__bar_rotate_plus")
const barTwo = document.querySelector(".nav__bar_opacity")
const varThree = document.querySelector(".nav__bar_rotate_minus")
console.log(linksList)

toggleMenuButton = () => {
  menuLinks.classList.toggle("nav__links_active");
  barOne.classList.toggle("nav__bar_rotate_plus_active");
  barTwo.classList.toggle("nav__bar_opacity_active");
  varThree.classList.toggle("nav__bar_rotate_minus_active");
}



menuButton.addEventListener("click", () => toggleMenuButton())

linksList.forEach((link) => {
    link.addEventListener("click", () => toggleMenuButton())
});