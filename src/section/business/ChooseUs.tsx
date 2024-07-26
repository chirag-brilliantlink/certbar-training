import React from "react";
import { GoArrowRight, GoShieldCheck } from "react-icons/go";

const Data = [
  {
    id: 1,
    title: "80 Hours of Intensive Training",
  },
  {
    id: 2,
    title: "Lab Access",
  },
  {
    id: 3,
    title: "Practical Training",
  },
  {
    id: 4,
    title: "Current & Cutting Edge Content",
  },
  {
    id: 5,
    title: "Professional Trainer",
  },
  {
    id: 6,
    title: "Quality Training",
  },
];

const ChooseUs = () => {
  return (
    <div className="bg-[black] text-white">
      <div className="px-[100px] py-[90px]">
        <div className="flex flex-col items-center">
          <h1 className="text-[50px]">
            Why Choose <span className="gradient-text">Certbar?</span>
          </h1>
          <p className="text-gray-300 w-[70%] text-center">
            We're a dynamic collective of trailblazers and enthusiasts,
            dedicated to our craft and delivering nothing short of excellence.
            As a team of Scientific Performance Marketers, we navigate the
            digital cosmos with agility, forging integrated marketing campaigns
            that resonate across organic, paid, and social frontiers.
          </p>
        </div>
        <div className="flex flex-wrap justify-between gap-7 w-full py-6">
          {Data.map((data, index) => (
            <div
              key={index}
              className="border-[1px] border-gray-600 hover:border-[#00AEEF] rounded-[10px] py-2 px-4 w-[30%] flex items-center justify-between"
            >
              <div className="flex items-center gap-2 ">
                <GoShieldCheck size={25} />
                <h1>{data.title}</h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChooseUs;
