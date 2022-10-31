import React from "react";
import Image from "next/image";
import AboutPic from "../images/SimonTang4.jpg";
import { motion } from "framer-motion";

type Props = {};

export default function About({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className=" h-screen flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>

      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        transition={{
          duration: 1.2,
        }}
        viewport={{
          once: true,
        }}
        className="rounded-full md:rounded-lg -mb-20 md:mb-0 flex-shrink-0 w-56 h-56 mt-10
          md:w-64 md:h-95 xl:w-[500px] xl:h-[600px] object-cover"
        src={AboutPic.src}
        alt="Picture of the author"
      />

      <div className=" space-y-10 px-0 md:px-10">
        <h4 className=" text-4xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-[#f7ab0a]">little</span>{" "}
          background
        </h4>
        <p className=" text-base">
          Originally Venezuelan. Moved to Canada looking for better quality of
          life and opportunities. Recently decided to give my life another spin,
          took a coding bootcamp at{" "}
          <span className="underline decoration-[#f7ab0a]">Brainstation </span>{" "}
          (a no brainer considering my background in computer science) where i
          picked up the skills i needed to become a web developer.
        </p>
      </div>
    </motion.div>
  );
}
