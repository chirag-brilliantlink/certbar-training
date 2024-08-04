import React from "react";
import GradientButton from "@/components/common/gradientButton";

interface DataProps {
  header?: string;
  description?: { children: { text: string }[] }[];
  GradientButton?: { Variant: any; ValueName: string }[];
  ImageSection?: { data: { attributes: { url: string } } };
  ImageSectionPosition?: boolean;
}

interface LandingProps {
  data: DataProps;
}

const Landing: React.FC<LandingProps> = ({ data }) => {
  const hasImage =
    data?.ImageSection && data.ImageSection.data?.attributes?.url;

  return (
    <div className="bg-black-950 text-white">
      <div className="px-[20px] sm:px-[40px] md:px-[80px] xl:px-[100px] py-[30px]">
        <div
          className={`flex items-start md:items-center gap-10 ${
            data?.ImageSectionPosition === true
              ? "flex-col md:flex-row-reverse"
              : "flex-col md:flex-row"
          }`}
        >
          <div className={hasImage ? "w-[100%] xl:w-[50%]" : "w-[100%]"}>
            {data?.header && (
              <h1 className="font-normal text-[24px] md:text-[35px] xl:text-[50px]">
                {data.header}
              </h1>
            )}
            {data?.description && data.description.length > 0 && (
              <div className="text-[14px] md:text-[16px] font-normal text-gray-300 pt-4">
                {data.description.map((para, index) => (
                  <div key={index}>
                    {para.children?.map((textNode, i) =>
                      textNode.text.split("\n\n").map((paragraph, pIndex) => (
                        <p key={`${index}-${i}-${pIndex}`} className="mb-4">
                          {paragraph}
                        </p>
                      ))
                    )}
                  </div>
                ))}
              </div>
            )}
            {data?.GradientButton && data.GradientButton.length > 0 && (
              <div className="pt-10 flex flex-col sm:flex-row gap-3">
                {data.GradientButton.map((button, index) => (
                  <GradientButton key={index} variant={button.Variant}>
                    {button.ValueName}
                  </GradientButton>
                ))}
              </div>
            )}
          </div>
          {hasImage && (
            <div className="w-full xl:w-[50%]">
              <img
                src={
                  process.env.NEXT_PUBLIC_MEDIA_URL +
                  data.ImageSection.data.attributes.url
                }
                alt="Landing Image"
                className="w-[100%] h-full"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Landing;
