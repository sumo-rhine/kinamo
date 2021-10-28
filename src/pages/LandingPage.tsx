import React from "react";
import { Box } from "@mui/material";
import Header from "../components/Header/Header";
import RandomAnimationBanner from "../components/AnimationBanner/RandomAnimationBanner";
import CityTable from "../components/City-Table/City-Table";
import DividerOverview from "../components/DividerOverview";
import About from "../components/How-it-Works/HowItWorks";
import CityStepper from "../components/Carousel/CityStepper";
import { useState } from "react";

const LandingPage: React.FC = () => {
  const [active, setActive] = useState(false);

  return (
    <Box>
      <div id="top" />
      <Header
        // value={active}
        // setter={setActive}
        cityName="select your City"
      ></Header>
      <RandomAnimationBanner></RandomAnimationBanner>
      <CityStepper />
      <About value={active} setter={setActive} />
      <DividerOverview />
      <CityTable />
    </Box>
  );
};

export default LandingPage;
