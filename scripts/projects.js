// ********** projects rendering **********

const projects = [
  {
    title: "Meme Generator",
    imgSrc: "./assets/Meme-Generator.png",
    altText: "Meme Generator",
    link: "https://dsaikiran01.github.io/Meme-Generator/",
    description: "Easily create custom memes by uploading photos or using your camera. Add text, choose fonts and colors, and share hilarious memes with friends. Fully responsive and fun to use!"
  },
  {
    title: "Weather Pulse",
    imgSrc: "./assets/Weather-Pulse.png",
    altText: "Weather Pulse",
    link: "https://weather-pulse-xi.vercel.app/",
    description: " WeatherPulse – A sleek, real-time weather dashboard with interactive graphs, location-based filtering, and map integration. Stay ahead of the forecast with a beautiful, responsive UI!"
  },
  {
    title: "Yoga Poses Recommender",
    imgSrc: "./assets/Yoga-Poses-Recommender.webp",
    altText: "Yoga Poses Recommender",
    link: "https://github.com/dsaikiran01/Yoga-Poses-Recommender",
    description: "A Flask web app that integrates Firestore, LangChain, and Vertex AI's Gemini to provide contextual Yoga pose recommendations using vector search."
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
    imgSrc: "./assets/Telephone-Number-Validator.webp",
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
      <div class="project-image-container">
        <img src="${project.imgSrc}" alt="${project.altText}" loading="lazy" />
      </div>
      <div class="project-info">
        <h3 class="project-name">${project.title}</h3>
        <p class="project-description">${project.description}</p>
      </div>
    </a>
  `;

  projectGrid.appendChild(tile);

});
