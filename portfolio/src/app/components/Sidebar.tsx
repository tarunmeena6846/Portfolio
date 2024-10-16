"use client";
import { Folder, Home, Mail, User } from "lucide-react";
import { RefObject } from "react";

export default function Sidebar({
  scrollToSection,
  activeSection,
}: {
  scrollToSection: {
    introRef: RefObject<HTMLDivElement>;
    aboutRef: RefObject<HTMLDivElement>;
    projectsRef: RefObject<HTMLDivElement>;
    contactRef: RefObject<HTMLDivElement>;
  };
  activeSection: String;
}) {
  const { introRef, aboutRef, projectsRef, contactRef } = scrollToSection;

  const scrollTo = (ref: RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  return (
    <div className="hidden md:block fixed top-1/2 -translate-y-1/2 text-white space-y-10 bg-white py-10 px-4 rounded-e-xl">
      <div className="relative group">
        <button onClick={() => scrollTo(introRef)}>
          <Home className="w-[48px] h-[48px] text-black focus:outline-none" />
        </button>
        {activeSection === "intro" && (
          <span className="absolute left-0 right-0 bottom-[-6px] h-[2px] bg-black scale-x-0 group-focus-within:scale-x-100 transition-transform"></span>
        )}
      </div>

      <div className="relative group">
        <button onClick={() => scrollTo(aboutRef)}>
          <User className="w-[48px] h-[48px]  text-black" />
        </button>
        <span className="absolute left-0 right-0 bottom-[-6px] h-[2px] bg-black scale-x-0 group-focus-within:scale-x-100 transition-transform"></span>
      </div>

      <div className="relative group">
        <button onClick={() => scrollTo(projectsRef)}>
          <Folder className="w-[48px] h-[48px] text-black" />
        </button>
        <span className="absolute left-0 right-0 bottom-[-6px] h-[2px] bg-black scale-x-0 group-focus-within:scale-x-100 transition-transform"></span>
      </div>

      <div className="relative group">
        <button onClick={() => scrollTo(contactRef)}>
          <Mail className="w-[48px] h-[48px] text-black" />
        </button>
        <span className="absolute left-0 right-0 bottom-[-6px] h-[2px] bg-black scale-x-0 group-focus-within:scale-x-100 transition-transform"></span>
      </div>
    </div>
  );
}
