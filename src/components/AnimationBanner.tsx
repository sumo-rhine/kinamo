import { Box, Typography, CardMedia } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { indexOf } from "lodash";
import { useEffect, useState } from "react";
import Fade from "@mui/material/Fade";

const useStyles = makeStyles({
  font: {
    color: "white",
  },

  banner: {
    position: "relative",
    perspective: "2000px",
    "-webkit-perspective": "2000px",
  },

  // },
  streets: {
    top: "-400px",
    left: "200px",
    position: "absolute",
    width: "1600px",
    zIndex: 1,
    transformOrigin: "55% 50% 200px",
    animation: `$animation_streets 50s linear infinite normal`,
  },
  pois: {
    top: "-400px",
    left: "200px",
    position: "absolute",
    width: "1600px",
    backgroundColor: "transparent",
    zIndex: 1,
    transformOrigin: "55% 50% 200px",
    animation: `$animation_pois 50s linear infinite normal`,
  },
  parks: {
    top: "-400px",
    left: "200px",
    position: "absolute",
    width: "1600px",
    backgroundColor: "transparent",
    zIndex: 1,
    transformOrigin: "55% 50% 200px",
    animation: `$animation_parks 50s linear infinite normal`,
  },

  "@keyframes animation_streets": {
    "0%": {
      transform: "rotateX(20deg) rotateY(-1deg) rotateZ(-180deg) ",
      filter:
        "saturate(1%) contrast(10%) drop-shadow(0 0 0.0rem rgb(124, 124, 124))",
      opacity: 1,
    },
    "33%": {
      transform: "rotateX(30deg) rotateY(-1deg) rotateZ(-120deg) ",
      filter:
        "saturate(100%) contrast(20%) drop-shadow(0 0 0.rem rgb(124, 124, 124))",
    },
    "66%": {
      transform: "rotateX(40deg) rotateY(-1deg) rotateZ(-80deg) ",
      filter:
        "saturate(100%) contrast(80%) drop-shadow(0 0 0.rem rgb(124, 124, 124))",
    },
    "100%": {
      transform: "rotateX(50deg) rotateY(-1deg) rotateZ(-20deg) ",
      filter:
        "saturate(1%) contrast(50%) drop-shadow(0 0 0.rem rgb(124, 124, 124))",
    },
  },

  "@keyframes animation_pois": {
    "0%": {
      transform: "rotateX(20deg) rotateY(-1deg) rotateZ(-180deg)",
      filter:
        "saturate(50%) contrast(50%) hue-rotate(-180deg) drop-shadow(0 0 0rem rgb(124, 124, 124))",
      opacity: 0,
    },
    "33%": {
      transform: "rotateX(30deg) rotateY(-2deg) rotateZ(-120deg)",
      filter:
        "saturate(50%) contrast(50%) hue-rotate(-180deg) drop-shadow(0 0 0.4rem rgb(240, 196, 196))",
      opacity: 0,
    },
    "66%": {
      transform: "rotateX(40deg) rotateY(-3deg) rotateZ(-80deg)",
      filter:
        "saturate(50%) contrast(50%) hue-rotate(-180deg) drop-shadow(0 0 0.1rem rgb(240, 196, 196))",
      opacity: 1,
    },
    "100%": {
      transform: "rotateX(50deg) rotateY(-4deg) rotateZ(-20deg)",
      filter:
        "saturate(50%) contrast(50%) hue-rotate(-180deg) drop-shadow(0 0 0rem rgb(124, 124, 124))",
      opacity: 0,
    },
  },
  "@keyframes animation_parks": {
    "0%": {
      transform: "rotateX(20deg) rotateY(-1deg) rotateZ(-180deg)",
      filter:
        "saturate(50%) contrast(50%) hue-rotate(-180deg) drop-shadow(0 0 0rem rgb(124, 124, 124))",
      opacity: 0,
    },
    "33%": {
      transform: "rotateX(30deg) rotateY(-2deg) rotateZ(-120deg)",
      filter:
        "saturate(50%) contrast(50%) hue-rotate(-180deg) drop-shadow(0 0 0.2rem rgb(240, 196, 196))",
      opacity: 0.4,
    },
    "66%": {
      transform: "rotateX(40deg) rotateY(-3deg) rotateZ(-80deg)",
      filter:
        "saturate(50%) contrast(50%) hue-rotate(-180deg) drop-shadow(0 0 0rem rgb(240, 196, 196))",
      opacity: 0.1,
    },
    "100%": {
      transform: "rotateX(50deg) rotateY(-4deg) rotateZ(-20deg)",
      filter:
        "saturate(50%) contrast(50%) hue-rotate(-180deg) drop-shadow(0 0 0rem rgb(124, 124, 124))",
      opacity: 0,
    },
  },
});
const randomInt = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const AnimationBanner = () => {
  const [index, setIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setLoading(false);
      setTimeout(function () {
        //do what you need here
      }, 2000);
      setIndex((index) => randomInt(0, 4));
      setLoading(true);
    }, 15000);
    return () => clearInterval(interval);
  }, []);

  console.log(loading);
  const city_list = [4, 102, 483, 1341, 1502];
  const pois_path =
    "assets/banner/" + city_list[index].toString() + "_pois.png";
  const streets_path =
    "assets/banner/" + city_list[index].toString() + "_streets.png";
  const parks_path =
    "assets/banner/" + city_list[index].toString() + "_parks.png";

  const classes = useStyles();
  return (
    <Box
      sx={{
        width: "100%",
        height: 700,
        position: "relative",
        backgroundColor: "#111213",
        overflow: "hidden",
      }}
    >
      <Box sx={{ position: "absolute" }}>
        <Fade in={loading} timeout={4000}>
          <Box className={classes.banner}>
            <img className={classes.parks} src={parks_path} />
            <img className={classes.pois} src={pois_path} />
            <img
              className={classes.streets}
              src={streets_path}
              // onLoad={onLoadHandler}
            />
          </Box>
        </Fade>
      </Box>
      <Box
        mt={20}
        ml={15}
        className={classes.font}
        sx={{ position: "absolute" }}
        fontWeight="fontWeightLight"
      >
        <Typography variant="h1" component="h1" fontWeight="fontWeightLight">
          Explore Cities
        </Typography>
        <Typography
          mt={2}
          ml={1}
          variant="h3"
          component="h3"
          fontWeight="fontWeightLight"
        >
          in the Upper Rhine Region
        </Typography>
        <Typography
          mt={15}
          ml={5}
          variant="h5"
          component="h5"
          fontWeight="fontWeightLight"
        >
          Follow the the transition to sustainable mobility
        </Typography>
      </Box>
    </Box>
  );
};

export default AnimationBanner;
