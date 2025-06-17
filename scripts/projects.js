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
