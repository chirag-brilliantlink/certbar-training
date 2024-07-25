import GradientButton from "@/components/common/gradientButton";
import React from "react";
import { GoArrowRight, GoShieldCheck } from "react-icons/go";

const Data = [
  {
    title: "Title 1",
  },
  {
    title: "Title 2",
  },
  {
    title: "Title 3",
  },
  {
    title: "Title 4",
  },
  {
    title: "Title 5",
  },
  {
    title: "Title 6",
  },
];

const Standout = () => {
  return (
    <div className="bg-[#1b1b1b] text-white">
      <div className="px-[100px] py-[90px] flex flex-col items-center gap-6">
        <h1 className="text-[50px] font-light w-[60%] text-center">
          Stand out from the crowd and{" "}
          <span className="gradient-text">advance your career</span> with
          Certbar
        </h1>
        <div className="flex flex-wrap justify-between gap-7 w-full pb-6">
          {Data.map((data, index) => (
            <div
              key={index}
              className="border-[1px] border-gray-600 hover:border-[#00AEEF] rounded-[10px] py-2 px-4 w-[30%] flex items-center justify-between"
            >
              <div className="flex items-center gap-2">
                <GoShieldCheck size={25} />
                <h1>{data.title}</h1>
              </div>
              <GoArrowRight />
            </div>
          ))}
        </div>
        <GradientButton variant="bg-gradient">
          Start Learning For Free
        </GradientButton>
      </div>
    </div>
  );
};

export default Standout;
