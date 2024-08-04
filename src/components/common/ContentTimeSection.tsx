"use client";
import React from "react";

interface CourseTime {
  id: number;
  ValueName: string;
  title: string;
}

interface SecurityTeamData {
  header: string;
  description: string;
  CourseTime: CourseTime[];
}

interface SecurityTeamProps {
  data: SecurityTeamData;
}

const SecurityTeam: React.FC<SecurityTeamProps> = ({ data }) => {
  return (
    <div className="bg-[black] text-white">
      <div className={`px-[100px] ${data?.header ? "py-[90px]" : "pb-[20px]"}`}>
        {data?.header && data?.description && (
          <div className="text-center pb-5">
            <h1 className="text-[50px] pb-5">{data.header}</h1>
            <p className="text-gray-300">{data.description}</p>
          </div>
        )}
        <div className={`flex ${data?.header ? "pt-[50px]" : ""} gap-5`}>
          {data?.CourseTime?.map((course, index) => (
            <div
              key={course.id}
              className={`flex flex-col items-center ${
                index === 1 ? "border-l border-r border-gray-500 px-5" : ""
              }`}
            >
              <h1
                className={`${data?.header ? "text-[50px]" : "text-[35px] "}`}
                style={{ color: data?.header ? "#00AEEF" : "#4400ef" }}
              >
                {course.ValueName}
              </h1>
              <p className="text-center text-gray-300">{course.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SecurityTeam;
