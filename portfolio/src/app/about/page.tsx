import { Button } from "@/components/ui/button";

import { SkillSection } from "./SkillsSection";
import TechStackSection from "./TechStackSection";
import ProfessionalExperiance from "./ProfessionalExperiance";
export default function AboutPage() {
  return (
    <>
      <div className="flex flex-col items-center justify-center w-screen ">
        <div className="mx-auto container grid grid-cols-2 ">
          <div className=" px-20 space-y-10 flex flex-col justify-center">
            <h1 className="text-4xl text-transparent duration-1000 bg-white animate-title cursor-default text-edge-outline font-display sm:text-6xl md:text-7xl whitespace-nowrap bg-clip-text ">
              About Me
            </h1>
            <p className="text-zinc-400 text-lg">
              Hi! I'm Tarun Meena, a{" "}
              <span className="text-xl text-white">full-stack developer </span>
              passionate about creating efficient, scalable web applications
              using the latest technologies. Originating from Alwar,
              Rajasthan,India, I am a 2020 graduate from
              <span className="text-xl text-white">
                {" "}
                Indian Institue of Technology, Roorkee
              </span>{" "}
              specialised in{" "}
              <span className="text-xl text-white">
                {" "}
                Computer Science and Engineering
              </span>
              .
            </p>
            <Button className="bg-white text-black hover:bg-gray-700 hover:text-white p-5 rounded-2xl w-1/2">
              Scroll Down
            </Button>
          </div>
          <div className=" flex justify-center items-center">
            <img
              src="/aboutSection.svg"
              className="h-[80%]"
              alt="About Illustration"
            />
          </div>
        </div>
      </div>
      <SkillSection />
      <TechStackSection />
      <ProfessionalExperiance />
    </>
  );
}
