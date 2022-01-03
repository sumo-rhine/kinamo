import React from "react";
import { Box } from "@mui/material";
import Header from "../components/Header/Header";
import RandomAnimationBanner from "../components/AnimationBanner/RandomAnimationBanner";
import XDataTable from "../components/City-Table/x-Data-Grid";
import DividerOverview from "../components/DividerOverview";
import About from "../components/How-it-Works/HowItWorks";
import CityStepper from "../components/Carousel/CityStepper";
import { useState, useEffect } from "react";
import Footer from "../components/Footer/Footer";
import MobileMessage from "../components/MobileMessage";
const LandingPage: React.FC = () => {
  const [active, setActive] = useState(false);
  // const [windowWidth, setWindowWidth] = useState<undefined | number>(1500);

  // useEffect(() => {
  //   setWindowWidth(window.innerWidth);
  //   // console.log(windowWidth);
  // }, []);

  return (
    <Box>
      {window.innerWidth! >= 1200 ? (
        <Box>
          <div id="top" />
          <Header cityName="wähle deine Kommune"></Header>
          <RandomAnimationBanner></RandomAnimationBanner>
          <CityStepper />
          <About value={active} setter={setActive} />
          <DividerOverview />
          <XDataTable />
          {/* <CityTable /> */}
          <Footer />
        </Box>
      ) : (
        <MobileMessage />
      )}
    </Box>
  );
};

export default LandingPage;
