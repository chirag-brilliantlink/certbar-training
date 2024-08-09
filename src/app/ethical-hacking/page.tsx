import ContentWithTagsSection from "@/components/common/ ContentWithTag";
import CardWithListSection from "@/components/common/ContentWithList";
import ContentWithOneSection from "@/components/common/ContentWithOneSection";
import ContentWithTwoSections from "@/components/common/ContentWithTwoSection";
import Landing from "@/components/common/ImageWithButtonSection";

import React from "react";

async function fetchData() {
  const url = `${process.env.NEXT_PUBLIC_BASE_API_URL}/api/ethical-hacking?populate=deep`;

  try {
    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_TOKEN}`,
      },
      cache: "no-store",
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
      <CardWithListSection data={data.data.attributes.ethical_hacking[0]} />
      <ContentWithTwoSections data={data.data.attributes.ethical_hacking[1]} />
      <ContentWithOneSection data={data.data.attributes.ethical_hacking[2]} />
      <ContentWithTagsSection data={data.data.attributes.ethical_hacking[3]} />
      <CardWithListSection data={data.data.attributes.ethical_hacking[4]} />
      <Landing data={data.data.attributes.ethical_hacking[5]} />
    </section>
  );
};

export default page;
