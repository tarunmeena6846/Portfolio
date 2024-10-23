"use client";
import { Button } from "@/src/components/ui/button";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Hr from "./Hr";
import { MagneticButtons } from "./MagneticButtons";
import { RefObject } from "react";

export default function MyProjects({}: // projectRef,
{
  // projectRef: RefObject<HTMLDivElement>;
}) {
  const router = useRouter();
  return (
    <div className=" grid grid-cols-1 grid-rows-2 lg:grid-cols-3 lg:grid-rows-1 h-screen">
      <motion.div
        className="col-span-1 order-2 flex justify-center items-center p-5"
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{
          delay: 0.6,
          type: "spring",
        }}
      >
        <img
          src="./projects.svg"
          className=" filter grayscale hover:blur-0 hover:grayscale-0 transition-all ease duration-500  h-full w-full lg:w-full lg:h-[60%]"
        />
      </motion.div>
      <motion.div
        className="col-span-1 row-span-1 lg:col-span-2   p-10 md:px-20 space-y-5 lg:space-y-10 flex flex-col justify-center md:ml-10"
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{
          type: "spring",
        }}
      >
        <motion.h1
          className="text-4xl  md:text-3xl lg:text-7xl text-transparent bg-white cursor-default  bg-clip-text text-gray-400"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            delay: 0.3,
            type: "spring",
          }}
        >
          My Projects
          <Hr />
        </motion.h1>
        <motion.p
          className="text-zinc-200 lg:text-xl"
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
              className="bg-white text-black hover:bg-red-700 hover:text-white lg:p-6 rounded-3xl  lg:text-lg"
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
