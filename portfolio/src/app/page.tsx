"use client";

import { useRef } from "react";
import AboutSection from "./components/AboutSection";
import ConnectSection from "./components/ConnectSection";
import Hero from "./components/Preloader/Hero";
import IntroSection from "./components/IntroSection";
import MyProjects from "./components/MyProjects";
import Sidebar from "./components/Sidebar";
import { AnimatePresence } from "framer-motion";

import { useLoading } from "./components/context/LoadingContext";
import { Menu } from "./components/menu/Menu";
import useDeviceDetect from "./hooks/useDeviceDetect";

export default function Home() {
  const introRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  const { isLoading } = useLoading();
  const { isMobile } = useDeviceDetect();
  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <Hero path="/" />}
      </AnimatePresence>
      {isMobile ? <Menu /> : null}
      <Sidebar
        scrollToSection={{
          introRef,
          aboutRef,
          projectsRef,
          contactRef,
        }}
      />
      <div className="scroll-snap-container no-scrollbar">
        {/* <div className="scroll-snap-sections"> */}
        <div
          // className="grid grid-cols-1 grid-rows-8 lg:grid-rows-4 lg:grid-cols-1"
          className="md:pl-[82px] flex flex-col gap-[32px]"
        >
          <div
            ref={introRef}
            className="scroll-snap-section "
            id="intro"
          >
            <IntroSection contactRef={contactRef} />
          </div>
          <div
            ref={aboutRef}
            className="hidden md:block scroll-snap-section"
            id="about"
          >
            <AboutSection />
          </div>
          <div
            ref={projectsRef}
            className=" hidden md:block scroll-snap-section"
            id="projects"
          >
            <MyProjects />
          </div>
          <div
            ref={contactRef}
            className="scroll-snap-section"
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
