import React from "react";
import Landing from "@/components/common/ImageWithButtonSection";
import MarqueeComponent from "@/components/common/MarqueeSliderComponent";
import Learn from "@/components/common/DropdownWithImage";
import Training from "@/components/common/IconWithCardSection";
import CoursesSection from "@/components/common/CourseSection";
import TeamPopupSection from "@/components/common/ProfileSection";

interface HomePageProps {
  data: {
    data: {
      attributes: any;
    };
  };
}

const HomePage: React.FC<HomePageProps> = ({ data }) => {
  return (
    <section>
      <Landing data={data.data.attributes.home_page[0]} />
      <MarqueeComponent data={data.data.attributes.home_page[1]} />
      <Learn data={data.data.attributes.home_page[2]} />
      <Training data={data.data.attributes.home_page[3]} />
      <Landing data={data.data.attributes.home_page[4]} />
      <Training data={data.data.attributes.home_page[5]} />
      <CoursesSection data={data.data.attributes.home_page[7]} />
      <TeamPopupSection data={data.data.attributes.home_page[6]} />
    </section>
  );
};

export default HomePage;
