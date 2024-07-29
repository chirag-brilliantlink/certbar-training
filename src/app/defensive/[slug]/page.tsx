import GradientButton from "@/components/common/gradientButton";
import React from "react";

const TimeData = [
  {
    value: "53H 48M",
    title: "Time",
  },
  {
    value: "Advanced",
    title: "Difficulty",
  },
  {
    value: "0",
    title: "CEU/CPE",
  },
];

const Data = [
  {
    id: 1,
    image: "/images/pro1.jpg",
    title: "Defensive Security and Cyber Risk",
    description:
      "In this course, you will learn the basics of defensive security and cyber risk. You will review foundational risk management concepts such as calculating risk and strategies for dealing with risk. You will also explore the NIST CSF as a framework for understanding defensive security.",
  },
  {
    id: 2,
    image: "/images/pro1.jpg",
    title: "Defensive Security and Cyber Risk",
    description:
      "In this course, you will learn the basics of defensive security and cyber risk. You will review foundational risk management concepts such as calculating risk and strategies for dealing with risk. You will also explore the NIST CSF as a framework for understanding defensive security.",
  },
  {
    id: 3,
    image: "/images/pro1.jpg",
    title: "Defensive Security and Cyber Risk",
    description:
      "In this course, you will learn the basics of defensive security and cyber risk. You will review foundational risk management concepts such as calculating risk and strategies for dealing with risk. You will also explore the NIST CSF as a framework for understanding defensive security.",
  },
  {
    id: 4,
    image: "/images/pro1.jpg",
    title: "Defensive Security and Cyber Risk",
    description:
      "In this course, you will learn the basics of defensive security and cyber risk. You will review foundational risk management concepts such as calculating risk and strategies for dealing with risk. You will also explore the NIST CSF as a framework for understanding defensive security.",
  },
];

const page = () => {
  const truncateText = (text: any, wordLimit: any) => {
    const words = text.split(" ");
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(" ") + " ....";
    }
    return text;
  };

  return (
    <div className="bg-[black] text-white">
      <div className="px-[100px] py-[90px]">
        <div className="flex flex-col items-start gap-8">
          <h1 className="text-[50px]">Incident Handler Collection</h1>
          <p className="text-[18px] text-gray-300 w-[70%]">
            This collection focuses on the incident response process – from
            building an incident response kit and developing an incident
            response team, to identifying, containing, and recovering from
            incidents. We cover the traditional “defensive-only” approach, then
            introduce you to the attacker’s world.
          </p>
          <GradientButton variant="bg-gradient">
            Learn This Course
          </GradientButton>
          <div className="flex gap-[40px]">
            {TimeData.map((item, index) => (
              <ul
                key={index}
                className={`list-item ${
                  index === Math.floor(TimeData.length / 2)
                    ? "border-l-[1px] pl-[40px] pr-[40px] border-r-[1px] border-gray-950"
                    : ""
                }`}
              >
                <li className="flex flex-col items-center gap-4">
                  <h1 className="text-[30px]">{item.value}</h1>
                  <h6 className="text-[14px] font-light text-gray-400">
                    {item.title}
                  </h6>
                </li>
              </ul>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-6 py-[80px]">
          <h1 className="text-[50px]">Overview</h1>
          <p className="text-gray-300">
            You will learn the incident response process, from building an
            incident response kit and developing an incident response team, to
            identifying, containing, and recovering from incidents. We then
            steer away from a traditional “defensive-only” approach to introduce
            you to the attacker’s world, covering basic information on
            reconnaissance, scanning and enumeration, attacks and maintaining
            persistence, evading antivirus, and maintaining stealth.
          </p>
          <p className="text-gray-300">
            Dave starts by walking you through pre-incident planning and
            developing an incident response team. He then walks you through the
            management of incidents, including identification, containment, and
            eradication. You then learn proper methods for recovering from
            incidents, and spend some time in hands-on labs getting familiar
            with incident response and digital forensic techniques. You will
            then get an introduction to the Mitre Att&ck Framework, including a
            deep dive into Threat Intelligence. Continuing the journey on the
            offensive side of things, you learn about scanning with NMAP and get
            some hands-on experience in a lab. You then learn about different
            attack types, ways to maintain persistence, evasion techniques, and
            how to be stealthier using techniques like Ghostwriting. The path
            wraps up with an overview of forensic tools.
          </p>
        </div>
        <div className="flex items-center gap-10">
          <div className="flex flex-col gap-6 py-[80px] w-[60%]">
            <h1 className="text-[50px]">General Overview</h1>
            <p className="text-gray-300">
              You will learn the incident response process, from building an
              incident response kit and developing an incident response team, to
              identifying, containing, and recovering from incidents. We then
              steer away from a traditional “defensive-only” approach to
              introduce you to the attacker’s world, covering basic information
              on reconnaissance, scanning and enumeration, attacks and
              maintaining persistence, evading antivirus, and maintaining
              stealth.
            </p>
            <p className="text-gray-300">
              Dave starts by walking you through pre-incident planning and
              developing an incident response team. He then walks you through
              the management of incidents, including identification,
              containment, and eradication. You then learn proper methods for
              recovering from incidents, and spend some time in hands-on labs
              getting familiar with incident response and digital forensic
              techniques. You will then get an introduction to the Mitre Att&ck
              Framework, including a deep dive into Threat Intelligence.
              Continuing the journey on the offensive side of things, you learn
              about scanning with NMAP and get some hands-on experience in a
              lab. You then learn about different attack types, ways to maintain
              persistence, evasion techniques, and how to be stealthier using
              techniques like Ghostwriting. The path wraps up with an overview
              of forensic tools.
            </p>
          </div>
          <img src="/images/prove.jpg" alt="" className="w-[40%] h-[500px]" />
        </div>
        <div className="flex flex-row-reverse items-center gap-10">
          <div className="flex flex-col gap-6 py-[80px] w-[60%]">
            <h1 className="text-[50px]">General Overview</h1>
            <p className="text-gray-300">
              You will learn the incident response process, from building an
              incident response kit and developing an incident response team, to
              identifying, containing, and recovering from incidents. We then
              steer away from a traditional “defensive-only” approach to
              introduce you to the attacker’s world, covering basic information
              on reconnaissance, scanning and enumeration, attacks and
              maintaining persistence, evading antivirus, and maintaining
              stealth.
            </p>
            <p className="text-gray-300">
              Dave starts by walking you through pre-incident planning and
              developing an incident response team. He then walks you through
              the management of incidents, including identification,
              containment, and eradication. You then learn proper methods for
              recovering from incidents, and spend some time in hands-on labs
              getting familiar with incident response and digital forensic
              techniques. You will then get an introduction to the Mitre Att&ck
              Framework, including a deep dive into Threat Intelligence.
              Continuing the journey on the offensive side of things, you learn
              about scanning with NMAP and get some hands-on experience in a
              lab. You then learn about different attack types, ways to maintain
              persistence, evasion techniques, and how to be stealthier using
              techniques like Ghostwriting. The path wraps up with an overview
              of forensic tools.
            </p>
          </div>
          <img src="/images/prove.jpg" alt="" className="w-[40%] h-[500px]" />
        </div>
        <div className="flex flex-col gap-5">
          <h1 className="text-[50px]">Related Courses</h1>
          <div className="flex justify-between w-[90%] m-auto">
            {Data.map((data, index) => (
              <div
                key={index}
                className="w-[24%] border-[1px] border-gray-600 bg-gray-950 rounded-lg overflow-hidden"
              >
                <img src={data.image} alt="" />
                <div className="p-3 flex flex-col gap-4">
                  <h1 className="text-[18px]">{data.title}</h1>
                  <p className="text-[14px] text-gray-400">
                    {truncateText(data.description, 20)}
                  </p>
                  <button className="border w-[100px] text-[12px] p-1 rounded-md border-[#054ADA] hover:border-[#00AEEF]">
                    View more ...
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
