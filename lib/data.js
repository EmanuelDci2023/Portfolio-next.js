import {
  IconBrandHtml5,
  IconBrandCss3,
  IconBrandJavascript,
  IconBrandReact,
  IconBrandNodejs,
  IconBrandNextjs,
  IconDatabase,
  IconApi,
  IconBrandTailwind,
  IconBrandBootstrap,
} from "@tabler/icons-react";

const html =
  "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/html5-colored.svg";
const scss =
  "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/sass-colored.svg";
const react =
  "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/react-colored.svg";
const tailwind =
  "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/tailwindcss-colored.svg";
const figma =
  "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/figma-colored.svg";
const next =
  "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nextjs-colored.svg";
const css =
  "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/css3-colored.svg";
const javascript =
  "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/javascript-colored.svg";
const bootstrap =
  "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/bootstrap-colored.svg";
const nodejs =
  "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nodejs-colored.svg";
const express =
  "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/express-colored.svg";
const mongoDb =
  "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/mongodb-colored.svg";

export const skills = [
  {
    className: "frontend",
    title: "HTML & CSS",
    description: "Building responsive UIs",
    header: "Frontend Development",
    icon: <IconBrandHtml5 className="h-4 w-4 text-neutral-500" />,
    uniqueText:
      "Crafting the structure and style of web pages to ensure a user-friendly and visually appealing interface.",
    images: html,
  },
  {
    className: "frontend",
    title: "JavaScript",
    description: "Interactive web experiences",
    header: "Frontend Development",
    icon: <IconBrandJavascript className="h-4 w-4 text-neutral-500" />,
    uniqueText:
      "Implementing dynamic content and enhancing user interactivity through powerful scripting.",
    images: javascript,
  },
  {
    className: "frontend",
    title: "React",
    description: "Modern web apps",
    header: "Frontend Development",
    icon: <IconBrandReact className="h-4 w-4 text-neutral-500" />,
    uniqueText:
      "Building complex and efficient user interfaces with reusable components.",
    images: react,
  },
  {
    className: "backend",
    title: "Node.js",
    description: "Server-side logic",
    header: "Backend Development",
    icon: <IconBrandNodejs className="h-4 w-4 text-neutral-500" />,
    uniqueText:
      "Handling server-side operations and ensuring smooth data flow between client and server.",
    images: nodejs,
  },
  {
    className: "backend",
    title: "Express.js",
    description: "API development",
    header: "Backend Development",
    icon: <IconApi className="h-4 w-4 text-white" />,
    uniqueText:
      "Developing robust and scalable APIs for seamless client-server communication.",
    images: express,
  },
  {
    className: "backend",
    title: "MongoDB",
    description: "NoSQL database",
    header: "Database Management",
    icon: <IconDatabase className="h-4 w-4 text-neutral-500" />,
    uniqueText:
      "Managing data storage with flexibility and scalability for high-performance applications.",
    images: mongoDb,
  },
  {
    className: "framework",
    title: "Next.js",
    description: "Modern web apps",
    header: "Full Stack Development",
    icon: <IconBrandNextjs className="h-4 w-4 text-white" />,
    uniqueText:
      "Enhancing React applications with server-side rendering and static site generation.",
    images: next,
  },
  {
    className: "framework",
    title: "Tailwind CSS",
    description: "Utility-first CSS framework",
    header: "Frontend Development",
    icon: <IconBrandTailwind className="h-4 w-4 text-neutral-500" />,
    uniqueText:
      "Streamlining the styling process with a utility-first approach for fast and responsive design.",
    images: tailwind,
  },
  {
    className: "framework",
    title: "Figma",
    description: "Design tool",
    header: "UI/UX Design",

    uniqueText:
      "Designing user interfaces and creating interactive prototypes for a seamless design process.",
    images: figma,
  },
];

export const imgData = [
  {
    src: javascript,
    width: "56",
    height: "56",
    alt: "JavaScript",
  },

  {
    src: html,
    width: "56",
    height: "56",
    alt: "HTML5",
  },
  {
    src: react,
    width: "56",
    height: "56",
    alt: "React",
  },
  {
    src: next,
    width: "56",
    height: "56",
    alt: "NextJs",
  },
  {
    src: css,
    width: "56",
    height: "56",
    alt: "CSS3",
  },
  {
    src: scss,
    width: "56",
    height: "56",
    alt: "Sass",
  },
  {
    src: tailwind,
    width: "56",
    height: "56",
    alt: "TailwindCSS",
  },
  {
    src: bootstrap,
    width: "56",
    height: "56",
    alt: "Bootstrap",
  },
  {
    src: nodejs,
    width: "56",
    height: "56",
    alt: "NodeJS",
  },
  {
    src: express,
    width: "56",
    height: "56",
    alt: "Express",
  },
  {
    src: mongoDb,
    width: "56",
    height: "56",
    alt: "MongoDB",
  },
  {
    src: figma,
    width: "56",
    height: "56",
    alt: "Figma",
  },
];

// export const skills = [
//   {
//     className: "frontend",
//     title: "HTML & CSS",
//     description: "Building responsive UIs",
//     header: "Frontend Development",
//     icon: html,
//   },
//   {
//     className: "frontend",
//     title: "JavaScript",
//     description: "Interactive web experiences",
//     header: "Frontend Development",
//     icon: javascript,
//   },
//   {
//     className: "frontend",
//     title: "React",
//     description: "Modern web apps",
//     header: "Frontend Development",
//     icon: react,
//   },
//   {
//     className: "backend",
//     title: "Node.js",
//     description: "Server-side logic",
//     header: "Backend Development",
//     icon: nodejs,
//   },
//   {
//     className: "backend",
//     title: "Express.js",
//     description: "API development",
//     header: "Backend Development",
//     icon: express,
//   },
//   {
//     className: "backend",
//     title: "MongoDB",
//     description: "NoSQL database",
//     header: "Database Management",
//     icon: mongoDb,
//   },

//   {
//     className: "Framework",
//     title: "Next.js",
//     description: "Modern web apps",
//     header: "Full Stack Development",
//     icon: next,
//   },
// ];

export const projects = [
  {
    id: 1,
    title: "Gym-1-One",
    des: "Gym-1-One is a gym website where you can see the gym's services, trainers, and contact information.",
    img: "/project1.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    href: "https://github.com/EmanuelDci2023/Project-Gym-Webpage",
  },
  {
    id: 2,
    title: "Yoom - Video Conferencing App",
    des: "Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends.",
    img: "/p2.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    href: "/ui.yoom.com",
  },
  {
    id: 3,
    title: "AI Image SaaS - Canva Application",
    des: "A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.",
    img: "/p3.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    href: "/ui.aiimg.com",
  },
  {
    id: 4,
    title: "Animated Apple Iphone 3D Website",
    des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
    img: "/p4.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    href: "/ui.apple.com",
  },
];

export const skillsData = [
  " HTML",
  " CSS",
  " JavScript",
  "React",
  "Tailwind CSS",
  "Sass",
  " Node JS",
  " MongoDB",
  "Figma",
  " Next.js",
];
