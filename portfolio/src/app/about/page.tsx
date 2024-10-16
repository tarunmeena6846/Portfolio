"use client";
import { Button } from "@/src/components/ui/button";
import { SkillSection } from "./SkillsSection";
import TechStackSection from "./TechStackSection";
import ProfessionalExperiance from "./ProfessionalExperiance";
import { motion } from "framer-motion";
import Hr from "../components/Hr";

export default function AboutPage() {
  return (
    <>
      <div className="flex flex-col items-center justify-center w-screen ">
        <div className="mx-auto container grid grid-cols-2 ">
          <motion.div
            className=" px-20 space-y-10 flex flex-col justify-center"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              type: "spring",
            }}
          >
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
            <motion.p
              className="text-zinc-400 text-lg"
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{
                delay: 0.5,
                type: "spring",
              }}
            >
              Hi! I'm Tarun Meena, a{" "}
              <span className="text-xl text-white">full-stack developer </span>
              passionate about creating efficient, scalable web applications
              using the latest technologies. Originating from Alwar,
              Rajasthan,India, I am a 2020 graduate from
              <span className="text-xl text-white">
                {" "}
                Indian Institue of Technology, Roorkee
              </span>{" "}
              specialised in{" "}
              <span className="text-xl text-white">
                {" "}
                Computer Science and Engineering
              </span>
              .
            </motion.p>
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                delay: 0.7,
                type: "spring",
              }}
            >
              <Button className="bg-white text-black hover:bg-gray-700 hover:text-white p-5 rounded-2xl w-1/2">
                Scroll Down
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
            <img
              src="/aboutSection.svg"
              className="h-[80%]"
              alt="About Illustration"
            />
          </motion.div>
        </div>
      </div>
      <SkillSection />
      <TechStackSection />
      <ProfessionalExperiance />
    </>
  );
}
