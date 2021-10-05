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
import StackedBar from "../StackedBar";

interface CityTabProps {
  city: City;
}
const CityTab: React.FC<CityTabProps> = (props) => {
  // console.log(Object.keys(props.city.indicators));
  // console.log(props.city);
  const [indicator, setIndicator] = useState("walkability");
  const handleChange = (event: React.SyntheticEvent, newIndicator: string) => {
    setIndicator(newIndicator);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box m={5}>
        <TabContext value={indicator}>
          <Box sx={{ borderBottom: 0, borderColor: "divider" }}>
            <Tabs
              onChange={handleChange}
              aria-label="lab API tabs example"
              //   orientation="vertical"
              centered
              variant="scrollable"
              scrollButtons="auto"
            >
              {Object.keys(props.city.indicators).map((ind) => (
                //   <Button></Button>
                <Tab label={ind} value={ind} />
              ))}
            </Tabs>
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
