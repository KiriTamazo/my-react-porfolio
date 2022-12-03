import React from "react";
import useMediaQuery from "../../hooks/useMediaQuery";
import profile from "../../../public/image/profile1.png";
import { motion } from "framer-motion";
import SocialMediaIcons from "../../components/SocialMediaIcons";
import { Link } from "react-scroll";
import CV from "../../../public/CV.pdf";
import { FaDownload } from "react-icons/fa";
const Landing = ({ setSelectedPage }) => {
  const isAboveMediumScreen = useMediaQuery("(min-width:1050px)");
  return (
    <section
      id="home"
      className="md:flex md:justify-between md:items-center md:h-full gap-16 py-10"
    >
      {/* Image Section */}
      <div className="md:order-2 flex justify-center basis-3/5 z-10 mt-16  md:mt-8">
        <img
          src={profile}
          className="max-w-[350px]  md:max-w-[550px] max-h-[550px]"
          alt="profile"
        />
      </div>
      {/* Main section */}
      <div className="z-30 basis-2/5 mt-12 md:mt:32">
        {/* Heading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ onece: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="text-center md:text-start"> Hello There! </p>

          <p className="text-6xl font-playfair z-10 text-center md:text-start leading-[4.5rem]">
            I'm La Woon <br />
            <span
              className="text-yellow mt-4
            "
            >
              Htet Aung
            </span>
          </p>
          <p className="mt-5 mb-7 text-lg text-center md:text-start">
            Junior <span className="text-blue"> React</span> Developer
          </p>
        </motion.div>

        <motion.div
          className="flex mt-5 gap-8 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ onece: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <Link
            smooth={true}
            duration={500}
            className="bg-gradient-rainblue text-deep-blue rounded-sm py-3   px-7  font-semibold hover:scale-110 hover:text-white transition duration-500 cursor-pointer"
            to="contact"
          >
            Contact Me
          </Link>
          <a
            href={CV}
            target="_blank"
            className="rounded-sm bg-gradient-rainblue py-0.5 px-0.5 hover:scale-110 transition duration-500"
          >
            <div className="bg-deep-blue hover:text-red transition duration-500 w-full h-full flex rounded-sm items-center justify-center font-playfair px-10">
              <FaDownload className="mr-2" /> CV
            </div>
          </a>
        </motion.div>
        <motion.div
          className="flex mt-5 gap-8 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ onece: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <SocialMediaIcons />
        </motion.div>
      </div>
    </section>
  );
};

export default Landing;
