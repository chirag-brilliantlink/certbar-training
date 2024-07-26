"use client";
import GradientButton from "@/components/common/gradientButton";
import React from "react";

const Data = [
  {
    id: 1,
    image: "/images/pro1.jpg",
    title: "Defensive Security and Cyber Risk",
    description:
      "In this course, you will learn the basics of defensive security and cyber risk. You will review foundational risk management concepts such as calculating risk and strategies for dealing with risk. You will also explore the NIST CSF as a framework for understanding defensive security.",
  },
  {
    id: 2,
    image: "/images/pro1.jpg",
    title: "Defensive Security and Cyber Risk",
    description:
      "In this course, you will learn the basics of defensive security and cyber risk. You will review foundational risk management concepts such as calculating risk and strategies for dealing with risk. You will also explore the NIST CSF as a framework for understanding defensive security.",
  },
  {
    id: 3,
    image: "/images/pro1.jpg",
    title: "Defensive Security and Cyber Risk",
    description:
      "In this course, you will learn the basics of defensive security and cyber risk. You will review foundational risk management concepts such as calculating risk and strategies for dealing with risk. You will also explore the NIST CSF as a framework for understanding defensive security.",
  },
  {
    id: 4,
    image: "/images/pro1.jpg",
    title: "Defensive Security and Cyber Risk",
    description:
      "In this course, you will learn the basics of defensive security and cyber risk. You will review foundational risk management concepts such as calculating risk and strategies for dealing with risk. You will also explore the NIST CSF as a framework for understanding defensive security.",
  },
];

const truncateText = (text, wordLimit) => {
  const words = text.split(" ");
  if (words.length > wordLimit) {
    return words.slice(0, wordLimit).join(" ") + " ....";
  }
  return text;
};

const Data2 = [
  {
    id: 1,
    title: "Expertly Curated Paths",
    description:
      "Our Career Paths are intentionally designed to keep you motivated, on track, and achieving your goals.",
  },
  {
    id: 2,
    title: "On-Demand Learning",
    description:
      "Learn anytime, anywhere from industry leaders and subject matter experts.",
  },
  {
    id: 3,
    title: "Hands-On Practice",
    description:
      "Put your skills to the test in our virtual labs, challenges, and real-world simulations.",
  },
  {
    id: 4,
    title: "Community of Mentors",
    description:
      "Gain access to mentors through our supportive community of cybersecurity professionals.",
  },
  {
    id: 5,
    title: "Assess Your Skills",
    description:
      "Our baselining metrics provide detailed insight into your growth and development.",
  },
  {
    id: 6,
    title: "Earn Credly-Certified Badges",
    description:
      "Upon completing a Career Path, you’ll automatically earn an industry-recognized badge to share with your current or prospective employer.",
  },
];

const page = () => {
  return (
    <div>
      <div className="bg-[black] text-white ">
        <div className="px-[100px] py-[90px]">
          <div className="flex flex-row">
            <div className="w-[60%]">
              <h1 className="font-light text-[50px]">
                <span className="gradient-text">Career Paths</span> in
                <br />
                Cybersecurity & IT
              </h1>
              <p className="text-[16px] font-normal text-gray-300 w-[80%] pt-4">
                Shape your future in cybersecurity with our industry-aligned
                Career Paths. Through these focused, role-specific paths, you’ll
                develop the knowledge and skills to launch your career,
                transition, or land your dream job. What are you waiting for?
              </p>
              <div className="pt-10 flex gap-3">
                <GradientButton variant="bg-gradient">
                  Start for free
                </GradientButton>
              </div>
            </div>
            <div className="w-[40%]">
              <img
                src="/images/career2.png"
                alt=""
                className="w-[100%] h-full"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[black] text-white">
        <div className="px-[100px] pb-[90px] ">
          <div className="flex items-center rounded-[15px] overflow-hidden gap-7">
            <div className="w-[50%]">
              <img
                src="/images/career.png"
                alt="team section"
                className="w-[550px] object-cover rounded-[25px]"
              />
            </div>
            <div className="w-[50%]">
              <h1 className="gradient-text text-[50px] font-light">
                Learning Tailored to Your Needs
              </h1>
              <p className="py-10">
                Certbar Career Paths are comprehensive training programs
                designed to prepare you for the most in-demand roles in
                cybersecurity. Each path follows our Learn, Practice, Prove
                model and includes different activity types aligned to key
                topics within the path’s security domain.
              </p>
              <p className="pb-10 ">
                As you complete the path, your progress will be measured in real
                time using Experience Points (XP), which serve as a
                comprehensive capability score for each topic. Upon completion,
                you will be rewarded with a shareable digital badge via Credly.
              </p>
              <GradientButton variant="bg-gradient">
                Start Learning for Free
              </GradientButton>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[black] text-white">
        <div className="px-[100px] pb-[90px] ">
          <div className="flex flex-col items-center text-center pb-[50px]">
            <h1 className="text-[50px] font-light">
              Upskill at <span className="gradient-text">Any Stage</span> of
              Your Career
            </h1>
            <p className="w-[50%]">
              Explore Cybrary's Career Paths designed to take you from novice to
              ninja—and anywhere in between.
            </p>
          </div>
          <div className="flex justify-between w-[90%] m-auto">
            {Data.map((data, index) => (
              <div
                key={index}
                className="w-[24%] border-[1px] border-gray-600 bg-gray-950 rounded-lg overflow-hidden"
              >
                <img src={data.image} alt="" />
                <div className="p-3 flex flex-col gap-4">
                  <h1 className="text-[18px]">{data.title}</h1>
                  <p className="text-[14px] text-gray-400">
                    {truncateText(data.description, 20)}
                  </p>
                  <button className="border w-[100px] text-[12px] p-1 rounded-md border-[#054ADA] hover:border-[#00AEEF]">
                    View more ...
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-[black] text-white">
        <div className="px-[100px] pb-[90px]">
          <div className="flex flex-col items-center text-center justify-between gap-4">
            <h1 className="text-[50px] font-light">
              All the <span className="gradient-text">Resources</span> You Need
              to Succeed
            </h1>
            <p className="w-[40%]">
              Upgrade to Cybrary Insider Pro or Cybrary for Teams to gain access
              to our comprehensive resources and support.
            </p>
            <GradientButton variant="border-gradient">
              Upgrade For Full Access
            </GradientButton>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {Data2.map((item) => (
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
    </div>
  );
};

export default page;
