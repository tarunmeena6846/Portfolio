import { Separator } from "@/components/ui/separator";
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
];

const tools = ["Visual Studio Code", "Git", "GitHub", "Docker", "Jira"];
export default function TechStackSection() {
  return (
    <div className="grid grid-cols-2 text-white mt-20 mx-auto w-screen p-10 gap-10">
      <div className="col-span-1 flex flex-col justify-start items-center">
        <h2 className="text-3xl mb-4 text-gray-400">Languages & Frameworks</h2>
        <Languages />
      </div>
      {/* <Separator orientation="vertical" /> */}
      <div className="col-span-1 flex flex-col justify-start items-center">
        <h2 className="text-3xl mb-4 text-gray-400">Tools</h2>
        <Tools />
      </div>
    </div>
  );
}

const Tools = () => {
  return (
    <div className="text-white">
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
    <div className="text-white">
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
