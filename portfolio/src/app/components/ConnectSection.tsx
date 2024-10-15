"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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
      <div className="mx-auto container grid grid-cols-3 ">
        <div className="col-span-2 px-20 space-y-10 flex flex-col  items-center">
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
            <Mail className="w-[48px] h-[48px]" />
            <LinkedInLogoIcon className="w-[48px] h-[48px]" />
            <GitHubLogoIcon className="w-[48px] h-[48px]" />
            <InstagramLogoIcon className="w-[48px] h-[48px]" />
          </div>
        </div>
        <form
          onSubmit={handleFormSubmit}
          className="space-y-5 flex flex-col items-center text-white"
        >
          <Input
            placeholder="Your Name"
            type="text"
            required
            className="w-full"
          />
          <Input
            placeholder="Your Email"
            type="email"
            required
            className="w-full"
          />
          <Textarea
            placeholder="Your Message"
            className="min-h-[200px] w-full"
            required
          />
          <Button className="bg-white text-black hover:bg-gray-700 hover:text-white p-5 rounded-2xl w-1/2">
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
}
