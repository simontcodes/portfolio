import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

type Props = {
  directionLeft?: boolean;
  icon: string;
};

export default function Skill({ directionLeft, icon }: Props) {
  return (
    <motion.div
      className="w-18 h-18 md:w-28 md:h-28 xl:w-30 xl:h-30 "
      initial={{
        x: directionLeft ? -200 : 200,
        opacity: 0,
      }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
    >
      <Image
        src={icon}
        alt="icon"
        width={100}
        height={100}
        className="  object-cover hover:scale-150  
        transition duration-500 ease-in-out"
      />
    </motion.div>
  );
}
