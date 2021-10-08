import { Box } from "@mui/system";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { Typography } from "@mui/material";
import { Link } from "@mui/material";
import { City } from "../../models/FullDataset";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Icon from "@mui/material/Icon";
import React, { useState } from "react";
import { AboutProps } from "./About.model";
interface CityTabProps {
  city: City;
}

export const AboutSuMoProject: React.FC<AboutProps> = (props) => {
  return (
    <Box>
      <Typography variant="h5">
        KINaMo - Information System for Municipal Mobility
      </Typography>
      <Typography mt={4} fontWeight="fontWeightLight" variant="subtitle1">
        KINaMo provides detailed
        <Box fontWeight="bold" display="inline">
          {" "}
          assessment of municipal mobility{" "}
        </Box>
        for the Upper Rhine region and is part of the{" "}
        {<Link href="https://sumo-rhine.com/en/">SuMo Rhine Project</Link>}.
      </Typography>
      <Box sx={{ display: "flex" }}>
        <Typography
          component="div"
          fontWeight="fontWeightLight"
          mt={4}
          variant="subtitle1"
        >
          A primary goal of KINaMo is to simplify the evaluation of municipal
          mobility by utilizing an automated, data-based approach that will make
          the state of{" "}
          <Box fontWeight="bold" display="inline">
            Sustainable Mobility{" "}
          </Box>
          visible and{" "}
          <Box fontWeight="bold" display="inline">
            comparable at the municipal level
          </Box>
          .
        </Typography>
      </Box>
      <Stack mt={6} direction="row" spacing={2}>
        <Button
          onMouseEnter={() => props.setter(true)}
          onMouseLeave={() => props.setter(false)}
          variant="outlined"
        >
          Select City
        </Button>
        <Button variant="outlined">Overview</Button>
      </Stack>
    </Box>
  );
};

export const AboutIndicators = () => {
  const [indicator, setIndicator] = useState("walkability");
  const handleChange = (event: React.SyntheticEvent, newIndicator: string) => {
    setIndicator(newIndicator);
  };

  return (
    <Box>
      {/* <Typography variant="h5">
        Measure Sustainable Mobility with Indicators
      </Typography>{" "}
      <Typography mt={4} fontWeight="fontWeightLight">
        The assessment is based on
        <Box fontWeight="bold" display="inline">
          {" "}
          11 indicators{" "}
        </Box>
      </Typography> */}
      <TabContext value={indicator}>
        <Box sx={{ borderBottom: 0, borderColor: "divider" }}>
          <TabList
            onChange={handleChange}
            aria-label="lab API tabs example"
            variant="scrollable"
          >
            <Tab
              icon={
                <Icon>
                  <img
                    src={"/assets/icons/walkability.svg"}
                    height={25}
                    // width={25}
                  />
                </Icon>
              }
              value="walkability"
              label="walkability"
            />
            <Tab
              icon={
                <Icon>
                  <img
                    src={"/assets/icons/bikeability.svg"}
                    height={25}
                    // width={25}
                  />
                </Icon>
              }
              value="bikeability"
              label="bikeability"
            />
            <Tab
              icon={
                <Icon>
                  <img
                    src={"/assets/icons/pt.svg"}
                    height={25}
                    // width={25}
                  />
                </Icon>
              }
              value="public_transport"
              label="Public Transport"
            />
            <Tab
              icon={
                <Icon>
                  <img
                    src={"/assets/icons/car.svg"}
                    height={25}
                    // width={25}
                  />
                </Icon>
              }
              value="car_integration"
              label="car integration"
            />
            <Tab
              icon={
                <Icon>
                  <img
                    src={"/assets/icons/spatial-structur.svg"}
                    height={25}
                    // width={25}
                  />
                </Icon>
              }
              value="functional_diversity"
              label="spatial structure"
            />
            <Tab
              icon={
                <Icon>
                  <img
                    src={"/assets/icons/accessibility.svg"}
                    height={25}
                    // width={30}
                  />
                </Icon>
              }
              value="accessibility"
              label="accessibility"
            />
            <Tab
              icon={
                <Icon>
                  <img
                    src={"/assets/icons/commuting.svg"}
                    height={25}
                    // width={25}
                  />
                </Icon>
              }
              value="cross_border"
              label="Commuting"
            />
            <Tab
              icon={
                <Icon>
                  <img
                    src={"/assets/icons/land-consumption.svg"}
                    height={25}
                    // width={25}
                  />
                </Icon>
              }
              value="land_use"
              label="Land Use"
            />
            <Tab
              icon={
                <Icon>
                  <img
                    src={"/assets/icons/air-pollution.svg"}
                    height={25}
                    // width={25}
                  />
                </Icon>
              }
              value="emissions"
              label="emissions"
            />
            <Tab
              icon={
                <Icon>
                  <img
                    src={"/assets/icons/traffic-noise.svg"}
                    height={25}
                    // width={25}
                  />
                </Icon>
              }
              value="noise_pollution"
              label="Noise Pollution"
            />
            <Tab
              icon={
                <Icon>
                  <img
                    src={"/assets/icons/safety.svg"}
                    height={25}
                    // width={25}
                  />
                </Icon>
              }
              value="traffic_safety"
              label="Safety"
            />
            <Tab
              icon={
                <Icon>
                  <img
                    src={"/assets/icons/modal-choice.svg"}
                    height={25}
                    // width={25}
                  />
                </Icon>
              }
              value="behavior"
              label="Behavior"
            />
          </TabList>
        </Box>
        <Box>Indicator Description</Box>
      </TabContext>
    </Box>
  );
};

export const AboutKeyFigures = () => {
  return <Box>About KeyFigures</Box>;
};
