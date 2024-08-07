import React from "react";
import { GoDot } from "react-icons/go";

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
  header: string;
  description: Paragraph[];
}

interface ContentWithOneSectionProps {
  data: Data;
}

const ContentWithOneSection: React.FC<ContentWithOneSectionProps> = ({
  data,
}) => {
  const renderContent = () => {
    return data?.description.map((item, index) => {
      const text = item.children[0]?.text || "";
      const [paragraphText, listText] = text.split("\n\n");

      return (
        <React.Fragment key={index}>
          {paragraphText && (
            <p className="text-gray-300 text-[14px] md:text-[16px] xl:text-[18px]">
              {paragraphText}
            </p>
          )}
          {listText && (
            <ul className="flex flex-col items-start gap-5">
              <li className="flex items-start text-start gap-2">
                <GoDot size={23} />
                {listText}
              </li>
            </ul>
          )}
        </React.Fragment>
      );
    });
  };

  return (
    <div className="px-[20px] sm:px-[40px] md:px-[80px] xl:px-[100px] pt-[90px] bg-black-950 text-white">
      <div className="flex flex-col gap-5">
        <h1 className="text-[24px] md:text-[35px] xl:text-[50px]">
          {data?.header}
        </h1>
        {renderContent()}
      </div>
    </div>
  );
};

export default ContentWithOneSection;
