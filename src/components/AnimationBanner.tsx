// import { CardMedia, makeStyles } from "@material-ui/core";
// import { Box, Typography } from "@material-ui/core";
import { Box, Typography, CardMedia } from "@mui/material";
import { makeStyles } from "@mui/styles";
// import streets from "../assets/banner/102_streets.png";
// import pois from "../assets/banner/102_pois.png";
// import parks from "../assets/banner/102_parks.png";

const useStyles = makeStyles({
  font: {
    // position: "absolute",
    // top: "30%",
    // width: "100%",
    // paddingLeft: "10%",
    // textAlign: "left",
    color: "white",
    // backgroundColor: "none",
    // fontFamily: "Roboto,
  },

  banner: {
    // overflow: "hidden",
    // perspective: "100%",
    // "-webkit-perspective": "100%",
    // height: `900px`,
    // backgroundColor: `rgb(0, 0, 0)`,
    // position: "relative",
    // display: `flex`,
    // justifyContent: `center`,
    // overflow: "hidden",
    // top: "-1000px",
  },
  image: {
    position: "absolute",
    width: "1700px",
    // top: "20%",
    backgroundColor: "transparent",
    // opacity: 0.2,
    // objectFit: "cover",
    // width: "100px",
    // position: "absolute",
    // top: "25px",
    // left: "25px",
    // width: "1200px",
  },
  streets: {
    // zIndex: 2,
    // transformOrigin: "55% 50% 200px",
    // animation: `$animation_streets 50s linear infinite normal`,
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
    // zIndex: 10,
    // transformOrigin: "55% 50% 200px",
    // animation: `$animation_streets 50s linear infinite normal`,
  },
  // "@keyframes animation_pois": {
  //   "0%": {
  //     transform: "rotateX(10deg) rotateY(-1deg) rotateZ(-180deg)",
  //     filter: "saturate(0%) contrast(100%) hue-rotate(-180deg)",
  //   },
  //   "50%": {
  //     transform: "rotateX(50deg) rotateY(-4deg) rotateZ(0deg)",
  //     filter: "saturate(50%) contrast(50%) hue-rotate(180deg)",
  //   },
  //   "100%": {
  //     transform: "rotateX(10deg) rotateY(-1deg) rotateZ(180deg)",
  //     filter: "saturate(0%) contrast(100%) hue-rotate(-180deg)",
  //   },
  parks: {
    // zIndex: -3,
    // transformOrigin: "55% 50% 200px",
    // animation: `$animation_streets 50s linear infinite normal`,
  },
  // "@keyframes animation_parks": {
  //   "0%": {
  //     transform: "rotateX(10deg) rotateY(-1deg) rotateZ(-180deg)",
  //     filter: "saturate(0%) contrast(100%) hue-rotate(-180deg)",
  //   },
  //   "50%": {
  //     transform: "rotateX(50deg) rotateY(-4deg) rotateZ(0deg)",
  //     filter: "saturate(50%) contrast(50%) hue-rotate(180deg)",
  //   },
  //   "100%": {
  //     transform: "rotateX(10deg) rotateY(-1deg) rotateZ(180deg)",
  //     filter: "saturate(0%) contrast(100%) hue-rotate(-180deg)",
  //   },
  // },
});
// const map = require("../assets/banner/102_parks.png");

const AnimationBanner = () => {
  const classes = useStyles();
  return (
    <Box
      sx={{
        width: "100%",
        height: 700,
        position: "relative",
        backgroundColor: "black",
        overflow: "hidden",
      }}
    >
      <Box className={classes.banner} sx={{ position: "absolute" }}>
        <Box>
          {/* {/* <img className={classes.parks} src="assets/banner/102_parks.png" /> */}
          <img className={classes.image} src="assets/banner/102_pois.png" />
          <img className={classes.image} src="assets/banner/102_streets.png" />
          {/* <CardMedia
            image="assets/banner/102_pois.png"
            className={classes.pois}
          /> */}
          {/* <CardMedia image={streets} className={classes.streets} /> */}
          {/* <CardMedia image={parks} className={classes.parks} /> */}
        </Box>
      </Box>
      <Box
        mt={20}
        ml={15}
        className={classes.font}
        sx={{ position: "absolute" }}
      >
        <Typography variant="h1" component="h1">
          Explore Cities
        </Typography>
        <Typography mt={2} ml={1} variant="h3" component="h3">
          in the Upper Rhine Region
        </Typography>
        <Typography mt={10} ml={1} variant="h5" component="h5">
          Follow the the transition to sustainable mobility
        </Typography>
      </Box>
    </Box>
  );
};

export default AnimationBanner;
