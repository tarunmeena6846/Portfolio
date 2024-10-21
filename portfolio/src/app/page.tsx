"use client";

import { useRef, useState } from "react";
import AboutSection from "./components/AboutSection";
import ConnectSection from "./components/ConnectSection";
import Hero from "./components/Preloader/Hero";
import IntroSection from "./components/IntroSection";
import MyProjects from "./components/MyProjects";
import Sidebar from "./components/Sidebar";
import { AnimatePresence } from "framer-motion";

import { usePathname } from "next/navigation";

import { useLoading } from "./components/context/LoadingContext";

export default function Home() {
  const introRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  // const [isLoading, setIsLoading] = useState(true);
  const [showAnimation, setShowAnimation] = useState(true);

  const pathname = usePathname();
  const prevPathRef = useRef(null); // Store the previous path
  const { isLoading } = useLoading();

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <Hero path="/" />}
      </AnimatePresence>

      <Sidebar
        scrollToSection={{
          introRef,
          aboutRef,
          projectsRef,
          contactRef,
        }}
      />
      <div className="scroll-snap-container ">
        {/* <div className="scroll-snap-sections"> */}
          <div className=" grid grid-cols-1 grid-rows-8 lg:grid-rows-4 lg:grid-cols-1">
            <div
              ref={introRef}
              className="scroll-snap-section row-span-2"
              id="intro"
            >
              <IntroSection contactRef={contactRef} />
            </div>
            <div
              ref={aboutRef}
              className="scroll-snap-section mt-10 md:mt-0 row-span-2"
              id="about"
            >
              <AboutSection />
            </div>
            <div
              ref={projectsRef}
              className="scroll-snap-section row-span-2"
              id="projects"
            >
              <MyProjects />
            </div>
            <div
              ref={contactRef}
              className="scroll-snap-section row-span-2"
              id="connect"
            >
              <ConnectSection />
            </div>
          </div>
        </div>
      {/* </div> */}
    </>
  );
}
