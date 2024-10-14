import { CubeIcon } from "@radix-ui/react-icons";
import { Braces, Cloud } from "lucide-react";

export function SkillSection() {
  return (
    <div className="flex flex-col items-center justify-center w-screen  overflow-hidden ">
      {/* <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" /> */}
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl text-transparent duration-1000 bg-white animate-title cursor-default text-edge-outline font-display sm:text-6xl md:text-6xl whitespace-nowrap bg-clip-text ">
          Skills and Expertise
        </h1>
        <p className="text-center text-zinc-400 animate-fade-up text-lg">
          Here are my skills and technologies I've worked with.
        </p>
      </div>
      <div className="text-white grid grid-cols-1 sm:grid-cols-3 text-xl gap-10 mt-10">
        <div className="col-span-1 flex flex-col gap-2 items-center ">
          <CubeIcon className="w-[48px] h-[48px]" />
          <h1>Web Developement</h1>
        </div>
        <div className="col-span-1 flex flex-col  items-center  gap-2 ">
          <Braces className="w-[48px] h-[48px]" />
          <h1>Rest API</h1>
        </div>
        <div className=" col-span-1 flex flex-col  gap-2 items-center">
          <Cloud className="w-[48px] h-[48px]" />
          <h1>AWS</h1>
        </div>
      </div>
      {/* <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" /> */}
    </div>
  );
}
