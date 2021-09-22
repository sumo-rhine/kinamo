import React from "react";
import { Box } from "@material-ui/core";
import Header from "../components/Header";
import Map from "../components/MapBanner";
import CityCarousel from "../components/Carousel";
import CityTable from "../components/Table";
import AnimationBanner from "../components/AnimationBanner";
const LandingPage: React.FC = () => {
  return (
    <Box>
      <Header></Header>
      <AnimationBanner></AnimationBanner>
      <CityCarousel></CityCarousel>
      <CityTable></CityTable>
    </Box>
  );
};

export default LandingPage;
