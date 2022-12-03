import React from "react";
import { motion } from "framer-motion";
import Project from "./Project";
import LineGradient from "../../components/LineGradient";
import { projects } from "../../data/data";

const container = {
  hidden: {},
  visible: {},
  transition: { staggerChildern: 0.2 },
};

const Projects = () => {
  return (
    <section id="projects" className="container h-auto py-24">
      {/* Headings */}
      <motion.div
        className="md:w-2/4 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ onece: true, amount: 0.1 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl ">
            <span className="text-red">Pro</span>jects
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-1/3" />
          </div>
        </div>
        <p className="mt-10 mb-20">Some of my mini projects are here</p>
      </motion.div>
      {/* Projects */}
      <div className="flex justify-center ">
        <motion.div
          className="sm:grid sm:grid-cols-2 md:grid-cols-3 "
          initial="hidden"
          whileInView="visible"
          viewport={{ onece: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          variants={container}
        >
          {/* Row 1 */}
          <div className="bg-red p-10 md:max-w-[100%] max-w-[400px] max-h-[400px] md:max-h-fit text-2xl font-playfair font-semibold flex justify-center items-center text-center">
            Beautiful User Interface
          </div>
          {projects.map((project, i) => (
            <Project key={i} project={project} />
          ))}

          <div className="md:max-h-fit md:min-h-[350px] bg-blue p-10 md:max-w-[100%] max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold flex justify-center items-center text-center">
            Smooth User Experience
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
