"use client";
import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const Data = [
  {
    id: 1,
    img: "/images/learn.jpg",
    description:
      "Study core concepts and get hands-on with key skills in cybersecurity courses and labs led by industry experts.",
    title: "Learn",
  },
  {
    id: 2,
    img: "/images/practise.jpg",
    description:
      "Exercise your problem-solving and creative thinking skills with interactive labs and security-centric puzzles.",
    title: "Practice",
  },
  {
    id: 3,
    img: "/images/prove.jpg",
    description:
      "Demonstrate your mastery of key topics in assessments and practice tests.",
    title: "Prove",
  },
];

const Learn = () => {
  const [expandedId, setExpandedId] = useState(1); // Initialize with the first item's ID

  const handleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="bg-[black] text-white">
      <div className="px-[100px] py-[90px]">
        <h1 className="text-center text-[50px] font-extralight">
          Master the skills through <br />
          <span className="gradient-text">
            learning, practicing, and proving
          </span>
          <br />
          your expertise.
        </h1>
        <div className="flex mt-10 items-center">
          <div className="w-3/5">
            <img
              src={
                expandedId
                  ? Data.find((item) => item.id === expandedId).img
                  : "/images/learn.jpg"
              }
              alt="Learn"
              className="w-full h-[500px] object-cover"
            />
          </div>
          <div className="w-2/5 pl-10">
            {Data.map((item) => (
              <div key={item.id} className="mb-4 border-b-[1px]">
                <div
                  className={`cursor-pointer flex items-center justify-between text-[24px] font-light ${
                    expandedId === item.id ? "text-white" : "text-gray-300"
                  } duration-200 `}
                  onClick={() => handleExpand(item.id)}
                >
                  {item.title}
                  <span>
                    <IoIosArrowDown
                      className={`${
                        expandedId === item.id ? "rotate-180" : ""
                      } duration-200`}
                    />
                  </span>
                </div>
                {expandedId === item.id && (
                  <div
                    className={`mt-2 text-[18px] ${
                      expandedId === item.id ? "h-[100px]" : "h-0"
                    } duration-200`}
                  >
                    {item.description}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Learn;
