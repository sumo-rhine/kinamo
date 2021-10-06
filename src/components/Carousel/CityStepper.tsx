import * as React from "react";
import { Box } from "@mui/system";
import { useState, useEffect } from "react";
import { AppState } from "../../models/AppState";
import { City } from "../../models/FullDataset";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import CarouselItem from "./Carousel-Item";
import { connect } from "react-redux";

interface CityStepperProps {
  cities: City[];
}

const CityStepper: React.FC<CityStepperProps> = (props) => {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };
  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };
  //   useEffect(() => {
  //     setActiveStep(0);
  //   }, [props]);
  console.log(props.cities);
  return (
    <Box>
      <CarouselItem city={(props.cities as any)[activeStep]} />
    </Box>
  );
};

const mapStateToProps = (state: AppState) => {
  return {
    cities: state.data.cities,
    debug: state.debug,
  };
};

export default connect(mapStateToProps)(CityStepper);
