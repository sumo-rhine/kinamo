import { CardMedia, makeStyles } from "@material-ui/core";
import { Box, Typography } from "@material-ui/core";
import map from "../banner/102.png";
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
  banner: {
    position: "relative",
    perspective: "1200px",
    "-webkit-perspective": "1200px",
    overflow: "hidden",

    // display: `flex`,
    // justifyContent: `center`,
    // width: `4000px`,
    height: `700px`,
    backgroundColor: `rgb(0, 0, 0)`,
  },
  css_transform: {
    position: "relative",
    top: "-300px",

    // display: `flex`,
    // justifyContent: `center`,
    // alignContent: `flex-start`,

    // width: `4000px`,
    height: `1200px`,
    // overflow: "hidden",

    transformOrigin: "55% 50% 0px",
    animation: `$mapRotation 50s linear infinite normal`,
  },
  "@keyframes mapRotation": {
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

const AnimationBanner = () => {
  const classes = useStyles();
  return (
    <Box className={classes.banner}>
      <CardMedia image={map} className={classes.css_transform} />
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
