"use client";
import { Button } from "@/src/components/ui/button";
import { Input } from "@/src/components/ui/input";
import { Textarea } from "@/src/components/ui/textarea";

import {
  GitHubLogoIcon,
  InstagramLogoIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";
import { Mail } from "lucide-react";

export default function ConnectSection() {
  const handleFormSubmit = () => {};
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden">
      <div className="mx-auto container grid grid-cols-2 ">
        <div className="col-span-1 px-20 space-y-10 flex flex-col  items-center">
          <h1 className="text-4xl text-transparent duration-1000 bg-white animate-title cursor-default text-edge-outline font-display sm:text-6xl md:text-7xl whitespace-nowrap bg-clip-text ">
            Let's Connect
          </h1>
          <div>
            <p className="text-zinc-400 animate-fade-up">
              Feel free to contact me if you have any questions or just want to
              say hi.
            </p>
            <p className="text-center text-zinc-400 animate-fade-up">
              tarunmeena6846@gmail.com
            </p>
          </div>
          <div className="text-white flex flex-row space-x-4 ">
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
          </div>
        </div>
        <div className="px-20 ">
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
        </div>
      </div>
    </div>
  );
}
