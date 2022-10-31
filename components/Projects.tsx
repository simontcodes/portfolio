import React from "react";
import { motion } from "framer-motion";

type Props = {};

function Projects({}: Props) {
  const projects = [
    {
      description:
        "Warehouse & inventory management tool that lets you add, delete, edit and sort warehouses and inventory items",
      image: "instock",
      name: "InStock",
      tech: "React.js, Sass, Git, GitHub, Jira, axios, RESTful APIs, Node.js, Express.js and other libraries.",
    },
    {
      description:
        " Minimalistic youtube clone that lets you play a video, add comments to it and show you next videos list.",
      image: "brainflix",
      name: "BrainFlix",
      tech: "React.js, Sass, Git, GitHub, axios, Node.js, Express.js and other libraries.",
    },
  ];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className=" h-screen relative flex overflow-hidden flex-col text-left md:flex-row
    max-w-full justify-evenly items-center z-0"
    >
      <h3 className=" absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>

      <div className=" relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]">
        {projects.map((project, i) => (
          <div
            key={i}
            className=" w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen"
          >
            <motion.img
              initial={{ y: -300, opacity: 0 }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              width={1000}
              height={200}
              src={`/${project.image}.png`}
              alt="image of project"
            />

            <div className=" space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className=" text-4xl font-semibold text-center">
                <span className=" underline decoration-[#f7ab0a]/50">
                  Case study {i + 1} of {projects.length}:
                </span>{" "}
                {project.name}
              </h4>

              <p className=" text-lg text-center md:text-left">
                {project.description}
              </p>
              <p className="text-lg text-center md:text-left">
                <span className=" underline decoration-[#f7ab0a]/50">
                  Tech used:
                </span>
                {project.tech}
              </p>
            </div>
          </div>
        ))}
      </div>
      {/* this is the yellow skewed background */}
      <div className="w-full absolute top-[30%] bg-[#f7ab0a]/10 left-0 h-[500px] -skew-y-12"></div>
    </motion.div>
  );
}

export default Projects;
