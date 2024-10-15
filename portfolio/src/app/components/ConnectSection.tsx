"use client";
import { Button } from "@/src/components/ui/button";
import { Input } from "@/src/components/ui/input";
import { Textarea } from "@/src/components/ui/textarea";
import { motion } from "framer-motion";
import {
  GitHubLogoIcon,
  InstagramLogoIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";
import { Mail } from "lucide-react";
import Hr from "./Hr";

export default function ConnectSection() {
  const handleFormSubmit = () => {};
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
            <Mail
              className="w-[48px] h-[48px] cursor-pointer"
              onClick={() => window.open("mailto:tarunmeena6846@gmail.com")}
            />
            <a
              href="https://www.linkedin.com/in/tarun-meena-679495196/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-[48px] h-[48px] cursor-pointer"
            >
              <LinkedInLogoIcon className="w-full h-full" />
            </a>
            <a
              className="w-[48px] h-[48px] cursor-pointer"
              href="https://github.com/tarunmeena6846"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubLogoIcon className="w-full h-full" />
            </a>
            <a
              className="w-[48px] h-[48px] cursor-pointer"
              href="https://www.instagram.com/tarun_meena96"
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstagramLogoIcon className="w-[48px] h-[48px] cursor-pointer" />
            </a>
          </motion.div>
        </motion.div>
        <motion.div
          className="px-20 "
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            delay: 0.5,
            type: "spring",
          }}
        >
          <form
            onSubmit={handleFormSubmit}
            className="space-y-5 flex flex-col items-center shadow-lg backdrop-blur-lg border p-10 rounded-3xl"
          >
            <Input
              placeholder="Your Name"
              type="text"
              required
              className="w-full bg-white"
            />
            <Input
              placeholder="Your Email"
              type="email"
              required
              className="w-full bg-white"
            />
            <Textarea
              placeholder="Your Message"
              className="w-full bg-white"
              required
            />
            <Button className="bg-white text-black hover:bg-gray-700 hover:text-white p-5 rounded-2xl w-1/2">
              Submit
            </Button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
