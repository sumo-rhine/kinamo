import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import HorizontalLinearStepper from "./HorizontalLinearStepper";
import AboutKinamoTabs from "./AboutKinamoTabs";
import { AboutProps } from "./About.model";

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
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography
            ml={20}
            color="white"
            variant="h3"
            fontWeight="fontWeightLight"
          >
            Über KINaMo
          </Typography>
          <Typography
            ml={30}
            // mb={0.3}
            color="white"
            variant="h5"
            fontWeight="fontWeightLight"
          >
            Kommunale Mobilität messbar machen
          </Typography>
        </Box>
      </Box>
      <AboutKinamoTabs></AboutKinamoTabs>
    </Box>
  );
};

export default About;
