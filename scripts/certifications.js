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
