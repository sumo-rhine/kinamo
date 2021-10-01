import useStyles from "./styles";
import { Box, Typography, CardMedia } from "@mui/material";
import { indexOf } from "lodash";
import { useEffect, useState } from "react";
import Fade from "@mui/material/Fade";

interface CityIdProps {
  cityId: any;
  cityName: string;
}
const AnimationBanner: React.FC<CityIdProps> = (props) => {
  // const [id, setId] = useState(0);
  // const [loading, setLoading] = useState(true);
  // const city_list = [4, 102, 483, 1341, 1502];
  // as long as we dont have all cities maps in public I use only one
  const id = 483;

  const pois_path = "assets/banner/" + id.toString() + "_pois.png";
  const streets_path = "assets/banner/" + id.toString() + "_streets.png";
  const parks_path = "assets/banner/" + id.toString() + "_parks.png";
  console.log(props.cityId);
  console.log(id);
  console.log(parks_path);

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
        mt={20}
        ml={15}
        className={classes.font}
        sx={{ position: "absolute" }}
        fontWeight="fontWeightLight"
      >
        <Box
          sx={{ display: "flex", alignItems: "flex-end", fontWeight: "light" }}
          mt={10}
        >
          <Typography variant="h2">Explore the state of mobility in</Typography>
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
          mt={10}
          // ml={5}
          variant="h2"
          fontWeight="fontWeightLight"
        >
          {props.cityName}
        </Typography>
      </Box>
    </Box>
  );
};

export default AnimationBanner;
