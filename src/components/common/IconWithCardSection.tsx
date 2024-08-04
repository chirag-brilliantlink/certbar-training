import React from "react";
import GradientButton from "@/components/common/gradientButton";

// Define types directly within the file
interface HomeCardSectionItem {
  id: number;
  header: string;
  description: string | null;
}

interface CardButton {
  position: boolean;
  Variant: "bg-gradient" | "border-gradient";
  ValueName: string;
}

interface TrainingProps {
  data: {
    header: string;
    description: string;
    HomeCardSection: HomeCardSectionItem[];
    CardButton?: CardButton;
  };
}

const Training: React.FC<TrainingProps> = ({ data }) => {
  return (
    <div className="bg-black-950 text-[white]">
      <div className="px-[100px] pb-[90px] w-full">
        <div className="flex flex-col items-center">
          <div
            className={`flex ${
              data.description
                ? "flex-col items-center justify-center gap-4"
                : "justify-between items-center"
            } w-full`}
          >
            {data.header && (
              <h1 className="text-[50px] font-light text-center">
                {data.header}
              </h1>
            )}
            {data.description && (
              <p className="text-[16px] text-gray-300 w-[60%] text-center">
                {data.description}
              </p>
            )}

            {data.CardButton?.position === false && (
              <GradientButton variant={data.CardButton?.Variant}>
                {data.CardButton?.ValueName}
              </GradientButton>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 w-full">
            {data.CardButton?.position === false &&
              data.HomeCardSection.map((item) => (
                <div
                  key={item.id}
                  className="relative p-[30px] rounded-lg overflow-hidden h-[220px]"
                >
                  <div className="flex items-center">
                    <div className="w-4 h-4 mr-4 rounded-full bg-gradient-to-r from-[#00AEEF] via-[#054ADA] to-[#022570]"></div>
                    <h2 className="text-2xl font-semibold">{item.header}</h2>
                  </div>
                  <div className="mt-5">
                    <p className="pl-9">{item.description}</p>
                  </div>
                </div>
              ))}
          </div>
          <div className="flex flex-wrap w-full items-center justify-center gap-4">
            {data.CardButton?.position === true &&
              data.HomeCardSection.map((item) => (
                <div
                  key={item.id}
                  className="relative p-[10px] rounded-lg overflow-hidden border-[1px] hover:border-[#00AEEF] duration-500 flex items-center justify-center w-[30%]"
                >
                  <div className="flex items-center">
                    <div className="w-4 h-4 mr-4 rounded-full bg-gradient-to-r from-[#00AEEF] via-[#054ADA] to-[#022570]"></div>
                    <h2 className="text-md font-semibold">{item.header}</h2>
                  </div>
                  <div className="mt-5">
                    <p className="pl-9">{item.description}</p>
                  </div>
                </div>
              ))}
          </div>

          {data.CardButton?.position === true && !data.description && (
            <div className="mt-12 flex justify-center">
              <GradientButton variant={data.CardButton.Variant}>
                {data.CardButton.ValueName}
              </GradientButton>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Training;
