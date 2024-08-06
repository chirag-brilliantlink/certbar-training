import HomePage from "@/section/home/Home";
import Script from "next/script";

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
      <Script
        id="metricool-tracker"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            function loadScript(a){
              var b=document.getElementsByTagName("head")[0],
              c=document.createElement("script");
              c.type="text/javascript",c.src="https://tracker.metricool.com/resources/be.js",
              c.onreadystatechange=a,c.onload=a,
              b.appendChild(c)
            }
            loadScript(function(){
              beTracker.t({hash:"f9b6f20d49429b00163068b520bfd7f5"});
            });
          `,
        }}
      />
      <HomePage data={data} />
    </main>
  );
}
