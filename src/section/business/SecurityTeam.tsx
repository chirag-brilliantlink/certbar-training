import React from "react";

const Data = [
  {
    id: 1,
    number: "70%",
    description:
      "of security professionals feel inadequately prepared to defend their organization",
    color: "#00AEEF",
  },
  {
    id: 3,
    number: "60%",
    description:
      "of security professionals don't believe their organization provides the right training",
    color: "#054ADA",
  },
  {
    id: 4,
    number: "85%",
    description:
      "of professionals claim their organization is impacted by the security skills shortage",
    color: "#00AEEF",
  },
];

const SecurityTeam = () => {
  return (
    <div className="bg-[black] text-white">
      <div className="px-[100px] py-[90px]">
        <div className="text-center pb-5">
          <h1 className="text-[50px] pb-5">
            Why <span className="gradient-text">Certbar</span> for Teams?
          </h1>
          <p className="text-gray-300">
            Provide team members with clarity on how to learn, grow, and advance
            their careers within your organization.
          </p>
        </div>
        <div className="flex pt-[50px] gap-5">
          {Data.map((data, index) => (
            <div
              key={index}
              className={`flex flex-col items-center ${
                index === 1 ? "border-l border-r border-gray-500 px-5" : ""
              }`}
            >
              <h1 className="text-[50px]" style={{ color: data.color }}>
                {data.number}
              </h1>
              <p className="text-center text-gray-300">{data.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SecurityTeam;
