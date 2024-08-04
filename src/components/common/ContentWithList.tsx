"use client";
import React from "react";
import { GoDot } from "react-icons/go";

interface ListSectionCard {
  id: number;
  ValueName: string;
}

interface Card {
  id: number;
  header: string;
  title: string;
  ListSectionCard: ListSectionCard[];
}

interface CardWithListSectionData {
  header: string;
  description: string;
  CardWithList: Card[];
}

interface CardWithListSectionProps {
  data: CardWithListSectionData;
}

const CardWithListSection: React.FC<CardWithListSectionProps> = ({ data }) => {
  return (
    <div className="bg-[black] text-white">
      <div className="px-[100px] py-[90px]">
        <div className="flex flex-col items-start gap-10">
          <h1 className="text-[50px]">{data.header}</h1>
          <p className="text-[16px] text-gray-300">{data.description}</p>
          <div className="flex gap-4 w-full">
            {data?.CardWithList?.map((card: Card) => (
              <div
                key={card.id}
                className="border-[1px] border-[#c9c9c9] p-6 rounded-lg bg-white text-black-950 flex flex-col items-start gap-2 w-[50%]"
              >
                <h1 className="text-[#054ADA] text-[16px] m-0">{card.title}</h1>
                <h1 className="text-[25px] font-medium m-0">{card.header}</h1>
                <ul className="flex flex-col items-start">
                  {card.ListSectionCard.map((item: ListSectionCard) => (
                    <li key={item.id} className="flex items-start gap-2">
                      <GoDot size={23} />
                      {item.ValueName}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardWithListSection;
