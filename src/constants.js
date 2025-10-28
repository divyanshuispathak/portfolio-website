// Skills Section Logo's
import htmlLogo from "./assets/tech_logo/html.png";
import cssLogo from "./assets/tech_logo/css.png";

import javascriptLogo from "./assets/tech_logo/javascript.png";
import reactjsLogo from "./assets/tech_logo/reactjs.png";

import reduxLogo from "./assets/tech_logo/redux.png";
import nextjsLogo from "./assets/tech_logo/nextjs.png";
import tailwindcssLogo from "./assets/tech_logo/tailwindcss.png";

import materialuiLogo from "./assets/tech_logo/materialui.png";
import bootstrapLogo from "./assets/tech_logo/bootstrap.png";

import nodejsLogo from "./assets/tech_logo/nodejs.png";
import expressjsLogo from "./assets/tech_logo/express.png";
import mysqlLogo from "./assets/tech_logo/mysql.png";
import mongodbLogo from "./assets/tech_logo/mongodb.png";
import firebaseLogo from "./assets/tech_logo/firebase.png";
import pythonLogo from "./assets/tech_logo/python.png";
import typescriptLogo from "./assets/tech_logo/typescript.png";
import gitLogo from "./assets/tech_logo/git.png";
import githubLogo from "./assets/tech_logo/github.png";
import vscodeLogo from "./assets/tech_logo/vscode.png";
import postmanLogo from "./assets/tech_logo/postman.png";
import mcLogo from "./assets/tech_logo/mc.png";
import figmaLogo from "./assets/tech_logo/figma.png";
import netlifyLogo from "./assets/tech_logo/netlify.png";
import vercelLogo from "./assets/tech_logo/vercel.png";
import postgreLogo from "./assets/tech_logo/postgre.png";
import langchain from "./assets/tech_logo/langchain.png";
import fastapi from "./assets/tech_logo/fastapi.png";
import openai from "./assets/tech_logo/openai.png";

// Experience Section Logo's
import tata_consultancy_services_logo from "./assets/company_logo/tata_consultancy_services_logo.png";
import kellton_logo from "./assets/company_logo/kellton_logo.png";

// Education Section Logo's
import chandigarh_university_logo from "./assets/education_logo/chandigarh_university_logo.png";
import doon_logo from "./assets/education_logo/doon_logo.png";
import dav_logo from "./assets/education_logo/dav_logo.png";

// Project Section Logo's
import githubdetLogo from './assets/work_logo/github_det.png';
import movierecLogo from './assets/work_logo/movie_rec.png';
import studyNotionLogo from './assets/work_logo/study_notion.png';

export const SkillsInfo = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "React JS", logo: reactjsLogo },
      { name: "Redux", logo: reduxLogo },
      { name: "Next JS", logo: nextjsLogo },
      { name: "Tailwind CSS", logo: tailwindcssLogo },
      { name: "Material UI", logo: materialuiLogo },
      { name: "Bootstrap", logo: bootstrapLogo },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node JS", logo: nodejsLogo },
      { name: "Express JS", logo: expressjsLogo },
      { name: "LangChain", logo: langchain },
      { name: "FastAPI", logo: fastapi },
      { name: "Open AI", logo: openai },
      { name: "MySQL", logo: mysqlLogo },
      { name: "MongoDB", logo: mongodbLogo },
      { name: "Firebase", logo: firebaseLogo },
      { name: "PostgreSQL", logo: postgreLogo },
    ],
  },
  {
    title: "Languages",
    skills: [
      { name: "JavaScript", logo: javascriptLogo },
      { name: "TypeScript", logo: typescriptLogo },
      { name: "Python", logo: pythonLogo },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", logo: gitLogo },
      { name: "GitHub", logo: githubLogo },
      { name: "VS Code", logo: vscodeLogo },
      { name: "Postman", logo: postmanLogo },
      { name: "Compass", logo: mcLogo },
      { name: "Vercel", logo: vercelLogo },
      { name: "Netlify", logo: netlifyLogo },
      { name: "Figma", logo: figmaLogo },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: tata_consultancy_services_logo,
    role: "Senior Software Engineer",
    company: "Tata Consultancy Services",
    date: "August 2024 - Present",
    desc: "As part of the LingoAI product team at Optum, I contributed to the development of an AI-powered chatbot that enables healthcare practitioners to access patient reports and clinical data efficiently. The application leveraged an Agentic AI architecture, with a FastAPI backend and a React.js frontend, implemented using a micro-frontend architecture to ensure modular scalability and independent deployments, while collaborating with cross-functional teams to deliver responsive user interfaces and optimize performance in an agile environment.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "ReactJS",
      "TypeScript",
      "FastAPI",
      "Tailwind CSS",
      "MongoDB",
      "Redux",
      "LangChain",
      "OpenAI API",
      "Abyss",
      "Micro Frontend",
    ],
  },
  {
    id: 1,
    img: kellton_logo,
    role: "Senior Software Engineer",
    company: "kellton Tech",
    date: "December 2022 - August 2024",
    desc: "Developed a Question Answering system using React.js , Node.js leveraging LLM( Large Language Model ) and GenAI technologies to improve response accuracy for one of the BIG4 client. Worked closely with the team to deliver responsive, high-performance web applications and improve user experience through seamless integration of various technologies.",
    skills: [
      "ReactJS",
      "Redux",
      "JavaScript",
      "Tailwind CSS",
      "HTML",
      "CSS",
      "SQL",
      "LangChain",
      "OpenAI",
    ],
  },
  {
    id: 2,
    img: kellton_logo,
    role: "Software Engineer",
    company: "kellton Tech",
    date: "February 2020 - December 2022",
    desc: "Worked as a Frontend Developer, designing and implementing scalable UI components and responsive websites using HTML, CSS, JavaScript, ReactJS, Bootstrap, and Material UI. Collaborated with the design team to translate wireframes and prototypes from Figma into interactive, user-friendly web pages.",
    skills: [
      "HTML",
      "CSS",
      "Javascript",
      "ReactJS",
      "Bootstrap",
      "Figma",
      "Material UI",
    ],
  },
];

export const education = [
  {
    id: 0,
    img: chandigarh_university_logo,
    school: "Chandigarh University, Mohali",
    date: "August 2015 - August 2019",
    desc: "I hold a Bachelor of Engineering (B.E.) in Computer Science and Engineering from Chandigarh University, Mohali. During my academic journey, I developed a strong foundation in programming, software development, and core computer science concepts. My coursework included subjects such as Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Web Development, and Software Engineering. In addition to academics, I actively engaged in technical workshops, hackathons, and seminars, which broadened my practical knowledge and honed my problem-solving skills. My time at Chandigarh University played a pivotal role in shaping my technical proficiency and overall professional development.",
    degree: "Bachelor of Engineering - BE (Computer Science and Engineering)",
  },
  {
    id: 1,
    img: dav_logo,
    school: "DAV Senior Secondary Public School, Panchkula",
    date: "Apr 2014 - March 2015",
    desc: "I completed my Class 12 education with a focus on Physics, Chemistry, and Mathematics (PCM) from DAV Senior Secondary Public School, Panchkula, under the Central Board of Secondary Education (CBSE).",
    degree: "CBSE(XII) - PCM",
  },
  {
    id: 2,
    img: doon_logo,
    school: "Doon Public School, Panchkula",
    date: "Apr 2012 - March 2013",
    desc: "I completed my Class 10 education from Doon Public School, Panchkula, under the Central Board of Secondary Education (CBSE)",
    degree: "CBSE(X)",
  },
];

export const projects = [
  {
    id: 0,
    title: "StudyNotion",
    description:
      "A full-stack EdTech platform that enables learners to consume technology-related courses and instructors to create, manage, and publish their own content, offering a seamless and scalable learning experience.",
    image: studyNotionLogo,
    tags: ["React JS", "Node JS", "API", "HTML", "CSS", "JavaScript", "Razorpay Payment Integration"],
    github:
      "https://github.com/divyanshuispathak/StudyNotion-EdTech",
    webapp: "https://study-notion-ed-tech-rho.vercel.app",
  },
  {
    id: 1,
    title: "Movie Recommendation App",
    description:
      "A React-based web application that provides movie recommendations based on different criteria, such as genres, user preferences, and popular trends. The intuitive design and smooth experience make it a go-to app for movie enthusiasts.",
    image: movierecLogo,
    tags: ["React JS", "API", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/divyanshuispathak/movie-recommendation",
    webapp: "https://movie-recommendation-eight-mu.vercel.app/",
  },
  {
    id: 2,
    title: "GitHub Profile Detective",
    description:
      "A powerful and user-friendly React.js application designed to uncover and showcase detailed GitHub profile information. Simply enter a GitHub username, and the app fetches comprehensive data, including profile stats, repositories, followers, and contributions. The intuitive interface ensures a seamless experience, making it a must-visit tool for developers and recruiters.",
    image: githubdetLogo,
    tags: ["HTML", "CSS", "JavaScript", "React JS", "API"],
    github:
      "https://github.com/divyanshuispathak/github-profile-detective",
    webapp: "https://github-profile-detective-six.vercel.app/",
  },
];