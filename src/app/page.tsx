import Contact from "@/components/contact";
import Project from "@/components/project";
import Socials from "@/components/socials";
import Workflow from "@/components/workflow";
import { BsInstagram } from "react-icons/bs";
import { FaDownload, FaGlobe } from "react-icons/fa";
import { FaCircleDot, FaMasksTheater, FaRegCircleDot } from "react-icons/fa6";
import { IoCodeSlashSharp, IoLocation } from "react-icons/io5";
import { MdEmail } from "react-icons/md";

export default function Home() {
  return (
    <main className="h-screen p-6 grid grid-cols-8 grid-rows-9 gap-2 bg-[#050505]">
      <div className="flex flex-col group relative col-span-2 row-span-3 bg-[#141414] rounded-lg hover:scale-[102%] transition-all duration-300 shadow-xl border-2 border-gray-600/20 cursor-pointer p-2">
        <Project image="/Project-1.png" title="ATLAS" code="/" live="/" />
      </div>
      <div className="col-span-3 row-span-2 bg-[#141414] rounded-lg hover:scale-[102%] transition-all duration-300 shadow-xl border-2 border-gray-600/20 cursor-pointer p-2">
        Text
      </div>
      <div className="col-span-2 row-span-4 bg-[#141414] rounded-lg hover:scale-[102%] transition-all duration-300 shadow-xl border-2 border-gray-600/20 cursor-pointer p-2">
        <div className="flex flex-col justify-center items-center gap-2 p-2 border-b-2 border-gray-600/20">
          <h2 className="text-muted text-xs flex  gap-1">
            <FaMasksTheater size={16} className="text-accent" />
            Testimonials
          </h2>
          <h1 className="text-sm">Reviews Showcase</h1>
        </div>
      </div>
      <div className="flex flex-col gap-1 col-span-1 row-span-4 bg-[#141414] rounded-lg hover:scale-[102%] transition-all duration-300 shadow-xl border-2 border-gray-600/20 cursor-pointer p-2">
        <Workflow />
      </div>
      <div className="flex flex-col justify-between items-center col-span-3 py-3  row-span-4 bg-[#141414] rounded-lg hover:scale-[102%] transition-all duration-300 shadow-xl border-2 border-gray-600/20 cursor-pointer p-2">
        <div className="flex h-28 w-full rounded-lg gap-6 overflow-hidden">
          <img src="/my-avatar.png" alt="" className="bg-accent" />
          <div className="flex flex-col flex-1 gap-2">
            <div className="flex justify-between w-full items-center">
              <h1 className="flex items-center gap-1 px-4 rounded-full bg-[#1f1f1f] py-4 h-8 text-sm text-muted border-[1px] border-gray-600/20">
                <FaCircleDot className="text-green-500/90" size={8} />
                Available for work
              </h1>
              <div className="flex items-center gap-2 text-sm text-text">
                Resume
                <button className="text-text p-3 rounded-lg bg-[#1f1f10]">
                  <FaDownload size={16} />
                </button>
              </div>
            </div>
            <div className="">
              <h1 className="text-text text-3xl">Vishnu Dev Aggarwal</h1>
              <p className=" text-text mt-2">
                I'm a <span className="text-accent"> Software Developer</span>
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap gap-2 bg-[#141414] border-[1px] border-gray-600/20 h-20 p-2 w-full rounded-lg">
          <div className="flex items-center gap-1 px-4 rounded-full bg-[#1f1f1f] py-4 h-8 text-sm text-text border-[1px] border-gray-600/20">
            <IoLocation size={16} className="text-accent" />
            India
          </div>
          <div className="flex items-center gap-1 px-4 rounded-full bg-[#1f1f1f] py-4 h-8 text-sm text-text border-[1px] border-gray-600/20">
            <IoLocation size={16} className="text-accent" />
            English & Hindi
          </div>
          <div className="flex items-center gap-1 px-4 rounded-full bg-[#1f1f1f] py-4 h-8 text-sm text-text border-[1px] border-gray-600/20">
            <IoLocation size={16} className="text-accent" />
            India
          </div>
          <div className="flex items-center gap-1 px-4 rounded-full bg-[#1f1f1f] py-4 h-8 text-sm text-text border-[1px] border-gray-600/20">
            <IoLocation size={16} className="text-accent" />
            India
          </div>
        </div>
        <div className="flex justify-between items-center w-full px-4 gap-4">
          <button className="bg-[#1f1f1f] flex justify-center items-center gap-3 w-full text-text py-3 rounded-lg hover:bg-[#2f2f2f] shadow-xl transition-all duration-300">
            <BsInstagram size={20} className="text-accent" />
            <h1>DM on Instagram</h1>
          </button>
          <button className="bg-[#1f1f1f] flex justify-center items-center gap-3 w-full text-text py-3 rounded-lg hover:bg-[#2f2f2f] shadow-xl transition-all duration-300">
            <MdEmail size={20} className="text-accent" />
            <h1>Email Me</h1>
          </button>
        </div>
      </div>
      <div className="flex flex-col group relative col-span-2 row-span-3 bg-[#141414] rounded-lg hover:scale-[102%] transition-all duration-300 shadow-xl border-2 border-gray-600/20 cursor-pointer p-2">
        <Project image="/Project-3.png" title="Pixorama" code="/" live="/" />
      </div>
      <div className="flex flex-col gap-1  col-span-1 row-span-4 bg-[#141414] rounded-lg hover:scale-[102%] transition-all duration-300 shadow-xl border-2 border-gray-600/20 cursor-pointer p-2">
        <Socials />
      </div>
      <div className="flex flex-col justify-center items-center gap-10 col-span-2 row-span-5 bg-[#141414] rounded-lg hover:scale-[102%] transition-all duration-300 shadow-xl border-2 border-gray-600/20 cursor-pointer p-2">
        <Contact />
      </div>
      <div className="flex flex-col group relative col-span-2 row-span-3 bg-[#141414] rounded-lg hover:scale-[102%] transition-all duration-300 shadow-xl border-2 border-gray-600/20 cursor-pointer p-2">
        <Project image="/Project-2.png" title="CocktailsDB" code="/" live="/" />
      </div>
      <div className="col-span-3 row-span-3 bg-[#141414] rounded-lg hover:scale-[102%] transition-all duration-300 shadow-xl border-2 border-gray-600/20 cursor-pointer p-2">
        <div className="flex flex-col justify-center items-center gap-2 p-2 border-b-2 border-gray-600/20">
          <h2 className="text-muted text-xs flex  gap-1">
            <FaMasksTheater size={16} className="text-accent" />
            My Stack
          </h2>
          <h1 className="text-sm">Technical Skills</h1>
        </div>
      </div>
      <div className="col-span-1 row-span-1 bg-[#141414] rounded-lg hover:scale-[102%] transition-all duration-300 shadow-xl border-2 border-gray-600/20 cursor-pointer p-2">
        <div className="text-text text-xs text-center h-full mt-2 mx-1">
          Made with ❤️ by{" "}
          <a
            href="https://vishnudevaggarwal.engineer"
            className="text-accent/90 underline hover:text-accent"
          >
            Vishnu Dev Aggarwal
          </a>{" "}
          using Next.js
        </div>
      </div>
    </main>
  );
}
