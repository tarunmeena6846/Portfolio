"use client";

import { Button } from "@/src/components/ui/button";
import { motion } from "framer-motion";
import { MagneticButtons } from "./MagneticButtons";
import { RefObject } from "react";
import { scrollTo } from "./Sidebar";

interface IntroSectionProps {
  contactRef: RefObject<HTMLDivElement>;
}

export default function IntroSection({ contactRef }: IntroSectionProps) {
  return (
    <div
      className="
        flex flex-col-reverse md:flex-row
        items-center justify-center
        w-full h-screen md:h-full 
        gap-[32px] md:gap-[16px] 2xl:gap-[32px]
      "
    >
      {/* TEXT */}
      <motion.div
        className="max-w-[90%] md:max-w-[55%] flex flex-col justify-center gap-[8px] lg:gap-[16px] 2xl:gap-[32px]"
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ type: "spring" }}
      >
        <motion.h3
          className="
            text-xl
            text-transparent bg-clip-text
            bg-gradient-to-r from-gray-300 to-white
          "
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2, type: "spring" }}
        >
          Tarun Meena
        </motion.h3>

        <motion.h1
          className="
            text-xl
            text-transparent bg-clip-text
            bg-gradient-to-r from-white to-gray-300
          "
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3, type: "spring" }}
        >
          Full Stack Developer
        </motion.h1>

        <motion.p
          className="
          text-base
            text-gray-200
          "
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.4, type: "spring" }}
        >
          I’m a full-stack web developer with experience in building responsive
          web apps using React and Node.js.
        </motion.p>

        <motion.div
          className="flex gap-[0.5em] lg:gap-[1em]"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5, type: "spring" }}
        >
          <MagneticButtons>
            <Button className="
              bg-white text-black
              hover:bg-red-700 hover:text-white
              px-[1em] py-[0.75em]
              rounded-[1.5em]
              text-button
            ">
              <a href="/Tarun_Meena.pdf" download="Tarun_Meena.pdf">
                Download CV
              </a>
            </Button>
          </MagneticButtons>

          <MagneticButtons>
            <Button
              className="
                bg-white text-black
                hover:bg-red-700 hover:text-white
                px-[1em] py-[0.75em]
                rounded-[1.5em]
                text-button
              "
              onClick={() => scrollTo(contactRef)}
            >
              Contact Me
            </Button>
          </MagneticButtons>
        </motion.div>
      </motion.div>

      {/* IMAGE */}
      <motion.div
        className="flex justify-center items-end mt-[2em] lg:mt-0"
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.7, type: "spring" }}
      >
        <img
          src="./photo.jpeg"
          alt="Tarun Meena"
          className="
            rounded-full
            filter grayscale hover:grayscale-0 hover:blur-0
            transition-all duration-500

            w-[12em] sm:w-[12em] md:w-[14em] lg:w-[16em] xl:w-[24em]
            h-[12em] sm:h-[12em] md:h-[14em] lg:h-[16em] xl:h-[24em]
          "
        />
      </motion.div>
    </div>
  );
}
