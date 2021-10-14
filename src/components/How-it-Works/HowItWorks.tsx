import { Box } from "@mui/system";
import { Divider, Typography } from "@mui/material";
import HorizontalLinearStepper from "./HorizontalLinearStepper";
import { AboutProps } from "./About.model";

const About: React.FC<AboutProps> = (props) => {
  return (
    <Box sx={{ width: "100%" }}>
      <Divider sx={{ width: "100%" }} textAlign="left">
        <Typography fontWeight="fontWeightLight" variant="h3">
          Learn about KINaMo
        </Typography>
      </Divider>
      {/* <Box pt={10} sx={{ display: "flex", justifyContent: "center" }}> */}
      <HorizontalLinearStepper />
      {/* </Box> */}
    </Box>
  );
};

export default About;
