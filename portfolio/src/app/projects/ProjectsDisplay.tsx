import { Button } from "@/src/components/ui/button";
import ProjectCard from "./ProjectCard";
import Trivia from "@/public/projects/projects.png";
import Streamify from "@/public/projects/streamify.png";
import Zerodha from "@/public/projects/zerodha.png";
import Healthscribe from "@/public/projects/healthscribe.jpg";
import CourseEra from "@/public/projects/courseera.png";
import Scrapper from "@/public/projects/web_scraping.png";
import { motion } from "framer-motion";
import Hr from "../components/Hr";
import { MagneticButtons } from "../components/MagneticButtons";

const projects = [
  {
    title: "10K Savings Calculator",
    desc: "Generative Trivia is a web application that I created using Gemini AI API to generate trivia questions and answers.",
    year: "2024",
    tech: "React.js, Typescript, Tailwind CSS, Recoil, Stripe API",
    bg: Trivia,
    link: "https://github.com/tarunmeena6846/10K_Plus_Savings_challenge"
  },
  {
    title: "Streamify",
    desc: "Generative Trivia is a web application that I created using Gemini AI API to generate trivia questions and answers.",
    year: "2024",
    tech: "NextJS, Typescript, Tailwind CSS, Shadcn UI",
    bg: Streamify,
    link: "https://github.com/tarunmeena6846/streamify.git"
  },
  {
    title: "YC Web-Scrapper",
    desc: "Generative Trivia is a web application that I created using Gemini AI API to generate trivia questions and answers.",
    year: "2024",
    tech: "Node.js, Typescript, Cheerio, jQuery",
    bg: Scrapper,
    link: "https://github.com/tarunmeena6846/Webscraper"
  },
  {
    title: "Healthscribe",
    desc: "Generative Trivia is a web application that I created using Gemini AI API to generate trivia questions and answers.",
    year: "2024",
    tech: "React.js, Typescript, Tailwind CSS, AWS HealthScribe, Recoil",
    bg: Healthscribe,
    link: "https://github.com/tarunmeena6846/Healthscribe"
  },
  {
    title: "CourseEra Clone",
    desc: "Generative Trivia is a web application that I created using Gemini AI API to generate trivia questions and answers.",
    year: "2024",
    tech: "React.js, Typescript, MUI, Recoil",
    bg: CourseEra,
    link: "https://github.com/tarunmeena6846/CourseApp"
  },
  {
    title: "Zerodha Clone",
    desc: "Generative Trivia is a web application that I created using Gemini AI API to generate trivia questions and answers.",
    year: "2024",
    tech: "React.js, Typescript, MUI, Recoil",
    bg: Zerodha,
    link: "https://github.com/tarunmeena6846/Zerodha-Clone"
  },
];
// console.log(Trivia);
export default function ProjectsDisplay() {
  return (
    <div className="">
      <div className="mt-10 flex flex-col justify-start items-center w-full pl-10 md:pl-32">
        <motion.div
          className="my-5 self-start "
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            delay: 0.3,
            type: "spring",
          }}
        >
          <h1 className="text-3xl font-bold mt-3 text-white">
            Some of my projects
            <Hr />
          </h1>
        </motion.div>
      </div>
      <div className="h-full w-screen grid grid-col-1 md:grid-cols-2">
        {/* <div className="col-span-1"> */}
        {projects.map((project, index) => (
          <div className="col-span-1 p-10" key={index}>
            <ProjectCard data={project} index={index} />
          </div>
        ))}
      </div>
      {/* <div className="flex justify-center"> */}
      <motion.div
        className="flex gap-3 justify-center"
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
          delay: 0.7,
          type: "spring",
        }}
      >
        <MagneticButtons>
          <Button className="bg-white text-black hover:bg-red-700 hover:text-white lg:p-6 rounded-3xl  lg:text-lg">
            <a
              href="https://github.com/tarunmeena6846"
              target="_blank"
              rel="noopener noreferrer"
            >
              See more
            </a>
          </Button>
        </MagneticButtons>
      </motion.div>
    </div>
  );
}
