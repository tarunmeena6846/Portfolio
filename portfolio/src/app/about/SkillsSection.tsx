import { CubeIcon } from "@radix-ui/react-icons";
import { Braces, Cloud, Code } from "lucide-react";
import { motion } from "framer-motion";
export function SkillSection() {
  return (
    <div
      className="flex flex-col items-center justify-center w-screen h-[60vh] overflow-hidden "
      // ref={skill}
    >
      <motion.div
        className="flex flex-col items-center justify-center"
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{
          delay: 0.3,
          type: "spring",
        }}
      >
        <h1 className="text-4xl text-transparent bg-white sm:text-6xl md:text-6xl  bg-clip-text ">
          Skills and Expertise
        </h1>
        <p className="text-center text-zinc-400 text-lg">
          Here are my skills and technologies I've worked with.
        </p>
      </motion.div>
      <motion.div
        className="text-white grid grid-cols-1 sm:grid-cols-4 text-xl gap-10 mt-10"
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{
          delay: 0.3,
          type: "spring",
        }}
      >
        <div className="col-span-1 flex flex-col gap-2 items-center ">
          <CubeIcon className="w-[48px] h-[48px]" />
          <h1>Web Developement</h1>
        </div>
        <div className="col-span-1 flex flex-col  items-center  gap-2 ">
          <Braces className="w-[48px] h-[48px]" />
          <h1>Rest API</h1>
        </div>
        <div className=" col-span-1 flex flex-col  gap-2 items-center">
          <Cloud className="w-[48px] h-[48px]" />
          <h1>AWS</h1>
        </div>
        <div className=" col-span-1 flex flex-col  gap-2 items-center">
          <Code className="w-[48px] h-[48px]" />
          <h1>C++</h1>
        </div>
      </motion.div>
    </div>
  );
}
