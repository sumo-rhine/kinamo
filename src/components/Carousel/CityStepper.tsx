import { Box } from "@mui/system";
import React, { useState, useEffect } from "react";
import IconButton from "@mui/material/IconButton";
import { NavigateNext, NavigateBefore } from "@mui/icons-material";
import { connect } from "react-redux";
import Slide from "@mui/material/Slide";
import CarouselItem from "./Carousel-Item";
import { AppState } from "../../models/AppState";
import { City } from "../../models/FullDataset";
import { Slider } from "@mui/material";

interface CityStepperProps {
  cities: City[];
}

const CityStepper: React.FC<CityStepperProps> = (props) => {
  const [index, setIndex] = useState(0);
  const [cities, setCities] = useState<City[]>([]);
  const [slideIn, setSlideIn] = useState(false);
  const [slideDirection, setSlideDirection] = useState("right");

  // const [SelectedCity, setCity] = useState<City | null>(null);

  useEffect(() => {
    console.log(slideIn);
    setIndex(0);
    // setSlideIn(false);
    setCities(props.cities);
  }, [props]);

  const handleNext = () => {
    setIndex(index + 1);
    // setSlideDirection("left");
    // setSlideIn(true);
  };
  const handleBack = () => {
    setIndex(index - 1);
    // setSlideDirection("right");
    // setSlideIn(true);
  };

  if (cities.length > 0) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Box pl={5} sx={{ display: "flex" }}>
          <IconButton disabled={index < 1} onClick={handleBack}>
            <NavigateBefore></NavigateBefore>
          </IconButton>
        </Box>
        {/* <Slide direction="right" in={slideIn}> */}
        <CarouselItem city={cities[index]} />
        {/* </Slide> */}
        <Box pr={5} sx={{ display: "flex" }}>
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
