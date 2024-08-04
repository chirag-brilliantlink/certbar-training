import React from "react";

interface MarqueeComponentProps {
  data: {
    Trustimages: {
      data: {
        id: number;
        attributes: {
          url: string;
        };
      }[];
    };
    header?: string;
    description?: string;
  };
}

const MarqueeComponent: React.FC<MarqueeComponentProps> = ({ data }) => {
  return (
    <div className="main-wrapper text-white">
      {data.description && (
        <h1 className="py-[50px] font-normal text-gray-300">
          {data.description}
        </h1>
      )}
      {data.header && (
        <div className="flex flex-col items-center text-center gap-3">
          <h1 className="text-[24px] md:text-[35px] xl:text-[50px] w-[70%] pb-10">
            {data.header}
          </h1>
          {data.description && (
            <p className="text-[14px] md:text-[16px] text-gray-300">
              {data.description}
            </p>
          )}
        </div>
      )}
      <ul className="wrapper">
        {data.Trustimages.data.map((item, index) => (
          <li
            key={index}
            className="card"
            style={{
              "--left": `calc(250px * ${data.Trustimages.data.length})`,
              "--animation-delay": `calc(20s / ${
                data.Trustimages.data.length
              } * (${data.Trustimages.data.length} - ${8 - index}) * -1)`,
              "--font-size": "16px",
            }}
          >
            <img
              src={process.env.NEXT_PUBLIC_MEDIA_URL + item.attributes.url}
              alt={`Trust image ${item.id}`}
              className="w-[80px] md:w-[160px] h-[100px] object-contain"
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MarqueeComponent;
