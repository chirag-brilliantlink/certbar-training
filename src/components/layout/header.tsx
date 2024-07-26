"use client";
import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { FaUsers, FaChartLine, FaDollarSign, FaCogs } from "react-icons/fa";
import GradientButton from "../common/gradientButton";

const Header = () => {
  const [isBusinessDropdownOpen, setIsBusinessDropdownOpen] = useState(false);
  const [isPricingDropdownOpen, setIsPricingDropdownOpen] = useState(false);
  const [openNestedDropdown, setOpenNestedDropdown] = useState(null);

  const businessOptions = [
    {
      logo: <FaUsers />,
      title: "Business Solution 1",
      description: "Optimize your business with solution.",
      nestedOptions: [
        {
          title: "Sub Solution 1-1",
          description: "Detail of Sub Solution 1-1.",
        },
        {
          title: "Sub Solution 1-2",
          description: "Detail of Sub Solution 1-2.",
        },
      ],
    },
    {
      logo: <FaChartLine />,
      title: "Business Solution 2",
      description: "Optimize your business with solution.",
      nestedOptions: [
        {
          title: "Sub Solution 2-1",
          description: "Detail of Sub Solution 2-1.",
        },
        {
          title: "Sub Solution 2-2",
          description: "Detail of Sub Solution 2-2.",
        },
      ],
    },
    {
      logo: <FaDollarSign />,
      title: "Business Solution 3",
      description: "Optimize your business with solution.",
      nestedOptions: [
        {
          title: "Sub Solution 3-1",
          description: "Detail of Sub Solution 3-1.",
        },
        {
          title: "Sub Solution 3-2",
          description: "Detail of Sub Solution 3-2.",
        },
      ],
    },
    {
      logo: <FaCogs />,
      title: "Business Solution 4",
      description: "Optimize your business with solution.",
      nestedOptions: [
        {
          title: "Sub Solution 4-1",
          description: "Detail of Sub Solution 4-1.",
        },
        {
          title: "Sub Solution 4-2",
          description: "Detail of Sub Solution 4-2.",
        },
      ],
    },
  ];

  const pricingOptions = [
    {
      logo: <FaDollarSign />,
      title: "Pricing Plan 1",
      description: "Check out our competitive pricing plan.",
    },
    {
      logo: <FaDollarSign />,
      title: "Pricing Plan 2",
      description: "Check out our competitive pricing plan.",
    },
    {
      logo: <FaDollarSign />,
      title: "Pricing Plan 3",
      description: "Check out our competitive pricing plan.",
    },
    {
      logo: <FaDollarSign />,
      title: "Pricing Plan 4",
      description: "Check out our competitive pricing plan.",
    },
  ];

  const handleMouseEnterBusiness = () => {
    setIsBusinessDropdownOpen(true);
  };

  const handleMouseLeaveBusiness = () => {
    setIsBusinessDropdownOpen(false);
    setOpenNestedDropdown(null); // Close nested dropdown when main dropdown is closed
  };

  const handleMouseEnterPricing = () => {
    setIsPricingDropdownOpen(true);
  };

  const handleMouseLeavePricing = () => {
    setIsPricingDropdownOpen(false);
  };

  const handleMouseEnterNested = (index: any) => {
    setOpenNestedDropdown(index);
  };

  const handleMouseLeaveNested = () => {
    setOpenNestedDropdown(null);
  };

  return (
    <div className="bg-[black] text-white border-b-[1px] border-[#054ADA]">
      <div className="px-[100px] py-[30px] flex flex-row justify-between">
        <div className="flex flex-row items-center gap-10 p-0">
          <img src="/images/group.png" alt="certbar logo" className="w-[150px]" />
          <ul className="flex items-center gap-7">
            <li
              className="flex flex-row items-center gap-1 hover:text-gray-400 cursor-pointer relative"
              onMouseEnter={handleMouseEnterPricing}
              onMouseLeave={handleMouseLeavePricing}
            >
              For Individuals <IoIosArrowDown size={10} />
              {isPricingDropdownOpen && (
                <div className="absolute left-0 top-full mt-2 bg-[#1b1b1b] border border-gray-500 text-white p-4 shadow-md rounded w-[350px]">
                  {pricingOptions.map((option, index) => (
                    <div className="flex items-center mb-2 p-2" key={index}>
                      <div className="w-10 h-10 mr-3">{option.logo}</div>
                      <div>
                        <h4 className="font-bold">{option.title}</h4>
                        <p className="text-sm">{option.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </li>
            <li
              className="flex flex-row items-center gap-1 hover:text-gray-400 cursor-pointer relative"
              onMouseEnter={handleMouseEnterBusiness}
              onMouseLeave={handleMouseLeaveBusiness}
            >
              For Business <IoIosArrowDown size={10} />
              {isBusinessDropdownOpen && (
                <div className="absolute left-0 top-full bg-[#1b1b1b] border border-gray-500 text-white p-4 shadow-md rounded-[15px] w-[350px]">
                  {businessOptions.map((option, index) => (
                    <div
                      className="flex items-center mb-2 p-3 relative hover:bg-gray-800 rounded"
                      key={index}
                      onMouseEnter={() => handleMouseEnterNested(index)}
                      onMouseLeave={handleMouseLeaveNested}
                    >
                      <div className="w-10 h-10">{option.logo}</div>
                      <div>
                        <h4 className="font-bold">{option.title}</h4>
                        <p className="text-sm">{option.description}</p>
                      </div>
                      {openNestedDropdown === index && (
                        <div className="absolute left-full top-0 mt-2 ml-6 bg-gray-700 border border-gray-500 text-white p-4 shadow-md rounded w-[250px]">
                          {option.nestedOptions.map((nestedOption, nestedIndex) => (
                            <div className="mb-2" key={nestedIndex}>
                              <h5 className="font-bold">{nestedOption.title}</h5>
                              <p className="text-sm">{nestedOption.description}</p>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </li>
          </ul>
        </div>
        <div>
          <GradientButton variant="border-gradient">Free Team Demos</GradientButton>
        </div>
      </div>
    </div>
  );
};

export default Header;
