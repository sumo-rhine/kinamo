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

interface CityTabProps {
  city: City;
}
const CityTab: React.FC<CityTabProps> = (props) => {
  console.log(Object.keys(props.city.indicators));
  console.log(props.city);
  const [indicator, setIndicator] = useState("walkability");
  const handleChange = (event: React.SyntheticEvent, newIndicator: string) => {
    setIndicator(newIndicator);
  };

  return (
    <Box mt={5} sx={{ width: "90%", height: 700 }}>
      <TabContext value={indicator}>
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
        <Box>
          {Object.keys(props.city.indicators).map((ind) => (
            <TabPanel value={ind}>
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "space-between",
                  alignContent: "space-between",
                }}
              >
                {(props.city.indicators as any)[ind].keyFigures.map(
                  (keyFigure: any) => (
                    //   <p>{keyFigure.long_name}</p>
                    <KeyFigureCard
                      description={keyFigure.description}
                      value={keyFigure.value}
                      unit={keyFigure.unit}
                    ></KeyFigureCard>
                  )
                )}
              </Box>
            </TabPanel>
          ))}
        </Box>
      </TabContext>
    </Box>
  );
};

export default CityTab;
