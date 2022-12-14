import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import Image from "next/image";
import ProfilePic from "../images/SimonTang2.jpg";
import Link from "next/link";

type Props = {};

export default function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      "Hi, The Name's Simon Tang",
      "Guy-who-loves-Coffee.tsx",
      "<ButLovesToCodeMore />",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className=" h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <Image
        className="relative rounded-full h-32 w-32 mx-auto object-cover"
        src={ProfilePic}
        alt="Picture of the author"
        width={500}
        height={500}
      />
      <div className=" z-20">
        <h2 className=" text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
          FullStack Web Developer
        </h2>
        <h1 className=" text-5xl lg:text-6xl font-semibold px-10">
          <span className="mr-0">{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>

        <div className=" pt-5">
          <button className="heroButton">
            <Link href="#about">About </Link>
          </button>

          {/* <Link href="#experience">
            <button className="heroButton">Experience</button>
          </Link> */}

          <button className="heroButton">
            <Link href="#skills">Skills </Link>
          </button>

          <button className="heroButton">
            <Link href="#projects">Projects </Link>
          </button>
        </div>
      </div>
    </div>
  );
}
