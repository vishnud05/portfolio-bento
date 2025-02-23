import ActionBoxes from "@/components/ActionBoxes";
import FooterSection from "@/components/FooterSection";
import ProfileSection from "@/components/ProfileSection";
import Project from "@/components/Project";
import ReviewsSection from "@/components/ReviewsSection";
import SkillsSection from "@/components/SkillsSection";
import Socials from "@/components/Socials";
import Workflow from "@/components/Workflow";
import client from "@/lib/contentfulClient";
import { ArrowRight, PenBox } from "lucide-react";

const blogs = [
  {
    text: "Deploying Frontend Applications vs Backend Applications",
  },
  {
    text: "Virtual Machines vs Containers",
  },
  {
    text: "Understanding RESTful APIs",
  },
  {
    text: "Intro to GraphQL",
  },
  {
    text: "Building Responsive Web Apps",
  },
  {
    text: "Exploring Serverless Architecture",
  },
  {
    text: "Best Practices for Code Review",
  },
];

const getTopProjects = async () => {
  const response = await client.getEntries({
    content_type: "projects",
    "fields.top": true,
    limit: 3,
  });
  return response.items;
};

export default async function Home() {
  const projects: any = await getTopProjects();

  return (
    <main className="flex flex-col lg:h-screen p-2 sm:p-6 lg:grid lg:grid-cols-8 lg:grid-rows-9 gap-2 bg-[#050505]">
      <ProfileSection />
      <div className="flex flex-col text-text group relative col-span-2 row-span-3 row-start-1 col-start-1 bg-[#141414] rounded-lg hover:scale-[102%] transition-all duration-300 shadow-xl border-2 border-gray-600/20 cursor-pointer p-2">
        <Project
          image={projects[0].fields.image.fields.file.url}
          title={projects[0].fields.title}
          code={projects[0].fields.github}
          live={projects[0].fields.url}
        />
      </div>

      <div className="flex flex-col text-text group relative col-span-2 row-span-3 col-start-1 bg-[#141414] rounded-lg hover:scale-[102%] transition-all duration-300 shadow-xl border-2 border-gray-600/20 cursor-pointer p-2">
        <Project
          image={projects[1].fields.image.fields.file.url}
          title={projects[1].fields.title}
          code={projects[1].fields.github}
          live={projects[1].fields.url}
        />
      </div>

      <div className="flex flex-col text-text group relative col-span-2 col-start-1 row-span-3 bg-[#141414] rounded-lg hover:scale-[102%] transition-all duration-300 shadow-xl border-2 border-gray-600/20 cursor-pointer p-2">
        <Project
          image={projects[2].fields.image.fields.file.url}
          title={projects[2].fields.title}
          code={projects[2].fields.github}
          live={projects[2].fields.url}
        />
      </div>

      <ActionBoxes />

      <div className="col-span-2 col-start-6 row-span-9 row-start-1 flex flex-col">
        <ReviewsSection />
      </div>

      <div className="hidden lg:block gap-1 col-span-1 col-start-8 row-start-1 row-span-4 ">
        {/* TODO : Replace Blogs section */}
        <div className="flex-1 bg-[#141414] rounded-lg hover:scale-[102%] transition-all duration-300 shadow-xl border-2 border-gray-600/20 cursor-pointer p-2">
          <div className="flex flex-col justify-center items-center gap-2 p-2 border-b-2 border-gray-600/20">
            <h2 className="text-muted text-xs flex  gap-1">
              <PenBox size={16} className="text-accent" />
              Blogs
            </h2>
            <h1 className="text-sm">Recent Blogs</h1>
          </div>
          <ul className="flex-1 flex flex-col justify-start items-center gap-1 overflow-hidden">
            {blogs.map((item, index) => (
              <li
                key={index}
                className="flex flex-row justify-start py-2 px-2 text-sm items-center gap-1 bg-secondary h-10 w-full rounded-lg"
              >
                <div>
                  <ArrowRight size={16} className="text-accent" />
                </div>
                <h1 className="text-xs text-text line-clamp-1 underline">
                  {item.text}
                </h1>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="hidden lg:block gap-1 col-span-1 row-span-4 row-start-6 col-start-8 ">
        <Socials />
      </div>

      <SkillsSection />

      <div className="w-full flex lg:hidden justify-evenly gap-2">
        <Workflow />
        <Socials />
      </div>

      <FooterSection />
    </main>
  );
}
