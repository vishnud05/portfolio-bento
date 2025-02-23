import { FaFlag } from "react-icons/fa6";
import { BsEmojiSmile } from "react-icons/bs";
import { IoStar } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";

interface ActionBoxProps {
  number: string;
  title: string;
  link: string;
  icon: React.ReactNode;
}

const ActionBox = ({ number, title, link, icon }: ActionBoxProps) => {
  return (
    <Link
      href={link}
      className="relative flex flex-col items-center justify-between px-2 py-2 bg-[#111111] rounded-2xl cursor-pointer group transition-all duration-300 hover:scale-[102%] border border-gray-800/50"
    >
      <div className="flex-1 w-full flex items-center justify-center gap-1">
        <h1 className=" group-hover:text-gray-400/90  text-8xl  text-center font-bold tracking-tighter bg-gradient-to-b from-gray-400/90 to-gray-400/20 bg-clip-text text-transparent transition-colors duration-300">
          {number}
        </h1>
        <span className="text-purple-500 text-5xl mt-1">+</span>
      </div>

      <div className="w-full flex justify-center items-center gap-2 rounded-2xl bg-shade/80 p-2 group-hover:bg-shade/90 transition-colors duration-300">
        {icon}
        <span className="text-gray-300 text-center text-sm font-light truncate">
          {title}
        </span>
        <FaArrowRight
          className="text-purple-500 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
          size={12}
        />
      </div>

      {/* Glass reflection effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </Link>
  );
};

const ActionBoxes = () => {
  const actions = [
    {
      number: "05",
      title: "Projects",
      link: "/projects",
      icon: <FaFlag className="text-purple-500" size={16} />,
    },
    {
      number: "01",
      title: "Happy Clients",
      link: "/testimonials",
      icon: <BsEmojiSmile className="text-purple-500" size={16} />,
    },
    {
      number: "01",
      title: "Years of Expertise",
      link: "/experience",
      icon: <IoStar className="text-purple-500" size={16} />,
    },
  ];

  return (
    <div className="col-span-3 col-start-3 row-start-1 row-span-2 grid grid-cols-3 gap-2">
      {actions.map((action, index) => (
        <ActionBox key={index} {...action} />
      ))}
    </div>
  );
};

export default ActionBoxes;
