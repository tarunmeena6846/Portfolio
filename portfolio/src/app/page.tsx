"use client";

import { useEffect, useRef, useState } from "react";
import AboutSection from "./components/AboutSection";
import ConnectSection from "./components/ConnectSection";
import Hero from "./components/Preloader/Hero";
import IntroSection from "./components/IntroSection";
import MyProjects from "./components/MyProjects";
import Sidebar from "./components/Sidebar";
import { AnimatePresence } from "framer-motion";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { usePathname } from "next/navigation";
import { pre } from "framer-motion/client";
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
  const isLoading = useLoading();
  // const timer = setTimeout(() => {
  //   // console.log("isLoadingRef.current 3", isLoadingRef.current);
  //   setIsLoading(false);
  //   document.body.style.cursor = "default";

  //   // isLoadingRef.current = false; // Once loading is done, update the ref
  // }, 2000);

  // const timer = setTimeout(() => {
  //   setIsLoading(false);
  //   document.body.style.cursor = "default";
  // }, 2000);

  // useEffect(() => {
  //   if (typeof window !== "undefined" && window.performance) {
  //     if (performance.navigation.type === 1) {
  //       alert("This page is reloaded");
  //       // Add any specific logic you want for page reloads
  //     } else {
  //       console.log("This page is not reloaded");
  //     }
  //   }
  // }, []);
  // console.log("prevPathRef.current", prevPathRef.current);
  console.log("isLoading", isLoading, typeof isLoading);
  // console.log("showAnimation", showAnimation);
  console.log("router", pathname);
  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading.isLoading && <Hero />}
      </AnimatePresence>
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
