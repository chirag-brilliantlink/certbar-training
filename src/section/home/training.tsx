import React from "react";
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
              className={`relative p-[30px] rounded-lg overflow-hidden h-[220px]`}
            >
              <div className="flex items-center">
                <div className="w-4 h-4 mr-4 rounded-full bg-gradient-to-r from-[#00AEEF] via-[#054ADA] to-[#022570]"></div>
                <h2 className="text-2xl font-semibold">{item.title}</h2>
              </div>
              <div className="mt-5">
                <p className="pl-9">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Training;
