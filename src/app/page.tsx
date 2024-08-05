import HomePage from "@/section/home/Home";

async function fetchData() {
  const url = `${process.env.NEXT_PUBLIC_BASE_API_URL}/api/home?populate=deep`;

  try {
    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_TOKEN}`,
        "Cache-Control": "no-cache",
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null; // Return null or default data in case of an error
  }
}

export default async function Home() {
  const data = await fetchData();
  return (
    <main>
      <HomePage data={data} />
    </main>
  );
}
