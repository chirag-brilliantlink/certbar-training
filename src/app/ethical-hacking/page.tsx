import GradientButton from "@/components/common/gradientButton";
import Link from "next/link";
import React from "react";
import { BsPlusCircleDotted } from "react-icons/bs";
import { GoDot } from "react-icons/go";

const page = () => {
  return (
    <div className="bg-[black] text-white">
      <div className="px-[100px] py-[90px]">
        <div className="flex flex-col items-start gap-10">
          <h1 className="text-[50px]">
            <span className="gradient-text">Ethical Hacking</span> Course
            (Focused on Web)
          </h1>
          <p className="text-[16px] text-gray-300">
            Welcome to the Certified Cybersecurity Web Application Penetration
            (CCWAP) course, meticulously crafted and delivered by industry
            experts to provide you with industrial readiness. This specialized
            training focuses exclusively on the OWASP Top 10, ensuring that you
            gain a profound understanding of the most critical security risks to
            web applications. Our course is available in two flexible timeframes
            to accommodate your schedule:
          </p>
          <div className="flex gap-4 w-full">
            <div className="border-[1px] border-[#c9c9c9] p-6 rounded-lg bg-white text-black-950 flex flex-col items-start gap-2 w-[50%]">
              <h1 className="text-[#054ADA] text-[16px] m-0">
                Offerings & Next Batch
              </h1>
              <h1 className="text-[25px] font-medium m-0">1st August, 2024</h1>
              <ul className="flex flex-col items-start">
                <li className="flex items-center gap-2">
                  <GoDot /> Till June - 40%
                </li>
                <li className="flex items-center gap-2">
                  <GoDot />
                  Jul - 30%
                </li>
                <li className="flex items-center gap-2">
                  <GoDot />
                  Aug - 20%
                </li>
                <li className="flex items-center gap-2">
                  <GoDot />
                  Sept - 10%
                </li>
                <li className="flex items-center gap-2">
                  <GoDot />
                  Oct Onwards - No Discount
                </li>
              </ul>
            </div>
            <div className="border-[1px] border-[#c9c9c9] p-6 rounded-lg bg-white text-black-950 flex flex-col items-start gap-2 w-[50%]">
              <h1 className="text-[#054ADA] text-[16px] m-0">Timeframe</h1>
              <h1 className="text-[25px] font-medium m-0">Daily / Weekends</h1>
              <ul className="flex flex-col items-start">
                <li className="flex items-start text-start gap-2">
                  <GoDot size={23} />
                  Daily Sessions: Monday to Friday, 7:00 AM to 9:00 AM, spanning
                  over 2 months.
                </li>
                <li className="flex items-start text-start gap-2">
                  <GoDot size={23} />
                  Weekend Sessions: Saturdays and Sundays, 8 hours per day,
                  completing in 1 month.
                </li>
              </ul>
            </div>
          </div>
          <GradientButton variant="bg-gradient">
            Apply For Course
          </GradientButton>
        </div>
      </div>
      <div className="px-[100px] py-[90px] bg-white text-black-950 flex items-center gap-7">
        <div className="w-[60%] flex flex-col gap-6">
          <h1 className="text-[50px]">Why Cybersecurity?</h1>
          <p>
            In today's digital age, cybersecurity is more critical than ever. As
            the reliance on technology grows and companies are focusing digital
            transformation, making it imperative to safeguard sensitive data and
            ensure the integrity of information systems. Developing a career in
            cybersecurity not only offers a rewarding and challenging profession
            but also plays a vital role in protecting organizations and
            individuals from cyber threats.
          </p>
          <p>
            Join us to acquire the skills and knowledge needed to excel in the
            dynamic field of web application penetration testing, guided by
            professionals who bring real-world experience to the classroom.
          </p>
          <ul className="flex flex-col items-start w-full gap-5">
            <li className="flex items-start text-start gap-2">
              <GoDot size={23} />
              Lucrative Salaries: Due to the critical nature of the job,
              cybersecurity roles often come with competitive salaries and
              benefits.
            </li>
            <li className="flex items-start text-start gap-2">
              <GoDot size={23} />
              Job Security: With the increasing frequency of cyber attacks, the
              need for cybersecurity experts is only expected to rise, ensuring
              job stability.
            </li>
            <li className="flex items-start text-start gap-2">
              <GoDot size={23} />
              High Demand: Cybersecurity professionals are in high demand across
              various industries
            </li>
            <li className="flex items-start text-start gap-2">
              <GoDot size={23} />A job that never gets boring
            </li>
            <li className="flex items-start text-start gap-2">
              <GoDot size={23} />
              Increase in demand due to
              <Link
                href="https://www.meity.gov.in/writereaddata/files/Digital%20Personal%20Data%20Protection%20Act%202023.pdf"
                className="text-blue-400"
              >
                Digital Personal Data Protection Act, 2023
              </Link>
            </li>
          </ul>
        </div>
        <div className="w-[40%] flex flex-col items-end gap-10">
          <h1 className="text-[24px] font-semibold">
            5 Phases of Ethical Hacking
          </h1>
          <ul className="flex flex-col gap-4 text-right w-[65%]">
            <li className="flex items-center gap-4 group cursor-pointer">
              <BsPlusCircleDotted
                size={25}
                className="group-hover:rotate-180 transition duration-1000"
              />
              Reconnaissance
            </li>
            <li className="flex items-center gap-4 group cursor-pointer">
              <BsPlusCircleDotted
                size={25}
                className="group-hover:rotate-180 transition duration-1000"
              />
              Scanning
            </li>
            <li className="flex items-center gap-4 group cursor-pointer">
              <BsPlusCircleDotted
                size={25}
                className="group-hover:rotate-180 transition duration-1000"
              />
              Gaining Access
            </li>
            <li className="flex items-center gap-4 group cursor-pointer">
              <BsPlusCircleDotted
                size={25}
                className="group-hover:rotate-180 transition duration-1000"
              />
              Maintaing Access
            </li>
            <li className="flex items-center gap-4 group cursor-pointer">
              <BsPlusCircleDotted
                size={25}
                className="group-hover:rotate-180 transition duration-1000"
              />
              Reporting
            </li>
          </ul>
        </div>
      </div>
      <div className="px-[100px] py-[90px]">
        <div className="flex flex-col gap-5">
          <h1 className="text-[50px]">
            Who should join this{" "}
            <span className="gradient-text">training course?</span>
          </h1>
          <p className="text-gray-300">
            Anyone with an intermediate knowledge of IT and understanding of how
            internet work can join the course. However, we want this to be a
            fruitful experience for you and to narrow down some background
            requirements, see the list below:
          </p>
          <ul className="flex flex-col items-start gap-5">
            <li className="flex items-start text-start gap-2">
              <GoDot size={23} />
              IT Professionals (looking for a career change i.e. developers,
              system administrators, DevOps, QA engineers)
            </li>
            <li className="flex items-start text-start gap-2">
              <GoDot size={23} />
              Students who are / going to pursue a degree in IT / CSE / B. Tech
              / BSc IT
            </li>
            <li className="flex items-start text-start gap-2">
              <GoDot size={23} />
              IT Managers / Heads wanting to start their own department of
              cybersecurity in their company.
            </li>
          </ul>
        </div>
        <div className="flex flex-col py-[90px] text-center items-center gap-6">
          <h1 className="text-[50px] w-[70%]">
            Where can you work as a cyber{" "}
            <span className="gradient-text">security specialist?</span>
          </h1>
          <p className="w-[80%] text-gray-300">
            As a cybersecurity specialist, you have the flexibility to work
            across a diverse range of industries and sectors, each with unique
            challenges and opportunities. Here are some of the key areas where
            your expertise will be highly valued:
          </p>
          <ul className="flex w-[60%] flex-wrap justify-center gap-5">
            <li className="border border-[#054ADA] hover:bg-[#054ADA] duration-500 py-2 px-4 rounded-3xl">
              Consultancy
            </li>
            <li className="border border-[#054ADA] hover:bg-[#054ADA] duration-500 py-2 px-4 rounded-3xl">
              Finance & Insurance
            </li>
            <li className="border border-[#054ADA] hover:bg-[#054ADA] duration-500 py-2 px-4 rounded-3xl">
              IT Industry
            </li>
            <li className="border border-[#054ADA] hover:bg-[#054ADA] duration-500 py-2 px-4 rounded-3xl">
              Aerospace & Defence
            </li>
            <li className="border border-[#054ADA] hover:bg-[#054ADA] duration-500 py-2 px-4 rounded-3xl">
              Communications
            </li>
            <li className="border border-[#054ADA] hover:bg-[#054ADA] duration-500 py-2 px-4 rounded-3xl">
              Public/Private Sector
            </li>
            <li className="border border-[#054ADA] hover:bg-[#054ADA] duration-500 py-2 px-4 rounded-3xl">
              Retail Industry
            </li>
            <li className="border border-[#054ADA] hover:bg-[#054ADA] duration-500 py-2 px-4 rounded-3xl">
              Energy Sector
            </li>
            <li className="border border-[#054ADA] hover:bg-[#054ADA] duration-500 py-2 px-4 rounded-3xl">
              Manufacturing Sector
            </li>
          </ul>
        </div>
      </div>
      <div className="px-[100px] pb-[90px] flex flex-col gap-5">
        <h1 className="text-[50px]">Available Course Time</h1>
        <p className="text-gray-400">
          To cater to the diverse schedules of IT professionals and students, we
          offer the CCWAP course in two convenient timeframes:
        </p>
        <div className="flex gap-4">
          <div className="border-[1px] border-[#c9c9c9] p-10 rounded-lg bg-white text-black-950 flex items-start justify-around gap-2 w-[50%]">
            <h1 className="text-[#054ADA] text-[50px] m-0">1.</h1>
            <div className="flex flex-col gap-5">
              <h2 className="text-[25px] font-semibold">
                1-Month Intensive Course (Sat & Sun)
              </h2>
              <h3 className="flex items-center gap-4">
                <GoDot /> 8:00 AM – 6:00 PM
              </h3>
            </div>
          </div>
          <div className="border-[1px] border-[#c9c9c9] p-10 rounded-lg bg-white text-black-950 flex items-start justify-around gap-2 w-[50%]">
            <h1 className="text-[#054ADA] text-[50px] m-0">2.</h1>
            <div className="flex flex-col gap-5">
              <h2 className="text-[25px] font-semibold">
                2-Month Course (Monday – Friday)
              </h2>
              <ul className="flex flex-col">
                <li className="flex items-center gap-4">
                  <GoDot /> Option 1 – 7:00 AM – 9:00 AM
                </li>
                <li className="flex items-center gap-4">
                  <GoDot /> Option 2 – 6:00 PM – 8:00 PM
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="px-[100px] py-[90px] flex flex-row gap-5 bg-white text-black-950 items-center">
        <img src="/images/laptop.png" alt="" className="w-[50%] h-[600px]" />
        <div className="w-[50%] flex flex-col gap-5">
          <h1 className="text-[50px]">Prerequisite</h1>
          <p>
            We do not supply PCs as we are not a training institue. Hence you
            have to bring our own laptop as mentioned below:
          </p>
          <ul className="flex flex-col items-start gap-5">
            <li className="flex items-start text-start gap-2">
              <GoDot size={23} />
              BYOD (Bring Your Own Device)
            </li>
            <li className="flex flex-col items-start text-start gap-2">
              <div className="flex items-center gap-2">
                <GoDot size={23} />
                Minimum Laptop Configuration
              </div>
              <div className="flex flex-col gap-3 pl-7">
                <span>- Processor i5 {">"}= Intel</span>
                <span>- Ryzen {">"}= 10th Generation Series H</span>
                <span>- Memory 4GB RAM (Minimum)</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default page;
