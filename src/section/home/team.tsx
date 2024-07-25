import GradientButton from "@/components/common/gradientButton";
import React from "react";

const Team = () => {
  return (
    <div className="bg-[#1b1b1b] text-white">
      <div className="px-[100px] py-[90px] ">
        <div className="flex items-center pl-[80px] rounded-[15px] overflow-hidden">
          <div className="w-[40%]">
            <h1 className="gradient-text text-[50px] font-light">
              Certbar For Teams
            </h1>
            <p className="py-10 w-[70%]">
              Enhance your team’s skills with CertBar’s comprehensive
              cybersecurity training, learning activities, and management tools.
              Our offerings include hands-on Virtual Labs, Career Paths aligned
              to roles, and personalized remediation. Request a demo to discover
              how CertBar customizes our extensive training library to meet your
              team’s unique needs.
            </p>
            <GradientButton variant="bg-gradient">
              Schedule a Demo
            </GradientButton>
          </div>
          <img
            src="/images/security.jpg"
            alt="team section"
            className="w-[60%] object-cover  h-[700px] rounded-[25px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Team;
