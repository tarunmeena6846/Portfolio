"use client";
import { Button } from "@/src/components/ui/button";
import { motion } from "framer-motion";
import { MagneticButtons } from "./MagneticButtons";
export default function IntroSection() {
  return (
    <div className="flex flex-col items-center justify-center w-screen min-h-screen overflow-hidden ">
      <div className="mx-auto container grid grid-cols-3 w-full">
        <motion.div
          className="col-span-2 mx-auto px-20 space-y-10 flex flex-col justify-center ml-10"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            type: "spring",
          }}
        >
          <motion.h3
            className="text-4xl text-transparent bg-white cursor-default sm:text-4xl md:text-7xl bg-clip-text text-gray-400"
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
            className="text-4xl text-transparent bg-white cursor-default sm:text-4xl md:text-8xl bg-clip-text"
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
            className="text-gray-400 text-2xl"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.4,
              type: "spring",
            }}
          >
            I’m a full-stack web developer with experience in building
            responsive web apps using React and Node.js.
          </motion.p>
          <motion.div
            className="flex gap-3"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.5,
              type: "spring",
            }}
          >
            <MagneticButtons>
              <Button className="bg-white text-black hover:bg-red-700 hover:text-white p-6 rounded-3xl text-xl">
                Download CV
              </Button>
            </MagneticButtons>
            <MagneticButtons>
              <Button className="bg-white text-black hover:bg-red-700 hover:text-white p-6 rounded-3xl text-xl">
                Contact Me
              </Button>
            </MagneticButtons>
          </motion.div>
        </motion.div>
        <motion.div
          className="col-span-1 flex justify-center items-center"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            delay: 0.7,
            type: "spring",
          }}
        >
          <img
            src="./photo.jpeg"
            className="rounded-full filter grayscale hover:blur-0 hover:grayscale-0 transition-all ease duration-500 h-[80%]"
          ></img>
        </motion.div>
      </div>
    </div>
  );
}
