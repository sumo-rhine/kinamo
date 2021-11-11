import React from "react";
import { Box } from "@mui/material";
import Header from "../components/Header/Header";
import RandomAnimationBanner from "../components/AnimationBanner/RandomAnimationBanner";
import CityTable from "../components/City-Table/City-Table";
import XDataTable from "../components/City-Table/x-Data-Grid";
import DividerOverview from "../components/DividerOverview";
import About from "../components/How-it-Works/HowItWorks";
import CityStepper from "../components/Carousel/CityStepper";
import { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import Footer from "../components/Footer/Footer";
const LandingPage: React.FC = () => {
  const [active, setActive] = useState(false);
  const [windowWidth, setWindowWidth] = useState<undefined | number>(1500);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    // console.log(windowWidth);
  }, []);

  return (
    <Box>
      {windowWidth! > 1400 ? (
        <Box>
          <div id="top" />
          <Header
            // value={active}
            // setter={setActive}
            cityName="wähle deine Kommune"
          ></Header>
          <RandomAnimationBanner></RandomAnimationBanner>
          <CityStepper />
          <About value={active} setter={setActive} />
          <DividerOverview />
          <XDataTable />
          {/* <CityTable /> */}
          <Footer />
        </Box>
      ) : (
        <Box
          sx={{
            width: "100%",
            height: "100vh",
            display: "flex",
            backgroundColor: "black",
            color: "white",
          }}
        >
          <Box>
            <img
              style={{
                position: "absolute",
                zIndex: 2,
                // height: 800,
                // overflow: "hidden",
                // boxShadow: "0 2px 4px silver",
                // left: 40,
                filter: "blur(1px)",
                opacity: 0.3,
              }}
              alt="img"
              src="/assets/thumbnail/102_crop.png"
            />
          </Box>
          <Box sx={{}}>
            <Typography
              mt={10}
              m={6}
              align="center"
              variant="h6"
              fontWeight="fontWeightLight"
            >
              Sie sind auf der KINaMo Webseite, die Applikation befindet
              momentan noch in der Entwicklung und ist noch nicht für mobile
              Geräte optimiert.
            </Typography>
            <Typography
              m={6}
              align="center"
              variant="h4"
              fontWeight="fontWeightLight"
            >
              Bitte besuchen sie die Seite mit einem Desktop Gerät erneut.
            </Typography>
            <Typography
              m={6}
              align="center"
              variant="h6"
              fontWeight="fontWeightLight"
            >
              Danke für ihr Verständnis
            </Typography>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default LandingPage;
