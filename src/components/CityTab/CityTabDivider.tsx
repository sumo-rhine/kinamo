import { Box } from "@mui/system";
import Typography from "@mui/material/Typography";

const CityTabDivider: React.FC = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: 200,
        backgroundColor: "#383C45",
        display: "flex",
        alignItems: "center",
      }}
    >
      {/* <Box sx={{ display: "flex", alignItems: "flex-end" }}> */}
      <Typography
        ml={20}
        color="white"
        variant="h2"
        fontWeight="fontWeightLight"
      >
        Overview
      </Typography>
      <Typography
        mt={1}
        ml={20}
        color="white"
        variant="h5"
        fontWeight="fontWeightLight"
      >
        Explore and rank cities in the Upper Rhine Region based on 12 Indicators
      </Typography>
      {/* </Box> */}
    </Box>
  );
};

export default CityTabDivider;