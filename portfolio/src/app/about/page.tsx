"use client";
import { Button } from "@/src/components/ui/button";
import { SkillSection } from "./SkillsSection";
import TechStackSection from "./TechStackSection";
import ProfessionalExperiance from "./ProfessionalExperiance";
import { AnimatePresence, motion } from "framer-motion";
import Hr from "../components/Hr";
import { MagneticButtons } from "../components/MagneticButtons";
import { useEffect, useRef, useState } from "react";
import Hero from "../components/Preloader/Hero";
import { usePathname } from "next/navigation";
import { useLoading } from "../components/context/LoadingContext";
import { ArrowBigDown } from "lucide-react";

export default function AboutPage() {
  const [isLoading, setIsLoading] = useState(true);
  // const skillRef = useRef(null);
  const pathname = usePathname();
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);
  console.log(isLoading, "isLoading");
  return (
    <>
      <AnimatePresence>{isLoading && <Hero path={pathname} />}</AnimatePresence>

      <div className="flex flex-col items-center justify-center w-screen ">
        <div className="grid grid-cols-1 md:grid-cols-2 ">
          <motion.div
            className="col-span-1 px-20 space-y-10 flex flex-col justify-center items-center"
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
              <MagneticButtons>
                <Button
                  className="bg-white text-black hover:bg-red-700 hover:text-white p-6 rounded-3xl text-xl"
                  // onClick={() => {
                  //   skillRef.current.scrollIntoView({ behavior: "smooth" });
                  // }}
                >
                  <ArrowBigDown />
                </Button>
              </MagneticButtons>
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
      {/* <div ref={skillRef}> */}
      <SkillSection />
      {/* </div> */}
      <TechStackSection />
      <ProfessionalExperiance />
    </>
  );
}
