import ContentWithTagsSection from "@/components/common/ ContentWithTag";
import SecurityTeam from "@/components/common/ContentTimeSection";
import ContentWithOneSection from "@/components/common/ContentWithOneSection";
import Landing from "@/components/common/ImageWithButtonSection";
import MarqueeComponent from "@/components/common/MarqueeSliderComponent";
import React from "react";

async function fetchData() {
  const url = `${process.env.NEXT_PUBLIC_BASE_API_URL}/api/business?populate=deep`;

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
      <Landing data={data.data.attributes.business_page[0]} />
      <MarqueeComponent data={data.data.attributes.business_page[1]} />
      <SecurityTeam data={data.data.attributes.business_page[2]} />
      <ContentWithOneSection data={data.data.attributes.business_page[3]} />
      <ContentWithTagsSection data={data.data.attributes.business_page[4]} />
    </section>
  );
};

export default page;
