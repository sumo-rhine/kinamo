import { makeStyles } from "@mui/styles";

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
    // boxShadow: "0px 0px 5px #fff",
    // filter: "drop-shadow(16px 16px 10px grey)",
    width: "1600px",
    zIndex: 1,
    transformOrigin: "55% 50% 200px",
    animation: `$animation_streets 100s linear infinite normal`,
  },
  pois: {
    top: "-400px",
    left: "200px",
    position: "absolute",
    width: "1600px",
    backgroundColor: "transparent",
    zIndex: 1,
    transformOrigin: "55% 50% 200px",
    animation: `$animation_pois 100s linear infinite normal`,
  },
  parks: {
    top: "-400px",
    left: "200px",
    position: "absolute",
    width: "1600px",
    backgroundColor: "transparent",
    zIndex: 0,
    transformOrigin: "55% 50% 200px",
    animation: `$animation_parks 100s linear infinite normal`,
  },

  "@keyframes animation_streets": {
    "0%": {
      transform: "rotateX(40deg) rotateY(-1deg) rotateZ(-180deg) ",
      filter: "contrast(2%) drop-shadow(250px 250px 250px #0000ff)",
      // opacity: 1,
    },
    "33%": {
      transform: "rotateX(40deg) rotateY(-1deg) rotateZ(-120deg) ",
      filter: "contrast(10%) drop-shadow(150px 150px 150px #ADD8E6)",
    },
    "66%": {
      transform: "rotateX(40deg) rotateY(-1deg) rotateZ(-80deg) ",
      filter: "contrast(20%) drop-shadow(250px 250px 250px #0000ff)",
    },
    "100%": {
      transform: "rotateX(40deg) rotateY(-1deg) rotateZ(-20deg) ",
      filter: "contrast(10%) drop-shadow(150px 150px 150px #ADD8E6)",
    },
  },

  "@keyframes animation_pois": {
    "0%": {
      transform: "rotateX(40deg) rotateY(-1deg) rotateZ(-180deg)",
      filter:
        "saturate(50%) contrast(50%) hue-rotate(-180deg) drop-shadow(100px 100px 100px yellow)",
      opacity: 0.1,
    },
    "33%": {
      transform: "rotateX(40deg) rotateY(-2deg) rotateZ(-120deg)",
      filter:
        "saturate(50%) contrast(50%) hue-rotate(-180deg) drop-shadow(100px 100px 100px yellow)",
      opacity: 0.5,
    },
    "66%": {
      transform: "rotateX(40deg) rotateY(-3deg) rotateZ(-80deg)",
      filter:
        "saturate(50%) contrast(50%) hue-rotate(-180deg) drop-shadow(100px 100px 100px yellow)",
      opacity: 1,
    },
    "100%": {
      transform: "rotateX(40deg) rotateY(-4deg) rotateZ(-20deg)",
      filter:
        "saturate(50%) contrast(50%) hue-rotate(-180deg) drop-shadow(100px 100px 100px yellow)",
      opacity: 0,
    },
  },
  "@keyframes animation_parks": {
    "0%": {
      transform: "rotateX(40deg) rotateY(-1deg) rotateZ(-180deg)",
      // filter:
      //   "saturate(50%) contrast(50%) hue-rotate(-180deg) drop-shadow(0 0 0rem rgb(124, 124, 124))",
      opacity: 0,
    },
    "33%": {
      transform: "rotateX(40deg) rotateY(-2deg) rotateZ(-120deg)",
      // filter:
      //   "saturate(50%) contrast(50%) hue-rotate(-180deg) drop-shadow(0 0 0.2rem rgb(240, 196, 196))",
      opacity: 0.2,
    },
    "66%": {
      transform: "rotateX(40deg) rotateY(-3deg) rotateZ(-80deg)",
      // filter:
      //   "saturate(50%) contrast(50%) hue-rotate(-180deg) drop-shadow(0 0 0rem rgb(240, 196, 196))",
      opacity: 0.1,
    },
    "100%": {
      transform: "rotateX(40deg) rotateY(-4deg) rotateZ(-20deg)",
      // filter:
      //   "saturate(50%) contrast(50%) hue-rotate(-180deg) drop-shadow(0 0 0rem rgb(124, 124, 124))",
      opacity: 0,
    },
  },
});

export default useStyles;
