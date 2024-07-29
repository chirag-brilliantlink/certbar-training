import GradientText from "@/components/common/gradient";
import GradientButton from "@/components/common/gradientButton";
import React from "react";

interface LandingProps {
  backgroundColor?: string;
  textColor?: string;
  paddingX?: string;
  paddingY?: string;
  title?: string;
  subtitle?: string;
  description?: string;
  buttons?: {
    text: string;
    variant: "bg-gradient" | "border-gradient";
  }[];
  imageSrc?: string;
}

const Landing: React.FC<LandingProps> = ({
  backgroundColor = "black",
  textColor = "white",
  paddingX = "100px",
  paddingY = "90px",
  title,
  subtitle,
  description,
  buttons,
  imageSrc,
}) => {
  return (
    <div className={`bg-[${backgroundColor}] text-${textColor}`}>
      <div className={`px-[${paddingX}] py-[${paddingY}]`}>
        <div className="flex flex-row">
          <div className="w-[60%]">
            {title && (
              <h1 className="font-light text-[50px]">
                <span className="gradient-text">{title}</span>
                {subtitle && (
                  <>
                    <br />
                    {subtitle}
                  </>
                )}
              </h1>
            )}
            {description && (
              <p className="text-[16px] font-normal text-gray-300 w-[80%] pt-4">
                {description}
              </p>
            )}
            {buttons && buttons.length > 0 && (
              <div className="pt-10 flex gap-3">
                {buttons.map((button, index) => (
                  <GradientButton key={index} variant={button.variant}>
                    {button.text}
                  </GradientButton>
                ))}
              </div>
            )}
          </div>
          {imageSrc && (
            <div className="w-[40%]">
              <img
                src={imageSrc}
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
