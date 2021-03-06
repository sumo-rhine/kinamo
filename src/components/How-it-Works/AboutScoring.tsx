import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import Paper from "@mui/material/Paper";
import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Slider from "@mui/material/Slider";
import Divider from "@mui/material/Divider";
const AboutScoring = () => {
  const initSpeedLimit = 70;
  const barWidthFactor = 3;
  const nCities = 36;
  const ratingInPercent = 100 / nCities;
  const initBicycleAccidents = 2;
  const maxSpeedLimit = 88;
  const minSpeedLimit = 22;
  const maxBicycleAccidents = 5.87;
  const minBicycleAccidents = 0;

  // const initSpeedLimitBarWidth = (initSpeedLimit - minSpeedLimit) * (100 / 66);
  // const initBicycleAccidentsBarWidth;

  const marksSpeedLimit = [
    {
      value: 22,
      label: "22%",
    },
    // {
    //   value: 30,
    //   label: "30%",
    // },
    {
      value: 40,
      label: "40%",
    },
    // {
    //   value: 50,
    //   label: "50%",
    // },
    {
      value: 60,
      label: "60%",
    },
    // {
    //   value: 70,
    //   label: "70%",
    // },
    // {
    //   value: 80,
    //   label: "80%",
    // },
    {
      value: 88,
      label: "88%",
    },
  ];

  const marksBicycleAccidents = [
    {
      value: minBicycleAccidents,
      label: "0",
    },
    // {
    //   value: 30,
    //   label: "30%",
    // },
    {
      value: 1.4,
      label: "1.4",
    },
    // {
    //   value: 50,
    //   label: "50%",
    // },
    {
      value: 2.8,
      label: "2.8",
    },
    // {
    //   value: 70,
    //   label: "70%",
    // },
    {
      value: 4.4,
      label: "4.4",
    },
    {
      value: maxBicycleAccidents,
      label: "5.9",
    },
  ];

  function valueTextSpeedLimit(value: number) {
    return `${value}%`;
  }

  const [speedLimit, setSpeedLimit] = React.useState<
    number | string | Array<number | string>
  >(initSpeedLimit);
  const [speedLimitRank, setSpeedLimitRank] = useState(
    initSpeedLimit / ratingInPercent
  );

  const [speedLimitBarWidth, setSpeedLimitBarWidth] = useState(
    (initSpeedLimit - minSpeedLimit) * (100 / 66) // speed limit goes from 22 ro 88
  );

  // const [speedLimitRest, setSpeedLimitRest] = React.useState<
  //   number | string | Array<number | string>
  // >(30);

  const [bicycleAccidents, setBicycleAccidents] = useState<
    number | string | Array<number | string>
  >(initBicycleAccidents);

  const [bicycleAccidentsRating, setBicycleAccidentsRating] = useState(
    initBicycleAccidents * (36 / maxBicycleAccidents)
  );

  const [bicycleAccidentsBarWidth, setBicycleAccidentsBarWidth] = useState(
    initBicycleAccidents * (100 / maxBicycleAccidents)
  );

  const handleSliderChangeSpeedLimit = (
    event: Event,
    newValue: number | number[]
  ) => {
    setSpeedLimit(newValue);
    setSpeedLimitBarWidth(((newValue as number) - minSpeedLimit) * (100 / 66));
    const speedLimitRankingNew =
      (speedLimitBarWidth as number) / ratingInPercent;
    setSpeedLimitRank(speedLimitRankingNew < 0.2 ? 1 : speedLimitRankingNew);
  };

  const handleSliderChangeBicycleAccidents = (
    event: Event,
    newValue: number | number[]
  ) => {
    setBicycleAccidents(newValue);
    setBicycleAccidentsBarWidth(bicycleAccidentsRating * ratingInPercent);
    const bicycleAccidentsRankNew =
      (newValue as number) * (36 / maxBicycleAccidents);
    setBicycleAccidentsRating(
      bicycleAccidentsRankNew < 0.2 ? 1 : bicycleAccidentsRankNew
    );
  };

  // console.log(200 - ((speedLimit as number) + 100));

  return (
    <Box>
      <Typography fontWeight="fontWeightLight" variant="h4">
        Interaktives Beispiel zur Berechnung der Indikatoren
      </Typography>
      <Typography mt={4} fontWeight="fontWeightLight" variant="h6">
        Betrachten wir als Beispiel einen Indikator, der nur aus zwei Kennzahlen
        besteht: Anteil 30er Zonen und Anzahl Bike-sharing Fahrr??der.
      </Typography>
      <Typography pb={4} fontWeight="fontWeightLight" variant="h6">
        Indem du den blauen Regler der beiden Kennzahlen verschiebst, kannst du
        interaktiv verstehen wie sich die KINaMo Indikatoren zusammensetzen.
      </Typography>
      <Divider textAlign="left">
        {" "}
        <Typography fontWeight="fontWeightLight" variant="h5">
          {/* {(props.city.indicators as any)[ind].short_name} */}
          Beispiel
        </Typography>
      </Divider>
      <Box>
        <Grid mt={2} container spacing={2} columns={12}>
          <Grid xs={6} item>
            <Box
              // ml={15}
              // mb={}
              sx={{
                // width: "100%",
                height: "100%",
                display: "flex",
                // alignItems: "flex-end",
                justifyContent: "flex-start",
                alignItems: "center",
              }}
            >
              <Typography fontWeight="fontWeightLight" variant="h6">
                Ein Indikator wird aus den Punkten der Kennzahlen berechnet. Die
                Rangfolge bestimmt die Punkte der Kennzahlen. Bei 36 Gemeinden
                erh??lt die oberste Gemeinde 36 Punkte, die unterste Gemeinde
                einen Punkt. Zur Berechnung der Indikatoren werden die Punkte
                aller Kennzahlen addiert und von einer Skala von 0 bis 10
                skaliert.
              </Typography>
            </Box>
          </Grid>
          <Grid xs={6} item>
            {/* <Typography
              mb={1}
              fontWeight="fontWeightLight"
              color="text.secondary"
              variant="h4"
            >
              Indikator
            </Typography> */}
            <Paper square sx={{ backgroundColor: "#F8F8F8" }} elevation={7}>
              <Box p={3}>
                <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                  <Typography mr={1} fontWeight="fontWeightLight" variant="h3">
                    {(
                      (speedLimitBarWidth + bicycleAccidentsBarWidth) /
                      20
                    ).toFixed(1)}
                  </Typography>
                  <Typography mr={1} fontWeight="fontWeightLight" variant="h6">
                    von
                  </Typography>
                  <Typography fontWeight="fontWeightLight" variant="h4">
                    10
                  </Typography>
                </Box>
                <Box sx={{ display: "flex" }}>
                  <Box
                    sx={{
                      width: speedLimitBarWidth * barWidthFactor,
                      backgroundColor: "#1A4613",
                      height: 20,
                    }}
                  ></Box>
                  <Box
                    sx={{
                      width: Number(
                        (bicycleAccidentsBarWidth as number) * barWidthFactor
                      ),
                      backgroundColor: "#226A2A",
                      height: 20,
                    }}
                  ></Box>

                  <Box
                    sx={{
                      width: Number(
                        (200 -
                          ((speedLimitBarWidth as number) +
                            (bicycleAccidentsBarWidth as number))) *
                          barWidthFactor
                      ),
                      // width: 1,

                      backgroundColor: "#d3d3d3",
                      height: 20,
                    }}
                  ></Box>
                </Box>
                <Box sx={{ display: "flex" }}>
                  <Box
                    sx={{
                      width:
                        (speedLimitBarWidth + bicycleAccidentsBarWidth) *
                        barWidthFactor,
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "flex-end",
                        alignItems: "flex-end",
                        minWidth: 150,
                      }}
                    >
                      <Typography
                        mr={1}
                        variant="h4"
                        fontWeight="fontWeightLight"
                      >
                        {(speedLimitRank + bicycleAccidentsRating).toFixed(0)}
                      </Typography>
                      <Typography variant="h6" fontWeight="fontWeightLight">
                        von 72
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Paper>
          </Grid>

          <Grid xs={6} mt={10} item>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-end",
              }}
              mr={5}
            >
              <Typography pr={28} variant="h6" fontWeight="fontWeightLight">
                Anteil 30er Zonen
              </Typography>
              <Box sx={{ display: "flex" }}>
                <Typography pr={1} variant="h3" fontWeight="fontWeightLight">
                  {speedLimit}%
                </Typography>

                <Box mt={2} mr={11} sx={{ width: 200 }}>
                  <Slider
                    defaultValue={initSpeedLimit}
                    aria-label="Small"
                    // valueLabelDisplay="auto"
                    onChange={handleSliderChangeSpeedLimit}
                    getAriaValueText={valueTextSpeedLimit}
                    min={minSpeedLimit}
                    max={maxSpeedLimit}
                    marks={marksSpeedLimit}
                  />
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid xs={6} mt={10} item>
            <Box sx={{ display: "flex" }}>
              <Box mt={0.5}>
                <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                  <Typography variant="h3" fontWeight="fontWeightLight">
                    {Math.abs(speedLimitRank - 37).toFixed(0)}{" "}
                  </Typography>
                  <Typography
                    mb={0.3}
                    variant="h6"
                    fontWeight="fontWeightLight"
                  >
                    ter von 36 Kommunen
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    boxShadow: 3,
                    bgcolor: "background.paper",
                  }}
                >
                  <Box
                    sx={{
                      width: (speedLimitBarWidth as number) * barWidthFactor,
                      backgroundColor: "#1A4613",
                      height: 7,
                    }}
                  ></Box>
                  <Box
                    sx={{
                      width:
                        (100 - (speedLimitBarWidth as number)) * barWidthFactor,
                      backgroundColor: "#d3d3d3",
                      height: 7,
                    }}
                  ></Box>
                </Box>
              </Box>
              <Typography
                ml={6}
                mt={5}
                align="center"
                variant="h4"
                fontWeight="fontWeightLight"
              >
                {speedLimitRank.toFixed(0)} Punkte
              </Typography>
            </Box>
          </Grid>
          <Grid xs={6} item>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-end",
              }}
              mr={5}
            >
              <Typography
                pr={0}
                // sx={{ width: 250 }}
                variant="h6"
                fontWeight="fontWeightLight"
              >
                Bike-sharing Fahrr??der pro 1000 Einwohner
              </Typography>
              <Box sx={{ display: "flex" }}>
                <Typography pr={3} variant="h3" fontWeight="fontWeightLight">
                  {(bicycleAccidents as number).toFixed(1)}
                </Typography>
                <Box mt={2} mr={11} sx={{ width: 200 }}>
                  <Slider
                    // track="inverted"
                    defaultValue={initBicycleAccidents}
                    aria-label="Small"
                    // valueLabelDisplay="auto"
                    onChange={handleSliderChangeBicycleAccidents}
                    step={maxBicycleAccidents / 100}
                    min={minBicycleAccidents}
                    max={maxBicycleAccidents}
                    marks={marksBicycleAccidents}
                  />
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box sx={{ display: "flex" }}>
              <Box mt={0.5}>
                <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                  <Typography mr={0} variant="h3" fontWeight="fontWeightLight">
                    {bicycleAccidentsRating < 1
                      ? 36
                      : Math.abs(bicycleAccidentsRating - 37).toFixed(0)}
                  </Typography>
                  <Typography
                    mb={0.3}
                    variant="h6"
                    fontWeight="fontWeightLight"
                  >
                    ter von 36 Kommunen
                  </Typography>
                </Box>
                <Box sx={{ display: "flex" }}>
                  <Box
                    sx={{
                      width: Number(
                        (bicycleAccidentsBarWidth as number) * barWidthFactor
                      ),
                      backgroundColor: "#226A2A",
                      height: 7,
                    }}
                  ></Box>
                  <Box
                    sx={{
                      width:
                        (100 - (bicycleAccidentsBarWidth as number)) *
                        barWidthFactor,
                      backgroundColor: "#d3d3d3",
                      height: 7,
                    }}
                  ></Box>
                </Box>
              </Box>
              <Typography
                ml={6}
                mt={5}
                align="center"
                variant="h4"
                fontWeight="fontWeightLight"
              >
                {bicycleAccidentsRating.toFixed(0)} Punkte
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default AboutScoring;
