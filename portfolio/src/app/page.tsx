"use client";
import { RefObject, useRef } from "react";
import AboutSection from "./components/AboutSection";
import ConnectSection from "./components/ConnectSection";
import Hero from "./components/Hero";
import IntroSection from "./components/IntroSection";
import MyProjects from "./components/MyProjects";
import Sidebar from "./components/Sidebar";

export default function Home() {
  // Create refs for each section

  const introRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  return (
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
        <div className="scroll-snap-section">
          <Hero introRef={introRef} />
        </div>
        <div ref={introRef} className="scroll-snap-section">
          <IntroSection />
        </div>
        <div ref={aboutRef} className="scroll-snap-section">
          <AboutSection />
        </div>
        <div ref={projectsRef} className="scroll-snap-section">
          <MyProjects />
        </div>
        <div ref={contactRef} className="scroll-snap-section">
          <ConnectSection />
        </div>
      </div>
    </div>
  );
}
