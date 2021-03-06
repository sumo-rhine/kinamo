import React from "react";
import { Button, Box } from "@mui/material";
import { connect } from "react-redux";
import { AppState } from "../../models/AppState";
import { City } from "../../models/FullDataset";
import Tab from "@mui/material/Tab";
import { Link } from "react-router-dom";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

interface CityModalProps {
  cities: City[];
  debug: boolean;
  closeHandler: any;
}

const SelectCityTabs: React.FC<CityModalProps> = (props) => {
  const [value, setValue] = React.useState<string>("Deutschland");
  const handleChange = (event: React.SyntheticEvent, newCity: string) => {
    setValue(newCity);
  };

  return (
    <Box
      sx={{
        // width: "80%",
        typography: "body1",
        display: "flex",
        alignItems: "center",
        bgcolor: "background.paper",
        height: 550,
      }}
    >
      <TabContext value={value}>
        <Box sx={{ borderBottom: 0, borderColor: "divider" }} pl={10}>
          <TabList
            onChange={handleChange}
            aria-label="lab API tabs example"
            orientation="vertical"
            // orientation={window.innerWidth > 1400 ? "vertical" : "horizontal"}
            centered
          >
            <Tab sx={{ width: 200 }} label="Deutschland" value="Deutschland" />
            <Tab label="Frankreich" value="Frankreich" />
            <Tab label="Schweiz" value="Schweiz" />
          </TabList>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            flexGrow: 1,
          }}
          p={10}
        >
          {props.cities
            .filter((city) => city.country === value)
            .map((city) => (
              <TabPanel value={value}>
                {
                  <Button
                    onClick={props.closeHandler}
                    // size="small"
                    component={Link}
                    to={`/city/${city.id}`}
                  >
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
