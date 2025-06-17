const hamburger = document.getElementById("hamburger");
const navModal = document.querySelector('.navbar-modal');
const navMenu = document.querySelector(".nav-menu");
const navLinks = document.querySelectorAll(".nav-link");
const logo = document.querySelector('.logo-a');

const roles = ["web developer", "software engineer", "cloud enthusiast", "open-source contributor"];
let currentIndex = 0;

function changeRole() {
    const roleElement = document.getElementById("role");
    currentIndex = (currentIndex + 1) % roles.length;
    roleElement.textContent = roles[currentIndex];
}

// for smooth scrolling of navlinks
// Get all the anchor links from the navbar
// const links = document.querySelectorAll('div a'); // capturing every <a> including show all
const links = document.querySelectorAll('.nav-link');

// projects rendering

const projects = [
    {
        title: "Meme Generator",
        imgSrc: "./assets/Meme-Generator.png",
        altText: "Meme Generator",
        link: "https://dsaikiran01.github.io/Meme-Generator/"
    },
    {
        title: "Weather Pulse",
        imgSrc: "./assets/Weather-Pulse.png",
        altText: "Weather Pulse",
        link: "https://weather-pulse-xi.vercel.app/"
    },
    {
        title: "Yoga Poses Recommender",
        imgSrc: "./assets/Yoga-Poses-Recommender.png",
        altText: "Yoga Poses Recommender",
        link: "https://github.com/dsaikiran01/Yoga-Poses-Recommender"
    },
    {
        title: "Toy Store Search App",
        imgSrc: "./assets/Toy-Store-Search-App.png",
        altText: "Toy Store Search App",
        link: "https://github.com/dsaikiran01/Toy-Store-Search-App"
    },
    {
        title: "Pokémon Search App",
        imgSrc: "./assets/Pokémon-Search-App.png",
        altText: "Pokémon Search App",
        link: "https://dsaikiran01.github.io/JavaScript-Algorithms-and-Data-Structures/05-Building-a-Pokémon-Search-App"
    },
    {
        title: "Telephone Number Validator",
        imgSrc: "./assets/Telephone-Number-Validator.png",
        altText: "Telephone Number Validator",
        link: "https://dsaikiran01.github.io/JavaScript-Algorithms-and-Data-Structures/03-Building-a-Telephone-Number-Validator"
    },
    {
        title: "Survey Form",
        imgSrc: "./assets/Survey-Form.png",
        altText: "Survey Form",
        link: "https://dsaikiran01.github.io/Responsive-Web-Design/01-Building-a-Survey-Form/"
    },
    {
        title: "Tribute Page",
        imgSrc: "./assets/Tribute-Page.png",
        altText: "Tribute Page",
        link: "https://dsaikiran01.github.io/Responsive-Web-Design/02-Building-a-Tribute-Page/"
    },
    {
        title: "Documentation Page",
        imgSrc: "./assets/Documentation-Page.png",
        altText: "Technical Documentation Page",
        link: "https://dsaikiran01.github.io/Responsive-Web-Design/03-Building-a-Technical-Documentation-Page/"
    },
    {
        title: "Product Landing Page",
        imgSrc: "./assets/Product-Page.png",
        altText: "Product Landing Page",
        link: "https://dsaikiran01.github.io/Responsive-Web-Design/04-Building-a-Product-Landing-Page/"
    },
    {
        title: "Cash Register",
        imgSrc: "./assets/Cash-Register-Project.png",
        altText: "Cash Register",
        link: "https://dsaikiran01.github.io/JavaScript-Algorithms-and-Data-Structures/04-Building-a-Cash-Register-Project"
    },
    {
        title: "Palindrome Checker",
        imgSrc: "./assets/Palindrome-Checker.png",
        altText: "Palindrome Checker",
        link: "https://dsaikiran01.github.io/JavaScript-Algorithms-and-Data-Structures/01-Building-a-Palindrome-Checker-Project"
    },
    {
        title: "Roman Numeral Converter",
        imgSrc: "./assets/Roman-Numeral-Converter.png",
        altText: "Roman Numeral Converter",
        link: "https://dsaikiran01.github.io/JavaScript-Algorithms-and-Data-Structures/02-Building-a-Roman-Numeral-Converter-Project"
    },
    
];

const projectGrid = document.getElementById("projects-grid");

projects.forEach(project => {
    const tile = document.createElement("div");
    tile.className = "project-tile";

    tile.innerHTML = `
      <a href="${project.link}" target="_blank">
        <img src="${project.imgSrc}" alt="${project.altText}">
        <p class="project-description">${project.title}</p>
      </a>
    `;

    projectGrid.appendChild(tile);
});


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
    // hamburger.classList.toggle("active");
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

// changing roles on About
setInterval(changeRole, 1500);

// for the hamburger in mobiles
hamburger.addEventListener("click", mobileMenu);

// Close menu when any nav link is clicked
navLinks.forEach(link => link.addEventListener("click", closeMenu));
