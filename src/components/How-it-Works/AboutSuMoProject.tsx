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

const AboutSuMoProject = () => {
  return (
    <Box sx={{ maxWidth: 1200 }}>
      <Typography variant="h4" fontWeight="fontWeightLight">
        KINaMo - Information System for Municipal Mobility
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
      <Box mt={4}>
        {/* <Grid container spacing={2} columns={12}>
          <Grid item xs={6}>
            <Typography variant="h6" fontWeight="fontWeightLight">
              For more Details Explore a City
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <SelectCityModalButton cityName="Select your City"></SelectCityModalButton>
          </Grid>
        </Grid> */}
      </Box>
      <img
        alt="images"
        style={{ height: 500 }}
        src="/assets/image/diagram.svg"
      />

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
      <Typography mt={6} fontWeight="fontWeightLight" variant="h6">
        KINaMo provides detailed
        <Box fontWeight="bold" display="inline">
          {" "}
          assessment of municipal mobility{" "}
        </Box>
        for the Upper Rhine region and is part of the{" "}
        {<Link href="https://sumo-rhine.com/en/">SuMo Rhine Project</Link>}.
      </Typography>
    </Box>
  );
};

export default AboutSuMoProject;
