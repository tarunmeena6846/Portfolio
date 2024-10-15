"use client";
import { Button } from "@/src/components/ui/button";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function MyProjects() {
  const router = useRouter();
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden">
      {/* <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" /> */}
      <div className="mx-auto container grid grid-cols-2 ">
        <motion.div
          className="col-span-1 flex justify-center items-center"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            delay: 0.6,
            type: "spring",
          }}
        >
          <img src="./projects.svg" className="h-[80%] w-[80%]" />
        </motion.div>
        <motion.div
          className="col-span-1 px-20 space-y-10 flex flex-col justify-center items-center"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            type: "spring",
          }}
        >
          <motion.h1
            className="text-4xl text-transparent bg-white cursor-default sm:text-4xl md:text-6xl bg-clip-text"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.3,
              type: "spring",
            }}
          >
            My Projects
          </motion.h1>
          <motion.p
            className="text-gray-400 text-lg"
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
            <Button
              className="bg-white text-black hover:bg-gray-700 hover:text-white p-5 rounded-2xl"
              onClick={() => router.push("/projects")}
            >
              Learn More
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
