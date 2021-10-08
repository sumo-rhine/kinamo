import { Box } from "@mui/system";
import { Divider, Typography } from "@mui/material";
import HorizontalLinearStepper from "./HorizontalLinearStepper";
import { AboutProps } from "./About.model";

const About: React.FC<AboutProps> = (props) => {
  return (
    <Box sx={{ width: "100%", height: 500 }}>
      <Divider sx={{ width: "100%" }} textAlign="left">
        <Typography variant="h2">KINaMo</Typography>
      </Divider>
      {/* <Box pt={10} sx={{ display: "flex", justifyContent: "center" }}> */}
      <HorizontalLinearStepper value={props.value} setter={props.setter} />
      {/* </Box> */}
    </Box>
  );
};

export default About;
