import React from "react";
import { motion } from "framer-motion";
import Skill from "../components/Skill";
import { SlowBuffer } from "buffer";

type Props = {};

export default function Skills({}: Props) {
  const icons = [
    "https://cdn3.iconfinder.com/data/icons/social-media-2169/24/social_media_social_media_logo_git-256.png",
    "https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/288_Sass_logo-256.png",
    "https://cdn1.iconfinder.com/data/icons/akar-vol-1/24/nextjs-fill-256.png",
    "https://cdn0.iconfinder.com/data/icons/logos-brands-in-colors/128/react_color-256.png",
    "https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/71-github-256.png",
    "https://cdn1.iconfinder.com/data/icons/social-media-logos-7/64/html-5-256.png",
    "https://cdn1.iconfinder.com/data/icons/social-media-logos-7/64/css-3-256.png",
    "https://sudoaugustin.gallerycdn.vsassets.io/extensions/sudoaugustin/tailwindcss-transpiler/0.0.7/1606334452273/Microsoft.VisualStudio.Services.Icons.Default",
    "https://cdn4.iconfinder.com/data/icons/logos-3/181/MySQL-512.png",
    "https://cdn.iconscout.com/icon/free/png-512/typescript-1174965.png",
    "https://cdn3.iconfinder.com/data/icons/popular-services-brands/512/node-256.png",
    "https://cdn2.iconfinder.com/data/icons/designer-skills/128/code-programming-javascript-software-develop-command-language-512.png",
  ];
  return (
    <motion.div
      className=" h-screen flex relative flex-col text-center md:text-left 
    xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Skills
      </h3>

      {/* <h3 className=" absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm">
        Hover over a skill for current proficiency
      </h3> */}

      <div className=" max-w-[350px] md:max-w-fit grid grid-cols-4 gap-5">
        {/* {icons.map((icon) => {
          return <Skill icon={icon} />;
        })} */}
        {icons.slice(0, icons.length / 2).map((icon, i) => (
          <Skill icon={icon} key={i} />
        ))}

        {icons.slice(icons.length / 2, icons.length).map((icon, i) => (
          <Skill icon={icon} key={i} directionLeft />
        ))}
      </div>
    </motion.div>
  );
}
