import { Button } from "@/src/components/ui/button";
import ProjectCard from "./ProjectCard";
import Trivia from "@/public/projects/projects.png";

const projects = [
  {
    title: "10K Savings Calculator",
    desc: "Generative Trivia is a web application that I created using Gemini AI API to generate trivia questions and answers.",
    year: "2024",
    tech: "NextJS, Typescript, Gemini AI API, Tailwind CSS, Shadcn UI, Firebase",
    bg: Trivia,
  },
  {
    title: "Streamify",
    desc: "Generative Trivia is a web application that I created using Gemini AI API to generate trivia questions and answers.",
    year: "2024",
    tech: "NextJS, Typescript, Gemini AI API, Tailwind CSS, Shadcn UI, Firebase",
    bg: Trivia,
  },
  {
    title: "YC Web-Scrapper",
    desc: "Generative Trivia is a web application that I created using Gemini AI API to generate trivia questions and answers.",
    year: "2024",
    tech: "NextJS, Typescript, Gemini AI API, Tailwind CSS, Shadcn UI, Firebase",
    bg: Trivia,
  },
  {
    title: "Healthscribe",
    desc: "Generative Trivia is a web application that I created using Gemini AI API to generate trivia questions and answers.",
    year: "2024",
    tech: "NextJS, Typescript, Gemini AI API, Tailwind CSS, Shadcn UI, Firebase",
    bg: Trivia,
  },
  {
    title: "CourseEra Clone",
    desc: "Generative Trivia is a web application that I created using Gemini AI API to generate trivia questions and answers.",
    year: "2024",
    tech: "NextJS, Typescript, Gemini AI API, Tailwind CSS, Shadcn UI, Firebase",
    bg: Trivia,
  },
  {
    title: "Zerodha Clone",
    desc: "Generative Trivia is a web application that I created using Gemini AI API to generate trivia questions and answers.",
    year: "2024",
    tech: "NextJS, Typescript, Gemini AI API, Tailwind CSS, Shadcn UI, Firebase",
    bg: Trivia,
  },
];
console.log(Trivia);
export default function ProjectsDisplay() {
  return (
    <div className=" my-10">
      <div className="mt-10 flex flex-col justify-start items-center w-full pl-10 md:pl-32">
        <div className="flex justify-center items-center flex-col my-5 self-start ">
          <div className="bg-gray-100 w-28 h-1 rounded-full mb-3 self-start"></div>
          <div className="bg-gray-100 w-28 h-1 rounded-full translate-x-12"></div>
          <h1 className="text-3xl font-bold mt-3 text-white">
            Some of my projects
          </h1>
        </div>
      </div>
      <div className="h-full w-screen grid grid-cols-2">
        {/* <div className="col-span-1"> */}
        {projects.map((project, index) => (
          <div className="col-span-1 p-10" key={index}>
            <ProjectCard data={project} index={index} />
          </div>
        ))}
      </div>
      <div className="flex justify-center">
        <Button className="bg-white text-black hover:bg-gray-700 hover:text-white">
          See more
        </Button>
      </div>
    </div>
  );
}
