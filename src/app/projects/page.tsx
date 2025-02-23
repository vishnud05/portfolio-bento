import { ProjectCard } from "@/components/ui/card";
import client from "@/lib/contentfulClient";
import { BriefcaseBusinessIcon, FlaskConical } from "lucide-react";

const getAllProjects = async () => {
  const response = await client.getEntries();
  //   console.log(response.items[0]);

  return response.items;
};

const ProjectsPage = async () => {
  const data: any = await getAllProjects();
  return (
    <div className="min-h-screen w-full flex flex-col lg:flex-row gap-2 p-2">
      {/* Industry Projects */}
      <div className="flex-[3] bg-[#141414] rounded-lg  transition-all duration-300 shadow-xl border-2 border-gray-600/20 cursor-pointer p-2">
        <div className="flex flex-col justify-center items-center gap-2 p-2 border-b-2 border-gray-600/20">
          <h2 className="text-muted text-sm flex items-center gap-2">
            <BriefcaseBusinessIcon size={18} className="text-accent" />
            Industry Projects
          </h2>
          <h1 className="text-xs text-gray-400">
            Production Level Applciations Built To Handle Real World Scenarios
          </h1>
        </div>
        <div className=" w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-2 gap-6 place-items-center">
          {data
            .filter((project: any) => project.fields.category === "industry")
            .map((project: any, index: number) => (
              <ProjectCard
                key={index}
                id={project.sys.id}
                title={project.fields.title}
                description={project.fields.description}
                image={project.fields.image.fields.file.url}
                url={project.fields.url}
                github={project.fields.github}
                category={project.fields.category}
              />
            ))}
        </div>
      </div>

      <div className=" md:hidden w-full h-px bg-gray-400/20 my-4"></div>
      {/* Hobby Projects */}
      <div className="flex-1 bg-[#141414] rounded-lg  transition-all duration-300 shadow-xl border-2 border-gray-600/20 cursor-pointer p-2">
        <div className="flex flex-col justify-center items-center gap-2 p-2 border-b-2 border-gray-600/20">
          <h2 className="text-muted text-sm flex  gap-2">
            <FlaskConical size={18} className="text-accent" />
            Hobby Projects
          </h2>
          <h1 className="text-xs text-gray-400">
            Personal Projects Built To Learn New Technologies
          </h1>
        </div>
        <div className=" w-full grid grid-cols-1  p-2 gap-6 place-items-center">
          {data
            .filter((project: any) => project.fields.category === "hobby")
            .map((project: any, index: number) => (
              <ProjectCard
                key={index}
                id={project.sys.id}
                title={project.fields.title}
                description={project.fields.description}
                image={project.fields.image.fields.file.url}
                url={project.fields.url}
                github={project.fields.github}
                category={project.fields.category}
              />
            ))}
        </div>
      </div>
    </div>
  );
};
export default ProjectsPage;
