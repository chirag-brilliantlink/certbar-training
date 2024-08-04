"use client";
import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

// Define the structure of the DropDown items
interface DropDownItem {
  id: number;
  header: string;
  description: string;
  ImageAlt: string;
  ImageForDrop: {
    data: {
      attributes: {
        url: string;
      };
    };
  };
}

interface LearnProps {
  data: {
    header: string;
    DropDown: DropDownItem[];
  };
}

const Learn: React.FC<LearnProps> = ({ data }) => {
  const { header, DropDown = [] } = data;

  const [expandedId, setExpandedId] = useState<any | null>(
    DropDown.length > 0 ? DropDown[0].id : null
  );

  const handleExpand = (id: any) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const expandedItem = DropDown.find((item: any) => item.id === expandedId);

  return (
    <div className="bg-black-950 text-white">
      <div className="px-[100px] py-[90px]">
        <h1 className="text-center text-[50px] font-normal">{header}</h1>
        {DropDown.length > 0 && (
          <div className="flex mt-10 items-center">
            <div className={`w-${expandedId ? "3/5" : "full"}`}>
              {expandedId && expandedItem && (
                <img
                  src={
                    process.env.NEXT_PUBLIC_MEDIA_URL +
                      expandedItem?.ImageForDrop.data.attributes.url ||
                    "/images/default.jpg"
                  }
                  alt={expandedId.ImageAlt}
                  className="w-full h-[500px] object-cover"
                />
              )}
            </div>
            <div className={`w-${expandedId ? "2/5" : "full"} pl-10`}>
              {DropDown.map((item) => (
                <div
                  key={item.id}
                  className="py-6 border-b-[1px] border-gray-950"
                >
                  <div
                    className={`cursor-pointer flex items-center justify-between text-[24px] font-light ${
                      expandedId === item.id ? "text-white" : "text-gray-300"
                    } duration-200`}
                    onClick={() => handleExpand(item.id)}
                  >
                    {item.header}
                    <span>
                      <IoIosArrowDown
                        className={`${
                          expandedId === item.id ? "rotate-180" : ""
                        } duration-200`}
                      />
                    </span>
                  </div>
                  {expandedId === item.id && (
                    <div
                      className={`mt-2 text-[18px] ${
                        expandedId === item.id
                          ? "h-[100px] text-gray-400"
                          : "h-0"
                      } duration-200`}
                    >
                      {item.description}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Learn;
