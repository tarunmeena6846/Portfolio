import Hr from "../components/Hr";
import { motion } from "framer-motion";
// components/JobCard.tsx
interface JobCardProps {
  year: string;
  company: string;
  role: string;
  description: string;
  technologies: string[];
}

const JobCard: React.FC<JobCardProps> = ({
  year,
  company,
  role,
  description,
  technologies,
}) => {
  return (
    <div className="grid gap-4 relative text-white">
      {/* Circle Indicator */}
      <div className="aspect-square w-5 bg-white rounded-full absolute left-0 translate-x-[-29.5px] z-10"></div>
      {/* Job Year */}
      <div className="font-medium">{year}</div>
      <div>
        {/* Company Name and Role */}
        <h3 className="font-semibold text-md ">{company}</h3>
        <h4 className="font-light text-sm mb-4">{role}</h4>
        {/* Description */}
        <p className="">{description}</p>
        {/* Technologies Used */}
        <div className="flex flex-wrap gap-2 mt-4 text-sm">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="bg-gray-300 text-black px-2 py-1 rounded-2xl"
            >
              {tech}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default function ProfessionalExperience() {
  const jobs = [
    {
      year: "Nov 2024 - Present",
      company: "Rebet Inc.",
      role: "Web Developer | Full-time",
      description:
        "Collaborated on the development of Rebet’s high-traffic sports betting platform using Next.js, Redux, and Material- UI, supporting a user base of over 400K users.",
      technologies: [
        "Next.js",
        "React.js",
        "Redux",
        "Mui",
        "Framer-motion",
      ],
    },
    {
      year: "Dec 2023 - Nov 2024",
      company: "Ma'at Love Enterprise LLC",
      role: "Fullstack Web Developer | Part-time",
      description:
        "Architected and developed a robust money-saving challenge platform using React.js for the front-end and Node.js for the back-end,enabling efficient and seamless operations in a fast-paced development environment. Implemented Agile methodologies to ensure timely and successful project delivery",
      technologies: [
        "React",
        "Node.js",
        "ExpressJs",
        "MongoDB",
        "Recoil",
        "Docker",
        "AWS",
        "TailwindCSS",
      ],
    },
    {
      year: "June 2022 - August 2023",
      company: "Netcracker Technologies Solutions Pvt. Ltd.",
      role: "Software Engineer | Full-time",
      description:
        "Developed high-performance Kafka consumers in C++ for charging data analysis, integrating AWS services to optimize data storage and management. Collaborated in an Agile team to enhance IoT tracking and resolve gRPC/Protobuf dependencies, improving system performance and compatibility.",
      technologies: ["C++", "Kafka", "Node.js", "AWS", "SQL", "Cassandra"],
    },
    {
      year: "October 2020 - June 2022",
      company: "Netcracker Technologies Solutions Pvt. Ltd.",
      role: "Associate Software Engineer | Full-time",
      description:
        "Improved code stability and reduced crashes by utilizing Valgrind to detect and resolve memory leaks. Automated regression and unit testing with shell scripting, increasing reliability and test coverage, while authoring schema change documents to ensure seamless system updates and data integrity.",
      technologies: [
        "C++",
        "Valgrind",
        "SQL",
        "Valgrind",
        "Shell Scripting",
        "Regression Testing",
      ],
    },
  ];

  return (
    <div className=" w-full my-10 pb-20 p-10 md:p-20">
      {/* Title Section */}
      <motion.div
        className="flex flex-col items-center "
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{
          delay: 0.7,
          type: "spring",
        }}
      >
        <h1 className="text-4xl text-transparent bg-white sm:text-6xl md:text-6xl bg-clip-text">
          Professional Experience
        </h1>
        <Hr myProjectSection={false} />
      </motion.div>

      {/* Job Cards */}
      <motion.div
        className="relative  after:absolute after:inset-y-2 after:w-1 after:bg-white after:left-[-4px] md:after:left-1 lg:after:left-2 xl:after:left-3 grid gap-8 gap-12 pl-16 px-8 text-white ml-10"
        // className="space-y-10 mt-10"
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{
          delay: 0.7,
          type: "spring",
        }}
      >
        {jobs.map((job, index) => (
          <JobCard
            key={index}
            year={job.year}
            company={job.company}
            role={job.role}
            description={job.description}
            technologies={job.technologies}
          />
        ))}
      </motion.div>
    </div>
  );
}
