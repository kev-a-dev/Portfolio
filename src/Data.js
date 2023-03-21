// tech images
import html from "./assets/tech/htmlLogo.png";
import css from "./assets/tech/cssLogo.png";
import js from "./assets/tech/jsLogo.png";
import react from "./assets/tech/reactLogo.png";
import bootstrap from "./assets/tech/bootstrapLogo.png";
import python from "./assets/tech/pythonLogo.png";
import github from "./assets/tech/githubLogo.png";

// project images
import foodApp1 from "../src/assets/projects/foodApp/foodApp1.png";
import foodApp2 from "../src/assets/projects/foodApp/foodApp2.png";
import foodApp3 from "../src/assets/projects/foodApp/foodApp3.png";

import landingPage1 from "../src/assets/projects/landingPage/landingPage1.png";
import landingPage2 from "../src/assets/projects/landingPage/landingPage2.png";
import landingPage3 from "../src/assets/projects/landingPage/landingPage3.png";

import mv1 from "../src/assets/projects/medianValue/mv1.png";
import mv2 from "../src/assets/projects/medianValue/mv2.png";
import mv3 from "../src/assets/projects/medianValue/mv3.png";

const techList = [
  { name: "HTML", img: html },
  { name: "CSS", img: css },
  { name: "Javascript", img: js },
  { name: "React", img: react },
  { name: "Bootstrap", img: bootstrap },
  { name: "Python", img: python },
  { name: "GitHub", img: github },
];

const projectList = [
  {
    img: [foodApp1, foodApp2, foodApp3],
    title: "Food Ordering System",
    info: "My first React project showcasing a restaurant inspired ordering system. Includes item customizations, filter bar, and Stripe checkout system.",
    tools: "HTML, CSS, Javascript, React",
    link: "https://kev-a-dev.github.io/Food-App/",
    github: "https://github.com/kev-a-dev/Food-App",
  },
  {
    img: [landingPage1, landingPage2, landingPage3],
    title: "Client Landing Page",
    info: "Prototype landing page I built to practice UI design and flexbox. ",
    tools: "HTML, CSS, Javascript",
    link: "https://kev-a-dev.github.io/Business-Page/",
    github: "https://github.com/kev-a-dev/Business-Page",
  },
  {
    img: [mv1, mv2, mv3],
    title: "2022 Median Home Values",
    info: "My first application showcasing a simple website for 2022 median home values. Hover over a state to display the price. You can filter numerically and alphabetically.",
    tools: "HTML, CSS, Javascript",
    link: "https://kev-a-dev.github.io/Median-Home-Values/",
    github: "https://github.com/kev-a-dev/Median-Home-Values",
  },
];

export { techList, projectList };
