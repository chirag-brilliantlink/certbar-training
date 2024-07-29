import React from "react";

interface MarqueeComponentProps {
  data: { id: number; img: string }[];
  mainTitle?: string;
  headerTitle?: string;
  gradientText?: string;
  description?: string;
}

const MarqueeComponent: React.FC<MarqueeComponentProps> = ({
  data,
  mainTitle = "Trusted by leading organizations worldwide",
  headerTitle,
  gradientText,
  description,
}) => {
  return (
    <div className="main-wrapper text-white">
      {mainTitle && (
        <h1 className="py-[50px] font-normal text-gray-300">{mainTitle}</h1>
      )}
      {(headerTitle || gradientText || description) && (
        <div className="flex flex-col items-center text-center gap-3">
          {headerTitle && (
            <h1 className="text-[50px]">
              {headerTitle}{" "}
              {gradientText && (
                <span className="gradient-text">{gradientText}</span>
              )}
            </h1>
          )}
          {description && <p>{description}</p>}
        </div>
      )}
      <ul className="wrapper">
        {data &&
          data.map((item, index) => (
            <li
              key={index}
              className="card"
              style={{
                "--left": `calc(250px * ${data.length})`,
                "--animation-delay": `calc(20s / ${data.length} * (${
                  data.length
                } - ${8 - item.id}) * -1)`,
                "--font-size": "16px",
              }}
            >
              <img
                src={item.img}
                alt={`organization-${item.id}`}
                className="w-[160px] h-[100px] object-contain"
              />
            </li>
          ))}
      </ul>
    </div>
  );
};

export default MarqueeComponent;
