import { Box, Typography } from "@mui/material";
import { City } from "../../models/FullDataset";
import Animation from "./Animation";
interface CityIdProps {
  city: City;
}
const AnimationBanner: React.FC<CityIdProps> = (props) => {
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
      <Animation id={props.city.id}></Animation>
      <Box
        mt={30}
        ml={15}
        color={"white"}
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
