const menuBtn = document.querySelector(".header__btn--menu");
const navMobile = document.querySelector(".header__nav--mobile");
const closeBtn = document.querySelector(".header__nav__close-btn");
const backDrop = document.querySelector(".header__backdrop");

// Function to open the mobile navigation
const openNav = () => {
  navMobile.classList.add("is-open");
  backDrop.classList.add("active");
};

// Function to close the mobile navigation
const closeNav = () => {
  navMobile.classList.remove("is-open");
  backDrop.classList.remove("active");
};

// Event listeners
menuBtn.addEventListener("click", openNav);
closeBtn.addEventListener("click", closeNav);

document.addEventListener("click", (e) => {
  if (!navMobile.contains(e.target) && !menuBtn.contains(e.target)) {
    closeNav();
  }
});