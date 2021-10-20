import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import HorizontalLinearStepper from "./HorizontalLinearStepper";
import { AboutProps } from "./About.model";
// import { Typography } from "@mui/material";
const About: React.FC<AboutProps> = (props) => {
  return (
    <Box sx={{ width: "100%", backgroundColor: "#F8F8F8" }}>
      <Box
        sx={{
          width: "100%",
          height: 200,
          backgroundColor: "#383C45",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Typography
          ml={20}
          color="white"
          variant="h2"
          fontWeight="fontWeightLight"
        >
          Learn about KINaMo
        </Typography>
      </Box>
      {/* <Divider sx={{ width: "100%" }} textAlign="left">
        {/* <Typography fontWeight="fontWeightLight" variant="h3">
          Learn about KINaMo
        </Typography> */}
      {/* </Divider> */}
      {/* <Box pt={10} sx={{ display: "flex", justifyContent: "center" }}> */}
      <HorizontalLinearStepper />
      {/* </Box> */}
    </Box>
  );
};

export default About;
