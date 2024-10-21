"use client";

import { Button } from "@/src/components/ui/button";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Hr from "./Hr";
import { MagneticButtons } from "./MagneticButtons";
import { useLoading } from "./context/LoadingContext";
import { RefObject } from "react";
export default function AboutSection({}: // aboutRef,
{
  // aboutRef: RefObject<HTMLDivElement>;
}) {
  const router = useRouter();

  return (
    <div className=" grid grid-cols-1 grid-rows-2 lg:grid-cols-3 lg:grid-rows-1 h-screen">
      <motion.div
        className="col-span-1 row-span-1 lg:col-span-2   p-10 md:px-20 space-y-5 lg:space-y-10 flex flex-col justify-center md:ml-10"
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{
          type: "spring",
        }}
      >
        {/* <div className="z-10 w-full absolute md:w-auto  md:left-[10%] top-[60%] md:top-1/3 col-span-2 flex flex-col justify-center items-start md:items-start text-start px-10 py-5"> */}
        <motion.h1
          className="text-4xl  md:text-3xl lg:text-7xl text-transparent bg-white cursor-default  bg-clip-text text-gray-400"
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
          className=" text-zinc-400 lg:text-xl animate-fade-up"
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
              className="bg-white text-black hover:bg-red-700 hover:text-white lg:p-6 rounded-3xl  lg:text-lg"
              onClick={() => router.push("/about")}
            >
              Learn More
            </Button>
          </MagneticButtons>
        </motion.div>
        {/* </div> */}
      </motion.div>
      <motion.div
        className="col-span-1 row-span-1 flex justify-center items-center"
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{
          delay: 0.7,
          type: "spring",
        }}
      >
        <img
          src="./aboutSection.svg"
          className=" filter grayscale hover:blur-0 hover:grayscale-0 transition-all ease duration-500  h-full w-full lg:w-full lg:h-[60%]"
        />
      </motion.div>
    </div>
  );
}
