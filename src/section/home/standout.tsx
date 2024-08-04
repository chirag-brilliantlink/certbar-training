import GradientButton from "@/components/common/gradientButton";
import React from "react";
import { GoArrowRight, GoShieldCheck } from "react-icons/go";

const Data = [
  {
    title: "Career Path",
  },
  {
    title: "Ethical Hacking",
  },
  {
    title: "Offensive Security",
  },
  {
    title: "Defensive Security",
  },
  {
    title: "Business",
  },
];

const Standout = () => {
  return (
    <div className="bg-[black] text-white">
      <div className="px-[100px] py-[90px] flex flex-col items-center gap-6">
        <h1 className="text-[50px] font-light w-[60%] text-center">
          Stand out from the crowd and{" "}
          <span className="gradient-text">advance your career</span> with
          Certbar
        </h1>
        <div className="flex flex-wrap items-center text-center justify-center gap-7 w-full pb-6">
          {Data.map((data, index) => (
            <div
              key={index}
              className="border-[1px] border-gray-100 hover:border-[#00AEEF] rounded-3xl py-3 px-4 w-[30%] flex items-center justify-center text-center"
            >
              <div className="flex items-center justify-center text-center gap-2">
                <GoShieldCheck size={25} />
                <h1>{data.title}</h1>
              </div>
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
