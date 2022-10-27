import React from "react";
import Image from "next/image";
import AboutPic from "../images/SimonTang.jpg";
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

      <motion.div
        className=" -mb-20 md:mb-0 flex-shrink-0 w-56 h-56 mt-10
         md:w-64 md:h-95 xl:w-[500px] xl:h-[600px] object-cover"
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
      >
        <Image
          className="rounded-full md:rounded-lg"
          src={AboutPic}
          alt="Picture of the author"
        />
      </motion.div>

      <div className=" space-y-10 px-0 md:px-10">
        <h4 className=" text-4xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-[#f7ab0a]">little</span>{" "}
          background
        </h4>
        <p className=" text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum ullam
          inventore debitis iure molestias qui facilis officia adipisci nulla
          necessitatibus perspiciatis quas, et vel enim quam laboriosam aliquam
          beatae modi? Nesciunt animi nulla ipsum iusto omnis, sunt deserunt
          quae amet fuga dolorum, atque magnam. Iure, laboriosam veniam! Dolor
          possimus ratione itaque, commodi temporibus unde, debitis, fugiat
          error sapiente incidunt repellendus. Quidem voluptates expedita soluta
          id assumenda, aliquam architecto reprehenderit optio voluptate
          laboriosam illum possimus sit explicabo hic? Modi eius, et velit,
          corrupti debitis, quo earum assumenda delectus vitae rerum unde? Fuga
          veritatis numquam perspiciatis similique voluptatem sapiente quod
          ratione obcaecati maiores! Ad voluptate, eveniet quasi voluptatum
          sapiente modi aut vero repudiandae omnis illo, unde cupiditate iure!
          Ipsa officiis rem id? Cum, recusandae molestiae, provident repudiandae
          laboriosam laudantium sapiente minima tempora cupiditate fugiat
          reiciendis incidunt ipsa culpa. A ratione fuga magnam? Temporibus,
          est. A blanditiis, possimus similique incidunt aut nemo facilis.
        </p>
      </div>
    </motion.div>
  );
}
