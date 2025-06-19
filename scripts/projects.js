// ********** projects rendering **********

const projects = [
  {
    title: "Meme Generator",
    imgSrc: "./assets/Meme-Generator.webp",
    altText: "Meme Generator",
    github: "https://github.com/dsaikiran01/Meme-Generator",
    live: "https://dsaikiran01.github.io/Meme-Generator/",
    description: " Create and customize memes with this fun, fully responsive web app. Users can upload photos or use their camera to generate images, then add text with customizable fonts and colors. Built using the Canvas API, it’s intuitive and optimized for mobile and desktop.",
    technologies: ["HTML5", "CSS3", "Javascript", "Canvas API"]
  },
  {
    title: "Weather Pulse",
    imgSrc: "./assets/Weather-Pulse.webp",
    altText: "Weather Pulse",
    github: "https://github.com/dsaikiran01/WeatherPulse",
    live: "https://weather-pulse-xi.vercel.app/",
    description: " Weather Pulse is a modern weather dashboard that provides real-time weather data with interactive charts and geolocation features. Users can view forecasts, switch locations, and explore weather patterns using map integration. The interface is sleek, responsive, and built for accessibility and speed.",
    technologies: ["React", "Typescript", "Material UI", "Leaflet.js", "Open Weather API"]
  },
  {
    title: "Yoga Poses Recommender",
    imgSrc: "./assets/Yoga-Poses-Recommender.webp",
    altText: "Yoga Poses Recommender",
    github: "https://github.com/dsaikiran01/Yoga-Poses-Recommender",
    description: "A context-aware yoga recommendation app that uses AI to suggest yoga poses tailored to user needs. Leveraging Firestore, LangChain, and Google’s Gemini model, the system performs vector searches to deliver intelligent, relevant pose suggestions. Hosted via Flask for a seamless backend integration.",
    technologies: ["Flask", "Gemini", "Langchain", "Google Cloud"]
  },
  {
    title: "Toy Store Search App",
    imgSrc: "./assets/Toy-Store-Search-App.webp",
    altText: "Toy Store Search App",
    github: "https://github.com/dsaikiran01/Toy-Store-Search-App",
    description: " An AI-powered toy search application that supports queries via text, image, or even custom design prompts. Users can explore a rich catalog of toys or generate new concepts using Gemini 2.0 Flash and Imagen 3. Built on a scalable Spring Boot backend with Google Cloud integration.",
    technologies: ["Springboot", "Gemini", "Google Cloud", "Python"]
  },
  {
    title: "Pokémon Search App",
    imgSrc: "./assets/Pokémon-Search-App.webp",
    altText: "Pokémon Search App",
    github: "https://github.com/dsaikiran01/JavaScript-Algorithms-and-Data-Structures/tree/main/05-Building-a-Pok%C3%A9mon-Search-App",
    live: "https://dsaikiran01.github.io/JavaScript-Algorithms-and-Data-Structures/05-Building-a-Pokémon-Search-App",
    description: " A dynamic web app that interacts with the PokéAPI Proxy to retrieve and display Pokémon information. Users can search by name or ID to access images, types, and stats. A fun, interactive way to explore API integration and asynchronous JavaScript.",
    technologies: ["HTML5", "CSS3", "Javascript"]
  },
  {
    title: "Telephone Number Validator",
    imgSrc: "./assets/Telephone-Number-Validator.webp",
    altText: "Telephone Number Validator",
    github: "https://github.com/dsaikiran01/JavaScript-Algorithms-and-Data-Structures/tree/main/03-Building-a-Telephone-Number-Validator",
    live: "https://dsaikiran01.github.io/JavaScript-Algorithms-and-Data-Structures/03-Building-a-Telephone-Number-Validator",
    description: " A US telephone number validator that checks for multiple valid formats including optional country codes, parentheses, spaces, and dashes. It provides immediate feedback and error handling, showcasing solid use of regular expressions in JavaScript.",
    technologies: ["HTML5", "CSS3", "Javascript"]
  },
  {
    title: "Survey Form",
    imgSrc: "./assets/Survey-Form.webp",
    altText: "Survey Form",
    github: "https://github.com/dsaikiran01/Responsive-Web-Design/tree/main/01-Building-a-Survey-Form",
    live: "https://dsaikiran01.github.io/Responsive-Web-Design/01-Building-a-Survey-Form/",
    description: "A responsive survey form designed to collect user input efficiently across devices. It includes form validation, varied input types, and a clean, user-friendly layout, making it a solid example of semantic HTML and CSS design.",
    technologies: ["HTML5", "CSS3"]
  },
  {
    title: "Tribute Page",
    imgSrc: "./assets/Tribute-Page.webp",
    altText: "Tribute Page",
    github: "https://github.com/dsaikiran01/Responsive-Web-Design/tree/main/02-Building-a-Tribute-Page",
    live: "https://dsaikiran01.github.io/Responsive-Web-Design/02-Building-a-Tribute-Page/",
    description: "A visually appealing tribute page dedicated to a historical or notable figure. This project highlights the ability to structure content with clear sections and responsive design principles while maintaining a respectful tone and layout.",
    technologies: ["HTML5", "CSS3"]
  },
  {
    title: "Documentation Page",
    imgSrc: "./assets/Documentation-Page.webp",
    altText: "Technical Documentation Page",
    github: "https://github.com/dsaikiran01/Responsive-Web-Design/tree/main/03-Building-a-Technical-Documentation-Page",
    live: "https://dsaikiran01.github.io/Responsive-Web-Design/03-Building-a-Technical-Documentation-Page/",
    description: "A structured technical documentation layout with fixed navigation for smooth reading and topic switching. This project showcases information architecture, CSS layout techniques, and accessibility-friendly navigation.",
    technologies: ["HTML5", "CSS3"]
  },
  {
    title: "Product Landing Page",
    imgSrc: "./assets/Product-Page.webp",
    altText: "Product Landing Page",
    github: "https://github.com/dsaikiran01/Responsive-Web-Design/tree/main/04-Building-a-Product-Landing-Page",
    live: "https://dsaikiran01.github.io/Responsive-Web-Design/04-Building-a-Product-Landing-Page/",
    description: "A sleek landing page for a fictional product, featuring promotional content, call-to-action buttons, and responsive design. This page demonstrates effective layout structuring, branding, and modern front-end design.",
    technologies: ["HTML5", "CSS3"]
  },
  {
    title: "Cash Register",
    imgSrc: "./assets/Cash-Register-Project.webp",
    altText: "Cash Register",
    github: "https://github.com/dsaikiran01/JavaScript-Algorithms-and-Data-Structures/tree/main/04-Building-a-Cash-Register-Project",
    live: "https://dsaikiran01.github.io/JavaScript-Algorithms-and-Data-Structures/04-Building-a-Cash-Register-Project",
    description: "Simulates a functional cash register by calculating change based on item cost and cash provided. The app also considers the drawer’s available cash and displays relevant messages like \"Insufficient Funds\". It’s a practical project emphasizing decision logic.",
    technologies: ["HTML5", "CSS3", "Javascript"]
  },
  {
    title: "Palindrome Checker",
    imgSrc: "./assets/Palindrome-Checker.webp",
    altText: "Palindrome Checker",
    github: "https://github.com/dsaikiran01/JavaScript-Algorithms-and-Data-Structures/tree/main/01-Building-a-Palindrome-Checker-Project",
    live: "https://dsaikiran01.github.io/JavaScript-Algorithms-and-Data-Structures/01-Building-a-Palindrome-Checker-Project",
    description: " A simple yet robust web tool that checks if any word or phrase is a palindrome. It removes all non-alphanumeric characters and normalizes casing to ensure accurate detection, making it both educational and practical. Perfect for demonstrating basic text manipulation and logic.",
    technologies: ["HTML5", "CSS3", "Javascript"]
  },
  {
    title: "Roman Numeral Converter",
    imgSrc: "./assets/Roman-Numeral-Converter.webp",
    altText: "Roman Numeral Converter",
    github: "https://github.com/dsaikiran01/JavaScript-Algorithms-and-Data-Structures/tree/main/02-Building-a-Roman-Numeral-Converter-Project",
    live: "https://dsaikiran01.github.io/JavaScript-Algorithms-and-Data-Structures/02-Building-a-Roman-Numeral-Converter-Project",
    description: " This tool converts Arabic numbers into Roman numerals, respecting the syntax and rules of the Roman numeral system. It provides quick, real-time conversion and serves as a great example of algorithmic thinking applied in a user interface.",
    technologies: ["HTML5", "CSS3", "Javascript"]
  },

];

const projectGrid = document.getElementById("projects-grid");

projects.forEach(project => {
  const tile = document.createElement("div");
  tile.className = "project-tile";

  tile.innerHTML = `
    <div class="project-image-container">
      <img src="${project.imgSrc}" alt="${project.altText}" loading="lazy" />
    </div>
    <div class="project-info">
      <div class="project-header">
        <h3 class="project-name">${project.title}</h3>
        <div class="project-links">
          ${project.github ? `<a href="${project.github}" target="_blank" title="GitHub"><i class="fab fa-github"></i></a>` : ""}
          ${project.live ? `<a href="${project.live}" target="_blank" title="Live Demo">&#128279;</a>` : ""}
        </div>
      </div>
      <p class="project-description">${project.description}</p>
      <div class="project-tech">
        ${project.technologies.map(tech => `<span>${tech}</span>`).join('')}
      </div>
    </div>
  `;

  projectGrid.appendChild(tile);
});
