import React from "react";
import { Box } from "@material-ui/core";
import Header from "../components/Header";
import Map from "../components/MapBanner";
import CityCarousel from "../components/Carousel";
const LandingPage: React.FC = () => {
  return (
    <Box>
      <Header></Header>
      <Map></Map>
      <CityCarousel></CityCarousel>
    </Box>
  );
};

export default LandingPage;
