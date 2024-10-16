"use client";
import { RefObject, use, useRef } from "react";
import AboutSection from "./components/AboutSection";
import ConnectSection from "./components/ConnectSection";
import Hero from "./components/Hero";
import IntroSection from "./components/IntroSection";
import MyProjects from "./components/MyProjects";
import Sidebar from "./components/Sidebar";
import { useScrollSpy } from "./hooks/useScrollSpy";

export default function Home() {
  const introRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  const heroRef = useRef(null);
  const activeSection = useScrollSpy([
    // heroRef,
    introRef,
    aboutRef,
    projectsRef,
    contactRef,
  ]);

  console.log("activeSection", activeSection);
  return (
    <div className="scroll-snap-container">
      <Sidebar
        scrollToSection={{
          introRef,
          aboutRef,
          projectsRef,
          contactRef,
        }}
        activeSection={activeSection}
      />
      <div className="scroll-snap-sections">
        <div className="scroll-snap-section" id="hero" ref={heroRef}>
          <Hero introRef={introRef} />
        </div>
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
  );
}
