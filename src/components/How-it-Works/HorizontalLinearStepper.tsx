import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import { Button } from "@mui/material";
import { ClosedCaptionDisabledOutlined } from "@mui/icons-material";
import { AboutSuMoProject, AboutIndicators, AboutKeyFigures } from "./About";
const steps = ["What is the SuMo Rhine Project?", "Indicators", "Key Figures"];

const HorizontalLinearStepper = () => {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };
  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  console.log(activeStep);

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      <Box mt={10}>
        <Stepper activeStep={activeStep} orientation="vertical">
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <Box mt={15}>
          <Button disabled={activeStep > 1} onClick={handleNext}>
            Next
          </Button>
          <Button disabled={activeStep < 1} onClick={handleBack}>
            Back
          </Button>
        </Box>
      </Box>
      <Box>
        {(() => {
          if (activeStep === 0) {
            return (
              <Box>
                <AboutSuMoProject />
              </Box>
            );
          }
          if (activeStep === 1)
            return (
              <Box>
                <AboutIndicators />
              </Box>
            );
          if (activeStep === 2)
            return (
              <Box>
                <AboutKeyFigures />
              </Box>
            );
        })()}
      </Box>
    </Box>
  );
};

export default HorizontalLinearStepper;
