import { PenBox } from "lucide-react";
import { BsGithub, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";
import { FaRocket } from "react-icons/fa";

const socials = [
  {
    title: "Github",
    icon: <BsGithub size={18} />,
    href: "https://github.com/vishnud05",
  },
  {
    title: "LinkedIn",
    icon: <BsLinkedin size={18} />,
    href: "https://www.linkedin.com/in/vishnu-agg/",
  },
  {
    title: "X / Twitter",
    icon: <BsTwitter size={18} />,
    href: "https://twitter.com/vishnud05",
  },
  {
    title: "Instagram",
    icon: <BsInstagram size={18} />,
    href: "https://www.instagram.com/vishnudev05/",
  },
  {
    title: "Blogs",
    icon: <PenBox size={18} />,
    href: "https://blogs.vishnudevaggarwal.engineer",
  },
];

const Socials = () => {
  return (
    <div className="flex-1 bg-[#141414] rounded-lg hover:scale-[102%] transition-all duration-300 shadow-xl border-2 border-gray-600/20 cursor-pointer p-2">
      <div className="flex flex-col justify-center items-center gap-2 p-2 border-b-2 border-gray-600/20">
        <h2 className="text-muted text-xs flex  gap-1">
          <FaRocket size={14} className="text-accent" />
          Socials
        </h2>
        <h1 className="text-sm">Online Presence</h1>
      </div>
      <ul className="flex-1 flex flex-col justify-around items-center gap-1 ">
        {socials.map((item, index) => (
          <a
            href={item.href}
            target="_blank"
            key={index}
            className="flex flex-row justify-start py-3 px-2 text-sm items-center gap-2 bg-secondary h-10 w-full rounded-lg hover:bg-[#1f1f1f] transition-all duration-300"
          >
            <div className="flex justify-center items-center w-7 h-7 rounded-md bg-shade text-text">
              {item.icon}
            </div>
            <h1 className="text-xs text-text text-center">{item.title}</h1>
          </a>
        ))}
      </ul>
    </div>
  );
};
export default Socials;
