"use client";
// import { Button } from "@/components/ui/button";
import { Button } from "@/src/components/ui/button";
import ProjectsDisplay from "./ProjectsDisplay";
import { AnimatePresence, motion } from "framer-motion";
import Hr from "../components/Hr";
import { MagneticButtons } from "../components/MagneticButtons";
import { useLoading } from "../components/context/LoadingContext";
import { usePathname } from "next/navigation";
import Hero from "../components/Preloader/Hero";
import { useEffect, useState } from "react";
import { ArrowBigDown } from "lucide-react";
import { Menu } from "../components/menu/Menu";
export default function ProjectsPage() {
  const [isLoading, setIsLoading] = useState(true);

  const pathname = usePathname();
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);
  console.log(isLoading, "isLoading");
  console.log(isLoading);
  console.log(pathname);
  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <Hero path={pathname} />}
      </AnimatePresence>
      <Menu />
      {/* <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" /> */}
      <div className=" grid grid-cols-1 grid-rows-1 lg:grid-cols-3 lg:grid-rows-1 md:h-screen">
        {/* <motion.div
          className="col-span-2 flex justify-center items-center"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            delay: 0.3,
            type: "spring",
          }}
        > */}
        <motion.div
          className="hidden lg:flex col-span-1 order-1 flex justify-center items-center"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            delay: 0.7,
            type: "spring",
          }}
        >
          <img src="./projects.svg" className="h-[80%] " />
        </motion.div>
        <motion.div
          className="col-span-1 row-span-1 lg:col-span-2 p-10 md:px-20 space-y-5 lg:space-y-10 flex flex-col justify-center md:ml-10"
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
            className="text-gray-400 lg:text-xl"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.5,
              type: "spring",
            }}
          >
            These are some of the projects that I have done.
          </motion.p>
          <motion.div
            className="flex gap-3"
            // initial={{ y: 40, opacity: 0 }}
            // whileInView={{ y: 0, opacity: 1 }}
            // transition={{} }
            transition={{
              duration: 3,
              ease: "easeInOut",
              repeat: Infinity,
              delay: 0.7,
              // type: "spring",
            }} // Animation timing and loop
            animate={{ y: [0, 40, 0] }}
          >
            {/* <MagneticButtons> */}
            <Button
              className=" bg-white text-black hover:bg-red-700 hover:text-white p-6 rounded-3xl text-xl"
              // onClick={() => {
              //   skillRef.current.scrollIntoView({ behavior: "smooth" });
              // }}
            >
              <ArrowBigDown />
            </Button>
            {/* </MagneticButtons> */}
          </motion.div>
        </motion.div>
      </div>

      <ProjectsDisplay />
    </>
  );
}
