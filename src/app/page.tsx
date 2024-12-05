import Contact from "@/components/contact";
import Socials from "@/components/socials";
import Workflow from "@/components/workflow";

export default function Home() {
  return (
    <main className="min-h-screen p-6 grid grid-cols-8 grid-rows-9 gap-2 bg-[#050505]">
      <div className="col-span-2 row-span-3 bg-[#141414] rounded-lg hover:scale-[102%] transition-all duration-300 shadow-xl border-2 border-gray-600/20 cursor-pointer p-2">
        Text
      </div>
      <div className="col-span-3 row-span-2 bg-[#141414] rounded-lg hover:scale-[102%] transition-all duration-300 shadow-xl border-2 border-gray-600/20 cursor-pointer p-2">
        Text
      </div>
      <div className="col-span-2 row-span-4 bg-[#141414] rounded-lg hover:scale-[102%] transition-all duration-300 shadow-xl border-2 border-gray-600/20 cursor-pointer p-2">
        Text
      </div>
      <div className="flex flex-col gap-1  col-span-1 row-span-4 bg-[#141414] rounded-lg hover:scale-[102%] transition-all duration-300 shadow-xl border-2 border-gray-600/20 cursor-pointer p-2">
        <Workflow />
      </div>
      <div className="col-span-3 row-span-4 bg-[#141414] rounded-lg hover:scale-[102%] transition-all duration-300 shadow-xl border-2 border-gray-600/20 cursor-pointer p-2">
        Text
      </div>
      <div className="col-span-2 row-span-3 bg-[#141414] rounded-lg hover:scale-[102%] transition-all duration-300 shadow-xl border-2 border-gray-600/20 cursor-pointer p-2">
        Text
      </div>
      <div className="flex flex-col gap-1  col-span-1 row-span-4 bg-[#141414] rounded-lg hover:scale-[102%] transition-all duration-300 shadow-xl border-2 border-gray-600/20 cursor-pointer p-2">
        <Socials />
      </div>
      <div className="flex flex-col justify-center items-center gap-10 col-span-2 row-span-5 bg-[#141414] rounded-lg hover:scale-[102%] transition-all duration-300 shadow-xl border-2 border-gray-600/20 cursor-pointer p-2">
        <Contact />
      </div>
      <div className="col-span-2 row-span-3 bg-[#141414] rounded-lg hover:scale-[102%] transition-all duration-300 shadow-xl border-2 border-gray-600/20 cursor-pointer p-2">
        Text
      </div>
      <div className="col-span-3 row-span-3 bg-[#141414] rounded-lg hover:scale-[102%] transition-all duration-300 shadow-xl border-2 border-gray-600/20 cursor-pointer p-2">
        Text
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
