import useStyles from "./styles";
import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import Fade from "@mui/material/Fade";

const randomInt = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const RandomAnimationBanner: React.FC = (props) => {
  const [index, setIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setLoading(false);
      // console.log("trigger false");
      setTimeout(function () {
        // console.log("trigger next image");
        if (index > 4) {
          setIndex(index + 1);
        } else {
          setIndex(0);
        }
        //do what you need here
        setTimeout(function () {
          // console.log("trigger true");
          setLoading(true);
        }, 1500);
      }, 1000);
      // setLoading(true);
    }, 30000);
    return () => clearInterval(interval);
  }, []);

  // const city_list = [4, 102, 483, 1341, 1502];
  const city_list = [102, 483, 1502, 4, 1341];

  const pois_path =
    "assets/banner/" + city_list[index].toString() + "_pois.png";
  const streets_path =
    "assets/banner/" + city_list[index].toString() + "_streets.png";
  const parks_path =
    "assets/banner/" + city_list[index].toString() + "_parks.png";

  // console.log("path of random animation banner: ", parks_path);
  const classes = useStyles();
  return (
    <Box
      sx={{
        width: "100%",
        height: 650,
        position: "relative",
        backgroundColor: "#111213",
        overflow: "hidden",
      }}
    >
      <Box sx={{ position: "absolute" }}>
        <Fade in={loading} timeout={1000}>
          <Box className={classes.banner}>
            <img alt="img" className={classes.parks} src={parks_path} />
            <img alt="img" className={classes.pois} src={pois_path} />
            <img
              alt="img"
              className={classes.streets}
              src={streets_path}
              // onLoad={onLoadHandler}
            />
          </Box>
        </Fade>
      </Box>
      <Box
        mt={15}
        ml={15}
        className={classes.font}
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
            Bewerte und vergleiche den Zustand nachhaltiger Mobilität in 36
            Kommunen der Oberrheinregion mit
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
          bilität .
        </Typography>
        {/* <Typography
          mt={8}
          ml={1}
          variant="h5"
          component="h5"
          fontWeight="fontWeightLight"
        >
          Dem
          <Box fontWeight="Medium" display="inline">
            {" "}
            K
          </Box>
          ommunalen
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
        </Typography> */}
      </Box>
    </Box>
  );
};

export default RandomAnimationBanner;
