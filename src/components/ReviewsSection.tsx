"use client";

import { FaMasksTheater } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

interface Review {
  id: number;
  name: string;
  role: string;
  company: string;
  avatar: string;
  message: string;
  timestamp: string;
}

const testimonials: Review[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Product Manager",
    company: "InnovateLabs",
    avatar: "/avatars/client2.jpg",
    message:
      "Working with you has been a game-changer for our platform. Your technical expertise and problem-solving skills are outstanding!",
    timestamp: "1 week ago",
  },
  {
    id: 2,
    name: "Alex Chen",
    role: "CTO",
    company: "TechFlow",
    avatar: "/avatars/client1.jpg",
    message:
      "Incredible attention to detail and a true professional. The project was delivered ahead of schedule with exceptional quality.",
    timestamp: "2 weeks ago",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Founder",
    company: "DesignCraft",
    avatar: "/avatars/client3.jpg",
    message:
      "The UI/UX improvements you made to our application have received amazing feedback from our users. Highly recommended!",
    timestamp: "3 days ago",
  },
  {
    id: 4,
    name: "Michael Park",
    role: "Lead Developer",
    company: "CodeCraft",
    avatar: "/avatars/client4.jpg",
    message:
      "Your code quality and documentation are exceptional. Made the handover process smooth and efficient.",
    timestamp: "5 days ago",
  },
];

const ReviewBubble = ({ review }: { review: Review }) => {
  return (
    <div className="flex gap-3 items-start p-4 rounded-xl transition-colors duration-300 hover:bg-[#1a1a1a]/50">
      <div className="relative size-5 rounded-full overflow-hidden bg-purple-500/20">
        <Image
          src={review.avatar}
          alt={review.name}
          fill
          className="object-cover"
        />
      </div>
      <div className="flex-1">
        <div className="flex items-center gap-2">
          <h3 className="text-gray-300 font-medium text-xs">{review.name}</h3>
          <span className="text-gray-500 text-[10px]">•</span>
          <span className="text-gray-500 text-[10px]">{review.timestamp}</span>
        </div>
        <div className="text-gray-400 text-xs mb-2">
          {review.role} at {review.company}
        </div>
        <p className="text-gray-300 text-xs leading-relaxed bg-[#1a1a1a] p-3 rounded-xl rounded-tl-none">
          {review.message}
        </p>
      </div>
    </div>
  );
};

const ReviewsSection = () => {
  return (
    <div className="h-full flex flex-col items-center px-2 bg-[#141414] rounded-lg hover:scale-[102%] transition-all duration-300 shadow-xl border-2 border-gray-600/20 overflow-hidden">
      <div className="flex flex-col  justify-center items-center gap-2 p-2 border-b-2 border-gray-600/20">
        <h2 className="text-muted text-xs flex gap-1">
          <FaMasksTheater size={16} className="text-accent" />
          Testimonials
        </h2>
        <h1 className="text-sm">Client Reviews</h1>
      </div>

      <div className="flex-1 flex flex-col w-full overflow-hidden">
        {/* Reviews List with Scroll */}
        <div className="flex-1 overflow-y-auto scrollbar-hide">
          {testimonials.map((review) => (
            <ReviewBubble key={review.id} review={review} />
          ))}
        </div>
      </div>

      {/* Action Button */}
      <Link
        href="/testimonials"
        className="flex items-center justify-center gap-2 w-full p-3 my-2 rounded-xl bg-[#1a1a1a] hover:bg-[#202020] transition-colors duration-300 group"
      >
        <span className="text-gray-300 text-xs">View All Testimonials</span>
        <FaArrowRight
          className="text-purple-500 transform group-hover:translate-x-1 transition-transform duration-300"
          size={12}
        />
      </Link>

      {/* Scrollbar Hide Styles */}
      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default ReviewsSection;
