import { Separator } from "@/src/components/ui/separator";
import { motion } from "framer-motion";
const languagesFrameworks = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "C++",
  "Next.js",
  "Tailwind CSS",
  "Node.js",
  "Express.js",
  "SQL",
  "MongoDB",
  "Recoil",
  "AWS",
  "Kafka",
  "Protobuf",
  "Shell Script",
];

const tools = [
  "Visual Studio Code",
  "Git",
  "GitHub",
  "Docker",
  "Jira",
  "Valgrind",
];
export default function TechStackSection() {
  return (
    <div
      className="grid grid-cols-1 md:grid-cols-2 text-white mt-20 mx-auto w-screen p-5 md:p-10 gap-10 "
    // ref={skill}
    >
      <motion.div
        className="col-span-1 flex flex-col justify-start items-center"
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{
          delay: 0.7,
          type: "spring",
        }}
      >
        <h2 className="ml-10 text-3xl mb-4 flex text-center">Languages & Frameworks</h2>
        <Languages />
      </motion.div>
      {/* <Separator orientation="vertical" /> */}
      <motion.div
        className="col-span-1 flex flex-col justify-start items-center"
        initial={{ x: 200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{
          delay: 0.7,
          type: "spring",
        }}
      >
        <h2 className="text-3xl mb-4 ">Tools</h2>
        <Tools />
      </motion.div>
    </div>
  );
}

const Tools = () => {
  return (
    <div className="text-gray-400">
      <div className="flex flex-wrap  justify-center">
        {tools.map((tool) => (
          <div className="flex flex-row space-x-4">
            <p className="text-3xl ml-4">{tool}</p>
            <Separator orientation="vertical" />
          </div>
        ))}
      </div>
    </div>
  );
};
const Languages = () => {
  return (
    <div className="text-gray-400">
      <div className="flex flex-wrap  justify-center">
        {languagesFrameworks.map((language) => (
          <div className="flex flex-row space-x-4">
            <p className="text-3xl ml-4">{language}</p>
            <Separator orientation="vertical" />
          </div>
        ))}
      </div>
    </div>
  );
};
