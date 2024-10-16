"use client";

import { ArrowBigDownIcon } from "lucide-react";
import { motion } from "framer-motion";
import { RefObject } from "react";

export default function Hero({
  introRef,
}: {
  introRef: RefObject<HTMLDivElement>;
}) {
  const scrollTo = (ref: RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  return (
    <>
      <div className="flex flex-col items-center justify-center w-screen min-h-screen">
        <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
        <h1 className="py-3.5 px-0.5 z-10 text-4xl text-transparent duration-1000 bg-white animate-title cursor-default text-edge-outline font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text ">
          Welcome
        </h1>
        <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
        <motion.button
          animate={{ y: [0, 20, 0] }}
          transition={{
            repeat: Infinity,
            duration: 4,
            ease: "easeInOut",
          }}
          onClick={() => scrollTo(introRef)}
        >
          <ArrowBigDownIcon className="w-10 h-10 text-white mt-40" />
        </motion.button>
      </div>
    </>
  );
}
