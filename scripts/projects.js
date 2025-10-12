// ********** projects rendering **********

const projects = [
  {
    title: "Kanban Board",
    imgSrc: "./assets/Kanban.webp",
    altText: "Kanban Board",
    github: "https://github.com/dsaikiran01/Dynamic-Kanban-Board",
    live: "https://dsaikiran01.github.io/Dynamic-Kanban-Board/",
    description: "Stay on top of your tasks with this sleek, interactive Kanban board built using vanilla JavaScript. A clean, modular design to track progress and stay organized daily. Featuring task creation, inline editing, drag-and-drop, and persistent storage, this board offers a smooth workflow with light/dark mode.",
    technologies: ["HTML5", "CSS3", "Javascript"]
  },
  {
    title: "Password Generator",
    imgSrc: "./assets/Password-Generator.webp",
    altText: "Password Generator",
    github: "https://github.com/dsaikiran01/Password-Generator",
    live: "https://dsaikiran01.github.io/Password-Generator/",
    description: "Create secure passwords effortlessly with this simple password generator. Customize length, characters, and instantly regenerate passwords. Includes copy-to-clipboard and light/dark mode for a smooth experience.",
    technologies: ["HTML5", "CSS3", "Javascript"]
  },
  {
    title: "AstroWatch",
    imgSrc: "./assets/AstroWatch.webp",
    altText: "AstroWatch",
    github: "https://github.com/dsaikiran01/AstroWatch",
    live: "https://astro-watch-one.vercel.app/",
    description: "Explore near-Earth objects and cosmic events with this sleek Next.js app. Powered by NASA APIs and secured with Supabase authentication, users can browse and filter space data through a responsive, TypeScript-based interface styled with Tailwind and Material UI.",
    technologies: ["Next.js", "Typescript", "Supabase", "MUI", "TailwindCSS"]
  },
  {
    title: "AI Shopping Assistant",
    imgSrc: "./assets/AI-Chat-Assistant.webp",
    altText: "AI Shopping Assistant",
    github: "https://github.com/dsaikiran01/E-commerce-Chat-Assistant",
    live: "https://github.com/user-attachments/assets/1043b1d9-15c2-48fd-a4b5-d89daf41c0f3",
    description: "Shop smarter with this AI-powered assistant built using LangGraph.js, MongoDB, and React. It reasons like a real sales associate—searching products with semantic embeddings, adapting with fallback logic, and maintaining context throughout conversations.",
    technologies: ["MERN", "Typescript", "Gemini", "LangGraph"]
  },
  {
    title: "JobTailor AI",
    imgSrc: "./assets/JobTailor-AI.webp",
    altText: "JobTailor AI",
    github: "https://github.com/dsaikiran01/JobTailor-AI",
    live: "https://job-tailor-ai.vercel.app/",
    description: "Generate polished, personalized cover letters in seconds with this AI-powered web app. Users can upload resumes, paste job descriptions, and edit AI-generated letters in a rich text editor. Built with React and Gemini API for a seamless, fully frontend experience.",
    technologies: ["React", "Javascript", "TailwindCSS", "Gemini", "draft.js"]
  },
  {
    title: "TaskMaster",
    imgSrc: "./assets/TaskMaster.webp",
    altText: "Roman Numeral Converter",
    github: "https://github.com/dsaikiran01/TaskMaster",
    live: "https://task-master-rose-omega.vercel.app/",
    description: "Organize tasks efficiently with this full-featured MERN stack to-do app. Featuring JWT authentication, advanced filtering, smart grouping, real-time updates, and a sleek, responsive UI built with Tailwind and TypeScript.",
    technologies: ["MERN", "Typescript", "TailwindCSS", "Docker", "JWT"]
  },
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
    description: "A modern weather dashboard that provides real-time weather data with interactive charts and geolocation features. Users can view forecasts, switch locations, and explore weather patterns using map integration. The interface is sleek, responsive, and built for accessibility and speed.",
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
    title: "FCC JSDS Certification Projects",
    imgSrc: "./assets/FCC.webp",
    altText: "FCC JSDS Certification",
    github: "https://github.com/dsaikiran01/JavaScript-Algorithms-and-Data-Structures/",
    live: "https://dsaikiran01.github.io/JavaScript-Algorithms-and-Data-Structures/",
    description: "Explore a range of interactive tools with this collection of JavaScript apps. Each project showcases practical problem-solving, API integration, and dynamic UI development.",
    technologies: ["HTML5", "CSS3", "Javascript"]
  },
  {
    title: "FCC RWD Certification Projects",
    imgSrc: "./assets/FCC.webp",
    altText: "FCC RWD Certification",
    github: "https://github.com/dsaikiran01/Responsive-Web-Design/",
    live: "https://dsaikiran01.github.io/Responsive-Web-Design/",
    description: "A collection of beautifully crafted, responsive web pages. Each project showcases clean, adaptive design, highlighting my skills in HTML and CSS to build polished, user-centric web experiences.",
    technologies: ["HTML5", "CSS3"]
  }

  // template for project
  // {
  //   title: "",
  //   imgSrc: "./assets/.webp",
  //   altText: "",
  //   github: "",
  //   live: "",
  //   description: "",
  //   technologies: []
  // },
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
