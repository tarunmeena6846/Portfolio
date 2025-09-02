"use client";

import { Button } from "@/src/components/ui/button";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Hr from "./Hr";
import { MagneticButtons } from "./MagneticButtons";
import { useLoading } from "./context/LoadingContext";
import { RefObject } from "react";
export default function AboutSection({ }: // aboutRef,
  {
    // aboutRef: RefObject<HTMLDivElement>;
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
        className="min-w-[90%] md:min-w-[55%] flex flex-col justify-center gap-[8px] lg:gap-[16px] 2xl:gap-[32px]"
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{
          type: "spring",
        }}
      >
        {/* <div className="z-10 w-full absolute md:w-auto  md:left-[10%] top-[60%] md:top-1/3 col-span-2 flex flex-col justify-center items-start md:items-start text-start px-10 py-5"> */}
        <motion.h1
          // className="text-4xl  md:text-3xl lg:text-7xl text-transparent bg-white cursor-default  bg-clip-text text-gray-400"
          className="
          text-xl
          text-transparent bg-clip-text
          bg-gradient-to-r from-gray-300 to-white
        "
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            delay: 0.3,
            type: "spring",
          }}
        >
          About me
          <Hr />
        </motion.h1>

        <motion.h1
          className="text-base
            text-gray-200"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            delay: 0.5,
            type: "spring",
          }}
        >
          A brief introduction about myself
        </motion.h1>
        <motion.div
          className="flex gap-3"
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            delay: 0.7,
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
              onClick={() => router.push("/about")}
            >
              Learn More
            </Button>
          </MagneticButtons>
        </motion.div>
        {/* </div> */}
      </motion.div>
      <motion.div
        className="flex justify-center items-end mt-[2em] lg:mt-0"
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{
          delay: 0.7,
          type: "spring",
        }}
      >
        <img
          src="./aboutSection.svg"
          className="
            rounded-full
            filter grayscale hover:grayscale-0 hover:blur-0
            transition-all duration-500

            w-[10em] sm:w-[12em] md:w-[14em] lg:w-[16em] xl:w-[24em]
            h-[10em] sm:h-[12em] md:h-[14em] lg:h-[16em] xl:h-[24em]
           "
        />
      </motion.div>
    </div>
  );
}
