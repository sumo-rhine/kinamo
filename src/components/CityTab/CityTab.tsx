import { Box } from "@mui/system";
import { City } from "../../models/FullDataset";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import React, { useState } from "react";
import { Button } from "@mui/material";
import KeyFigureCard from "./KeyFigureCard";
import Icon from "@mui/material/Icon";
import StackedBar from "../StackedBar";
// import { makeStyles } from "@mui/styles";
interface CityTabProps {
  city: City;
}

const CityTab: React.FC<CityTabProps> = (props) => {
  // const classes = useStyles();
  const [indicator, setIndicator] = useState("walkability");
  const handleChange = (event: React.SyntheticEvent, newIndicator: string) => {
    setIndicator(newIndicator);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box m={5}>
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
              {/* <Tabs
                // onChange={handleChange}
                aria-label="lab API tabs example"
                //   orientation="vertical"
                centered
                // variant="scrollable"
                scrollButtons="auto"
              > */}
              {/* {Object.keys(props.city.indicators).map((ind) => (
                //   <Button></Button>
                <Tab label={ind} value={ind} />
              ))} */}
              {/* </Tabs> */}
            </TabList>
          </Box>
          <Box>
            {Object.keys(props.city.indicators).map((ind) => (
              <TabPanel value={ind}>
                <Box m={5}>
                  <Typography fontWeight="fontWeightLight" variant="h4">
                    {(props.city.indicators as any)[ind].short_name}
                  </Typography>
                  <Box mt={4} sx={{ display: "flex", width: "50%" }}>
                    <StackedBar
                      indicator={(props.city.indicators as any)[ind]}
                      shadow={false}
                      rounded={false}
                      background="white"
                      height={0.8}
                      animation="1s"
                    />
                    <Box>
                      <Typography fontWeight="fontWeightLight" variant="h6">
                        {(props.city.indicators as any)[ind].description}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    // justifyContent: "space-between",
                    // alignContent: "space-between",
                  }}
                >
                  {(props.city.indicators as any)[ind].keyFigures.map(
                    (keyFigure: any) => (
                      //   if
                      //   <p>{keyFigure.long_name}</p>
                      <KeyFigureCard
                        description={keyFigure.long_name}
                        value={keyFigure.value}
                        unit={keyFigure.unit}
                        short_name={keyFigure.short_name}
                        points={keyFigure.points}
                      ></KeyFigureCard>
                    )
                  )}
                </Box>
              </TabPanel>
            ))}
          </Box>
        </TabContext>
      </Box>
    </Box>
  );
};

export default CityTab;
