import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import { Link } from "@mui/material";
import { City } from "../../models/FullDataset";
import Paper from "@mui/material/Paper";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Icon from "@mui/material/Icon";
import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Slider from "@mui/material/Slider";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

// import { AboutProps } from "./About.model";
interface AboutProps {
  city: City;
}

const AboutIndicators: React.FC<AboutProps> = (props) => {
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
            variant="fullWidth"
          >
            <Tab
              icon={
                <Icon>
                  <img
                    alt="images"
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
                    alt="images"
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
                    alt="images"
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
                    alt="images"
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
                    alt="images"
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
                    alt="images"
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
                    alt="images"
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
                    alt="images"
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
                    alt="images"
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
                    alt="images"
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
                    alt="images"
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
                    alt="images"
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
                    KEY FIGURES
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
                <Box
                  sx={{
                    borderRadius: 0,
                    // backgroundColor: "#F8F8F8",
                    // maxWidth: 900,
                  }}
                  // elevation={1}
                  // square
                >
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
                            <Accordion
                              square
                              sx={{
                                // borderRadius: 0,
                                backgroundColor: "#F8F8F8",
                                minHeight: 65,
                              }}
                              elevation={6}
                            >
                              <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                              >
                                <Typography
                                  variant="h6"
                                  fontWeight="fontWeightLight"
                                >
                                  {keyFigure.short_name}
                                </Typography>
                              </AccordionSummary>
                              <AccordionDetails>
                                <Typography
                                  variant="h6"
                                  fontWeight="fontWeightLight"
                                >
                                  {keyFigure.long_name}
                                </Typography>
                              </AccordionDetails>
                            </Accordion>

                            {/* <Paper>
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
                            </Paper> */}
                          </Grid>
                        )
                      )}
                    </Grid>
                  </Box>
                </Box>
              </Box>
            </TabPanel>
          ))}
        </Box>
      </TabContext>
    </Box>
  );
};

export default AboutIndicators;
