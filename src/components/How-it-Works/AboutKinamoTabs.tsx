import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { Typography } from "@mui/material";
import { Button, Stack } from "@mui/material";
// import { AboutSuMoProject, AboutIndicators, AboutKeyFigures } from "./About";
import AboutScoring from "./AboutScoring";
import AboutIndicators from "./AboutIndicators";
import AboutSuMoProject from "./AboutSuMoProject";
import { AppState } from "../../models/AppState";
import { City } from "../../models/FullDataset";
import { connect } from "react-redux";
import Fade from "@mui/material/Fade";
import { useEffect } from "react";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Tab from "@mui/material/Tab";

// import { AboutProps } from "./About.model";
const steps = [
  "Was ist KINaMo?",
  "Indikatoren und Kennzahlen",
  "Interaktives Beispiel zur Indikatorenberechnung",
];

interface AboutKinamoTabsProps {
  cities: City[];
}

const AboutKinamoTabs: React.FC<AboutKinamoTabsProps> = (props) => {
  const [activeStep, setActiveStep] = React.useState("kinamo");
  const [slide, setSlide] = React.useState(true);

  const handleChange = (event: React.SyntheticEvent, newTab: string) => {
    setActiveStep(newTab);
  };

  // const handleNext = () => {
  //   setSlide(false);
  //   setTimeout(() => {
  //     setActiveStep(activeStep + 1);
  //     setSlide(true);
  //   }, 300);
  // };

  // const handleBack = () => {
  //   setSlide(false);
  //   setTimeout(() => {
  //     setActiveStep(activeStep - 1);
  //     setSlide(true);
  //   }, 300);
  // };

  return (
    <TabContext value={activeStep}>
      <Box
        pb={9}
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          minHeight: 600,
          width: "100%",
        }}
      >
        <Box mt={40} ml={10} sx={{ width: 300 }}>
          <TabList
            onChange={handleChange}
            aria-label="Was ist KINaMo"
            orientation="vertical"
            centered
          >
            <Tab label="Was ist KINaMo?" value="kinamo" />
            <Tab label="Indikatoren und Kennzahlen" value="indicators" />
            <Tab
              label="Interaktives Beispiel zur Indikatorenberechnung"
              value="scoring"
            />
          </TabList>
        </Box>
        <Box mt={5} ml={10} sx={{ width: "70%" }}>
          {(() => {
            if (activeStep === "kinamo") {
              return (
                <TabPanel value={activeStep}>
                  {/* <Fade in={slide}> */}
                  <Box>
                    <AboutSuMoProject />
                  </Box>
                  {/* </Fade> */}
                </TabPanel>
              );
            }
            if (activeStep === "indicators")
              return (
                <TabPanel value={activeStep}>
                  {/* <Fade in={slide}> */}
                  <Box>
                    <AboutIndicators city={props.cities[0]} />
                  </Box>
                  {/* </Fade> */}
                </TabPanel>
              );
            if (activeStep === "scoring")
              return (
                <TabPanel value={activeStep}>
                  {/* <Fade in={slide}> */}
                  <Box>
                    <AboutScoring />
                  </Box>
                  {/* </Fade> */}
                </TabPanel>
              );
          })()}
        </Box>
      </Box>
    </TabContext>
  );
};

const mapStateToProps = (state: AppState) => {
  return {
    cities: state.data.cities,
    debug: state.debug,
  };
};

export default connect(mapStateToProps)(AboutKinamoTabs);
