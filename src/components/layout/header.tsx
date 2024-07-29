"use client";
import React, { useState, useEffect } from "react";
import { IoIosArrowDown } from "react-icons/io";
import GradientButton from "../common/gradientButton";
import Link from "next/link";

type SubItem = {
  label: string;
  path: string;
};

type Item = {
  label: string;
  path?: string;
  subItems?: SubItem[];
};

type MenuData = {
  [key: string]: {
    label: string;
    items: Item[];
  };
};

const menuData: MenuData = {
  individuals: {
    label: "For Individuals",
    items: [
      {
        label: "Career Paths",
        path: "/career",
      },
      {
        label: "Ethical Hacking Course",
        path: "/ethical-hacking",
      },
      {
        label: "Defensive Security",
        subItems: [
          {
            label: "Become an incident handler >",
            path: "/defensive/incident",
          },
          {
            label: "Incident Handler Connection >",
            path: "/defensive/connection",
          },
        ],
      },
      {
        label: "Offensive Security",
        subItems: [
          {
            label: "Penetration Tester Career Path >",
            path: "/defensive/incident",
          },
        ],
      },
    ],
  },
  business: {
    label: "For Business",
    items: [
      {
        label: "Business",
        path: "/business",
      },
    ],
  },
};

const Header: React.FC = () => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [nestedHoveredItem, setNestedHoveredItem] = useState<string | null>(
    null
  );
  const [hoverTimeout, setHoverTimeout] = useState<number | undefined>(
    undefined
  );
  const [nestedHoverTimeout, setNestedHoverTimeout] = useState<
    number | undefined
  >(undefined);

  const handleMouseEnter = (item: string) => {
    if (hoverTimeout) clearTimeout(hoverTimeout);
    setHoveredItem(item);

    setNestedHoveredItem(null);
  };

  const handleMouseLeave = () => {
    setHoverTimeout(setTimeout(() => setHoveredItem(null), 2000));
  };

  const handleNestedMouseEnter = (nestedItem: string) => {
    if (nestedHoverTimeout) clearTimeout(nestedHoverTimeout);
    setNestedHoveredItem(nestedItem);
  };

  const handleNestedMouseLeave = () => {
    setNestedHoverTimeout(setTimeout(() => setNestedHoveredItem(null)));
  };

  useEffect(() => {
    return () => {
      if (hoverTimeout) clearTimeout(hoverTimeout);
      if (nestedHoverTimeout) clearTimeout(nestedHoverTimeout);
    };
  }, [hoverTimeout, nestedHoverTimeout]);

  return (
    <div className="bg-black-950 text-white border-b-[1px] border-[#054ADA]">
      <div className="px-[100px] py-[30px] flex flex-row justify-between">
        <div className="flex flex-row items-center gap-10 p-0">
          <Link href="/">
            <img
              src="/images/group.png"
              alt="certbar logo"
              className="w-[150px]"
            />
          </Link>
          <ul className="flex items-center gap-7">
            {Object.keys(menuData).map((key) => (
              <li
                key={key}
                className="flex flex-row items-center gap-1 hover:text-gray-400 cursor-pointer relative"
                onMouseEnter={() => handleMouseEnter(key)}
                onMouseLeave={handleMouseLeave}
              >
                <div className="flex items-center">
                  {menuData[key].label} <IoIosArrowDown size={10} />
                </div>
                {hoveredItem === key && menuData[key].items.length > 0 && (
                  <div
                    className="absolute top-full left-0 mt-2 p-2 bg-gray-950 text-white border border-gray-300 rounded-lg shadow-lg z-10 w-[300px]"
                    onMouseEnter={() =>
                      hoverTimeout && clearTimeout(hoverTimeout)
                    }
                    onMouseLeave={handleMouseLeave}
                  >
                    <ul>
                      {menuData[key].items.map((item, idx) => (
                        <li
                          key={idx}
                          className="hover:bg-gray-600 p-2 relative rounded-lg duration-200"
                          onMouseEnter={() =>
                            item.subItems
                              ? handleNestedMouseEnter(`${key}-${idx}`)
                              : null
                          }
                          onMouseLeave={() =>
                            item.subItems ? handleNestedMouseLeave() : null
                          }
                        >
                          {item.path ? (
                            <Link href={item.path}>{item.label}</Link>
                          ) : (
                            item.label
                          )}
                          {nestedHoveredItem === `${key}-${idx}` &&
                            item.subItems && (
                              <div
                                className="absolute top-0 left-full mt-2 ml-2 p-4 bg-gray-950 text-white border border-gray-300 rounded-lg shadow-lg z-10 w-[300px]"
                                onMouseEnter={() =>
                                  nestedHoverTimeout &&
                                  clearTimeout(nestedHoverTimeout)
                                }
                                onMouseLeave={handleNestedMouseLeave}
                              >
                                <ul>
                                  {item.subItems.map((subItem, subIdx) => (
                                    <li
                                      key={subIdx}
                                      className="hover:bg-gray-600 p-2 cursor-pointer rounded-lg duration-200"
                                    >
                                      <Link href={subItem.path}>
                                        {subItem.label}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <GradientButton variant="border-gradient">
            Free Team Demos
          </GradientButton>
        </div>
      </div>
    </div>
  );
};

export default Header;
