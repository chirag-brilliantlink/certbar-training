"use client";
import SecurityTeam from "@/components/common/ContentTimeSection";
import ContentWithOneSection from "@/components/common/ContentWithOneSection";
import Landing from "@/components/common/ImageWithButtonSection";
import React, { useEffect, useState } from "react";

const fetchDefensiveSecurityData = async (slug: string) => {
  const url = `${process.env.NEXT_PUBLIC_BASE_API_URL}/api/offensive-securities/?filters[slug][$eq]=${slug}&populate=deep`;
  try {
    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_TOKEN}`,
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log("Response data:", data);
    return data.data && data.data.length > 0 ? data.data[0] : null;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
};

const DefensivePage: React.FC<{ params: { slug: string } }> = ({ params }) => {
  const [data, setData] = useState<any>(null); // Update the type as needed

  useEffect(() => {
    const slug = params.slug;

    if (slug) {
      const getData = async () => {
        const fetchedData = await fetchDefensiveSecurityData(slug);
        setData(fetchedData);
      };

      getData();
    }
  }, [params.slug]);

  return (
    <div>
      <Landing data={data?.attributes?.offensive_security_page[0]} />
      <SecurityTeam data={data?.attributes?.offensive_security_page[1]} />
      <ContentWithOneSection
        data={data?.attributes?.offensive_security_page[2]}
      />
      <Landing data={data?.attributes?.offensive_security_page[3]} />
      <Landing data={data?.attributes?.offensive_security_page[4]} />
    </div>
  );
};

export default DefensivePage;
