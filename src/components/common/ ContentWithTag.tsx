"use client";
import React from "react";

interface Tag {
  id: number;
  ValueName: string;
}

interface ContentWithTagsSectionData {
  header: string;
  description: string;
  Tags: Tag[];
}

interface ContentWithTagsSectionProps {
  data: ContentWithTagsSectionData;
}

const ContentWithTagsSection: React.FC<ContentWithTagsSectionProps> = ({
  data,
}) => {
  return (
    <div className="px-[20px] sm:px-[40px] md:px-[80px] xl:px-[100px] pt-[90px] bg-black-950 text-white">
      <div className="flex flex-col py-[90px] text-center items-center gap-6">
        <h1 className="text-[24px] md:text-[35px] xl:text-[50px] w-[70%]">
          {data.header}{" "}
          <span className="gradient-text">
            {data.header.includes("cyber security specialist") ? "" : ""}
          </span>
        </h1>
        <p className="w-[80%] text-gray-300 text-[14px] md:text-[16px]">
          {data.description}
        </p>
        <ul className="flex w-full xl:w-[60%] flex-wrap justify-center gap-5">
          {data.Tags.map((tag) => (
            <li
              key={tag.id}
              className="border border-[#054ADA] hover:bg-[#054ADA] duration-500 py-2 px-4 rounded-3xl"
            >
              {tag.ValueName}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ContentWithTagsSection;
