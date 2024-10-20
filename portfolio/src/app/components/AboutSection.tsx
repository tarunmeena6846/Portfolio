"use client";

import { Button } from "@/src/components/ui/button";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Hr from "./Hr";
import { MagneticButtons } from "./MagneticButtons";
import { useLoading } from "./context/LoadingContext";
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
          {/* <div className="z-10 w-full absolute md:w-auto  md:left-[10%] top-[60%] md:top-1/3 col-span-2 flex flex-col justify-center items-start md:items-start text-start px-10 py-5"> */}
          <motion.h1
            className="text-4xl text-transparent bg-white  cursor-default font-display sm:text-9xl bg-clip-text "
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
            className=" text-zinc-400 text-2xl animate-fade-up"
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
            <MagneticButtons>
              <Button
                className="bg-white text-black hover:bg-red-700 hover:text-white p-6 rounded-3xl text-xl"
                onClick={() => router.push("/about")}
              >
                Learn More
              </Button>
            </MagneticButtons>
          </motion.div>
          {/* </div> */}
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
