"use client";

import React, { useEffect } from "react";
import {
  Circle,
  LucideIcon,
  LucideProps,
  Minus,
  Square,
  User,
  X,
} from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  message: string;
  avatar: React.ReactNode;
  timestamp: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Chen",
    role: "Lead Designer",
    company: "DesignCraft",
    message:
      "This platform has completely transformed how we handle our design workflows. The intuitive interface and powerful features have made our team significantly more productive.",
    avatar: <User className="w-6 h-6" />,
    timestamp: "2 hours ago",
  },
  {
    id: 2,
    name: "James Wilson",
    role: "CTO",
    company: "TechFlow",
    message:
      "I've used many similar tools before, but none have matched the level of sophistication and ease of use that this solution provides. It's become an essential part of our tech stack.",
    avatar: <User className="w-6 h-6" />,
    timestamp: "5 hours ago",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Product Manager",
    company: "InnovateLabs",
    message:
      "The attention to detail in every feature is remarkable. Our team's collaboration has improved dramatically since we started using this platform.",
    avatar: <User className="w-6 h-6" />,
    timestamp: "1 day ago",
  },
  {
    id: 4,
    name: "Michael Chang",
    role: "Senior Developer",
    company: "CodeCraft",
    message:
      "As a developer, I appreciate the robust architecture and clean implementation. It's rare to find a solution that's both powerful and maintainable.",
    avatar: <User className="w-6 h-6" />,
    timestamp: "2 days ago",
  },
  {
    id: 5,
    name: "Lisa Thompson",
    role: "UX Researcher",
    company: "UserFirst",
    message:
      "The user-centric approach is evident in every interaction. It's been a game-changer for our research and design process.",
    avatar: <User className="w-6 h-6" />,
    timestamp: "3 days ago",
  },
];

export default function TestimonialPage() {
  useEffect(() => {
    const testimonialElements = document.querySelectorAll(".testimonial");
    testimonialElements.forEach((element, index) => {
      setTimeout(() => {
        element.classList.add("show");
      }, index * 200);
    });
  }, []);

  return (
    <div className="min-h-screen  p-4 sm:p-8 flex items-center justify-center">
      <div className="absolute inset-0 bg-gradient-to-t from-accent/30 via-accent-20 to-transparent backdrop-blur-xl"></div>
      <div className="w-full max-w-[1024px] z-10 bg-[#141414c4] rounded-xl shadow-2xl  overflow-hidden border border-[#1f1f1f]">
        {/* Window Toolbar */}
        <div className="bg-[#101010c4] px-4 py-3 flex items-center border-b border-accent/40">
          <div className="flex space-x-2">
            <Link
              href={"/"}
              className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600 transition-colors"
            >
              <X className="w-3 h-3 opacity-0 hover:opacity-100 transition-opacity" />
            </Link>
            <Link
              href={"/"}
              className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-600 transition-colors"
            >
              <Minus className="w-3 h-3 opacity-0 hover:opacity-100 transition-opacity" />
            </Link>
            <button className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-600 transition-colors">
              <Square className="w-3 h-3 opacity-0 hover:opacity-100 transition-opacity" />
            </button>
          </div>
          <div className="flex-1 text-center">
            <h1 className="text-gray-400  font-medium">Client Testimonials</h1>
          </div>
        </div>

        {/* Testimonials Container */}
        <div className=" p-6 h-[650px] overflow-y-auto scroll-smooth">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={cn(
                "testimonial  transition-all duration-500 ease-out transform translate-y-4 mb-6",
                index % 2 === 0 ? "flex justify-start" : "flex justify-end"
              )}
            >
              <div
                className={cn(
                  "flex max-w-[80%] gap-4",
                  index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                )}
              >
                <div className="flex-shrink-0">{testimonial.avatar}</div>
                <div
                  className={cn(
                    "bg-black rounded-lg p-4 shadow-lg hover:shadow-xl transition-shadow",
                    index % 2 === 0 ? "rounded-tl-none" : "rounded-tr-none"
                  )}
                >
                  <div className="flex items-baseline justify-between mb-2">
                    <div>
                      <h3 className="text-text font-semibold">
                        {testimonial.name}
                      </h3>
                      <p className="text-gray-400 text-sm">
                        {testimonial.role} at {testimonial.company}
                      </p>
                    </div>
                    <span className="text-xs text-gray-500">
                      {testimonial.timestamp}
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm">{testimonial.message}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
