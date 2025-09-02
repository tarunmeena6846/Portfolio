"use client";
import { Button } from "@/src/components/ui/button";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Hr from "./Hr";
import { MagneticButtons } from "./MagneticButtons";
import { RefObject } from "react";

export default function MyProjects({ }: // projectRef,
  {
    // projectRef: RefObject<HTMLDivElement>;
  }) {
  const router = useRouter();
  return (
    <div className="
    flex flex-col md:flex-row
    items-center justify-center
    w-full h-full
    gap-[16px] lg:gap-[16px] 2xl:gap-[32px]
  ">
      <motion.div
        className="flex justify-center items-end mt-[2em] lg:mt-0"
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{
          delay: 0.6,
          type: "spring",
        }}
      >
        <img
          src="./projects.svg"
          className="
          rounded-full
          filter grayscale hover:grayscale-0 hover:blur-0
          transition-all duration-500

          w-[10em] sm:w-[12em] md:w-[14em] lg:w-[16em] xl:w-[24em]
          h-[10em] sm:h-[12em] md:h-[14em] lg:h-[16em] xl:h-[24em]
         "        />
      </motion.div>
      <motion.div
        className="min-w-[90%] md:min-w-[55%] flex flex-col justify-center gap-[8px] lg:gap-[16px] 2xl:gap-[32px] items-end"
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{
          type: "spring",
        }}
      >
        <motion.h1
          className="
  text-xl
  text-transparent bg-clip-text
  bg-gradient-to-r from-gray-300 to-white
"          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            delay: 0.3,
            type: "spring",
          }}
        >
          My Projects
          <Hr myProjectSection={true} />
        </motion.h1>
        <motion.p
          className="text-base
 text-gray-200"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            delay: 0.4,
            type: "spring",
          }}
        >
          These are some of the projects that I have done.
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
            <Button
              className="  bg-white text-black
 hover:bg-red-700 hover:text-white
 px-[1em] py-[0.75em]
 rounded-[1.5em]
 text-button"
              onClick={() => router.push("/projects")}
            >
              Learn More
            </Button>
          </MagneticButtons>
        </motion.div>
      </motion.div>
    </div>
  );
}
