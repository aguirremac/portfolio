import { ProjectsType } from "../../shared/types";

export const projectData: Array<ProjectsType> = [
  {
    title: "Rimera PH",
    img: "/assets/rimera-1.png",
    imgHovered: "/assets/rimera-2.png",
    stacks: ["VueJS", "NuxtJS", "Vuetify3", "UnoCSS"],
    githubLink: "",
    liveURL: "https://rimera-ph.vercel.app/",
    description:
      "The site features a clean and minimalist design, allowing the showcased projects to take center stage. With a focus on user experience, the SPA feature ensures seamless navigation and accessibility for visitors.",
  },
  {
    title: "Lista - Note Keeper",
    img: "/assets/lista-1.png",
    imgHovered: "/assets/lista-2.png",
    stacks: ["ReactJS", "Firebase", "TailwindCSS"],
    githubLink: "https://github.com/aguirremac/lista",
    liveURL: "https://lista-note-keeper.vercel.app/",
    description:
      "A personal notes management web application that was built using ReactJS, TailwindCSS, React Router, and leverages functional components and hooks, as well as Firebase authentication and database integration for secure note-taking.",
  },
  {
    title: "Portfolio",
    img: "/assets/portfolio-1.png",
    imgHovered: "/assets/portfolio-2.png",
    stacks: ["TypeScript","ReactJS", "TailwindCSS"],
    githubLink: "https://github.com/aguirremac/portfolio",
    liveURL: "https://macagr-portfolio.vercel.app/",
    description: "This modern portfolio showcases my work as a web developer, built with Framer Motion and TypeScript. I designed the portfolio with a modern and visually appealing aesthetic, using dynamic animations and transitions to create an engaging user experience.",
  },
  {
    title: "Optimum Solutions PH",
    img: "/assets/optimum-1.png",
    imgHovered: "/assets/optimum-2.png",
    stacks: ["VueJS", "Nuxt3", "Vuetify", "TailwindCSS"],
    githubLink: "",
    liveURL: "https://optimumsolutions.com.ph/",
    description: "Migrated to Nuxt3 a product website to designed to seamlessly showcase their offerings through a responsive and dynamic user experience.",
  },
];
