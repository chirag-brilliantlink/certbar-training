import GradientButton from "@/components/common/gradientButton";
import ChooseUs from "@/section/business/ChooseUs";
import SecurityTeam from "@/section/business/SecurityTeam";
import WhySection from "@/section/business/WhySection";
import MarqueeComponent from "@/section/home/trustSlider";
import React from "react";

const page = () => {
  return (
    <div>
      <div className="bg-[black] text-white ">
        <div className="px-[100px] py-[90px]">
          <div className="flex flex-row">
            <div className="w-[60%]">
              <h1 className="font-light text-[50px]">
                Unlock{" "}
                <span className="gradient-text">Effective Cybersecurity</span>{" "}
                Professional Development
              </h1>
              <p className="text-[16px] font-normal text-gray-300 w-[80%] pt-4">
                Join Certbar for Teams to better protect your organization.
                Invest in your employees. Onboard new team members. Retain top
                talent. Baseline and benchmark your team. Remediate skill gaps.
                Prepare for certifications. Align with key industry frameworks.
                All within Certbar.
              </p>
              <div className="pt-10 flex gap-3">
                <GradientButton variant="bg-gradient">
                  Schedule a Demo
                </GradientButton>
                <GradientButton variant="border-gradient">
                  Start today
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
      <MarqueeComponent />
      <SecurityTeam />
      <WhySection />
      <ChooseUs />
    </div>
  );
};

export default page;
