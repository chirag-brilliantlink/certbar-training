import GradientText from "@/components/common/gradient";
import GradientButton from "@/components/common/gradientButton";
import React from "react";

const Landing = () => {
  return (
    <div className="bg-[#1b1b1b] text-white ">
      <div className="px-[100px] py-[90px]">
        <div className="flex flex-row">
          <div className="w-[60%]">
            <h1 className="font-light text-[50px]">
              <span className="gradient-text">Professional CyberSecurity </span>
              <br />
              Training for <br /> Effective Protection
            </h1>
            <p className="text-[16px] font-normal text-gray-300 w-[80%] pt-4">
              Equip your team with the essential skills to safeguard your
              organization from cyber threats. Our training program covers
              fundamental and advanced cybersecurity practices, focusing on
              practical applications and real-world scenarios. By providing
              hands-on experience and expert instruction, we help your team
              build a solid defense against digital security risks and ensure
              robust protection for your business.
            </p>
            <div className="pt-10 flex gap-3">
              <GradientButton variant="bg-gradient">
                Certbar Business
              </GradientButton>
              <GradientButton variant="border-gradient">
                Certbar Training
              </GradientButton>
            </div>
          </div>
          <div className="w-[40%]">
            <img src="/images/landing.png" alt="" className="w-[100%] h-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
