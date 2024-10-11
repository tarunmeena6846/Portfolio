import {
  GitHubLogoIcon,
  InstagramLogoIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";
import { Mail } from "lucide-react";

export default function ConnectSection() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      {/* <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" /> */}
      <div className="flex flex-col  justify-center w-full h-full">
        <h1 className="text-4xl text-transparent duration-1000 bg-white animate-title cursor-default text-edge-outline font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text ">
          Let's Connect
        </h1>
        <p className="text-center text-zinc-400 animate-fade-up">
          tarunmeena6846@gmail.com
        </p>
        <div className="text-white flex flex-row space-x-4 ">
          <Mail className="w-[48px] h-[48px]" />
          <LinkedInLogoIcon className="w-[48px] h-[48px]" />
          <GitHubLogoIcon className="w-[48px] h-[48px]" />
          <InstagramLogoIcon className="w-[48px] h-[48px]" />
        </div>
      </div>

      {/* <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" /> */}
    </div>
  );
}
