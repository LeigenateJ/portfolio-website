import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  python,
  csharp,
  uoa,
  danone,
  kpmg,
  human,
  blog,
  analysis
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Full-Stack Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "C#",
    icon: csharp,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Data Analyst Microinternship",
    company_name: "KPMG Lighthouse",
    icon: kpmg,
    iconBg: "#B8BFDD",
    date: "Nov 2022 - Dec 2022",
    points: [
      "Analysing the survey result data, focusing on data cleansing, wrangling, and initial analysis using Python.",
      "Collaborating with team members to ensure the accuracy and relevance of data insights.",
      "Creating comprehensive data visualizations with Power BI to communicate findings effectively.",
      "Providing valuable insights to help organizations enhance their digital strategies by assessing digital and data capabilities in the New Zealand market.",
    ],
  },
  {
    title: "Developer Microinternship",
    company_name: "Danone Nutricia",
    icon: danone,
    iconBg: "#FFFFFF",
    date: "June 2023 - July 2023",
    points: [
      "Developing web service using C# and other related technologies",
      "Collaborating with team members to develop core functionalities and ensure system reliability and performance.",
      "Modernizing the production shop floor by replacing manual informational paperwork with a digital solution, significantly improving data accessibility and operational efficiency.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer Intern",
    company_name: "Auckland ICT Graduate School",
    icon: uoa,
    iconBg: "#F0F0F0",
    date: "Aug 2023 - Nov 2023",
    points: [
      "Developing web application using React.js and other related technologies.",
      "Utilizing agile methodologies and maintaining continuous communication with clients to ensure the development of high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];


const projects = [
  {
    name: "Research Fusion",
    description:
      "ResearchFusion is a web-based application that streamlines the management of ethical human-participant studies at the University of Auckland. It provides researchers with a user-friendly dashboard to manage participant recruitment, track expired studies, and oversee study details efficiently.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "nodejs",
        color: "pink-text-gradient",
      },
    ],
    image: human,
    source_code_link: "https://github.com/LeigenateJ/human-participants-management-system",
  },
  {
    name: "Traveler Junction",
    description:
      "Traveler Junction is a blog platform that allows users to share their travel experiences and stories. It provides a user-friendly interface for readers to explore diverse travel narratives, stay connected with different perspectives, and engage with a vibrant community.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: blog,
    source_code_link: "https://github.com/LeigenateJ/Basic-Blog-Website-Architecture",
  },
  {
    name: "Hotel Data Analysis",
    description:
      "This is a project analyzing customer feedback and ratings for various hotels. It uses data visualization and text analysis to identify hotels with the best reviews, variability in scores, and common positive comment themes. These insights help enhance service quality and customer satisfaction.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "pandas",
        color: "green-text-gradient",
      },
      {
        name: "plotly",
        color: "pink-text-gradient",
      },
    ],
    image: analysis,
    source_code_link: "https://github.com/LeigenateJ/kpmg-assessment",
  },
];

export { services, technologies, experiences, projects };
