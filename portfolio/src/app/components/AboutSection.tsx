"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function AboutSection() {
  const router = useRouter();
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden ">
      <div className="mx-auto container grid grid-cols-3 ">
        <div className="col-span-1 px-20 space-y-10 flex flex-col justify-center">
          <h1 className="text-4xl text-transparent duration-1000 bg-white animate-title cursor-default text-edge-outline font-display sm:text-6xl md:text-7xl whitespace-nowrap bg-clip-text ">
            About me
          </h1>
          <h1 className=" text-zinc-400 text-lg animate-fade-up">
            A brief introduction about myself
          </h1>
          <Button
            className="bg-white text-black hover:bg-gray-700 hover:text-white p-5 rounded-2xl w-1/2"
            onClick={() => router.push("/about")}
          >
            Learn More
          </Button>
        </div>
        <div className="col-span-2 flex justify-center items-center">
          <img src="./aboutSection.svg" className="h-[80%] " />
        </div>
      </div>
    </div>
  );
}
