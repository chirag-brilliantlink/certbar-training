"use client";
import React, { useState, useEffect } from "react";
import { IoIosArrowDown } from "react-icons/io";
import GradientButton from "../common/gradientButton";
import Link from "next/link";
import ContactModal from "../common/FormModal";
import HamburgerMenu from "../common/MobileMenu";
import { useRouter } from "next/router";

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
  [key: string]: {
    label: string;
    items: Item[];
  };
};

const fetchData = async () => {
  const businessUrl = `${process.env.NEXT_PUBLIC_BASE_API_URL}/api/business-navs?populate=deep`;
  const individualsUrl = `${process.env.NEXT_PUBLIC_BASE_API_URL}/api/individuals?populate=deep`;

  try {
    const businessResponse = await fetch(businessUrl, {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_TOKEN}`,
      },
      next: { revalidate: 0 },
    });

    const individualsResponse = await fetch(individualsUrl, {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_TOKEN}`,
      },
      next: { revalidate: 0 },
    });

    if (!businessResponse.ok || !individualsResponse.ok) {
      throw new Error(
        `HTTP error! status: ${
          !businessResponse.ok
            ? businessResponse.status
            : individualsResponse.status
        }`
      );
    }

    const businessData = await businessResponse.json();
    const individualsData = await individualsResponse.json();

    return { businessData, individualsData };
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
};
const Header: React.FC = () => {
  const [menuData, setMenuData] = useState<MenuData | null>(null);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [nestedHoveredItem, setNestedHoveredItem] = useState<string | null>(
    null
  );
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isHamOpen, setIsHamOpen] = useState(false);

  useEffect(() => {
    const getData = async () => {
      const fetchedData = await fetchData();
      if (fetchedData) {
        const { businessData, individualsData } = fetchedData;

        const generateSubItemPath = (category: string, slug: string) => {
          switch (category) {
            case "Defensive Security":
              return `/defensive/${slug}`;
            case "Offensive Security":
              return `/offensive/${slug}`;
            default:
              return `/path/${slug}`; // Fallback for other categories
          }
        };

        const menu: MenuData = {
          individuals: {
            label: "For Individuals",
            items: individualsData.data.map((item: any) => ({
              id: item.id,
              label: item.attributes.Category,
              path: item.attributes.LinkTo,
              description: item.attributes.description,
              subItems: item.attributes.sub_individuals.data.map(
                (sub: any) => ({
                  id: sub.id,
                  label: sub.attributes.sub_field_context,
                  path: generateSubItemPath(
                    item.attributes.Category,
                    sub.attributes.slug
                  ),
                })
              ),
            })),
          },
          business: {
            label: "For Business",
            items: businessData.data.map((item: any) => ({
              id: item.id,
              label: item.attributes.Category,
              path: item.attributes.LinkTo,
              description: item.attributes.description,
              subItems: item.attributes.sub_individuals?.data?.map(
                (sub: any) => ({
                  id: sub.id,
                  label: sub.attributes.sub_field_context,
                  path: generateSubItemPath(
                    item.attributes.Category,
                    sub.attributes.slug
                  ),
                })
              ),
            })),
          },
        };

        setMenuData(menu);
      }
    };

    getData();
  }, []);

  useEffect(() => {
    // Lock the body scroll when hamburger menu is open
    document.body.style.overflow = isHamOpen ? "hidden" : "auto";

    return () => {
      // Reset the body scroll when component unmounts or menu is closed
      document.body.style.overflow = "auto";
    };
  }, [isHamOpen]);

  const handleMouseEnter = (item: string) => {
    setHoveredItem(item);
    setNestedHoveredItem(null); // Reset the nested hover when hovering a new item
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
    setNestedHoveredItem(null);
  };

  const handleNestedMouseEnter = (nestedItem: string, hasSubItems: boolean) => {
    if (hasSubItems) {
      setNestedHoveredItem(nestedItem);
    } else {
      setNestedHoveredItem(null); // Clear nested hover if there are no sub-items
    }
  };

  useEffect(() => {
    return () => {
      setHoveredItem(null);
      setNestedHoveredItem(null);
    };
  }, []);

  if (!menuData) return null;

  return (
    <div className="bg-black-950 text-white border-b-[1px] border-[#054ADA]">
      <div className="px-[20px] sm:px-[40px] md:px-[80px] xl:px-[100px] py-[30px] flex flex-row justify-between">
        <div className="flex flex-row items-center gap-10 p-0">
          <Link href="/">
            <img
              src="/images/group.png"
              alt="certbar logo"
              className="w-[100px] xl:w-[150px]"
            />
          </Link>
          <ul className="flex items-center gap-7">
            {Object.keys(menuData).map((key) => (
              <li
                key={key}
                className="flex flex-row items-center gap-1 hover:text-gray-400 cursor-pointer relative"
                onMouseEnter={() => handleMouseEnter(key)}
              >
                <div className="hidden md:flex items-center text-[14px] md:text-[16px]">
                  {menuData[key].label} <IoIosArrowDown size={10} />
                </div>
                {hoveredItem === key && menuData[key].items.length > 0 && (
                  <div
                    className="absolute top-full left-0 mt-2 p-2 bg-gray-950 text-white border border-gray-900 rounded-lg shadow-lg z-10 w-[300px]"
                    onMouseEnter={() => setHoveredItem(key)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <ul>
                      {menuData[key].items.map((item, idx) => (
                        <li
                          key={item.id}
                          className="hover:bg-gray-900 p-2 relative rounded-lg duration-200"
                          onMouseEnter={() =>
                            handleNestedMouseEnter(
                              `${key}-${idx}`,
                              !!item.subItems && item.subItems.length > 0
                            )
                          }
                        >
                          {item.path ? (
                            <Link
                              href={item.path}
                              className="flex flex-col gap-3"
                            >
                              {item.label}{" "}
                              <h6 className="text-[12px] text-gray-500">
                                {item.description}
                              </h6>
                            </Link>
                          ) : (
                            <div className="flex flex-col gap-3">
                              {item.label}
                              <h6 className="text-[12px] text-gray-500">
                                {item.description}
                              </h6>
                            </div>
                          )}
                          {nestedHoveredItem === `${key}-${idx}` &&
                            item.subItems &&
                            item.subItems.length > 0 && (
                              <div
                                className="absolute top-0 left-full mt-2 ml-2 p-2 bg-gray-950 text-white border border-gray-900 rounded-lg shadow-lg z-10 w-[300px]"
                                onMouseEnter={() =>
                                  setNestedHoveredItem(`${key}-${idx}`)
                                }
                              >
                                <ul className="flex flex-col gap-2">
                                  {item.subItems.map((subItem, index) => (
                                    <Link
                                      href={subItem.path || "#"}
                                      className="cursor-pointer"
                                      key={index}
                                    >
                                      <li
                                        key={subItem.id}
                                        className="hover:bg-gray-900 p-4  rounded-lg duration-200"
                                      >
                                        {subItem.label}
                                      </li>
                                    </Link>
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
        <div className="hidden md:flex">
          <GradientButton
            variant="border-gradient"
            onClick={() => setIsModalOpen(true)}
          >
            Free Team Demos
          </GradientButton>
        </div>
        <div
          className="flex flex-col items-center justify-center md:hidden gap-1 z-[999]"
          onClick={() => setIsHamOpen((prev) => !prev)}
        >
          <span className="bg-white h-[1px] w-5"></span>
          <span className="bg-white h-[1px] w-5"></span>
          <span className="bg-white h-[1px] w-5"></span>
        </div>
        <ContactModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
        {isHamOpen && (
          <HamburgerMenu
            individualsData={menuData.individuals}
            businessData={menuData.business}
          />
        )}
        {isHamOpen && (
          <div className="fixed top-0 left-0 w-full h-full bg-black-950 bg-opacity-80 z-40"></div>
        )}
      </div>
    </div>
  );
};

export default Header;
