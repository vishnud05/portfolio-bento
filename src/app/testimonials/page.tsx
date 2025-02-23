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
import testimonials from "@/lib/testimonials";
import Image from "next/image";
import { ReviewBubble } from "@/components/ReviewsSection";

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
            <ReviewBubble key={index} review={testimonial} />
          ))}
        </div>
      </div>
    </div>
  );
}
