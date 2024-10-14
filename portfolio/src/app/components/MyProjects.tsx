import { Button } from "@/components/ui/button";

export default function MyProjects() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden">
      {/* <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" /> */}
      <div className="mx-auto container grid grid-cols-3 ">
        <div className="col-span-2 flex justify-center items-center">
          <img src="./projects.svg" className="h-[80%] " />
        </div>
        <div className="col-span-1 px-20 space-y-10 flex flex-col justify-center">
          <h1 className="text-4xl text-transparent duration-1000 bg-white animate-title cursor-default text-edge-outline font-display sm:text-6xl md:text-7xl whitespace-nowrap bg-clip-text ">
            My Projects
          </h1>
          <p className=" text-zinc-400 animate-fade-up">
            These are some of the projects that I have done.
          </p>
          <Button className="bg-white text-black hover:bg-gray-700 hover:text-white p-5 rounded-2xl w-1/2">
            Learn More
          </Button>
        </div>
      </div>
    </div>
  );
}
