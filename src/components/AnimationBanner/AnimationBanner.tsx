import useStyles from "./styles";
import { Box, Typography } from "@mui/material";
import { City } from "../../models/FullDataset";

interface CityIdProps {
  city: City;
}
const AnimationBanner: React.FC<CityIdProps> = (props) => {
  // as long as we dont have all cities maps in public I use only one
  // if  {
  //   const id = 4;
  // } else {
  //   const id = 102;
  // }
  const id = props.city.id === 826 ? 826 : 102;

  const pois_path = "/assets/banner/" + id.toString() + "_pois.png";
  const streets_path = "/assets/banner/" + id.toString() + "_streets.png";
  const parks_path = "/assets/banner/" + id.toString() + "_parks.png";
  // console.log("path of animationBanner:", parks_path);

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
          <img
            alt="img"
            className={classes.parks}
            src={`/assets/banner/${id.toString()}_parks.png`}
            onError={(e: any) => (
              (e.target.onError = null),
              (e.target.src = "/assets/banner/102_parks.png")
            )}
          />
          <img
            alt="img"
            className={classes.pois}
            src={`/assets/banner/${id.toString()}_pois.png`}
            onError={(e: any) => (
              (e.target.onError = null),
              (e.target.src = "/assets/banner/102_pois.png")
            )}
          />
          <img
            alt="img"
            className={classes.streets}
            src={`/assets/banner/${id.toString()}_streets.png`}
            onError={(e: any) => (
              (e.target.onError = null),
              (e.target.src = "/assets/banner/102_streets.png")
            )}
          />
        </Box>
        {/* </Fade> */}
      </Box>
      <Box
        mt={30}
        ml={15}
        className={classes.font}
        sx={{ position: "absolute" }}
        fontWeight="fontWeightLight"
      >
        <Box
          sx={{ display: "flex", alignItems: "flex-end", fontWeight: "light" }}
          mt={5}
        >
          <Typography
            style={{
              color: "#bcbcbc",
            }}
            variant="h2"
          >
            Entdecke
            <Box display="inline" sx={{ color: "white" }}>
              {"  "}nachhaltige Mobilität{"  "}
            </Box>
          </Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "flex-end" }}>
          <Typography pr={2} pb={0.6} style={{ color: "#bcbcbc" }} variant="h2">
            in
          </Typography>
          <Typography
            mt={3}
            // ml={5}
            variant="h1"
            fontWeight="fontWeightLight"
          >
            {props.city.city}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default AnimationBanner;
