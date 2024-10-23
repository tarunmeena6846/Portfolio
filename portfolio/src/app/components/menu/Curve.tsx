import React from "react";
import { motion } from "framer-motion";
import styles from "./styles.module.scss";

export default function Curve() {
  const initialPath = `M100 0 L200 0 L200 ${window.innerHeight} L100 ${
    window.innerHeight
  } Q-100 ${window.innerHeight / 2} 100 0`;
  const targetPath = `M100 0 L200 0 L200 ${window.innerHeight} L100 ${
    window.innerHeight
  } Q100 ${window.innerHeight / 2} 100 0`;

  const curve = {
    initial: {
      d: initialPath,
    },
    enter: {
      d: targetPath,
      transition: { duration: 1, ease: [0.76, 0, 0.24, 1] },
    },
    exit: {
      d: initialPath,
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
    },
  };

  return (
    <svg
      className="absolute top-0 h-full w-[100px] left-[-99px]"
      //   fill="rgb(41, 41, 41)"
      fill="white"
    >
      <motion.path
        variants={curve}
        initial="initial"
        animate="enter"
        exit="exit"
      ></motion.path>
    </svg>
  );
}
