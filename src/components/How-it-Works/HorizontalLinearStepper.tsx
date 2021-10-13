import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { Typography } from "@mui/material";
import { Button, Stack } from "@mui/material";
import { ClosedCaptionDisabledOutlined } from "@mui/icons-material";
import { AboutSuMoProject, AboutIndicators, AboutKeyFigures } from "./About";
import { AppState } from "../../models/AppState";
import { City } from "../../models/FullDataset";
import { connect } from "react-redux";
import Fade from "@mui/material/Fade";
import { useEffect } from "react";

// import { AboutProps } from "./About.model";
const steps = [
  "What is KINaMo and how to use it?",
  "Indicators and Key Figures",
  "Scoring",
];

interface HorizontalLinearStepperProps {
  cities: City[];
}

const HorizontalLinearStepper: React.FC<HorizontalLinearStepperProps> = (
  props
) => {
  const [activeStep, setActiveStep] = React.useState(0);
  const [slide, setSlide] = React.useState(true);

  const handleNext = () => {
    setSlide(false);
    setTimeout(() => {
      setActiveStep(activeStep + 1);
      setSlide(true);
    }, 300);
  };
  useEffect(() => {
    // console.log(slideIn);
    // setIndex(0);
    // setSlide(true);
    // setCities(props.cities);
  }, [props]);

  const handleBack = () => {
    setSlide(false);
    // setSlide(true);
    setTimeout(() => {
      setActiveStep(activeStep - 1);
      setSlide(true);
    }, 300);
  };

  return (
    <Box
      mb={9}
      sx={{
        display: "flex",
        justifyContent: "flex-start",
        minHeight: 600,
        width: "100%",
      }}
    >
      <Box mt={20} ml={10}>
        <Stepper activeStep={activeStep} orientation="vertical">
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>
                {
                  <Typography variant="h6" fontWeight="fontWeightLight">
                    {label}
                  </Typography>
                }
              </StepLabel>
            </Step>
          ))}
        </Stepper>
        <Box sx={{ display: "flex", justifyContent: "flex-start" }}>
          <Stack mt={10} direction="row" spacing={2}>
            <Button
              variant="outlined"
              disabled={activeStep < 1}
              onClick={handleBack}
            >
              Back
            </Button>
            <Button
              variant="outlined"
              disabled={activeStep > 1}
              onClick={handleNext}
            >
              Next
            </Button>
          </Stack>
        </Box>
      </Box>
      <Box mt={10} ml={10} sx={{ width: "60%" }}>
        {(() => {
          if (activeStep === 0) {
            return (
              <Box>
                <Fade in={slide}>
                  <Box>
                    <AboutSuMoProject />
                  </Box>
                </Fade>
              </Box>
            );
          }
          if (activeStep === 1)
            return (
              <Box>
                <Fade in={slide}>
                  <Box>
                    <AboutIndicators city={props.cities[0]} />
                  </Box>
                </Fade>
              </Box>
            );
          if (activeStep === 2)
            return (
              <Box>
                <Fade in={slide}>
                  <Box>
                    <AboutKeyFigures />
                  </Box>
                </Fade>
              </Box>
            );
        })()}
      </Box>
    </Box>
  );
};

const mapStateToProps = (state: AppState) => {
  return {
    cities: state.data.cities,
    debug: state.debug,
  };
};

export default connect(mapStateToProps)(HorizontalLinearStepper);
