import Head from "next/head";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
// import WorkExperience from "../components/WorkExperience";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import ContactMe from "../components/ContactMe";
import Link from "next/link";
import { ArrowUpIcon } from "@heroicons/react/24/solid";

export default function Home() {
  return (
    <div
      className=" bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden
     z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]"
    >
      <Head>
        <title>Simon's Portfolio</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Header />

      <section id="hero" className=" snap-start">
        <Hero />
      </section>

      <section id="about" className=" snap-center">
        <About />
      </section>

      {/* <section id="experience" className=" snap-center">
        <WorkExperience />
      </section> */}

      <section id="skills" className=" snap-start">
        <Skills />
      </section>

      <section id="projects" className=" snap-center">
        <Projects />
      </section>

      <section id="contact" className=" snap-start">
        <ContactMe />
      </section>

      <footer className="sticky bottom-5 w-full cursor-pointer">
        <div className="flex items-center justify-center">
          <Link href="#hero">
            <ArrowUpIcon className=" text-[#f7ab0a] animate-pulse h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer" />
          </Link>
        </div>
      </footer>
    </div>
  );
}
