// components/HamburgerMenu.tsx
import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import Link from "next/link";

type SubItem = {
  id: number;
  label: string;
  path: string;
};

type Item = {
  id: number;
  label: string;
  path: string | null;
  description: string;
  subItems?: SubItem[];
};

type MenuData = {
  label: string;
  items: Item[];
};

type HamburgerMenuProps = {
  individualsData: MenuData;
  businessData: MenuData;
};

const HamburgerMenu: React.FC<HamburgerMenuProps> = ({
  individualsData,
  businessData,
}) => {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [openSubItems, setOpenSubItems] = useState<number | null>(null);

  const handleMenuClick = (menu: string) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  const handleSubItemClick = (id: number) => {
    setOpenSubItems(openSubItems === id ? null : id);
  };

  const renderItems = (items: Item[]) => (
    <ul className="flex flex-col gap-2">
      {items.map((item) => (
        <li
          key={item.id}
          className="relative cursor-pointer p-2 hover:bg-gray-950 rounded-lg"
        >
          <div
            onClick={() => handleSubItemClick(item.id)}
            className="flex items-center justify-between"
          >
            <Link href={item.path || "#"} className="flex flex-col gap-1">
              <div className="flex items-center justify-between">
                {item.label}
                {item.subItems && item.subItems.length > 0 && (
                  <IoIosArrowForward
                    size={12}
                    className={`transition-transform ${
                      openSubItems === item.id ? "rotate-90" : ""
                    }`}
                  />
                )}
              </div>
              <span className="text-gray-500 text-sm">{item.description}</span>
            </Link>
          </div>
          {openSubItems === item.id &&
            item.subItems &&
            item.subItems.length > 0 && (
              <div className="ml-4 mt-2">
                <ul className="flex flex-col gap-2">
                  {item.subItems.map((subItem) => (
                    <li
                      key={subItem.id}
                      className="p-2 hover:bg-gray-800 rounded-lg"
                    >
                      <Link href={subItem.path || "#"}>{subItem.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
        </li>
      ))}
    </ul>
  );

  return (
    <div className="fixed top-0 right-0 w-[300px] h-full bg-gray-950 text-white p-4 shadow-lg pt-[100px] overflow-auto z-50">
      <div>
        <div
          className="cursor-pointer p-2 bg-gray-900 hover:bg-gray-800 rounded-lg flex items-center justify-between"
          onClick={() => handleMenuClick("individuals")}
        >
          For Individuals
          <IoIosArrowDown
            size={10}
            className={`transition-transform duration-500 ${
              openMenu === "individuals" ? "rotate-0" : "-rotate-90"
            }`}
          />
        </div>
        {openMenu === "individuals" && (
          <div className="mt-2 bg-gray-900 rounded-xl p-2">
            {renderItems(individualsData.items)}
          </div>
        )}
      </div>
      <div className="mt-4">
        <div
          className="cursor-pointer p-2 bg-gray-900 hover:bg-gray-800 rounded-lg flex items-center justify-between"
          onClick={() => handleMenuClick("business")}
        >
          For Business
          <IoIosArrowDown
            size={10}
            className={`transition-transform duration-500 ${
              openMenu === "business" ? "rotate-0" : "-rotate-90"
            }`}
          />
        </div>
        {openMenu === "business" && (
          <div className="mt-2 bg-gray-900 rounded-xl p-2">
            {renderItems(businessData.items)}
          </div>
        )}
      </div>
    </div>
  );
};

export default HamburgerMenu;
