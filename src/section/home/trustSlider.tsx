import React from "react";
import Image from "next/image";

const Data = [
  {
    id: 1,
    img: "/images/zapier.png",
  },
  {
    id: 2,
    img: "/images/rush.png",
  },
  {
    id: 3,
    img: "/images/paypal.png",
  },
  {
    id: 4,
    img: "/images/kia.png",
  },
  {
    id: 5,
    img: "/images/meesho.png",
  },
  {
    id: 6,
    img: "/images/opera.png",
  },
  {
    id: 7,
    img: "/images/ibm.png",
  },
];

const MarqueeComponent = () => {
  return (
    <div className="main-wrapper text-white">
      <h1 className="py-[50px] font-normal text-gray-300">
        Trusted by leading organizations worldwide
      </h1>
      <ul className="wrapper">
        {Data.map((data, index) => (
          <li
            key={index}
            className="card"
            style={{
              "--left": `calc(250px * ${Data.length})`,
              "--animation-delay": `calc(20s / ${Data.length} * (${
                Data.length
              } - ${8 - data.id}) * -1)`,
              "--font-size": "16px",
            }}
          >
            <img
              src={data.img}
              alt="training"
              className="w-[160px] h-[100px] object-contain"
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MarqueeComponent;
