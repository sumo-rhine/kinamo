import React from "react";

import { Box } from "@mui/material";

import Header from "../components/Header";
import Map from "../components/MapBanner";
import CityCarousel from "../components/Carousel/Carousel";
import CityTable from "../components/City-Table/City-Table";


const LandingPage: React.FC = () => {
  return (
    <Box>
      <Header></Header>
      <Map></Map>
      <CityCarousel></CityCarousel>
      <CityTable />
    </Box>
  );
};

export default LandingPage;
