"use client";
import CoursesSection from "@/components/common/CourseSection";
import Training from "@/components/common/IconWithCardSection";
import Landing from "@/components/common/ImageWithButtonSection";
import React from "react";

async function fetchData() {
  const url = `${process.env.NEXT_PUBLIC_BASE_API_URL}/api/career-path?populate=deep`;

  try {
    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_TOKEN}`,
      },
      next: { revalidate: 0 },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
}

const page = async () => {
  const data = await fetchData();
  return (
    <section>
      <Landing data={data.data.attributes.career_path_page[0]} />
      <Landing data={data.data.attributes.career_path_page[1]} />
      <CoursesSection data={data.data.attributes.career_path_page[2]} />
      <Training data={data.data.attributes.career_path_page[3]} />
    </section>
  );
};

export default page;
