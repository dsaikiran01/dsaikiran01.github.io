const hamburger = document.getElementById("hamburger");
const navModal = document.querySelector('.navbar-modal');
const navMenu = document.querySelector(".nav-menu");
const navLinks = document.querySelectorAll(".nav-link");
const logo = document.querySelector('.logo-a');

const roles = ["Web Developer", "Software Engineer", "Cloud Engineer", "Open-source Contributor"];
let currentRole = 0;

function changeRole() {
  const roleElement = document.getElementById("role");
  currentRole = (currentRole + 1) % roles.length;
  roleElement.textContent = roles[currentRole];
}

// changing roles on About
setInterval(changeRole, 1500);


// ********** certs rendering ***********

const certifications = [
  {
    title: "Google Cybersecurity Specialization",
    imgSrc: "./assets/certs/gcpc.png",
    link: "https://www.coursera.org/account/accomplishments/professional-cert/2P6P9V2CRR8X",
    altText: "Google Cybersecurity Professional Certificate"
  },
  {
    title: "Freecodecamp Responsive Web Design",
    imgSrc: "./assets/certs/rwdc.png",
    link: "https://www.freecodecamp.org/certification/dsk/responsive-web-design",
    altText: "Responsive Web Design"
  },
  {
    title: "Freecodecamp Javascript Data Structures and Algorithms",
    imgSrc: "./assets/certs/jsds.png",
    link: "https://www.freecodecamp.org/certification/dsk/javascript-algorithms-and-data-structures-v8",
    altText: "Javascript Data Structures and Algorithms"
  },
  {
    title: "Freecodecamp Backend Development and APIs",
    imgSrc: "./assets/certs/beda.png",
    link: "https://www.freecodecamp.org/certification/dsk/back-end-development-and-apis",
    altText: "Backend Development and APIs"
  }
];

let currentCert = 0;
const certsCarousel = document.getElementById("certs-carousel");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const indicatorsContainer = document.getElementById("indicators");

function createCarousel() {
  // Clear existing content
  certsCarousel.innerHTML = "";
  indicatorsContainer.innerHTML = "";

  // Create certificate items
  certifications.forEach((cert, index) => {
    const certItem = document.createElement("div");
    certItem.className = "cert-item";

    const certLink = document.createElement("a");
    certLink.className = "cert-link";
    certLink.href = cert.link;
    certLink.target = "_blank";
    certLink.innerHTML = `
                    <img src="${cert.imgSrc}" alt="${cert.altText}" loading="lazy">
                    <p>${cert.title}</p>
                `;

    certItem.appendChild(certLink);
    certsCarousel.appendChild(certItem);

    // Create indicators
    const indicator = document.createElement("div");
    indicator.className = "indicator";
    indicator.addEventListener("click", () => goToSlide(index));
    indicatorsContainer.appendChild(indicator);
  });

  updateCarousel();
}

function updateCarousel() {
  const translateX = -currentCert * 100;
  certsCarousel.style.transform = `translateX(${translateX}%)`;

  // Update active states
  const certLinks = document.querySelectorAll(".cert-link");
  const indicators = document.querySelectorAll(".indicator");

  certLinks.forEach((link, index) => {
    link.classList.toggle("active", index === currentCert);
  });

  indicators.forEach((indicator, index) => {
    indicator.classList.toggle("active", index === currentCert);
  });
}

function nextSlide() {
  currentCert = (currentCert + 1) % certifications.length;
  updateCarousel();
}

function prevSlide() {
  currentCert = (currentCert - 1 + certifications.length) % certifications.length;
  updateCarousel();
}

function goToSlide(index) {
  currentCert = index;
  updateCarousel();
}

// Event listeners
nextBtn.addEventListener("click", nextSlide);
prevBtn.addEventListener("click", prevSlide);

// Keyboard navigation
document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowLeft") {
    prevSlide();
  } else if (e.key === "ArrowRight") {
    nextSlide();
  }
});

// Auto-play
setInterval(nextSlide, 3000);

// Touch/swipe support for mobile
let startX = 0;
let endX = 0;

certsCarousel.addEventListener("touchstart", (e) => {
  startX = e.touches[0].clientX;
});

certsCarousel.addEventListener("touchend", (e) => {
  endX = e.changedTouches[0].clientX;
  handleSwipe();
});

function handleSwipe() {
  const threshold = 50;
  const diff = startX - endX;

  if (Math.abs(diff) > threshold) {
    if (diff > 0) {
      nextSlide();
    } else {
      prevSlide();
    }
  }
}

// Initialize carousel
createCarousel();



// ********** projects rendering **********

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
        <img src="${project.imgSrc}" alt="${project.altText}" loading="lazy">
        <p class="project-description">${project.title}</p>
      </a>
    `;

  projectGrid.appendChild(tile);
});


// *** navbar ***

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
