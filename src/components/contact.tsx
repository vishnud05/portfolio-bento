import { FaCalendar, FaCrown } from "react-icons/fa";
import { IoMailUnread } from "react-icons/io5";

const Contact = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-2">
        <div className="flex justify-center items-center w-20 h-20 mb-8 rounded-full bg-[#1f1f1f]">
          <FaCrown className="text-accent" size={40} />
        </div>
        <h1 className="text-xl">Let's Work Together</h1>
        <p className="text-muted text-sm">Let's Make Magic Happen Together</p>
      </div>
      <div className="flex flex-col justify-center items-center gap-4 w-full ">
        <button className="bg-[#1f1f1f] flex justify-center items-center gap-3 w-full text-text py-3 rounded-lg hover:bg-[#2f2f2f] transition-all duration-300">
          <IoMailUnread size={20} className="text-accent" />
          <h1>Email Me</h1>
        </button>
        <button className="bg-[#1f1f1f] flex justify-center items-center gap-3 w-full text-text py-3 rounded-lg hover:bg-[#2f2f2f] transition-all duration-300">
          <FaCalendar size={20} className="text-accent" />
          <h1>Schedule Call</h1>
        </button>
      </div>
    </>
  );
};
export default Contact;
