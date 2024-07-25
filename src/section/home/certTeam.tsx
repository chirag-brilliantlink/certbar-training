"use client";
import GradientButton from "@/components/common/gradientButton";
import React, { useState } from "react";

// Helper function to truncate text to a specified number of words
const truncateText = (text, wordLimit) => {
  const words = text.split(" ");
  if (words.length > wordLimit) {
    return words.slice(0, wordLimit).join(" ") + " ....";
  }
  return text;
};

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

const Profile = [
  {
    id: 1,
    image: "/images/profile.jpg",
    name: "Andrew Tate",
    title: "CEO",
    description:
      "Andrew is Certbar’s Co-Founder & CEO, excels in Client Relations, Business Development, and IT leadership. With 5+ years’ experience, he’s a financial services expert, ISO 27001 Auditor, and dynamic presenter in cybersecurity.",
  },
  {
    id: 2,
    image: "/images/profile.jpg",
    name: "Jane Doe",
    title: "CTO",
    description:
      "Jane is the Chief Technology Officer at Certbar, with over 10 years of experience in cybersecurity and IT infrastructure. She is a certified ethical hacker and has led numerous successful security projects.",
  },
  {
    id: 3,
    image: "/images/profile.jpg",
    name: "John Smith",
    title: "Lead Security Analyst",
    description:
      "John is Certbar's Lead Security Analyst, specializing in threat analysis and incident response. With a background in computer science and 8 years of industry experience, John ensures the highest security standards.",
  },
  {
    id: 4,
    image: "/images/profile.jpg",
    name: "Emily Johnson",
    title: "Security Consultant",
    description:
      "Emily is a Security Consultant at Certbar, known for her expertise in risk management and compliance. She holds multiple certifications including CISSP and CISM and has a strong background in financial services.",
  },
];

const CertTeam = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProfile, setSelectedProfile] = useState(null);

  const handleCardClick = (profile: any) => {
    setSelectedProfile(profile);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProfile(null);
  };

  const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return (
      <div className="fixed inset-0 bg-black-900 bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-black-950 p-6 rounded-md  relative w-[70%]">
          <button
            onClick={onClose}
            className="absolute top-2 right-2 text-black text-xl font-bold"
          >
            &times;
          </button>
          {children}
        </div>
      </div>
    );
  };

  return (
    <div className="bg-[black] text-white">
      <div className="px-[100px] py-[150px]">
        <div className="flex items-center justify-between pb-[50px]">
          <h1 className="text-[30px] font-light">
            <span className="gradient-text">Cybersecurity</span> Courses &
            Training
          </h1>
          <GradientButton variant="border-gradient">
            View Catalogue
          </GradientButton>
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
        <div className="flex items-center justify-between py-[50px]">
          <h1 className="text-[30px] font-light">
            Our Skilled{" "}
            <span className="gradient-text">CyberSecurity Team</span>
          </h1>
          <GradientButton variant="border-gradient">View Team</GradientButton>
        </div>
        <div className="flex justify-between w-[90%] m-auto">
          {Profile.map((data, index) => (
            <div
              key={index}
              className="w-[24%] border-[1px] border-gray-600 bg-gray-950 rounded-lg overflow-hidden cursor-pointer"
              onClick={() => handleCardClick(data)}
            >
              <img src={data.image} alt="" className="h-[250px] object-cover" />
              <div className="p-3 flex flex-col gap-4">
                <h1 className="text-[20px]">{data.name}</h1>
                <h2 className="text-[14px] text-gray-400 font-light">
                  {data.title}
                </h2>
              </div>
            </div>
          ))}
        </div>
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          {selectedProfile && (
            <div className="flex items-center gap-7">
              <img
                src={selectedProfile.image}
                alt=""
                className="w-[250px] h-[350px] object-cover"
              />
              <div className="flex flex-col gap-6">
                <h1 className="text-[20px] font-bold">
                  {selectedProfile.name}
                </h1>
                <h2 className="text-[18px] text-gray-700">
                  {selectedProfile.title}
                </h2>
                <p className="text-[16px] text-gray-600">
                  {selectedProfile.description}
                </p>
              </div>
            </div>
          )}
        </Modal>
      </div>
    </div>
  );
};

export default CertTeam;
