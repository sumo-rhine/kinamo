import * as React from "react";
import { Box } from "@mui/system";
import { useState, useEffect } from "react";
import { AppState } from "../../models/AppState";
import { City } from "../../models/FullDataset";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { NavigateNext, NavigateBefore } from "@mui/icons-material";
import StepLabel from "@mui/material/StepLabel";
import CarouselItem from "./Carousel-Item";
import { connect } from "react-redux";

interface CityStepperProps {
  cities: City[];
}

const CityStepper: React.FC<CityStepperProps> = (props) => {
  const [index, setIndex] = React.useState(0);
  const [SelectedCity, setCity] = React.useState<City>(props.cities[index]);

  const handleNext = () => {
    setIndex(index + 1);
    setCity(props.cities[index]);
    // console.log(index);
  };
  const handleBack = () => {
    setIndex(index - 1);
    setCity(props.cities[index]);
    // console.log(index);
  };
  //   useEffect(() => {
  //     setActiveStep(0);
  //   }, [props]);
  console.log(SelectedCity);
  if (props.cities.length > 0) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Box>
          <IconButton disabled={index < 1} onClick={handleBack}>
            <NavigateBefore></NavigateBefore>
          </IconButton>
        </Box>
        <CarouselItem city={SelectedCity} />
        <Box>
          <IconButton disabled={index > 36} onClick={handleNext}>
            <NavigateNext></NavigateNext>
          </IconButton>
        </Box>
      </Box>
    );
  } else {
    return <div>loading</div>;
  }
};

const mapStateToProps = (state: AppState) => {
  return {
    cities: state.data.cities,
    debug: state.debug,
  };
};

export default connect(mapStateToProps)(CityStepper);
