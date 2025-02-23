"use client";
import { cn } from "@/lib/utils";
import { Github, Globe } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

type ProjectCardProps = {
  id: string;
  title: string;
  description: string;
  image: string;
  url: string;
  github: string;
  category: string;
};

export function ProjectCard({
  id,
  title,
  description,
  image,
  url,
  github,
  category,
  ...props
}: ProjectCardProps) {
  // console.log(image);
  const router = useRouter();

  return (
    <div
      onClick={() => {
        router.push(`/projects/${id}`);
      }}
      className="max-w-xs w-full group/card hover:scale-[102%] transition-all duration-300"
    >
      <div
        className={cn(
          "cursor-pointer overflow-hidden relative card h-96 rounded-xl shadow-xl border-2 border-[#141414] max-w-sm mx-auto flex flex-col justify-between "
        )}
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute w-full h-full top-0 left-0 transition duration-300 bg-black opacity-60"></div>
        <div className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black opacity-60"></div>
        <div className="flex flex-row items-center space-x-4 z-10"></div>
        <div className=" bg-gradient-to-t from-black via-[#141414] to-transparent p-4 rounded-lg">
          <h1 className="font-bold flex justify-between items-center text-xl md:text-2xl text-gray-400 relative z-10">
            <h1>{title}</h1>
            <div className="flex gap-2">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  window.open(github, "_blank");
                }}
                className="bg-[#1b1b1bd3] flex justify-center items-center gap-1  text-text  p-2 rounded-lg hover:bg-[#2f2f2f] shadow-xl transition-all duration-300"
              >
                <Github size={16} className="text-accent" />
                {/* <h1 className="text-sm hidden md:block">Code</h1> */}
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  window.open(url, "_blank");
                }}
                className="bg-[#1b1b1bd3] flex justify-center items-center gap-1  text-text p-2 rounded-lg hover:bg-[#2f2f2f] shadow-xl transition-all duration-300"
              >
                <Globe size={16} className="text-accent" />
                {/* <h1 className="text-sm hidden md:block ">Demo</h1> */}
              </button>
            </div>
          </h1>
          <p className="font-normal text-sm text-gray-400 relative z-10 my-4 line-clamp-2">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
