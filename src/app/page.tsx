import Training from "@/section/home/training";
import Landing from "@/section/home/landing";
import Learn from "@/section/home/learn";
import MarqueeComponent from "@/section/home/trustSlider";

export default function Home() {
  return (
    <main>
      <Landing />
      <MarqueeComponent />
      <Learn />
      <Training />
    </main>
  );
}
