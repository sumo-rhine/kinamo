import useStyles from "./styles";
import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import Fade from "@mui/material/Fade";
import Animation from "./Animation";

const randomInt = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const RandomAnimationBanner: React.FC = (props) => {
  const [id, setId] = useState(102);
  const [loading, setLoading] = useState(true);
  const city_list = [102, 483, 1502, 4, 1341];

  useEffect(() => {
    const interval = setInterval(() => {
      setLoading(false);
      // console.log("trigger false");

      setTimeout(function () {
        // console.log("trigger next image");
        setId(city_list[randomInt(0, 4)]);
        setTimeout(function () {
          console.log("trigger true");
          setLoading(true);
        }, 1500);
      }, 1000);
      // setLoading(true);
    }, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      sx={{
        width: "100%",
        height: 800,
        position: "relative",
        backgroundColor: "#111213",
        overflow: "hidden",
      }}
    >
      <Box sx={{ position: "absolute" }}>
        {/* TODO #117 Fade error -  */}
        {/* <Fade in={loading} timeout={1000}> */}
        <Animation id={id}></Animation>
        {/* </Fade> */}
      </Box>
      <Box
        mt={15}
        ml={15}
        color={"white"}
        sx={{ position: "absolute" }}
        fontWeight="fontWeightLight"
      >
        <Box sx={{ width: 650 }}>
          <Typography variant="h2" fontWeight="fontWeightLight">
            Entdecke
            <Box fontWeight="Medium" display="inline">
              {" "}
              Nachhaltige Mobilität{" "}
            </Box>
            am Oberrhein
          </Typography>
          <Typography mt={7} ml={1} variant="h4" fontWeight="fontWeightLight">
            Bewertung und Vergleich der nachhaltigen Mobilität in 36 Kommunen
            der Oberrheinregion mit
          </Typography>
        </Box>

        <Typography pt={5} ml={1} variant="h4" fontWeight="fontWeightLight">
          <Box fontWeight="Medium" display="inline">
            {" "}
            KINaMo -
          </Box>
          <Box fontWeight="Medium" display="inline">
            {" "}
            K
          </Box>
          ommunales
          <Box fontWeight="Medium" display="inline">
            {" "}
            I
          </Box>
          nformationsystem für
          <Box fontWeight="Medium" display="inline">
            {" "}
            Na
          </Box>
          chaltige
          <Box fontWeight="Medium" display="inline">
            {" "}
            Mo
          </Box>
          bilität
        </Typography>
      </Box>
    </Box>
  );
};

export default RandomAnimationBanner;
