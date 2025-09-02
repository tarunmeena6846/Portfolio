"use client";
import { Button } from "@/src/components/ui/button";
import { SkillSection } from "./SkillsSection";
import TechStackSection from "./TechStackSection";
import ProfessionalExperiance from "./ProfessionalExperiance";
import { AnimatePresence, motion } from "framer-motion";
import Hr from "../components/Hr";
import { useEffect, useState } from "react";
import Hero from "../components/Preloader/Hero";
import { usePathname } from "next/navigation";
import { ArrowBigDown } from "lucide-react";
import { Menu } from "../components/menu/Menu";

export default function AboutPage({ }: // skillRef,
  {
    // skillRef: RefObject<HTMLDivElement>;
  }) {
  const [isLoading, setIsLoading] = useState(true);
  // const skillRef = useRef(null);
  const pathname = usePathname();
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      <AnimatePresence>{isLoading && <Hero path={pathname} />}</AnimatePresence>
      <Menu />
      <div
        className="
      flex flex-col-reverse md:flex-row
      items-center justify-center
      w-full h-screen
    "
      >
        <motion.div
          // className="col-span-1 row-span-1 lg:col-span-2 p-10 md:px-20 space-y-5 lg:space-y-10 flex flex-col justify-center md:ml-10"
          className="p-10 md:px-20 space-y-5 lg:space-y-10 flex flex-col justify-center"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            type: "spring",
          }}
        >
          <motion.h1
            className="text-xl
 text-transparent bg-white cursor-default  bg-clip-text text-gray-400"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.3,
              type: "spring",
            }}
          >
            About me
            <Hr myProjectSection={false} />
          </motion.h1>
          <motion.p
            className="text-gray-400 text-base"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.5,
              type: "spring",
            }}
          >
            Hi! I'm Tarun Meena, a{" "}
            <span className="text-base text-white">full-stack developer </span>
            passionate about creating efficient, scalable web applications using
            the latest technologies. Originating from Alwar, Rajasthan,India, I
            am a 2020 graduate from
            <span className="text-base text-white">
              {" "}
              Indian Institue of Technology, Roorkee
            </span>{" "}
            specialised in{" "}
            <span className="text-base text-white">
              {" "}
              Computer Science and Engineering
            </span>
            .
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
              className=" bg-white text-black hover:bg-red-700 hover:text-white p-6 rounded-3xl"
            // onClick={() => {
            //   skillRef.current.scrollIntoView({ behavior: "smooth" });
            // }}
            >
              <ArrowBigDown />
            </Button>
            {/* </MagneticButtons> */}
          </motion.div>
        </motion.div>
        {/* <motion.div
          className="hidden lg:flex col-span-1 order-1 flex justify-center items-center"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            delay: 0.7,
            type: "spring",
          }}
        >
          <img
            src="/aboutSection.svg"
            className="  rounded-full
            filter grayscale hover:grayscale-0 hover:blur-0
            transition-all duration-500

            w-[10em] sm:w-[12em] md:w-[14em] lg:w-[16em] xl:w-[24em]
            h-[10em] sm:h-[12em] md:h-[14em] lg:h-[16em] xl:h-[24em]"
          />
        </motion.div> */}
      </div>
        <SkillSection />
        <TechStackSection />
      <ProfessionalExperiance />
    </>
  );
}
