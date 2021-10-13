import { Box } from "@mui/system";
import React, { useState, useEffect } from "react";
import IconButton from "@mui/material/IconButton";
import { NavigateNext, NavigateBefore } from "@mui/icons-material";
import { connect } from "react-redux";
import Slide from "@mui/material/Slide";
import CarouselItem from "./Carousel-Item";
import { AppState } from "../../models/AppState";
import { City } from "../../models/FullDataset";
// import { Slider } from "@mui/material";
import { cloneDeep } from "lodash";

interface CityStepperProps {
  cities: City[];
}

const CityStepper: React.FC<CityStepperProps> = (props) => {
  const [index, setIndex] = useState(0);
  const [cities, setCities] = useState<City[]>([]);
  const [slideIn, setSlideIn] = useState(false);
  const [slideDirection, setSlideDirection] = useState<"left" | "right">(
    "right"
  );

  // const [SelectedCity, setCity] = useState<City | null>(null);
  const [city, setCity] = useState<City | null>(null);

  const handleNext = () => {
    // This defines how to exit the current slide:
    // in=false == fly out; to the left
    setSlideDirection("left");
    setSlideIn(false);

    // 500ms later the Transition is started AGAIN:
    // in = true == fly in; from the right
    setTimeout(() => {
      setIndex(index + 1);
      setSlideDirection("right");
      setSlideIn(true);
    }, 500);
  };
  useEffect(() => {
    // console.log(slideIn);
    setIndex(0);
    setSlideIn(true);
    setCities(props.cities);
  }, [props]);

  const handleBack = () => {
    // exit action -> fly out to the right
    setSlideDirection("right");
    setSlideIn(false);

    // 500ms later in action -> fly in from left
    setTimeout(() => {
      setIndex(index - 1);
      setSlideDirection("left");
      setSlideIn(true);
    }, 500);
  };

  if (cities.length > 0) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Box
          pl={5}
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <IconButton disabled={index < 1} onClick={handleBack}>
            <NavigateBefore></NavigateBefore>
          </IconButton>
        </Box>
        <Slide direction={slideDirection} in={slideIn}>
          <Box sx={{ width: 1 }}>
            <CarouselItem city={cities[index]} />
          </Box>
        </Slide>
        <Box
          pr={5}
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
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
