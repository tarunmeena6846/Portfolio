"use client";

import { Button } from "@/src/components/ui/button";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
export default function AboutSection() {
  const router = useRouter();
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden ">
      <div className="mx-auto container grid grid-cols-2 ">
        <motion.div
          className="col-span-1 px-20 space-y-10 flex flex-col justify-center items-center"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            type: "spring",
          }}
        >
          <motion.h1
            className="text-4xl text-transparent bg-white  cursor-default font-display sm:text-6xl bg-clip-text "
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.3,
              type: "spring",
            }}
          >
            About me
          </motion.h1>
          <motion.h1
            className=" text-zinc-400 text-lg animate-fade-up"
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
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              delay: 0.7,
              type: "spring",
            }}
          >
            <Button
              className="bg-white text-black hover:bg-gray-700 hover:text-white p-5 rounded-2xl"
              onClick={() => router.push("/about")}
            >
              Learn More
            </Button>
          </motion.div>
        </motion.div>
        <motion.div
          className="col-span-1 flex justify-center items-center"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            delay: 0.7,
            type: "spring",
          }}
        >
          <img src="./aboutSection.svg" className="h-[80%] w-[80%]" />
        </motion.div>
      </div>
    </div>
  );
}
