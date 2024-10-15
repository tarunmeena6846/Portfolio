"use client";
import { Folder, Home, Mail, User } from "lucide-react";
import { Link } from "react-scroll";

export default function Sidebar() {
  return (
    <div className="hidden md:block fixed top-1/2 -translate-y-1/2 text-white space-y-10 bg-white py-10 px-4 rounded-e-xl">
      <div className="relative group">
        <Link to="intro" spy={true} smooth={true} duration={500}>
          <Home
            className="w-[48px] h-[48px] text-black focus:outline-none"
            // tabIndex={0}
          />
        </Link>
        <span className="absolute left-0 right-0 bottom-[-6px] h-[2px] bg-black scale-x-0 group-focus-within:scale-x-100 transition-transform"></span>
      </div>

      <div className="relative group">
        <Link to="about" spy={true} smooth={true} duration={500}>
          <User className="w-[48px] h-[48px]  text-black" />
        </Link>
        <span className="absolute left-0 right-0 bottom-[-6px] h-[2px] bg-black scale-x-0 group-focus-within:scale-x-100 transition-transform"></span>
      </div>

      <div className="relative group">
        <Link to="projects" spy={true} smooth={true} duration={500}>
          <Folder className="w-[48px] h-[48px] text-black" />
        </Link>
        <span className="absolute left-0 right-0 bottom-[-6px] h-[2px] bg-black scale-x-0 group-focus-within:scale-x-100 transition-transform"></span>
      </div>

      <div className="relative group">
        <Link to="contact" spy={true} smooth={true} duration={500}>
          <Mail className="w-[48px] h-[48px] text-black" />
        </Link>
        <span className="absolute left-0 right-0 bottom-[-6px] h-[2px] bg-black scale-x-0 group-focus-within:scale-x-100 transition-transform"></span>
      </div>
    </div>
  );
}
