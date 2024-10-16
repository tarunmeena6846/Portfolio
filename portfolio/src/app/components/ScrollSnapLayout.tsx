"use client";

import { useEffect, ReactNode } from "react";

export default function ScrollSnapLayout({
  children,
}: {
  children: ReactNode;
}) {
  useEffect(() => {
    const setVh = () => {
      const vh = window.innerHeight * 0.01;
      console.log("vindow height", vh);
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    };

    setVh();
    window.addEventListener("resize", setVh);

    return () => {
      window.removeEventListener("resize", setVh);
    };
  }, []);

  return (
    <div className="scroll-snap-container">
      <div className="scroll-snap-sections">{children}</div>
    </div>
  );
}
