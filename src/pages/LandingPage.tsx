import React from "react";
import { Box } from "@material-ui/core";
import Header from "../components/Header";
import Map from "../components/MapBanner";
import CityCarousel from "../components/Carousel/Carousel";
import CityTable from "../components/Table";

const LandingPage: React.FC = () => {
  return (
    <Box>
      <Header></Header>
      <Map></Map>
      <CityCarousel></CityCarousel>
      <CityTable></CityTable>
    </Box>
  );
};

export default LandingPage;
