import { CgWebsite } from "react-icons/cg";
import { FaLaptopCode } from "react-icons/fa";
import { LuFrame, LuGoal } from "react-icons/lu";
import { MdOutlineDocumentScanner } from "react-icons/md";
import { PiShootingStarFill } from "react-icons/pi";
const workProcess = [
  {
    title: "Goals & Objectives",
    icon: <LuGoal size={18} />,
  },
  {
    title: "Research",
    icon: <MdOutlineDocumentScanner size={18} />,
  },
  {
    title: "Wireframing",
    icon: <LuFrame size={18} />,
  },
  {
    title: "Prototyping",
    icon: <CgWebsite size={18} />,
  },
  {
    title: "Finalize Design",
    icon: <FaLaptopCode size={18} />,
  },
];
const Workflow = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-2 p-2 border-b-2 border-gray-600/20">
        <h2 className="text-muted text-xs flex  gap-1">
          <PiShootingStarFill size={16} className="text-accent" />
          Work Process
        </h2>
        <h1 className="text-sm">Workflow Highlights</h1>
      </div>
      <ul className="flex-1 flex flex-col justify-center items-center gap-1">
        {workProcess.map((item, index) => (
          <li
            key={index}
            className="flex flex-row justify-start py-3 px-2 text-sm items-center gap-2 bg-secondary h-10 w-full rounded-lg"
          >
            <div className="flex justify-center items-center w-7 h-7 rounded-md bg-shade text-text">
              {item.icon}
            </div>
            <h1 className="text-xs text-text">{item.title}</h1>
          </li>
        ))}
      </ul>
    </>
  );
};
export default Workflow;
