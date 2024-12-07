import { BsHandbagFill } from "react-icons/bs";
import { FaGlobe } from "react-icons/fa";
import { IoCodeSlashSharp } from "react-icons/io5";

const Project = ({
  image,
  title,
  code,
  live,
}: {
  image: string;
  title: string;
  code: string;
  live: string;
}) => {
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-2 p-2 ">
        <h2 className="text-muted text-xs flex items-center gap-1">
          <BsHandbagFill size={16} className="text-accent" />
          Projects
        </h2>
        <h1 className="text-sm">{title}</h1>
      </div>
      <div className="flex-1 rounded-lg overflow-hidden group-hover:blur-[2px]">
        <img src={image} alt="" className="h-full w-full object-cover" />
      </div>
      <div className="absolute flex justify-center items-center gap-4 bg-gradient-to-t from-black to-transparent w-full h-20 bottom-0 left-1/2 -translate-x-1/2 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-500">
        <button className="bg-[#1f1f1f] flex justify-center items-center gap-3 px-8 text-text py-3 rounded-lg hover:bg-[#2f2f2f] shadow-xl transition-all duration-300">
          <FaGlobe size={20} className="text-accent" />
          <h1>View</h1>
        </button>
        <button className="bg-[#1f1f1f] flex justify-center items-center gap-3 px-8 text-text py-3 rounded-lg hover:bg-[#2f2f2f] shadow-xl transition-all duration-300">
          <IoCodeSlashSharp size={20} className="text-accent" />
          <h1>Code</h1>
        </button>
      </div>
    </>
  );
};
export default Project;
