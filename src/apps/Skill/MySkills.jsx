import React from "react";
import useMediaQuery from "../../hooks/useMediaQuery";
import { motion } from "framer-motion";
import profile from "../../../public/image/profile.png";
import LineGradient from "../../components/LineGradient";

const MySkills = () => {
  const isAboveMediumScreen = useMediaQuery("(min-width:1060px)");
  return (
    <div className="container md:h-auto">
      <section id="skills" className="pt-10 pb-24">
        <div className="md:flex-row flex flex-col items-center md:justify-between justify-center md:gap-16 mt-32">
          <motion.div
            className="md:w-1/3"
            initial="hidden"
            whileInView="visible"
            viewport={{ onece: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <p className="font-playfair font-semibold text-4xl mb-5">
              My <span className="text-red">Skills</span>
            </p>
            <LineGradient width="w-[10rem]" />
            <p className="mt-10 mb-7">
              I want to be a Junior React Front-end Developer and seeking an
              opportunity to extend my web developing and web designing skills &
              knowledge, especially in the Front-End Field. I am passionate
              about creating user-friendly and interactive web applications. I
              have a good understanding of HTML, CSS, JavaScript, React and
              Redux. I am also familiar with the other library such as Tailwind
              Css, Bootstrap and MUI. I am confident that I can contribute to
              the success of your organization.
            </p>
          </motion.div>
          <div className="mt-16 md:mt-0">
            {isAboveMediumScreen ? (
              <div className=" before:rounded-md relative z-0 ml-20 before:absolute before:-top-10 before:-left-20  before:w-full  before:h-full before:border-2 before-border-blue before:z-[-1] ">
                <img
                  src={profile}
                  alt="skills"
                  className="z-10 bg-[#00b5ee] lg:max-w-[550px] sm:max-w-[450px] rounded-md"
                />
              </div>
            ) : (
              <img
                src={profile}
                alt="profile"
                className="hover:filter hover:saturate-200 transition duration-500 z-10 w-full max-w-[400px] md:max-w-[600px] bg-gradient-rainblue rounded-t-[400px] "
              />
            )}
          </div>
        </div>
        {/* Skills */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:justify-between mt-16 
        gap-16 md:gap-32"
        >
          {/* Experiences */}
          <motion.div
            className=" mt-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ onece: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <div className="relative h-32">
              <div className=" z-10 md:block flex flex-col justify-center items-center h-full cursor-pointer">
                <p className="font-playfair font-semibold font-5xl">01</p>
                <p className="font-playfair font-semibold font-3xl md:mt-5">
                  NGS Dashboard
                </p>
              </div>
              <div className="w-full md:w-3/4 h-full bg-blue absolute right-0 top-0 z-[-1]">
                <img
                  className="w-full h-full md:max-h-[160px] brightness-50"
                  src="../../../public/image/ngs-dashboard.png"
                  alt="ngs-dashboard"
                />
              </div>
            </div>
            <p className="mt-5">
              I have been involved in developing the dashboard for the NGS group
              from the beginning. This includes creating the visualizations and
              coding the dashboard. Additionally, I have provided feedback and
              suggestions to the team to improve the dashboard.
            </p>
          </motion.div>
          {/* Innovative */}
          <motion.div
            className=" mt-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ onece: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <div className="relative h-32">
              <div className="z-10 md:block flex flex-col justify-center items-center h-full cursor-pointer">
                <p className="font-playfair font-semibold font-5xl">02</p>
                <p className="font-playfair font-semibold font-3xl md:mt-3">
                  Experiences
                </p>
              </div>
              <div className="w-full md:w-3/4 h-full bg-red absolute right-0 top-0 z-[-1]"></div>
            </div>
            <p className="mt-5">
              Currently unavailable...
              <br /> My search for opportunities to complete the experience is
              ongoing.
            </p>
          </motion.div>
          {/* Imaginative */}
          <motion.div
            className=" mt-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ onece: true, amount: 0.5 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <div className="relative h-32">
              <div className="z-10 md:block flex flex-col justify-center items-center h-full cursor-pointer">
                <p className="font-playfair font-semibold font-5xl">03</p>
                <p className="font-playfair font-semibold font-3xl md:mt-3">
                  Experiences
                </p>
              </div>
              <div className="w-full md:w-3/4 h-full bg-yellow absolute right-0 top-0 z-[-1]"></div>
            </div>
            <p className="mt-5">
              Currently unavailable...
              <br /> My search for opportunities to complete the experience is
              ongoing.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default MySkills;
