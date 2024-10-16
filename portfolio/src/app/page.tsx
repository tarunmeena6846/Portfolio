"use client";
import { useEffect } from "react";
import AboutSection from "./components/AboutSection";
import ConnectSection from "./components/ConnectSection";
import Hero from "./components/Hero";
import IntroSection from "./components/IntroSection";
import MyProjects from "./components/MyProjects";
import Sidebar from "./components/Sidebar";

export default function Home() {
  return (
    <div className="scroll-snap-container">
      <Sidebar />
      <div className="scroll-snap-sections">
      <div className="scroll-snap-section" id="hero">
        <Hero />
      </div>
      <div className="scroll-snap-section" id="intro">
        <IntroSection />
      </div>
      <div className="scroll-snap-section" id="about">
        <AboutSection />
      </div>
      <div className="scroll-snap-section" id="projects">
        <MyProjects />
      </div>
      <div className="scroll-snap-section" id="contact">
        <ConnectSection />
      </div>
      </div>
    </div>
  );
}
