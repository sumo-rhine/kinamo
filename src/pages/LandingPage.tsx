import React from "react";
import Header from "../components/Header";
import Map from "../components/MapBanner";
// import MapBanner from "../components/MapBanner";
import { Box } from "@material-ui/core";

const LandingPage: React.FC = () => {
  return (
    <Box>
      <Header></Header>
      <Map></Map>
    </Box>
  );
};

export default LandingPage;
