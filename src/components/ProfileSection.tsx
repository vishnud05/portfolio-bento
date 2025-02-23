import { Clock, Globe, PenTool } from "lucide-react";
import Link from "next/link";
import { FaDownload } from "react-icons/fa";
import { FaCalendar, FaCircleDot, FaRobot } from "react-icons/fa6";
import { IoLocation } from "react-icons/io5";
import { MdEmail } from "react-icons/md";

const quickInfo = [
  {
    icon: <IoLocation size={16} className="text-accent" />,
    text: "India",
  },
  {
    icon: <Globe size={16} className="text-accent" />,
    text: "English & Hindi",
  },
  {
    icon: <Clock size={16} className="text-accent" />,
    text: "IST",
  },
  {
    icon: <PenTool size={16} className="text-accent" />,
    text: "UI/UX Designer",
  },
  {
    icon: <FaRobot size={16} className="text-accent" />,
    text: "AI Engineer",
  },
  {
    icon: <MdEmail size={16} className="text-accent" />,
    text: "Product Manager",
  },
];
const ProfileSection = () => {
  return (
    <div className="flex flex-col justify-between gap-2 items-center col-span-3 col-start-3 py-3 row-span-4 row-start-3 bg-[#141414] rounded-lg hover:scale-[102%] transition-all duration-300 shadow-xl border-2 border-gray-600/20 cursor-pointer p-2">
      <div className="flex h-28 w-full rounded-lg gap-6 overflow-hidden">
        <img src="/my-avatar.png" alt="Profile Avatar" className="bg-accent " />
        <div className="flex flex-col flex-1 gap-2">
          <div className="flex justify-between w-full items-center">
            <h1 className="flex items-center gap-1 px-4 rounded-full bg-[#1f1f1f] py-4 h-8 text-sm text-muted border-[1px] border-gray-600/20">
              <FaCircleDot className="text-green-500/90" size={8} />
              Available for work
            </h1>
            <div className="flex items-center gap-2 text-sm text-text">
              <p className="hidden md:block">Resume</p>
              <Link
                href={process.env.RESUME_URL || ""}
                className="text-text p-3 rounded-lg bg-[#1f1f10]"
              >
                <FaDownload size={16} />
              </Link>
            </div>
          </div>
          <div className="">
            <h1 className="text-text text-2xl sm:text-3xl">
              Vishnu Dev Aggarwal
            </h1>
            <p className="text-text mt-2">
              I&apos;m a <span className="text-accent">Software Developer</span>
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap gap-2 bg-[#141414] border-[1px] border-gray-600/20 md:h-20 p-2 w-full rounded-lg">
        {quickInfo.map((data, index) => (
          <div
            key={index}
            className="flex items-center gap-1 px-4 rounded-full bg-[#1f1f1f] py-4 h-8 text-sm text-text border-[1px] border-gray-600/20"
          >
            {data.icon}
            {data.text}
          </div>
        ))}
      </div>
      <div className="flex justify-between items-center w-full px-4 gap-4">
        <button className="bg-[#1f1f1f] flex justify-center items-center gap-3 w-full text-text py-3 rounded-lg hover:bg-[#2f2f2f] shadow-xl transition-all duration-300">
          <FaCalendar size={20} className="text-accent" />
          <h1>Schedule a Call</h1>
        </button>
        <button className="bg-[#1f1f1f] flex justify-center items-center gap-3 w-full text-text py-3 rounded-lg hover:bg-[#2f2f2f] shadow-xl transition-all duration-300">
          <MdEmail size={20} className="text-accent" />
          <h1>Email Me</h1>
        </button>
      </div>
    </div>
  );
};

export default ProfileSection;
