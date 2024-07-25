"use client";
import React, { useState } from "react";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import GradientButton from "@/components/common/gradientButton";

const Data = [
  {
    id: 1,
    title: "Launch Your Career",
    description:
      "Start your cybersecurity training & journey with guided Career Paths that teach the foundational concepts related to real, on-the-job responsibilities.",
  },
  {
    id: 2,
    title: "Onboard Team Members",
    description:
      "Our scalable, repeatable onboarding cybersecurity courses & programs ensure every new employee has the same foundation of knowledge and skills.",
  },
  {
    id: 3,
    title: "Earn Certifications",
    description:
      "Ace the exam with Certification Prep Paths developed by industry-leading instructors. Gain insider tips and build confidence with our practice exams.",
  },
  {
    id: 4,
    title: "Upskill and Practice",
    description:
      "Master hands-on skills and familiarize yourself with the latest vulnerabilities and threats so you can prepare for real-world attacks.",
  },
  {
    id: 5,
    title: "Retain Top Talent",
    description:
      "Create new opportunities for your most committed personnel and watch your retention rates soar.",
  },
  {
    id: 6,
    title: "Reduce Business Risk",
    description:
      "Use real-time data to discover how closely correlated employee cybersecurity training is to risk reduction and costs savings.",
  },
];

const Training = () => {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const handleCardClick = (id: number) => {
    setActiveCard(activeCard === id ? null : id);
  };

  return (
    <div className="bg-[black] text-white">
      <div className="px-[100px] pb-[90px]">
        <div className="flex items-center justify-between">
          <h1 className="text-[50px] font-light">
            Why Certbar{" "}
            <span className="gradient-text">Cybersecurity Training?</span>
          </h1>
          <GradientButton variant="border-gradient">Get Started</GradientButton>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {Data.map((item) => (
            <div
              key={item.id}
              className={`relative p-[30px] rounded-lg transition-all duration-700 ease-in-out cursor-pointer overflow-hidden h-[220px] ${
                activeCard === item.id ? "bg-opacity-100" : "bg-opacity-80"
              } ${
                activeCard === item.id
                  ? "bg-black-900 border-[1px] border-white"
                  : "border-[1px] border-[#054ADA]"
              }`}
              onClick={() => handleCardClick(item.id)}
            >
              <h2
                className={`absolute text-2xl font-semibold transition-all duration-700 ${
                  activeCard === item.id
                    ? "top-6 left-6 text-left text-2xl"
                    : "top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-full"
                }`}
              >
                {item.title}
              </h2>
              <div
                className={`absolute inset-0 p-6 transition-all duration-700 ease-in-out ${
                  activeCard === item.id
                    ? "opacity-100 top-16"
                    : "opacity-0 pointer-events-none top-full"
                }`}
              >
                <p className="mt-4">{item.description}</p>
              </div>
              <MdOutlineKeyboardDoubleArrowRight
                className={`absolute transition-all duration-700 ease-in-out ${
                  activeCard === item.id
                    ? "top-4 right-4 text-2xl rotate-90"
                    : "bottom-4 right-4 text-2xl"
                }`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Training;
