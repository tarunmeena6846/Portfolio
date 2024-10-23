"use client";
import { Button } from "@/src/components/ui/button";
import { motion } from "framer-motion";
import { MagneticButtons } from "./MagneticButtons";
import { RefObject } from "react";
import { scrollTo } from "./Sidebar";
export default function IntroSection({
  contactRef,
}: // introRef,
{
  contactRef: RefObject<HTMLDivElement>;
  // introRef: RefObject<HTMLDivElement>;
}) {
  return (
    <div
      className=" grid grid-cols-1 grid-rows-2 lg:grid-cols-3 lg:grid-rows-1 w-screen h-screen flex items-center justify-center"
      // ref={introRef}
      // id="intro"
    >
      <motion.div
        className="col-span-1 row-span-1 lg:col-span-2 order-2 lg:order-none  p-10 md:px-20 space-y-5 lg:space-y-10 flex flex-col justify-center md:ml-10"
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{
          type: "spring",
        }}
      >
        <motion.h3
          className="text-4xl  md:text-3xl lg:text-7xl text-transparent bg-white cursor-default  bg-clip-text text-gray-400"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            delay: 0.2,
            type: "spring",
          }}
        >
          Tarun Meena
        </motion.h3>
        <motion.h1
          className="text-4xl md:text-3xl lg:text-7xl text-transparent bg-white cursor-default  bg-clip-text"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            delay: 0.3,
            type: "spring",
          }}
        >
          Full Stack Developer
        </motion.h1>
        <motion.p
          className="text-gray-200 lg:text-xl"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            delay: 0.4,
            type: "spring",
          }}
        >
          I’m a full-stack web developer with experience in building responsive
          web apps using React and Node.js.
        </motion.p>
        <motion.div
          className="flex gap-3 "
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            delay: 0.5,
            type: "spring",
          }}
        >
          <MagneticButtons>
            <Button className="bg-white text-black hover:bg-red-700 hover:text-white lg:p-6 rounded-3xl lg:text-lg">
              <a href="/Tarun_Meena.pdf" download="Tarun_Meena.pdf">
                Download CV
              </a>
            </Button>
          </MagneticButtons>
          <MagneticButtons>
            <Button
              className="bg-white text-black hover:bg-red-700 hover:text-white lg:p-6 rounded-3xl lg:text-lg"
              onClick={() => scrollTo(contactRef)}
            >
              Contact Me
            </Button>
          </MagneticButtons>
        </motion.div>
      </motion.div>
      <motion.div
        className="col-span-1 row-span-1 flex justify-center items-center"
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{
          delay: 0.7,
          type: "spring",
        }}
      >
        <img
          src="./photo.jpeg"
          className="rounded-full filter grayscale hover:blur-0 hover:grayscale-0 transition-all ease duration-500  w-[30%] md:h-[30%] md:w-[30%] lg:w-full lg:h-[60%]"
        ></img>
      </motion.div>
    </div>
    // </div>
  );
}
