import { Box } from "@mui/system";
import React, { useState, useEffect } from "react";
import IconButton from "@mui/material/IconButton";
import { NavigateNext, NavigateBefore } from "@mui/icons-material";
import { connect } from "react-redux";
import Slide from "@mui/material/Slide";
import CarouselItem from "./Carousel-Item";
import { AppState } from "../../models/AppState";
import { City } from "../../models/FullDataset";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";

// import { Slider } from "@mui/material";

interface CityStepperProps {
  cities: City[];
}

const randomInt = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const CityStepper: React.FC<CityStepperProps> = (props) => {
  const [index, setIndex] = useState(0);
  const [cities, setCities] = useState<City[]>([]);
  const [slideIn, setSlideIn] = useState(false);
  const [slideDirection, setSlideDirection] = useState<"left" | "right">(
    "right"
  );

  const handleRandom = () => {
    setSlideDirection("left");
    setSlideIn(false);
    setTimeout(() => {
      setIndex(randomInt(0, 35));
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
      <Box>
        {/* <Box sx={{ display: "flex", backgroundColor: "#F8F8F8" }}>
          <Typography mt={2} ml={6} variant="h5" fontWeight="fontWeightLight">
            Entdecke die Städte
          </Typography> */}
        {/* </Box> */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            backgroundColor: "#F8F8F8",
            overflow: "hidden",
          }}
        >
          {/* <Box sx={{ position: "absolute", left: 0 }}>
          <Typography variant="h5" fontWeight="fontWeightLight">
            Entdecke Städte in der Oberrheinregion
          </Typography>
        </Box> */}
          <Box
            pl={5}
            sx={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <IconButton
              size="large"
              // edge="end"
              disabled={index < 1}
              onClick={handleBack}
              sx={{ backgroundColor: "grey" }}
            >
              <NavigateBefore
                style={{ transform: "scale(2.2)" }}
              ></NavigateBefore>
            </IconButton>
          </Box>
          <Slide direction={slideDirection} in={slideIn}>
            <Box sx={{ width: 1 }}>
              <CarouselItem city={cities[index]} nextHandler={handleRandom} />
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
            <IconButton
              size="large"
              disabled={index === 35}
              onClick={handleNext}
            >
              <NavigateNext style={{ transform: "scale(2.2)" }}></NavigateNext>
            </IconButton>
          </Box>
        </Box>
      </Box>
    );
  } else {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: 300,
        }}
      >
        <CircularProgress />
      </Box>
    );
  }
};

const mapStateToProps = (state: AppState) => {
  return {
    cities: state.data.cities,
    debug: state.debug,
  };
};

export default connect(mapStateToProps)(CityStepper);
