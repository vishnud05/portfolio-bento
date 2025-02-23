import { FaMasksTheater } from "react-icons/fa6";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import {
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiAwslambda,
  SiAmazonroute53,
  SiJavascript,
  SiTypescript,
  SiGit,
  SiGithub,
  SiDocker,
} from "react-icons/si";

const skills = [
  {
    technology: "React",
    icon: <SiReact size={30} className="text-blue-500" />,
  },
  {
    technology: "Next.js",
    icon: <SiNextdotjs size={30} className="text-white" />,
  },
  {
    technology: "Node.js",
    icon: <SiNodedotjs size={30} className="text-green-500" />,
  },
  {
    technology: "Express.js",
    icon: <SiExpress size={30} className="text-gray-500" />,
  },
  {
    technology: "MongoDB",
    icon: <SiMongodb size={30} className="text-green-500" />,
  },
  {
    technology: "PostgreSQL",
    icon: <SiPostgresql size={30} className="text-blue-500" />,
  },
  {
    technology: "Prisma",
    icon: <SiPrisma size={30} className="text-blue-500" />,
  },
  {
    technology: "AWS",
    icon: <SiAwslambda size={30} className="text-orange-500" />,
  },
  {
    technology: "Azure",
    icon: <SiAmazonroute53 size={30} className="text-blue-500" />,
  },
  {
    technology: "JavaScript",
    icon: <SiJavascript size={30} className="text-yellow-500" />,
  },
  {
    technology: "TypeScript",
    icon: <SiTypescript size={30} className="text-blue-500" />,
  },
  {
    technology: "Git",
    icon: <SiGit size={30} className="text-orange-500" />,
  },
  {
    technology: "GitHub",
    icon: <SiGithub size={30} className="text-white" />,
  },
  {
    technology: "Docker",
    icon: <SiDocker size={30} className="text-blue-500" />,
  },
];

const SkillsSection = () => {
  return (
    <div className="col-span-3 row-span-3 row-start-7 col-start-3 bg-[#141414] rounded-lg hover:scale-[102%] transition-all duration-300 shadow-xl border-2 border-gray-600/20 cursor-pointer p-2 overflow-hidden">
      <div className="flex flex-col justify-center items-center gap-2 p-2 border-b-2 border-gray-600/20">
        <h2 className="text-muted text-xs flex gap-1">
          <FaMasksTheater size={16} className="text-accent" />
          My Stack
        </h2>
        <h1 className="text-sm">Technical Skills</h1>
      </div>
      <div className="flex-1 overflow-hidden">
        <InfiniteMovingCards items={skills} speed="slow" direction="left" />
        <InfiniteMovingCards items={skills} speed="slow" direction="right" />
      </div>
    </div>
  );
};

export default SkillsSection;
