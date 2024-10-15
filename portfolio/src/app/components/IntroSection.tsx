import { Button } from "@/src/components/ui/button";

export default function IntroSection() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden ">
      {/* <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" /> */}
      {/* <div className="flex flex-col justify-center w-full h-full "> */}
      <div className="mx-auto container grid grid-cols-2 w-full">
        <div className="col-span-1 mx-auto px-20 space-y-10 flex flex-col justify-center ml-10">
          <h1 className="text-4xl text-transparent duration-1000 bg-white animate-title cursor-default text-edge-outline font-display sm:text-4xl md:text-6xl whitespace-nowrap bg-clip-text  text-gray-400">
            Tarun Meena
          </h1>
          <h1 className="text-4xl text-transparent duration-1000 bg-white animate-title cursor-default text-edge-outline font-display sm:text-4xl md:text-6xl whitespace-nowrap bg-clip-text ">
            Full Stack Developer
          </h1>
          <h1 className="text-gray-400 text-lg">
            I’m a full-stack web developer with experience in building
            responsive web apps using React and Node.js.
          </h1>
          <div className="flex gap-3">
            <Button className="bg-white text-black hover:bg-gray-700 hover:text-white p-5 rounded-2xl">
              Download CV
            </Button>
            <Button className="bg-white text-black hover:bg-gray-700 hover:text-white p-5 rounded-2xl">
              Contact Me
            </Button>
          </div>
        </div>
        <div className="col-span-1 flex justify-center items-center">
          <img
            src="./photo.jpeg"
            className="rounded-full filter grayscale hover:blur-0 hover:grayscale-0 transition-all duration-500 h-[60%]"
          ></img>
        </div>
      </div>
      {/* <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" /> */}
    </div>
  );
}
