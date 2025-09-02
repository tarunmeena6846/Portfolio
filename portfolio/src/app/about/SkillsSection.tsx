import { CubeIcon } from "@radix-ui/react-icons";
import { Braces, Cloud, Code } from "lucide-react";
import { motion } from "framer-motion";
export function SkillSection() {
  return (
    <div
      className="flex flex-col items-center justify-center w-screen p-5"
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
        <h1 className=" text-transparent bg-white text-4xl  md:text-3xl lg:text-7xl  bg-clip-text ">
          Skills and Expertise
        </h1>
        <motion.p
          className="text-gray-400 lg:text-xl flex text-center"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            delay: 0.5,
            type: "spring",
          }}
        >
          Here are my skills and technologies I've worked with.
        </motion.p>
      </motion.div>
      <motion.div
        className="text-white grid grid-cols-2 sm:grid-cols-4 text-xl gap-5 md:gap-10 mt-10"
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{
          delay: 0.3,
          type: "spring",
        }}
      >
        <div className="col-span-1 flex flex-col gap-2 items-center ">
          <CubeIcon className="w-[48px] h-[48px]" />
          <motion.p
            className="text-gray-400 lg:text-xl flex text-center"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.5,
              type: "spring",
            }}
          >
            Web Developement
          </motion.p>
        </div>
        <div className="col-span-1 flex flex-col  items-center  gap-2 ">
          <Braces className="w-[48px] h-[48px]" />
          <motion.p
            className="text-gray-400 lg:text-xl"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.5,
              type: "spring",
            }}
          >
            Rest API
          </motion.p>
        </div>
        <div className=" col-span-1 flex flex-col  gap-2 items-center">
          <Cloud className="w-[48px] h-[48px]" />
          <motion.p
            className="text-gray-400 lg:text-xl"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.5,
              type: "spring",
            }}
          >
            AWS
          </motion.p>
        </div>
        <div className=" col-span-1 flex flex-col  gap-2 items-center">
          <Code className="w-[48px] h-[48px]" />
          <motion.p
            className="text-gray-400 lg:text-xl"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.5,
              type: "spring",
            }}
          >
            C++
          </motion.p>
        </div>
      </motion.div>
    </div>
  );
}
