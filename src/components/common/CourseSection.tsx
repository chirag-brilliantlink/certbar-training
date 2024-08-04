import React from "react";
import GradientButton from "@/components/common/gradientButton";
import Link from "next/link";

interface Course {
  id: number;
  header: string;
  description: {
    children: {
      text: string;
    }[];
  }[];
  Image: {
    data: {
      attributes: {
        url: string;
      };
    };
  };
  ImageAlt: string;
  LinkTo?: string;
}

interface Button {
  LinkTo?: string;
  Variant: any;
  ValueName: string;
  position?: boolean | null;
}

interface CoursesSectionData {
  Header: string;
  button: Button;
  Courses: Course[];
}

interface CoursesSectionProps {
  data: CoursesSectionData;
}

const truncateText = (text: string, wordLimit: number): string => {
  const words = text.split(" ");
  return words.length > wordLimit
    ? words.slice(0, wordLimit).join(" ") + " ...."
    : text;
};

const CoursesSection: React.FC<CoursesSectionProps> = ({ data }) => {
  return (
    <div className="bg-[black] text-white">
      <div className="px-[100px] py-[150px]">
        <div
          className={`flex items-center ${
            data?.button?.position === null || data?.button?.position === false
              ? "justify-between"
              : "justify-center"
          } pb-[50px]`}
        >
          <h1 className="text-[50px] font-normal">
            <span className="gradient-text">{data.Header}</span>
          </h1>
          {data?.button?.LinkTo && (
            <Link href={data.button.LinkTo}>
              <GradientButton variant={data.button.Variant}>
                {data.button.ValueName}
              </GradientButton>
            </Link>
          )}
        </div>
        <div className="flex justify-between w-[90%] m-auto">
          {data.Courses.map((course) => (
            <div
              key={course.id}
              className="w-[24%] border-[1px] border-gray-600 bg-gray-950 rounded-lg overflow-hidden"
            >
              <img
                src={
                  process.env.NEXT_PUBLIC_MEDIA_URL +
                  course?.Image?.data.attributes.url
                }
                alt={course?.ImageAlt}
              />
              <div className="p-3 flex flex-col gap-4">
                <h1 className="text-[18px]">{course.header}</h1>
                <p className="text-[14px] text-gray-400">
                  {truncateText(course.description[0].children[0].text, 20)}
                </p>
                {course.LinkTo && (
                  <a
                    href={course.LinkTo}
                    className="border w-[100px] text-[12px] p-1 pl-2 rounded-md border-[#054ADA] hover:border-[#00AEEF]"
                  >
                    View more ...
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoursesSection;
