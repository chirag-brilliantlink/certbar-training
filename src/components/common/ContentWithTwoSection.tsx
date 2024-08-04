"use client";
import React from "react";
import { GoDot } from "react-icons/go";
import { BsPlusCircleDotted } from "react-icons/bs";
import Link from "next/link";

interface TextNode {
  type: string;
  text: string;
}

interface Paragraph {
  type: string;
  children: TextNode[];
}

interface Data {
  id: number;
  header_left: string;
  description_left: Paragraph[];
  header_right: string;
  description_right: {
    type: string;
    format: string;
    children: Paragraph[];
  }[];
}

interface ContentWithTwoSectionsProps {
  data: Data;
}

const ContentWithTwoSections: React.FC<ContentWithTwoSectionsProps> = ({
  data,
}) => {
  return (
    <div className="px-[100px] py-[90px] bg-white text-black-950 flex items-center gap-7">
      <div className="w-[60%] flex flex-col gap-6">
        <h1 className="text-[50px]">{data.header_left}</h1>
        {data.description_left.map((desc, index) => (
          <p key={index}>{desc.children[0]?.text}</p>
        ))}
      </div>

      <div className="w-[40%] flex flex-col items-end gap-10">
        <h1 className="text-[24px] font-semibold">{data.header_right}</h1>
        <ul className="flex flex-col gap-4 text-right w-[65%]">
          {data.description_right[0].children.map((item, index) => (
            <li
              key={index}
              className="flex items-center gap-4 group cursor-pointer"
            >
              <BsPlusCircleDotted
                size={25}
                className="group-hover:rotate-180 transition duration-1000"
              />
              {item.children[0]?.text}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ContentWithTwoSections;
