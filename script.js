const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");
const navLinks = document.querySelectorAll(".nav-link");

const roles = ["web developer", "software engineer", "cloud enthusiast", "open-source contributor"];
let currentIndex = 0;

function changeRole() {
    const roleElement = document.getElementById("role");
    currentIndex = (currentIndex + 1) % roles.length;
    roleElement.textContent = roles[currentIndex];
}

const mobileMenu = () => {
    navMenu.classList.toggle("display");
}

const closeMenu = () => {
    navMenu.classList.remove("display");
}

// changing roles on About
setInterval(changeRole, 1500);

// for the hamburger in mobiles
hamburger.addEventListener("click", mobileMenu);

// Close menu when any nav link is clicked
navLinks.forEach(link => link.addEventListener("click", closeMenu));
