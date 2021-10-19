import useStyles from "./styles";
import { Box, Typography } from "@mui/material";
import { indexOf } from "lodash";
import { useEffect, useState } from "react";
import Fade from "@mui/material/Fade";
import { City } from "../../models/FullDataset";
import { KeyFigureBannerLight } from "../KeyFigureBanner/KeyFigureBanner";

interface CityIdProps {
  city: City;
}
const AnimationBanner: React.FC<CityIdProps> = (props) => {
  // const [id, setId] = useState(0);
  // const [loading, setLoading] = useState(true);
  // const city_list = [4, 102, 483, 1341, 1502];
  // as long as we dont have all cities maps in public I use only one
  const id = 4;

  const pois_path = "/assets/banner/" + id.toString() + "_pois.png";
  const streets_path = "/assets/banner/" + id.toString() + "_streets.png";
  const parks_path = "/assets/banner/" + id.toString() + "_parks.png";
  console.log("path of animationBanner:", parks_path);

  const classes = useStyles();
  return (
    <Box
      sx={{
        width: "100%",
        height: 600,
        display: "flex",
        position: "relative",
        backgroundColor: "#111213",
        overflow: "hidden",
      }}
    >
      <Box sx={{ position: "absolute" }}>
        {/* <Fade in={loading} timeout={4000}> */}
        <Box className={classes.banner}>
          <img className={classes.parks} src={parks_path} />
          <img className={classes.pois} src={pois_path} />
          <img
            className={classes.streets}
            src={streets_path}
            // onLoad={onLoadHandler}
          />
        </Box>
        {/* </Fade> */}
      </Box>
      <Box
        mt={15}
        ml={15}
        className={classes.font}
        sx={{ position: "absolute" }}
        fontWeight="fontWeightLight"
      >
        <Box
          sx={{ display: "flex", alignItems: "flex-end", fontWeight: "light" }}
          mt={5}
        >
          <Typography style={{ color: "#bcbcbc" }} variant="h2">
            Explore the state of mobility in
          </Typography>
          {/* <Typography
            mt={2}
            ml={1}
            variant="h3"
            fontWeight="fontWeightLight"
          >
            the state of mobility in
          </Typography> */}
        </Box>
        <Typography
          mt={5}
          // ml={5}
          variant="h1"
          fontWeight="fontWeightLight"
        >
          {props.city.city}
        </Typography>
      </Box>
      {/* <KeyFigureBannerLight city={props.city}></KeyFigureBannerLight> */}
    </Box>
  );
};

export default AnimationBanner;
