import React from "react";
import { Box } from "@material-ui/core";
import Header from "../components/Header";

import AnimationBanner from "../components/AnimationBanner";
import CityCarousel from "../components/Carousel";
import CityTable from "../components/Table";
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
