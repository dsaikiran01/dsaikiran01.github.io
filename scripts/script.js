const hamburger = document.getElementById("hamburger");
const navModal = document.querySelector('.navbar-modal');
const navMenu = document.querySelector(".nav-menu");
const navLinks = document.querySelectorAll(".nav-link");
const logo = document.querySelector('.logo-a');


// ****** roles ******

const roles = ["Web Developer", "Software Engineer", "Cloud Engineer", "Open-source Contributor"];
let currentRole = 0;

function changeRole() {
  const roleElement = document.getElementById("role");
  currentRole = (currentRole + 1) % roles.length;
  roleElement.textContent = roles[currentRole];
}

// changing roles on About
setInterval(changeRole, 1500);


// ****** navbar ******

// for smooth scrolling of navlinks
// Get all the anchor links from the navbar
const links = document.querySelectorAll('.nav-link');

links.forEach(link => {
  link.addEventListener('click', function (event) {
    event.preventDefault();

    // Get the target section from the href attribute
    const targetId = link.getAttribute('href');
    const targetSection = document.querySelector(targetId);

    // Scroll to the target section with smooth scrolling
    targetSection.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
});

// when clicked on logo
logo.addEventListener('click', function (event) {
  event.preventDefault();

  // Get the target section from the href attribute
  const targetId = logo.getAttribute('href');
  const targetSection = document.querySelector(targetId);

  // Scroll to the target section with smooth scrolling
  targetSection.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });
});

// Toggle hamburger menu state
function toggleHamburger() {
  const hamburger = document.getElementById('hamburger');
  hamburger.classList.toggle('active');
  const menu = document.querySelector('.nav-menu');

  navModal.style.display = (navModal.style.display === 'block') ? 'none' : 'block';
  menu.classList.toggle('active'); // Toggle menu visibility on click
}

const mobileMenu = () => {
  navMenu.classList.toggle("display");
}

const closeMenu = () => {
  navMenu.classList.remove("display");
  navMenu.classList.remove("active");
  hamburger.classList.remove("active");
  navModal.style.display = 'none';
}

// Navbar modal functionality
navModal.addEventListener('click', () => {
  closeMenu();
});

// for the hamburger in mobiles
hamburger.addEventListener("click", mobileMenu);

// Close menu when any nav link is clicked
navLinks.forEach(link => link.addEventListener("click", closeMenu));
