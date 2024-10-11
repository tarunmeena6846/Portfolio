import { Button } from "@/components/ui/button";

export default function IntroSection() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden ">
      {/* <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" /> */}
      <div className="flex flex-col justify-center w-full h-full">
        <h1 className="text-4xl text-transparent duration-1000 bg-white animate-title cursor-default text-edge-outline font-display sm:text-4xl md:text-6xl whitespace-nowrap bg-clip-text ">
          Tarun Meena
        </h1>
        <h1 className="text-4xl text-transparent duration-1000 bg-white animate-title cursor-default text-edge-outline font-display sm:text-4xl md:text-6xl whitespace-nowrap bg-clip-text ">
          Full Stack Developer
        </h1>
        <h1 className="text-white text-lg">
          I’m a full-stack web developer with experience in building responsive
          web apps using React and Node.js.
        </h1>
      </div>
      <div className="flex">
        <Button>Download CV</Button>
        <Button>Contact Me</Button>
      </div>
      {/* <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" /> */}
    </div>
  );
}
