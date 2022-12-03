import {
  FaLinkedinIn,
  FaGithub,
  FaFacebookSquare,
  FaInstagram,
  FaHtml5,
  FaJs,
  FaReact,
  FaCss3,
} from "react-icons/fa";
// import marketing from "/marketing.jpeg";

import { SiTailwindcss, SiRedux } from "react-icons/si";
export const links = ["Home", "Skills", "Projects", "Contact"];
export const socialLinks = [
  {
    id: 1,
    color: "#0072b1",
    icon: <FaLinkedinIn />,
    to: "https://www.linkedin.com",
  },
  { id: 2, color: "#171515", icon: <FaGithub />, to: "https://www.github.com" },
  {
    id: 3,
    color: "#3b5998",
    icon: <FaFacebookSquare />,
    to: "https://www.facebook.com",
  },
  {
    id: 4,
    color: "#f09433",
    icon: <FaInstagram />,
    to: "https://www.instagram.com",
  },
];
export const projects = [
  {
    icons: [
      <FaHtml5 color="#e34c46" />,
      <FaCss3 color="#264de4" />,
      <FaJs color="#f0db4f" />,
    ],
    title: "Marketing",
    url: "https://kiritamazo.github.io/ProfileWebsite/",
    img: "./image/marketing.jpeg",
  },
  {
    icons: [
      <FaHtml5 color="#e34c46" />,
      <FaCss3 color="#264de4" />,
      <FaJs color="#f0db4f" />,
    ],
    title: "Tasty",
    url: "https://kiritamazo.github.io/Tasty.github.io/",
    img: "./image/tasty.jpeg",
  },
  {
    icons: [
      <FaHtml5 color="#e34c46" />,
      <FaCss3 color="#264de4" />,
      <FaJs color="#f0db4f" />,
    ],
    title: "MeteorV2",
    url: "https://kiritamazo.github.io/MeteorV2/",
    img: "./image/meteor.jpeg",
  },
  {
    icons: [
      <FaHtml5 color="#e34c46" />,
      <FaCss3 color="#264de4" />,
      <FaJs color="#f0db4f" />,
    ],
    title: "Omnifood",
    url: "https://kiritamazo.github.io/OminiFood.github.io/#",
    img: "./image/ominifood.jpeg",
  },
  {
    icons: [
      <FaReact color="#61dbfb" />,
      <SiTailwindcss color="#38bdf8" />,
      <SiRedux color="#764abc" />,
    ],
    title: "Nice Store Clone",
    url: "https://nike-store-clone-gamma.vercel.app/",
    img: "./image/nice-clone.jpeg",
  },
];
