import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import GradientButton from "../common/gradientButton";

const Header = () => {
  return (
    <div className="bg-[black] text-white border-b-[1px] border-[#054ADA] ">
      <div className="px-[100px] py-[30px] flex flex-row justify-between">
        <div className="flex flex-row items-center gap-10 p-0">
          <img
            src="/images/group.png"
            alt="certbar logo"
            className="w-[150px]"
          />
          <ul className="flex items-center gap-7">
            <li className="flex flex-row items-center gap-1 hover:text-gray-400 cursor-pointer">
              For Individuals <IoIosArrowDown size={10} />
            </li>
            <li className="flex flex-row items-center gap-1 hover:text-gray-400 cursor-pointer">
              For Business <IoIosArrowDown size={10} />
            </li>
          </ul>
        </div>
        <div>
          <GradientButton variant="border-gradient">
            Free Team Demos
          </GradientButton>
        </div>
      </div>
    </div>
  );
};

export default Header;
