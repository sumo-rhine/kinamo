import { Box } from "@mui/system";
import { City } from "../../models/FullDataset";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import React, { useState } from "react";
import KeyFigureCard from "./KeyFigureCard";
import Icon from "@mui/material/Icon";
import StackedBar from "../StackedBar";
import StackedBarRow from "../City-Overview/StackedBarRow";
import { getIconPath } from "../IndicatorAndIcon";
import Divider from "@mui/material/Divider";

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
    <Box
      pt={10}
      sx={{ width: "100%", backgroundColor: "#F8F8F8", minHeight: 800 }}
    >
      <Box p={5}>
        <TabContext value={indicator}>
          <Box sx={{ borderBottom: 0, borderColor: "divider" }}>
            <TabList
              onChange={handleChange}
              aria-label="lab API tabs example"
              variant="fullWidth"
              sx={{ width: "100%" }}
            >
              <Tab
                wrapped
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
                label="Fußgänger Freundlichkeit"
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
                label="Fahrrad Freundlichkeit"
                wrapped
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
                label="ÖPNV"
                wrapped
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
                label="Auto"
                wrapped
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
                label="Raum Struktur"
                wrapped
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
                label="Erreichbarkeit"
                wrapped
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
                label="Regionale Anbindung"
                wrapped
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
                label="Landnutzung"
                wrapped
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
                label="Emissionen"
                wrapped
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
                label="Lärm Belastung"
                wrapped
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
                label="Verkehrs Sicherheit"
                wrapped
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
                label="Verkehrs Verhalten"
                wrapped
              />
            </TabList>
          </Box>
          <Box
            sx={
              {
                // boxShadow: "0 2px 4px silver",
              }
            }
          >
            {Object.keys(props.city.indicators).map((ind) => (
              <TabPanel value={ind}>
                <Box pt={3}>
                  {/* <Typography fontWeight="fontWeightLight" variant="h4">
                    {(props.city.indicators as any)[ind].short_name}
                  </Typography> */}
                  <Box ml={4} sx={{}}>
                    <StackedBarRow
                      indicator={(props.city.indicators as any)[ind]}
                      // iconSrc="test"
                      iconSrc={getIconPath(ind).IconSrc}
                    />
                    {/* <Box>{getIconPath(ind).}</Box> */}

                    {/* <StackedBar
                      indicator={(props.city.indicators as any)[ind]}
                      shadow={false}
                      rounded={false}
                      background="#C4C4C4"
                      height={0.8}
                      animation="1s"
                    /> */}

                    <Typography
                      pt={4}
                      pl={3}
                      pb={5}
                      sx={{ width: 1400 }}
                      fontWeight="fontWeightLight"
                      variant="h6"
                    >
                      {(props.city.indicators as any)[ind].description}
                    </Typography>

                    <Divider textAlign="left">
                      {" "}
                      <Typography fontWeight="fontWeightLight" variant="h5">
                        {/* {(props.city.indicators as any)[ind].short_name} */}
                        Kennzahlen
                      </Typography>
                    </Divider>
                  </Box>
                </Box>
                <Box
                  mt={3}
                  mb={8}
                  ml={6}
                  mr={6}
                  sx={{
                    display: "flex",
                    flexWrap: "wrap",

                    // justifyContent: "space-between",
                    // width: 600,
                  }}
                >
                  {(props.city.indicators as any)[ind].keyFigures.map(
                    (keyFigure: any) => (
                      <Box
                        m={2}
                        sx={{ width: 500, boxShadow: "0 2px 4px silver" }}
                      >
                        <KeyFigureCard
                          description={keyFigure.long_name}
                          value={keyFigure.value}
                          unit={keyFigure.unit}
                          short_name={keyFigure.short_name}
                          points={keyFigure.points}
                          padding={4}
                          elevation={5}
                          bar={true}
                          infoIcon={true}
                        ></KeyFigureCard>
                      </Box>
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
