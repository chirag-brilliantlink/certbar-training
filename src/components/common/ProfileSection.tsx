"use client";
import React, { useState } from "react";
import GradientButton from "@/components/common/gradientButton";
import Link from "next/link";

// Define TeamMember type
interface TeamMember {
  id: number;
  Name: string;
  Qualification: string;
  Position: string;
  Photo: {
    data: {
      attributes: {
        url: string;
      };
    };
  };
}

// Define Button type
interface Button {
  LinkTo?: string;
  Variant: any;
  ValueName: string;
  position?: boolean | null;
}

// Define TeamPopupSectionData type
interface TeamPopupSectionData {
  header: string;
  button: Button;
  TeamPopupSection: TeamMember[];
}

// Define TeamPopupSectionProps type
interface TeamPopupSectionProps {
  data: TeamPopupSectionData;
}

// Define ModalProps type
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children?: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black-900 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-black-950 p-6 rounded-md relative w-[70%]">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-black text-xl font-bold"
        >
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

const TeamPopupSection: React.FC<TeamPopupSectionProps> = ({ data }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  const handleCardClick = (member: TeamMember) => {
    setSelectedMember(member);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedMember(null);
  };

  return (
    <div className="bg-[black] text-white">
      <div className="px-[100px] pb-[150px]">
        <div
          className={`flex items-center ${
            data.button.position === null || data.button.position === false
              ? "justify-between"
              : "justify-center"
          } pb-[50px]`}
        >
          <h1 className="text-[50px] font-light">
            <span className="gradient-text">{data.header}</span>
          </h1>
          {data.button.LinkTo && (
            <Link href={data.button.LinkTo}>
              <GradientButton variant={data.button.Variant}>
                {data.button.ValueName}
              </GradientButton>
            </Link>
          )}
        </div>
        <div className="flex justify-between w-[90%] m-auto">
          {data.TeamPopupSection.map((member) => (
            <div
              key={member.id}
              className="w-[24%] border-[1px] border-gray-600 bg-gray-950 rounded-lg overflow-hidden cursor-pointer"
              onClick={() => handleCardClick(member)}
            >
              <img
                src={
                  process.env.NEXT_PUBLIC_MEDIA_URL +
                  member.Photo?.data?.attributes.url
                }
                alt={member.Name}
              />
              <div className="p-3 flex flex-col gap-4">
                <h1 className="text-[20px]">{member.Name}</h1>
                <h2 className="text-[14px] text-gray-400 font-light">
                  {member.Qualification}
                </h2>
              </div>
            </div>
          ))}
        </div>
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          {selectedMember && (
            <div className="flex items-center gap-5">
              <img
                src={
                  process.env.NEXT_PUBLIC_MEDIA_URL +
                  selectedMember.Photo?.data?.attributes.url
                }
                alt={selectedMember.Name}
              />
              <div className="flex flex-col gap-6">
                <h1 className="text-[20px] font-bold">{selectedMember.Name}</h1>
                <h2 className="text-[18px] text-gray-700">
                  {selectedMember.Qualification}
                </h2>
                <p className="text-[16px] text-gray-600">
                  {selectedMember.Position}
                </p>
              </div>
            </div>
          )}
        </Modal>
      </div>
    </div>
  );
};

export default TeamPopupSection;
