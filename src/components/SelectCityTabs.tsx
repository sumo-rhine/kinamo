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

// interface TabPanelProps {
//   children?: React.ReactNode;
//   index: number;
//   value: number;
// }

// function a11yProps(index: number) {
//   return {
//     id: `vertical-tab-${index}`,
//     "aria-controls": `vertical-tabpanel-${index}`,
//   };
// }

// function TabPanel(props: CityModalProps) {
//   return <div>{props.cities}</div>;
// }

const SelectCityTabs: React.FC<CityModalProps> = (props) => {
  const [value, setValue] = React.useState("1");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Germany" value="1" />
            <Tab label="France" value="2" />
            <Tab label="Switzerland" value="3" />
          </TabList>
        </Box>
        {props.cities
          .filter((city) => city.country === "Germany")
          .map((city) => (
            <TabPanel value="1">{city.city}</TabPanel>
            //  <TabPanel value="2">{city.city}</TabPanel>
            //  <TabPanel value="3">{city.city}</TabPanel>
          ))}
        {props.cities
          .filter((city) => city.country === "France")
          .map((city) => (
            <TabPanel value="2">{city.city}</TabPanel>
            //  <TabPanel value="2">{city.city}</TabPanel>
            //  <TabPanel value="3">{city.city}</TabPanel>
          ))}
        {props.cities
          .filter((city) => city.country === "Switzerland")
          .map((city) => (
            <TabPanel value="3">{city.city}</TabPanel>
            //  <TabPanel value="2">{city.city}</TabPanel>
            //  <TabPanel value="3">{city.city}</TabPanel>
          ))}
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
