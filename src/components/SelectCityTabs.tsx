import React from "react";
import { Modal, Backdrop, Fade, Button, Paper, Box } from "@mui/material";
import { connect } from "react-redux";
import { AppState } from "../models/AppState";
import { City } from "../models/FullDataset";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";

import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

interface CityModalProps {
  cities: City[];
  debug: boolean;
}

const SelectCityTabs: React.FC<CityModalProps> = (props) => {
  const [value, setValue] = React.useState<string>("Germany");
  const handleChange = (event: React.SyntheticEvent, newCity: string) => {
    setValue(newCity);
  };

  return (
    <Box
      sx={{
        width: "80%",
        typography: "body1",
        display: "flex",
        alignItems: "center",
        // flexWrap: "wrap",
        // flexGrow: 1,
        bgcolor: "background.paper",
        height: 700,
      }}
    >
      <TabContext value={value}>
        <Box sx={{ borderBottom: 0, borderColor: "divider" }} pl={10}>
          <TabList
            onChange={handleChange}
            aria-label="lab API tabs example"
            orientation="vertical"
            centered
          >
            <Tab sx={{ width: 200 }} label="Germany" value="Germany" />
            <Tab label="France" value="France" />
            <Tab label="Switzerland" value="Switzerland" />
          </TabList>
        </Box>
        <Box
          sx={{
            display: "flex",
            // flexDirection: "column",
            flexWrap: "wrap",
            flexGrow: 1,

            // width: "3px",
            // height: 224,
          }}
          p={10}
        >
          {props.cities
            .filter((city) => city.country === value)
            .map((city) => (
              <TabPanel value={value}>
                {
                  <Button size="large" href={`/city/${city.id}`}>
                    {city.city}
                  </Button>
                }
              </TabPanel>
            ))}
        </Box>
      </TabContext>
    </Box>
  );
};

const mapStateToProps = (state: AppState) => {
  return {
    cities: state.data.cities,
    debug: state.debug,
  };
};
export default connect(mapStateToProps)(SelectCityTabs);

// {props.cities
//   .filter((city) => city.country === "Germany")
//   .map((city) => (
//     <li>{city.city}</li>
