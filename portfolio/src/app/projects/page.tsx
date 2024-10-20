"use client";
// import { Button } from "@/components/ui/button";
import { Button } from "@/src/components/ui/button";
import ProjectsDisplay from "./ProjectsDisplay";
import { motion } from "framer-motion";
import Hr from "../components/Hr";
import { MagneticButtons } from "../components/MagneticButtons";
import { useLoading } from "../components/context/LoadingContext";
export default function ProjectsPage() {
  const { setIsLoading } = useLoading();
  setIsLoading(false);
  return (
    <>
      <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden">
        {/* <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" /> */}
        <div className="mx-auto container grid grid-cols-3 ">
          <motion.div
            className="col-span-2 flex justify-center items-center"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.3,
              type: "spring",
            }}
          >
            <img src="./projects.svg" className="h-[80%] " />
          </motion.div>
          <motion.div
            className="col-span-1 px-20 space-y-10 flex flex-col justify-center items-center"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              type: "spring",
            }}
          >
            <h1 className="text-4xl text-transparent bg-white sm:text-6xl md:text-7xl bg-clip-text ">
              My Projects
              <Hr />
            </h1>
            <p className=" text-zinc-400 animate-fade-up">
              These are some of the projects that I have done.
            </p>
            <MagneticButtons>
              <Button
                className="bg-white text-black hover:bg-red-700 hover:text-white p-6 rounded-3xl text-xl"
                // onClick={() => router.push("/projects")}
              >
                Scroll Down
              </Button>
            </MagneticButtons>
          </motion.div>
        </div>
      </div>
      <ProjectsDisplay />
    </>
  );
}
