import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  banner: {
    display: `flex`,
    justifyContent: `center`,
    width: `2000px`,
    backgroundColor: `rgb(0, 0, 0)`,
  },
  css_transform: {
    //   transform: "rotateX(20deg) rotateY(-1deg) rotateZ(180deg)",
    transformOrigin: "55% 50% 200px",
    animation: "animation 50s linear infinite normal",
  },
  "@keyframes animation": {
    "0%": {
      transform: "rotateX(20deg) rotateY(-1deg) rotateZ(-180deg)",
      filter: "saturate(50%) contrast(50%) hue-rotate(-180deg)",
    },
    "50%": {
      transform: "rotateX(50deg) rotateY(-4deg) rotateZ(0deg)",
      filter: "saturate(100%) contrast(100%) hue-rotate(180deg)",
    },
    "100%": {
      transform: "rotateX(20deg) rotateY(-1deg) rotateZ(180deg)",
      filter: "saturate(50%) contrast(50%) hue-rotate(-180deg)",
    },
  },
});

const AnimationBanner = () => {
  const classes = useStyles();
  return (
    <div className={classes.banner}>
      <object
        className={classes.css_transform}
        data="../../assets/banner/102.png"
        type=""
      ></object>
    </div>
  );
};

export default AnimationBanner;
