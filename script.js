const hamburger = document.getElementById("hamburger");
const navMenu = document.querySelector("#navbar");

const roles = ["web developer", "software engineer", "cloud enthusiast", "open-source contributor"];
let currentIndex = 0;

function changeRole() {
    const roleElement = document.getElementById("role");
    currentIndex = (currentIndex + 1) % roles.length;
    roleElement.textContent = roles[currentIndex];
}

function mobileMenu() {
    navMenu.classList.toggle("display");
}

function closeMenu() {
    navMenu.classList.remove("display");
}

setInterval(changeRole, 1500);
hamburger.onclick = mobileMenu;
navLink.forEach(n => n.addEventListener("click", closeMenu));