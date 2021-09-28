// import { CardMedia, makeStyles } from "@material-ui/core";
// import { Box, Typography } from "@material-ui/core";
import { Box, Typography, CardMedia } from "@mui/material";
import { makeStyles } from "@mui/styles";
import streets from "../assets/banner/102_streets.png";
import pois from "../assets/banner/102_pois.png";
import parks from "../assets/banner/102_parks.png";

const useStyles = makeStyles({
  font: {
    position: "absolute",
    top: "30%",
    width: "100%",
    paddingLeft: "10%",
    textAlign: "left",
    color: "white",
    backgroundColor: "none",
    // fontFamily: "Roboto,
  },
  // img: {
  //   position: "absolute",
  //   top: "25px",
  //   left: "25px",
  //   width: "1600px",
  // },
  animation: {
    position: "relative",
  },
  banner: {
    perspective: "1200px",
    "-webkit-perspective": "1200px",
    height: `700px`,
    backgroundColor: `rgb(0, 0, 0)`,
    display: `flex`,
    justifyContent: `center`,
    overflow: "hidden",
    // top: "-1000px",

    // width: `4000px`,
  },
  streets: {
    // position: "relative",
    // top: "-300px",
    zIndex: 2,

    // display: `flex`,
    // justifyContent: `center`,
    // alignContent: `flex-start`,
    // width: `4000px`,
    // height: `1200px`,
    // overflow: "hidden",

    transformOrigin: "55% 50% 0px",
    animation: `$animation_streets 50s linear infinite normal`,
  },
  "@keyframes animation_streets": {
    "0%": {
      transform: "rotateX(10deg) rotateY(-1deg) rotateZ(-180deg)",
      filter: "saturate(0%) contrast(100%) hue-rotate(-180deg)",
    },
    "50%": {
      transform: "rotateX(50deg) rotateY(-4deg) rotateZ(0deg)",
      filter: "saturate(50%) contrast(50%) hue-rotate(180deg)",
    },
    "100%": {
      transform: "rotateX(10deg) rotateY(-1deg) rotateZ(180deg)",
      filter: "saturate(0%) contrast(100%) hue-rotate(-180deg)",
    },
  },

  pois: {
    // position: "relative",
    // top: "-300px",
    zIndex: 10,

    // display: `flex`,
    // justifyContent: `center`,
    // alignContent: `flex-start`,
    // width: `4000px`,
    // height: `1200px`,
    // overflow: "hidden",

    transformOrigin: "55% 50% 0px",
    animation: `$animation_pois 50s linear infinite normal`,
  },
  "@keyframes animation_pois": {
    "0%": {
      transform: "rotateX(10deg) rotateY(-1deg) rotateZ(-180deg)",
      filter: "saturate(0%) contrast(100%) hue-rotate(-180deg)",
    },
    "50%": {
      transform: "rotateX(50deg) rotateY(-4deg) rotateZ(0deg)",
      filter: "saturate(50%) contrast(50%) hue-rotate(180deg)",
    },
    "100%": {
      transform: "rotateX(10deg) rotateY(-1deg) rotateZ(180deg)",
      filter: "saturate(0%) contrast(100%) hue-rotate(-180deg)",
    },
  },
});
// const map = require("../assets/banner/102_parks.png");

const AnimationBanner = () => {
  const classes = useStyles();
  return (
    <Box className={classes.banner}>
      <Box className={classes.animation}>
        <img className={classes.streets} src="assets/banner/102_streets.png" />
        <img className={classes.pois} src="assets/banner/102_pois.png" />
        {/* <img className={classes.parks} src={parks} /> */}
        {/* <CardMedia image={pois} className={classes.pois} /> */}
        {/* <CardMedia image={streets} className={classes.streets} /> */}
        {/* <CardMedia image={parks} className={classes.parks} /> */}
      </Box>
      <Box className={classes.font}>
        <Typography gutterBottom variant="h1" component="h1">
          Explore Cities
        </Typography>
        <Typography gutterBottom variant="h3" component="h3">
          in the Upper Rhine Region
        </Typography>
        <Typography gutterBottom variant="h5" component="h5">
          Follow the the transition to sustainable mobility
        </Typography>
      </Box>
    </Box>
  );
};

export default AnimationBanner;
