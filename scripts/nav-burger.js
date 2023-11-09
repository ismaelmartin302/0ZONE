const hamburger = document.querySelector(".nav-burger");
const navLinks = document.querySelector("nav ul");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("display")
});
