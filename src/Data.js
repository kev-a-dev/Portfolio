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

import mootube1 from '../src/assets/projects/mooTube/mootube1.png'
import mootube2 from '../src/assets/projects/mooTube/mootube2.png'
import mootube3 from '../src/assets/projects/mooTube/mootube3.png'

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
    title: "Kiosh Checkout",
    info: "Built with React and Stripe integration, this project showcases a beautiful kiosk checkout system that supports item customization and can be implemented with any restaurant.",
    tools: "HTML, CSS, Javascript, React",
    link: "https://kev-a-dev.github.io/Food-App/",
    github: "https://github.com/kev-a-dev/Food-App",
  },
  {
    img: [mootube1, mootube2, mootube3],
    title: "MooTube",
    info: "Integrated Google's YouTube API to build a responsive cow themed YouTube application with search results, video suggestions, video playback, and comment viewing.",
    tools: "HTML, CSS, Javascript, React",
    link: "https://kev-a-dev.github.io/MooTube/",
    github: "https://github.com/kev-a-dev/MooTube",
  },
  {
    img: [landingPage1, landingPage2, landingPage3],
    title: "Client Landing Page",
    info: "Prototype landing page I built to practice UI design and flexbox. ",
    tools: "HTML, CSS, Javascript",
    link: "https://kev-a-dev.github.io/Business-Page/",
    github: "https://github.com/kev-a-dev/Business-Page",
  },
];

export { techList, projectList };
