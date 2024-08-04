import React from "react";
import GradientButton from "../common/gradientButton";
import { FiInstagram } from "react-icons/fi";
import { FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-[black] text-white">
      <div className="px-[20px] sm:px-[40px] md:px-[80px] xl:px-[100px] py-[30px]">
        <div className="w-full flex flex-col xl:flex-row items-center pb-[50px] gap-10">
          <div className="w-full xl:w-[50%]">
            <h1 className="text-[24px] md:text-[35px] xl:text-[50px]">
              Start <span className="gradient-text">cybersecurity</span>{" "}
              training for <span className="gradient-text">free</span> today
            </h1>
            <p className="w-full xl:w-[70%] text-gray-400 pt-5">
              Join over 3 million professionals and 96% of Fortune 1000
              companies improving their cybersecurity training & capabilities
              with Cybrary.
            </p>
          </div>
          <div
            className="w-full xl:w-[50%] p-[20px] md:p-[30px] xl:p-[50px] bg-white text-black-950 rounded-[25px]"
            style={{
              boxShadow: `
                  0 4px 15px 0 rgba(0, 174, 239, 1),
                  0 4px 15px 0 rgba(5, 74, 218, 1),
                  0 4px 15px 0 rgba(2, 37, 112, 1)
                `,
            }}
          >
            <h1 className="text-[24px] pb-5">Talk With Us?</h1>
            <div className="border w-full flex items-center p-2 rounded-[15px] justify-between">
              <input
                type="text"
                placeholder="name@email.com"
                className="focus:outline-none pl-0 xl:pl-5 text-[14px] md:text-[16px] xl:text-[18px]"
              />
              <GradientButton variant="bg-gradient">Contact Us</GradientButton>
            </div>
          </div>
        </div>
        <div className="mt-[50px] pt-[50px] border-t-[1px] border-gray-400">
          <div className="flex flex-col md:flex-row w-full gap-10">
            <div className="w-[40%] flex flex-col gap-[40px] justify-between">
              <img
                src="/images/group.png"
                alt="certbar logo"
                className="w-[150px]"
              />
              <div className="flex gap-4">
                <FiInstagram size={25} />
                <FaLinkedin size={25} />
                <FaTwitter size={25} />
              </div>
            </div>
            <div className="flex flex-wrap flex-row w-[60%] gap-[30px] md:gap-[100px] xl:gap-[150px]">
              <div>
                <h1 className="text-[16px]">Individuals</h1>
                <ul className="text-gray-400 flex flex-col gap-3 pt-3 text-[14px]">
                  <li>option 1</li>
                  <li>option 2</li>
                  <li>option 3</li>
                  <li>option 4</li>
                  <li>option 5</li>
                </ul>
              </div>
              <div>
                <h1 className="text-[16px]">Business</h1>
                <ul className="text-gray-400 flex flex-col gap-3 pt-3 text-[14px]">
                  <li>option 1</li>
                  <li>option 2</li>
                  <li>option 3</li>
                  <li>option 4</li>
                  <li>option 5</li>
                </ul>
              </div>
              <div>
                <h1 className="text-[16px]">Company</h1>
                <ul className="text-gray-400 flex flex-col gap-3 pt-3 text-[14px]">
                  <li>About</li>
                  <li>Contact Us</li>
                  <li>Business</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
