/* tslint:disable */

import React from "react";
import Header from "../components/Header/Header";
import AnimationBanner from "../components/AnimationBanner/AnimationBanner";
import CityTab from "../components/CityTab/CityTab";
import { Box } from "@mui/system";

const SamplePage: React.FC = () => {
  return (
    <Box>
      <Header cityName={"testCity"}></Header>
      <AnimationBanner cityId={102}></AnimationBanner>
      <CityTab></CityTab>
    </Box>
  );
};

export default SamplePage;
