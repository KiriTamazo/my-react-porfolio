import React, { useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import LineGradient from "../../components/LineGradient";

const Contact = () => {
  const {
    register,
    trigger,
    formState,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };

  return (
    <div className="container md:h-full grid items-center mb-4">
      <section id="contact" className="pt-24 pb-16">
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
          <div className="mb-20">
            <p className="text-4xl font-playfair font-semibold text-center">
              <span className="text-yellow">Contact Me</span> To Get Started
            </p>
            <div className="flex md:justify-end my-5">
              <LineGradient width="mx-auto w-2/4 max-w-[580px]" />
            </div>
          </div>
        </motion.div>
        {/* Form & Img */}
        <div className="md:flex md:justify-between gap-16 mt-5">
          <motion.div
            className="basis-1/2 flex justify-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ onece: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <img
              src="./image/contact-image.jpeg"
              alt="contact"
              className="rounded-md"
            />
          </motion.div>

          <motion.div
            className="basis-1/2 mt-10 md:mt-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ onece: true, amount: 0.5 }}
            transition={{ dalay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <form
              className="max-w-[700px] mx-auto"
              target="_blank"
              onSubmit={onSubmit}
              action="https://formsubmit.co/301aff0f55a7ea728c005f03c435694d"
              method="POST"
            >
              <input
                type="text"
                className="rounded-md w-full bg-white font-semibold placeholder-opaque-black p-3"
                placeholder="Name"
                {...register("name", { required: true, maxLength: 100 })}
              />
              {errors.name && (
                <p className="text-red mt-1">
                  {errors.name.type === "required" && "This field is required"}
                  {errors.name.type === "maxLength" &&
                    "Max length is 100 characters"}
                </p>
              )}
              <input
                type="text"
                className="rounded-md w-full bg-white font-semibold placeholder-opaque-black p-3 mt-5"
                placeholder="Email"
                {...register("email", {
                  required: true,
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                })}
              />
              {errors.email && (
                <p className="text-red mt-1">
                  {errors.email.type === "required" &&
                    "This field is required."}
                  {errors.email.type === "pattern" && "Invalid email address."}
                </p>
              )}
              <textarea
                className="rounded-md w-full bg-white font-semibold placeholder-opaque-black p-3 mt-5"
                name="message"
                placeholder="MESSAGE"
                rows="4"
                cols="50"
                {...register("message", {
                  required: true,
                  maxLength: 2000,
                })}
              />
              {errors.message && (
                <p className="text-red mt-1">
                  {errors.message.type === "required" &&
                    "This field is required."}
                  {errors.message.type === "maxLength" &&
                    "Max length is 2000 char."}
                </p>
              )}

              <button
                className="w-full md:w-auto p-5 bg-yellow font-semibold text-deep-blue mt-5 hover:bg-red hover:text-white transition duration-500 rounded-md"
                type="submit"
              >
                SEND ME A MESSAGE
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
