import useStyles from "./styles";
import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import Fade from "@mui/material/Fade";
const randomInt = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const RandomAnimationBanner: React.FC = (props) => {
  const [index, setIndex] = useState(3);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setLoading(false);
      console.log("trigger false");
      setTimeout(function () {
        console.log("trigger next image");
        setIndex((index) => randomInt(0, 4));
        //do what you need here
        setTimeout(function () {
          console.log("trigger true");
          setLoading(true);
        }, 1500);
      }, 1000);
      // setLoading(true);
    }, 30000);
    return () => clearInterval(interval);
  }, []);

  const city_list = [4, 102, 483, 1341, 1502];
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
        mt={19}
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
          mt={5}
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

export default RandomAnimationBanner;
