import React from "react";

import { Box } from "@mui/material";

import Header from "../components/Header";
import AnimationBanner from "../components/AnimationBanner";
import CityCarousel from "../components/Carousel/Carousel";
import CityTable from "../components/City-Table/City-Table";
import SelectCityTabs from "../components/SelectCityTabs";
import DividerOverview from "../components/DividerOverview";
const LandingPage: React.FC = () => {
  return (
    <Box>
      <Header></Header>
      <AnimationBanner></AnimationBanner>
      <CityCarousel></CityCarousel>
      <DividerOverview />
      <CityTable />
    </Box>
  );
};

export default LandingPage;
