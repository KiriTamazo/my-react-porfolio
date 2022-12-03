import React from "react";
import { motion } from "framer-motion";
const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Project = ({ project }) => {
  console.log(project);
  const { title, img, url, icons } = project;
  // const projectTitle = title.split(" ").join("-").toLowerCase();
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500 
  bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;
  return (
    <a href={url} target="_blank">
      <motion.div variants={projectVariant} className="relative h-[350px]">
        <div className={overlayStyles}>
          <p className="text-2xl font-playfair">{title}</p>
          <div className="mt-7 flex gap-4 text-2xl">
            {icons.map((icon, i) => {
              return icon;
            })}
          </div>
        </div>
        <img className="w-full h-[350px]" src={img} alt={title} />
      </motion.div>
    </a>
  );
};

export default Project;
