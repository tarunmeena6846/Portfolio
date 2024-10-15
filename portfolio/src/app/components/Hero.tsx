"use client";
import { Button } from "@/src/components/ui/button";
import Particles from "./particles";

import { Link } from "react-scroll";
import { ArrowDownCircle } from "lucide-react";

export default function Hero() {
  return (
    <>
      <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden ">
        <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
        <h1 className="py-3.5 px-0.5 z-10 text-4xl text-transparent duration-1000 bg-white animate-title cursor-default text-edge-outline font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text ">
          Welcome
        </h1>
        <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
        <Link to="intro" spy={true} smooth={true} duration={500}>
          <Button className="mt-20 rounded-full p-10">
            {/* <ArrowDownCircle className="bg-white text-white p-6 mt-80" /> */}
          </Button>
        </Link>
      </div>
    </>
  );
}
