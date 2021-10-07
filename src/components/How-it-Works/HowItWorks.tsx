import { Box } from "@mui/system";
import { Divider, Typography } from "@mui/material";
import HorizontalLinearStepper from "./HorizontalLinearStepper";
const About = () => {
  return (
    <Box sx={{ width: "100%", height: 500 }}>
      <Divider sx={{ width: "100%" }} textAlign="left">
        <Typography variant="h2">How it Works</Typography>
      </Divider>
      {/* <Box pt={10} sx={{ display: "flex", justifyContent: "center" }}> */}
      <HorizontalLinearStepper />
      {/* </Box> */}
    </Box>
  );
};

export default About;
