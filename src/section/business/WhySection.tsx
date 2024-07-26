import GradientButton from "@/components/common/gradientButton";
import React from "react";

const WhySection = () => {
  return (
    <div className="bg-[black] text-white">
      <div className="px-[100px] py-[90px]">
        <div className="flex flex-row gap-5">
          <div className="w-[50%]">
            <h1 className="text-[50px] pb-10">
              Why <span className="gradient-text">Cybersecurity?</span>
            </h1>
            <GradientButton>Schedule a Demo</GradientButton>
          </div>
          <div className="w-[50%] text-gray-300 flex flex-col gap-4">
            <p className="">
              We're a dynamic collective of trailblazers and enthusiasts,
              dedicated to our craft and delivering nothing short of excellence.
              As a team of Scientific Performance Marketers, we navigate the
              digital cosmos with agility, forging integrated marketing
              campaigns that resonate across organic, paid, and social
              frontiers.
            </p>
            <p className="">
              Ours is a collaborative hub of strategic masterminds, tech gurus,
              narrative weavers, and design innovators, thriving in unison and
              delighting in the sparks of our collective genius.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhySection;
