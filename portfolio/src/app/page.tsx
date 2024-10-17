"use client";
import { RefObject, use, useEffect, useRef, useState } from "react";
import AboutSection from "./components/AboutSection";
import ConnectSection from "./components/ConnectSection";
import Hero from "./components/Preloader/Hero";
import IntroSection from "./components/IntroSection";
import MyProjects from "./components/MyProjects";
import Sidebar from "./components/Sidebar";
import { AnimatePresence } from "framer-motion";

export default function Home() {
  const introRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);
  

  useEffect(() => {
    (async () => {
      setTimeout(() => {
        setIsLoading(false);
        document.body.style.cursor = "default";
      }, 2000);
    })();
  }, []);

  return (
    <>
      <AnimatePresence>{isLoading && <Hero />}</AnimatePresence>
      <div className="scroll-snap-container">
        <Sidebar
          scrollToSection={{
            introRef,
            aboutRef,
            projectsRef,
            contactRef,
          }}
        />
        <div className="scroll-snap-sections">
          <div ref={introRef} className="scroll-snap-section" id="intro">
            <IntroSection />
          </div>
          <div ref={aboutRef} className="scroll-snap-section" id="about">
            <AboutSection />
          </div>
          <div ref={projectsRef} className="scroll-snap-section" id="projects">
            <MyProjects />
          </div>
          <div ref={contactRef} className="scroll-snap-section" id="connect">
            <ConnectSection />
          </div>
        </div>
      </div>
    </>
  );
}
