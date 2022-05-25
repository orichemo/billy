const menuButton = document.querySelector(".nav__hmburger-button");
const menuLinks = document.querySelector(".nav__links");
const linksList = Array.from(menuLinks.querySelectorAll(".nav__link"));
const navBar = Array.from(document.querySelectorAll(".nav__bar"));

const toggleMenuButton = () => {
  menuLinks.classList.toggle("nav__links_active");
  navBar.forEach((bar) => {
    bar.classList.toggle(`${bar.classList[1]}_active`);
  });
};

menuButton.addEventListener("click", () => toggleMenuButton());
linksList.forEach((link) => {
  link.addEventListener("click", () => toggleMenuButton());
});
