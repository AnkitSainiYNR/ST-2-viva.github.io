const header = document.querySelector(".navbar");
console.log(header);
window.onscroll = function () {
  const top = window.scrollY;
  if (top <= 100) {
    header.classList.add("navbarDark");
  } else {
    header.classList.add("navbarDark");
  }
};

const navLinks = document.querySelectorAll(".nav-item");
const menuToggle = document.getElementById("navbarSupportedContent");
