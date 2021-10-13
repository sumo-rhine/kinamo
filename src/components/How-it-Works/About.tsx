import { Box } from "@mui/system";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { Typography } from "@mui/material";
import { Link } from "@mui/material";
import { City } from "../../models/FullDataset";
import Tabs from "@mui/material/Tabs";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Paper from "@mui/material/Paper";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Icon from "@mui/material/Icon";
import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import Slider from "@mui/material/Slider";
import { setTextRange } from "typescript";

// import { AboutProps } from "./About.model";
interface AboutProps {
  city: City;
}

export const AboutSuMoProject = () => {
  return (
    <Box>
      <Typography variant="h4" fontWeight="fontWeightLight">
        KINaMo - Information System for Municipal Mobility
      </Typography>
      <Typography mt={4} fontWeight="fontWeightLight" variant="h6">
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
          variant="h6"
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
      {/* <Stack mt={6} direction="row" spacing={2}>
        <Button
        // onMouseEnter={() => props.setter(true)}
        // onMouseLeave={() => props.setter(false)}
        // variant="outlined"
        >
          Select City
        </Button>
        <Button variant="outlined">Overview</Button>
      </Stack> */}
    </Box>
  );
};

export const AboutIndicators: React.FC<AboutProps> = (props) => {
  // console.log(props.city);
  const [indicator, setIndicator] = useState("walkability");
  const handleChange = (event: React.SyntheticEvent, newIndicator: string) => {
    setIndicator(newIndicator);
  };

  return (
    <Box>
      <Typography variant="h4" fontWeight="fontWeightLight">
        KINaMo - Indicator System
      </Typography>
      <Typography mt={4} fontWeight="fontWeightLight" variant="h6">
        To evaluate Mobility KINaMo uses
        <Box fontWeight="bold" display="inline">
          {" "}
          12 Indicators{" "}
        </Box>
        which are composed of
        <Box fontWeight="bold" display="inline">
          {" "}
          Key Figures
        </Box>
      </Typography>
      {/* <Typography variant="h5" fontWeight="fontWeightLight">
        Indicators
      </Typography> */}

      <TabContext value={indicator}>
        <Box mt={6} sx={{ borderBottom: 0, borderColor: "divider" }}>
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
        <Box>
          {Object.keys(props.city.indicators).map((ind) => (
            <TabPanel value={ind}>
              <Box m={5}>
                <Box
                  mt={4}
                  mb={5}
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "50%",
                  }}
                >
                  <Typography fontWeight="fontWeightLight" variant="h5">
                    {/* {(props.city.indicators as any)[ind].short_name} */}
                    Key Figures
                  </Typography>
                  {/* <StackedBar
                    indicator={(props.city.indicators as any)[ind]}
                    shadow={false}
                    rounded={false}
                    background="white"
                    height={0.8}
                    animation="1s"
                  /> */}
                  <Box>
                    <Typography fontWeight="fontWeightLight" variant="h6">
                      {(props.city.indicators as any)[ind].description}
                    </Typography>
                  </Box>
                </Box>
                <Paper elevation={3} square>
                  <Box p={2}>
                    <Grid
                      container
                      spacing={2}
                      columns={12}

                      // spacing={{ xs: 2, md: 3 }}
                      // columns={{ xs: 8 }}
                    >
                      {(props.city.indicators as any)[ind].keyFigures.map(
                        (keyFigure: any) => (
                          <Grid item xs={4}>
                            <Paper>
                              <Box
                                p={1}
                                sx={{
                                  display: "flex",
                                  justifyContent: "space-between",
                                  alignItems: "center",
                                }}
                              >
                                <Typography
                                  fontWeight="fontWeightLight"
                                  variant="h6"
                                >
                                  {keyFigure.short_name}
                                </Typography>
                                <HelpOutlineIcon />
                              </Box>
                            </Paper>
                          </Grid>
                        )
                      )}
                    </Grid>
                  </Box>
                </Paper>
              </Box>
            </TabPanel>
          ))}
        </Box>
      </TabContext>
    </Box>
  );
};

export const AboutKeyFigures = () => {
  const initSpeedLimit = 70;
  const barWidthFactor = 3;
  const nCities = 36;
  const ratingInPercent = 100 / nCities;
  const initBicycleAccidents = 4;
  const maxSpeedLimit = 88;
  const minSpeedLimit = 22;
  const maxBicycleAccidents = 11.7;
  const minBicycleAccidents = 0.05;

  const initSpeedLimitBarWidth = (initSpeedLimit - minSpeedLimit) * (100 / 66);
  // const initBicycleAccidentsBarWidth;

  const marksSpeedLimit = [
    {
      value: 22,
      label: "22%",
    },
    // {
    //   value: 30,
    //   label: "30%",
    // },
    {
      value: 40,
      label: "40%",
    },
    // {
    //   value: 50,
    //   label: "50%",
    // },
    {
      value: 60,
      label: "60%",
    },
    // {
    //   value: 70,
    //   label: "70%",
    // },
    {
      value: 80,
      label: "80%",
    },
    {
      value: 88,
      label: "88%",
    },
  ];

  const marksBicycleAccidents = [
    {
      value: minBicycleAccidents,
      label: "0",
    },
    // {
    //   value: 30,
    //   label: "30%",
    // },
    {
      value: 3,
      label: "3",
    },
    // {
    //   value: 50,
    //   label: "50%",
    // },
    {
      value: 6,
      label: "6",
    },
    // {
    //   value: 70,
    //   label: "70%",
    // },
    {
      value: 9,
      label: "9",
    },
    {
      value: maxBicycleAccidents,
      label: "11.7",
    },
  ];

  function valueTextSpeedLimit(value: number) {
    return `${value}%`;
  }

  const [speedLimit, setSpeedLimit] = React.useState<
    number | string | Array<number | string>
  >(initSpeedLimit);
  const [speedLimitRank, setSpeedLimitRank] = useState(
    initSpeedLimit / ratingInPercent
  );

  const [speedLimitBarWidth, setSpeedLimitBarWidth] = useState(
    (initSpeedLimit - minSpeedLimit) * (100 / 66) // speed limit goes from 22 ro 88
  );

  // const [speedLimitRest, setSpeedLimitRest] = React.useState<
  //   number | string | Array<number | string>
  // >(30);

  const [bicycleAccidents, setBicycleAccidents] = useState<
    number | string | Array<number | string>
  >(initBicycleAccidents);

  const [bicycleAccidentsRating, setBicycleAccidentsRating] = useState(
    initBicycleAccidents * (36 / maxBicycleAccidents)
  );

  const [bicycleAccidentsBarWidth, setBicycleAccidentsBarWidth] = useState(
    initBicycleAccidents * (100 / maxBicycleAccidents) // speed limit goes from 22 ro 88
  );

  const handleSliderChangeSpeedLimit = (
    event: Event,
    newValue: number | number[]
  ) => {
    setSpeedLimit(newValue);
    setSpeedLimitBarWidth(((newValue as number) - minSpeedLimit) * (100 / 66));
    const speedLimitRankingNew =
      (speedLimitBarWidth as number) / ratingInPercent;
    setSpeedLimitRank(speedLimitRankingNew === 0 ? 1 : speedLimitRankingNew);
  };

  const handleSliderChangeBicycleAccidents = (
    event: Event,
    newValue: number | number[]
  ) => {
    setBicycleAccidents(newValue);
    setBicycleAccidentsBarWidth(bicycleAccidentsRating * ratingInPercent);
    const bicycleAccidentsRankNew =
      (newValue as number) * (36 / maxBicycleAccidents);
    setBicycleAccidentsRating(
      bicycleAccidentsRankNew === 0 ? 1 : bicycleAccidentsRankNew
    );
  };

  // console.log(200 - ((speedLimit as number) + 100));

  return (
    <Box>
      <Typography variant="h4" fontWeight="fontWeightLight">
        How are the Indicators computed?
      </Typography>
      <Typography mt={4} fontWeight="fontWeightLight" variant="h6">
        KINaMo provides detailed
        <Box fontWeight="bold" display="inline">
          {" "}
          assessment of municipal mobility{" "}
        </Box>
        for the Upper Rhine region and is part of the{" "}
        {<Link href="https://sumo-rhine.com/en/">SuMo Rhine Project</Link>}.
      </Typography>
      <Box>
        <Grid mt={10} container spacing={2} columns={12}>
          <Grid xs={6} item></Grid>
          <Grid xs={6} item>
            <Box>
              0
              <Box sx={{ display: "flex" }}>
                <Box
                  sx={{
                    width: speedLimitBarWidth * barWidthFactor,
                    backgroundColor: "#1A4613",
                    height: 20,
                  }}
                ></Box>
                <Box
                  sx={{
                    width: Number(
                      (bicycleAccidentsBarWidth as number) * barWidthFactor
                    ),
                    backgroundColor: "#226A2A",
                    height: 20,
                  }}
                ></Box>

                <Box
                  sx={{
                    width: Number(
                      (200 -
                        ((speedLimitBarWidth as number) +
                          (bicycleAccidentsBarWidth as number))) *
                        barWidthFactor
                    ),
                    // width: 1,

                    backgroundColor: "#d3d3d3",
                    height: 20,
                  }}
                ></Box>
                <Box>9</Box>
              </Box>
              10
            </Box>
          </Grid>
          <Grid xs={6} item>
            <Box ml={20}>
              <Typography pr={3} variant="h5" fontWeight="fontWeightLight">
                {speedLimit} % Speed limit
              </Typography>
              <Box sx={{ width: 300 }}>
                <Slider
                  defaultValue={initSpeedLimit}
                  aria-label="Small"
                  valueLabelDisplay="auto"
                  onChange={handleSliderChangeSpeedLimit}
                  getAriaValueText={valueTextSpeedLimit}
                  min={minSpeedLimit}
                  max={maxSpeedLimit}
                  marks={marksSpeedLimit}
                />
              </Box>
            </Box>
          </Grid>
          <Grid xs={6} item>
            <Box>
              <Typography variant="h5" fontWeight="fontWeightLight">
                {speedLimitRank.toFixed(0)} OF 36 CITES
              </Typography>

              <Box sx={{ display: "flex" }}>
                <Box
                  sx={{
                    width: (speedLimitBarWidth as number) * barWidthFactor,
                    backgroundColor: "#1A4613",
                    height: 10,
                  }}
                ></Box>
                <Box
                  sx={{
                    width:
                      (100 - (speedLimitBarWidth as number)) * barWidthFactor,
                    backgroundColor: "#d3d3d3",
                    height: 10,
                  }}
                ></Box>
              </Box>
            </Box>
          </Grid>
          <Grid xs={6} item>
            <Box ml={20}>
              <Typography pr={3} variant="h5" fontWeight="fontWeightLight">
                {(bicycleAccidents as number).toFixed(1)} Bicycle Accidents
              </Typography>
              <Box sx={{ width: 300 }}>
                <Slider
                  defaultValue={initBicycleAccidents}
                  aria-label="Small"
                  valueLabelDisplay="auto"
                  onChange={handleSliderChangeBicycleAccidents}
                  step={maxBicycleAccidents / 100}
                  min={minBicycleAccidents}
                  max={maxBicycleAccidents}
                  marks={marksBicycleAccidents}
                />
              </Box>
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box>
              <Typography variant="h5" fontWeight="fontWeightLight">
                {bicycleAccidentsRating.toFixed(0)} OF 36 CITES
              </Typography>
              <Box sx={{ display: "flex" }}>
                <Box
                  sx={{
                    width: Number(
                      (bicycleAccidentsBarWidth as number) * barWidthFactor
                    ),
                    backgroundColor: "#226A2A",
                    height: 10,
                  }}
                ></Box>
                <Box
                  sx={{
                    width:
                      (100 - (bicycleAccidentsBarWidth as number)) *
                      barWidthFactor,
                    backgroundColor: "#d3d3d3",
                    height: 10,
                  }}
                ></Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};
