"use client";
import { Button } from "@/src/components/ui/button";
import { Input } from "@/src/components/ui/input";
import { Textarea } from "@/src/components/ui/textarea";
import { motion } from "framer-motion";
import Hr from "./Hr";
import { MagneticButtons } from "./MagneticButtons";
import { useState } from "react";
import ContactForm from "./ContactForm";
// import ContactForm from "@/src/components/ui/form";

export default function ConnectSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  // const handleFormSubmit = ({}) => {

  // };
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden">
      <div className="mx-auto container grid grid-cols-2 ">
        <motion.div className="col-span-1 pl-20 space-y-10 flex flex-col ">
          <motion.h3
            className="text-4xl text-transparent bg-white cursor-default sm:text-4xl md:text-8xl bg-clip-text text-gray-400"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.2,
              type: "spring",
            }}
          >
            Let's Connect
            <Hr />
          </motion.h3>

          <motion.p
            className="text-gray-400 text-2xl"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.2,
              type: "spring",
            }}
          >
            Feel free to contact me if you have any questions or just want to
            say hi.
          </motion.p>
          <motion.p
            className="text-center text-zinc-400 text-2xl"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.3,
              type: "spring",
            }}
          >
            tarunmeena6846@gmail.com
          </motion.p>

          <motion.div
            className="text-white flex flex-row justify-center items-center space-x-4 "
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.4,
              type: "spring",
            }}
          >
            <div className="flex space-x-4">
              <MagneticButtons>
                <svg
                  className="h-[50px] m-[10px] fill-white transition-all duration-200 cursor-pointer hover:fill-[#ec4e39]"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 64 64"
                  onClick={() => window.open("mailto:tarunmeena6846@gmail.com")}
                >
                  <path d="M2 16C2 13.7909 3.79086 12 6 12H58C60.2091 12 62 13.7909 62 16V48C62 50.2091 60.2091 52 58 52H6C3.79086 52 2 50.2091 2 48V16ZM58 16L32 32.7143L6 16H58ZM6 48H58V20.0752L32 36.2857L6 20.0752V48Z" />
                </svg>
              </MagneticButtons>
              <MagneticButtons>
                <a
                  href="https://github.com/tarunmeena6846"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    className="h-[50px] m-[10px] fill-white transition-all duration-200 cursor-pointer hover:fill-[#ec4e39]"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 64 64"
                  >
                    <path d="M32 2C15.432 2 2 15.432 2 32c0 13.256 8.608 24.504 20.552 28.472 1.504.28 2.056-.656 2.056-1.456 0-.72-.024-2.624-.04-5.152-8.368 1.816-10.136-4.032-10.136-4.032-1.368-3.472-3.336-4.4-3.336-4.4-2.728-1.864.208-1.824.208-1.824 3.016.208 4.6 3.096 4.6 3.096 2.68 4.592 7.032 3.264 8.744 2.496.272-1.944 1.048-3.264 1.904-4.016-6.68-.76-13.704-3.336-13.704-14.848 0-3.28 1.168-5.96 3.096-8.064-.312-.76-1.344-3.816.296-7.952 0 0 2.528-.808 8.272 3.08 2.4-.664 4.976-.992 7.536-1.008 2.56.016 5.136.344 7.536 1.008 5.744-3.888 8.264-3.08 8.264-3.08 1.648 4.136.616 7.192.304 7.952 1.936 2.104 3.096 4.784 3.096 8.064 0 11.544-7.04 14.08-13.744 14.816 1.08.928 2.048 2.76 2.048 5.56 0 4.016-.04 7.256-.04 8.24 0 .808.544 1.744 2.072 1.448C53.408 56.488 62 45.248 62 32 62 15.432 48.568 2 32 2z" />
                  </svg>
                </a>
              </MagneticButtons>
              <MagneticButtons>
                <a
                  href="https://www.linkedin.com/in/tarun-meena-679495196/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    className="h-[50px] m-[10px] fill-white transition-all duration-200 cursor-pointer hover:fill-[#ec4e39]"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 64 64"
                  >
                    <path d="M58.5 1H5.5C3 1 1 3 1 5.5v53C1 61 3 63 5.5 63h53c2.5 0 4.5-2 4.5-4.5v-53C63 3 61 1 58.5 1zM19 54H10V24h9v30zM14.5 19.5c-2.9 0-5.3-2.4-5.3-5.3s2.4-5.3 5.3-5.3 5.3 2.4 5.3 5.3-2.4 5.3-5.3 5.3zM54 54h-9V39.5c0-3.4-0.1-7.7-4.7-7.7-4.7 0-5.4 3.7-5.4 7.5V54h-9V24h8.6v3.9h0.1c1.2-2.3 4.1-4.7 8.5-4.7 9.1 0 10.8 6 10.8 13.8V54z" />
                  </svg>
                </a>
              </MagneticButtons>
              <MagneticButtons>
                <a
                  href="https://www.instagram.com/tarun_meena96"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    className="h-[50px] m-[10px] fill-white transition-all duration-200 cursor-pointer hover:fill-[#ec4e39]"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 64 64"
                  >
                    <path d="M32 16.9c-8.3 0-15 6.8-15 15.1s6.7 15.1 15 15.1S47 40.3 47 32s-6.7-15.1-15-15.1zm0 25.2c-5.5 0-10-4.5-10-10.1s4.5-10.1 10-10.1S42 26.4 42 32s-4.5 10.1-10 10.1zM47 10c-2.8 0-5 2.3-5 5s2.2 5 5 5 5-2.3 5-5-2.2-5-5-5z" />
                    <path d="M48 0H16C7.2 0 0 7.2 0 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V16c0-8.8-7.2-16-16-16zm11 48c0 6.1-4.9 11-11 11H16c-6.1 0-11-4.9-11-11V16c0-6.1 4.9-11 11-11h32c6.1 0 11 4.9 11 11v32z" />
                  </svg>
                </a>
              </MagneticButtons>
            </div>
          </motion.div>
        </motion.div>
        <motion.div
          className="px-20 backdrop-blur-lg"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            // delay: 0.5,
            type: "spring",
          }}
        >
          <ContactForm></ContactForm>
        </motion.div>
      </div>
    </div>
  );
}
