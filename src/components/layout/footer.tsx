"use client";
import React, { useState, useEffect } from "react";
import GradientButton from "../common/gradientButton";
import { FiInstagram } from "react-icons/fi";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io";
import { BsFillThreadsFill } from "react-icons/bs";

type SubItem = {
  id: number;
  label: string;
  path: string;
};

type Item = {
  id: number;
  label: string;
  path: string | null;
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

const Footer = () => {
  const [menuData, setMenuData] = useState<MenuData | null>(null);
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);

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

  const handleDropdownToggle = (id: number) => {
    setOpenDropdown(openDropdown === id ? null : id);
  };

  if (!menuData) return null;

  return (
    <div className="bg-black-950 text-white">
      <div className="px-5 sm:px-10 md:px-20 xl:px-24 py-8">
        <div className="w-full flex flex-col xl:flex-row items-center pb-12 gap-10">
          <div className="w-full xl:w-1/2">
            <h1 className="text-2xl md:text-3xl xl:text-4xl">
              Start <span className="gradient-text">cybersecurity</span>{" "}
              training for <span className="gradient-text">free</span> today
            </h1>
            <p className="w-full xl:w-2/3 text-gray-400 pt-5 ">
              Join over 3 million professionals and 96% of Fortune 1000
              companies improving their cybersecurity training & capabilities
              with Certbar.
            </p>
          </div>
          <div
            className="w-full xl:w-1/2 p-5 md:p-8 xl:p-12 bg-white text-black-950 rounded-xl"
            style={{
              boxShadow: `
                  0 4px 15px 0 rgba(0, 174, 239, 1),
                  0 4px 15px 0 rgba(5, 74, 218, 1),
                  0 4px 15px 0 rgba(2, 37, 112, 1)
                `,
            }}
          >
            <h1 className="text-2xl pb-5">Talk With Us?</h1>
            <div className="border w-full flex items-center p-2 rounded-lg justify-between">
              <input
                type="text"
                placeholder="name@email.com"
                className="focus:outline-none pl-0 xl:pl-5 text-base"
              />
              <GradientButton variant="bg-gradient">Contact Us</GradientButton>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-12 border-t border-gray-400">
          <div className="flex flex-col md:flex-row w-full gap-10 justify-between">
            <div className="w-[40%] flex flex-col gap-10 justify-between">
              <img
                src="/images/group.png"
                alt="certbar logo"
                className="w-36"
              />
              <p className="text-[14px] md:text-[16px] text-gray-300">
                Our commitment to excellence goes beyond serving our clients. We
                believe that by continuously enhancing our own expertise and
                methodologies, we can better support and empower your
                organization.
              </p>
              <div className="flex gap-4">
                <Link href="https://www.instagram.com/certbar.training">
                  <FiInstagram size={25} />
                </Link>
                <Link href="https://www.instagram.com/certbar.training">
                  <FaFacebook size={25} />
                </Link>
                <Link href="https://www.linkedin.com/company/certbar-training">
                  <FaLinkedin size={25} />
                </Link>
                <Link href="https://www.threads.net/@certbar.training">
                  <BsFillThreadsFill size={25} />
                </Link>
              </div>
            </div>
            <div className="flex flex-wrap flex-row w-[60%] items-start justify-start md:justify-around gap-[20px]">
              {Object.keys(menuData).map((key) => (
                <div key={key}>
                  <h1 className="text-lg">{menuData[key].label}</h1>
                  <ul className="text-gray-400 flex flex-col gap-3 pt-3 text-sm">
                    {menuData[key].items.map((item) => (
                      <li key={item.id} className="relative">
                        <div
                          onClick={() => handleDropdownToggle(item.id)}
                          className="flex items-center cursor-pointer gap-5"
                        >
                          <span>
                            {item.path ? (
                              <Link
                                href={item.path}
                                className="flex flex-col gap-1  hover:text-white"
                              >
                                {item.label}
                              </Link>
                            ) : (
                              <span className="flex flex-col gap-1  hover:text-white">
                                {item.label}
                              </span>
                            )}
                          </span>
                          {item.subItems && item.subItems.length > 0 && (
                            <IoIosArrowDown
                              size={12}
                              className={`transition-transform ${
                                openDropdown === item.id ? "rotate-180" : ""
                              }`}
                            />
                          )}
                        </div>
                        {item.subItems && item.subItems.length > 0 && (
                          <div
                            className={`mt-2 p-2  rounded-lg shadow-lg z-10 w-64 ${
                              openDropdown === item.id ? "block" : "hidden"
                            }`}
                          >
                            <ul className="flex flex-col gap-2">
                              {item.subItems.map((subItem) => (
                                <li
                                  key={subItem.id}
                                  className="cursor-pointer text-white hover:text-blue-300"
                                >
                                  <Link href={subItem.path}>
                                    ● {subItem.label}
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
              ))}
            </div>
          </div>
        </div>
        <div className="border-t-[1px] mt-[50px] pt-[20px]">
          <h1>
            Copyright © 2019 - 2024 Certbar Security Pvt. Ltd. All rights
            reserved.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Footer;
