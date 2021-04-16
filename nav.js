

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav__menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu()
{
   hamburger.classList.toggle("active");
   navMenu.classList.toggle("active");
}

