import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import { City } from "../../models/FullDataset";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Icon from "@mui/material/Icon";
import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Divider from "@mui/material/Divider";

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
        Das KINaMo Bewertungssystem
      </Typography>
      <Typography mt={4} fontWeight="fontWeightLight" variant="h6">
        Das Bewertungssystem von KINaMo besteht aus Indikatoren und Kennzahlen.
      </Typography>

      <Box mt={1} sx={{ display: "flex" }}>
        <Typography
          pr={4}
          // sx={{ width: 200 }}
          // fontWeight="fontWeightLight"
          variant="h6"
        >
          Indikatoren
        </Typography>
        <Typography fontWeight="fontWeightLight" variant="h6">
          Bewerten übergeordnete Handlungsfelder kommunaler Mobilität und
          schafften Vergleichbarkeit. Der Wert eines Indikators reicht von 0 bis
          10.
        </Typography>
      </Box>
      <Box mt={0} sx={{ display: "flex" }}>
        <Typography
          pr={3.5}
          // sx={{ width: 200 }}
          // fontWeight="fontWeightLight"
          variant="h6"
        >
          Kennzahlen
        </Typography>
        <Typography fontWeight="fontWeightLight" variant="h6">
          Bieten spezifische Information über das kommunale Mobilitätssystem und
          sollen zu einer sachlichen Diskussion beitragen.
        </Typography>
      </Box>
      {/* <Box mt={1} sx={{ display: "flex" }}>
        <Typography
          sx={{ width: 150 }}
          // fontWeight="fontWeightLight"
          variant="h6"
        >
          Kennzahlen
        </Typography>
        <Typography
          // pl={1}
          // align="left"
          fontWeight="fontWeightLight"
          variant="h6"
        >
          Bieten spezifische Information über das kommunale Mobilitätsystem und
          sollen zu einer Sachlichen Diskussion beitragen. Die Kennzahlen sind
          für die Vergleichbarkeit in relativen einheiiten gehalten.
        </Typography>
      </Box> */}
      {/* <Typography pt={0} fontWeight="fontWeightLight" variant="h6">
        Im Folgenden sind alle Indikatoren und ihre Kennzahlen aufgeführt.
      </Typography> */}

      {/* <Typography mt={2} fontWeight="fontWeightLight" variant="h6">
        <Box fontWeight="bold" display="inline">
          Kennzahlen -{"  "}
        </Box>
        Schaffen Vergleichbarkeit und bieten eine Bewertung für übergeordnete
        Handlungsfelder kommunaler Mobilität
      </Typography> */}

      <TabContext value={indicator}>
        <Box mt={6} sx={{ borderBottom: 0, borderColor: "divider" }}>
          <TabList
            onChange={handleChange}
            aria-label="lab API tabs example"
            variant="fullWidth"
            // variant="scrollable"
            // scrollButtons="auto"
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
        <Box>
          {Object.keys(props.city.indicators).map((ind) => (
            <TabPanel
              // sx={{ boxShadow: "0 2px 4px silver" }}
              value={ind}
            >
              <Box m={5}>
                <Box
                  mt={4}
                  mb={5}
                  sx={{
                    // display: "flex",
                    // justifyContent: "space-between",
                    width: "100%",
                  }}
                >
                  <Typography pb={2} fontWeight="fontWeightLight" variant="h5">
                    {(props.city.indicators as any)[ind].short_name}
                  </Typography>

                  <Typography pb={3} fontWeight="fontWeightLight" variant="h6">
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
                              elevation={2}
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
                                  <Box>
                                    <Typography
                                      variant="h5"
                                      fontWeight="fontWeightLight"
                                    >
                                      {keyFigure.short_name}
                                    </Typography>

                                    <Typography
                                      mb={0.3}
                                      color="text.secondary"
                                      fontWeight="fontWeightLight"
                                      variant="h6"
                                      // color="text.secondary"
                                    >
                                      {keyFigure.unit}
                                    </Typography>
                                  </Box>
                                </Typography>
                              </AccordionSummary>
                              <AccordionDetails>
                                <Typography
                                  variant="h6"
                                  fontWeight="fontWeightLight"
                                >
                                  {keyFigure.definition}
                                </Typography>
                              </AccordionDetails>
                            </Accordion>
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
