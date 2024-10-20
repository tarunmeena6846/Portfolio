"use client";
import { Folder, Home, Mail, User } from "lucide-react";
import { RefObject } from "react";
import { MagneticButtons } from "./MagneticButtons";
export const scrollTo = (ref: RefObject<HTMLDivElement>) => {
  if (ref.current) {
    ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};
export default function Sidebar({
  scrollToSection,
}: {
  scrollToSection: {
    introRef: RefObject<HTMLDivElement>;
    aboutRef: RefObject<HTMLDivElement>;
    projectsRef: RefObject<HTMLDivElement>;
    contactRef: RefObject<HTMLDivElement>;
  };
}) {
  const { introRef, aboutRef, projectsRef, contactRef } = scrollToSection;

  return (
    <div className="hidden md:block fixed top-1/2 -translate-y-1/2 text-white space-y-10 bg-white py-10 px-4 rounded-e-xl">
      <MagneticButtons>
        <button onClick={() => scrollTo(introRef)}>
          <svg
            className="h-[50px] fill-black transition-all duration-200 cursor-pointer hover:fill-[#ec4e39]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 64 64"
          >
            <path d="M32 2L2 32l6 6v24h16V42h16v20h16V38l6-6L32 2zm0 8.83L54 32v22H44V38H20v16H10V32l22-21.17z" />
          </svg>
        </button>
      </MagneticButtons>
      <MagneticButtons>
        <button onClick={() => scrollTo(aboutRef)}>
          <svg
            className="h-[50px]  fill-black transition-all duration-200 cursor-pointer hover:fill-[#ec4e39]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 64 64"
          >
            <path d="M32 32c6.627 0 12-5.373 12-12S38.627 8 32 8s-12 5.373-12 12 5.373 12 12 12zm0 6c-8.837 0-16-7.163-16-16S23.163 6 32 6s16 7.163 16 16-7.163 16-16 16zm0 2c13.255 0 24 5.373 24 12v6H8v-6c0-6.627 10.745-12 24-12zm0-4C17.641 36 6 42.477 6 50v8h52v-8c0-7.523-11.641-14-26-14z" />
          </svg>
        </button>
      </MagneticButtons>
      <MagneticButtons>
        <button onClick={() => scrollTo(projectsRef)}>
          <svg
            className="h-[50px] fill-black transition-all duration-200 cursor-pointer hover:fill-[#ec4e39]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 64 64"
          >
            <path d="M60 12H32l-6-6H4c-2.2 0-4 1.8-4 4v44c0 2.2 1.8 4 4 4h56c2.2 0 4-1.8 4-4V16c0-2.2-1.8-4-4-4zm0 42H4V14h22.343l6 6H60v34z" />
          </svg>
        </button>
        <span className="absolute left-0 right-0 bottom-[-6px] h-[2px] bg-black scale-x-0 group-focus-within:scale-x-100 transition-transform"></span>
      </MagneticButtons>
      <MagneticButtons>
        <button onClick={() => scrollTo(contactRef)}>
          <svg
            className="h-[50px] fill-black transition-all duration-200 cursor-pointer hover:fill-[#ec4e39]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 64 64"
          >
            <path d="M2 16C2 13.7909 3.79086 12 6 12H58C60.2091 12 62 13.7909 62 16V48C62 50.2091 60.2091 52 58 52H6C3.79086 52 2 50.2091 2 48V16ZM58 16L32 32.7143L6 16H58ZM6 48H58V20.0752L32 36.2857L6 20.0752V48Z" />
          </svg>
        </button>
      </MagneticButtons>
    </div>
  );
}
