import React from "react";

import { Box } from "@mui/material";

import Header from "../components/Header";
import AnimationBanner from "../components/AnimationBanner";
import CityCarousel from "../components/Carousel/Carousel";
import CityTable from "../components/City-Table/City-Table";
import SelectCityTabs from "../components/SelectCityTabs";

const LandingPage: React.FC = () => {
  return (
    <Box>
      <Header></Header>
      {/* <SelectCityTabs></SelectCityTabs> */}
      <AnimationBanner></AnimationBanner>
      <CityCarousel></CityCarousel>
      <CityTable />
    </Box>
  );
};

export default LandingPage;
