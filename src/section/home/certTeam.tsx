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
];

const CertTeam = () => {
  return (
    <div className="bg-[#1b1b1b] text-white">
      <div className="px-[100px] py-[90px]">
        <div className="flex items-center justify-between pb-[50px]">
          <h1 className="text-[50px] font-light">
            <span className="gradient-text">Cybersecurity</span> Courses &
            Training
          </h1>
          <GradientButton variant="border-gradient">
            View Catalogue
          </GradientButton>
        </div>
        <div className="flex gap-3">
          {Data.map((data, index) => (
            <div
              key={index}
              className="w-[22%] border-[1px] border-gray-600 bg-gray-950 rounded-lg overflow-hidden"
            >
              <img src={data.image} alt="" />
              <div className="p-3">
                <h1>{data.title}</h1>
                <p>{data.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CertTeam;
