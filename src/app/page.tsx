import Training from "@/section/home/training";
import Landing from "@/section/home/landing";
import Learn from "@/section/home/learn";
import MarqueeComponent from "@/section/home/trustSlider";
import Team from "@/section/home/team";
import Standout from "@/section/home/standout";
import CertTeam from "@/section/home/certTeam";

export default function Home() {
  return (
    <main>
      <Landing />
      <MarqueeComponent />
      <Learn />
      <Training />
      <Team />
      <Standout />
      <CertTeam />
    </main>
  );
}
