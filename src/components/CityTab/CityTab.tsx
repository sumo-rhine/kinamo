import { Box } from "@mui/system";
import { City } from "../../models/FullDataset";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import React, { useEffect, useState } from "react";
import KeyFigureCard from "./KeyFigureCard";
import Icon from "@mui/material/Icon";
import StackedBar from "../StackedBar";
import StackedBarRow from "../City-Overview/StackedBarRow";
import { getIconPath } from "../IndicatorAndIcon";

interface CityTabProps {
  city: City;
  changeTab?: string;
}

const CityTab: React.FC<CityTabProps> = ({city, changeTab}) => {
  // current indicator State
  const [indicator, setIndicator] = useState("walkability");
  
  // change handler actived by user clicking a Tab
  const handleChange = (event: React.SyntheticEvent, newIndicator: string) => {
    setIndicator(newIndicator);
  };

  // react to changes of changeTab
  useEffect(() => {
    if (changeTab) {
      setIndicator(changeTab);
    }
  }, [changeTab]);

  return (
    <React.Fragment>
      <div id="city-tab" />
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
                  icon={
                    <Icon>
                      <img
                        alt="img"
                        src={"/assets/icons/walkability.svg"}
                        height={25}
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
                        alt="img"
                        src={"/assets/icons/bikeability.svg"}
                        height={25}
                      />
                    </Icon>
                  }
                  value="bikeability"
                  label="bikeability"
                />
                <Tab
                  icon={
                    <Icon>
                      <img alt="img" src={"/assets/icons/pt.svg"} height={25} />
                    </Icon>
                  }
                  value="public_transport"
                  label="Public Transport"
                />
                <Tab
                  icon={
                    <Icon>
                      <img alt="img" src={"/assets/icons/car.svg"} height={25} />
                    </Icon>
                  }
                  value="car_integration"
                  label="car integration"
                />
                <Tab
                  icon={
                    <Icon>
                      <img
                        alt="img"
                        src={"/assets/icons/spatial-structur.svg"}
                        height={25}
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
                        alt="img"
                        src={"/assets/icons/accessibility.svg"}
                        height={25}
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
                        alt="img"
                        src={"/assets/icons/commuting.svg"}
                        height={25}
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
                        alt="img"
                        src={"/assets/icons/land-consumption.svg"}
                        height={25}
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
                        alt="img"
                        src={"/assets/icons/air-pollution.svg"}
                        height={25}
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
                        alt="img"
                        src={"/assets/icons/traffic-noise.svg"}
                        height={25}
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
                        alt="img"
                        src={"/assets/icons/safety.svg"}
                        height={25}
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
                        alt="img"
                        src={"/assets/icons/modal-choice.svg"}
                        height={25}
                      />
                    </Icon>
                  }
                  value="behavior"
                  label="Behavior"
                />
              </TabList>
            </Box>
            <Box sx={{ boxShadow: "0 2px 4px silver" }}>
              {Object.keys(city.indicators).map((ind) => (
                <TabPanel value={ind}>
                  <Box pt={5}>
                    {/* <Typography fontWeight="fontWeightLight" variant="h4">
                      {(props.city.indicators as any)[ind].short_name}
                    </Typography> */}
                    <Box ml={4} sx={{ display: "flex", width: "50%" }}>
                      <StackedBarRow
                        indicator={(city.indicators as any)[ind]}
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

                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          width: "50%",
                        }}
                      >
                        <Typography fontWeight="fontWeightLight" variant="h6">
                          {(city.indicators as any)[ind].description}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                  <Box
                    m={8}
                    sx={{
                      display: "flex",
                      flexWrap: "wrap",

                      // justifyContent: "space-between",
                      // width: 600,
                    }}
                  >
                    {(city.indicators as any)[ind].keyFigures.map(
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
    </React.Fragment>
  );
};

export default CityTab;
