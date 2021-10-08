import React from "react";
import { Box } from "@mui/material";
import Header from "../components/Header/Header";
// import RandomAnim from "../components/AnimationBanner/AnimationBanner";
import RandomAnimationBanner from "../components/AnimationBanner/RandomAnimationBanner";
// import AnimationBanner from "../components/AnimationBanner/AnimationBanner";
import CityCarousel from "../components/Carousel/Carousel";
import CityTable from "../components/City-Table/City-Table";
import SelectCityTabs from "../components/Header/SelectCityTabs";
import DividerOverview from "../components/DividerOverview";
import About from "../components/How-it-Works/HowItWorks";
import CityStepper from "../components/Carousel/CityStepper";
const LandingPage: React.FC = () => {
  return (
    <Box>
      <Header cityName="select your City"></Header>
      <RandomAnimationBanner></RandomAnimationBanner>
      {/* <AnimationBanner cityId={102} /> */}
      {/* <CityCarousel></CityCarousel> */}
      <CityStepper />
      <About />
      <DividerOverview />
      <CityTable />
    </Box>
  );
};

export default LandingPage;
