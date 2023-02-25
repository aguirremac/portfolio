import { ProjectsType } from "../../shared/types";

export const projectData: Array<ProjectsType> = [
  {
    title: "Lista - Note Keeper",
    img: "/assets/lista-1.png",
    imgHovered: "/assets/lista-2.png",
    stacks: ["ReactJS", "Firebase", "TailwindCSS"],
    githubLink: "https://github.com/aguirremac/lista",
    liveURL: "https://lista-macagr17.vercel.app/",
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
    title: "Book Finder App",
    img: "/assets/libro-1.png",
    imgHovered: "/assets/libro-2.png",
    stacks: ["JavaScript", "CSS", "HTML", "API"],
    githubLink: "https://github.com/aguirremac/Book-Project",
    liveURL: "#",
    description: "Built with JavaScript, CSS, and HTML. The app leverages the power of the Google Books API, connecting seamlessly through Axios and JSON, to bring you the latest and greatest in book discovery. With its user-friendly interface and intuitive navigation, our book finder app is the perfect solution for all your reading needs.",
  },
];
