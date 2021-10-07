import { Box } from "@mui/system";
import { Typography } from "@mui/material";

export const AboutSuMoProject = () => {
  return (
    <Box>
      <Typography variant="h5">SuMo Rhine Project</Typography>
      <Typography mt={4} variant="subtitle1">
        The aim of the SuMo Rhine Project is the promotion of sustainable
        mobility in the Upper Rhine Region. In cooperation with municipal
        partners and a leading international provider of mobility and
        infrastructure data (HERE Technologies), we developed a Municipal
        Information System for Sustainable Mobility (KINaMo), which will enable
        a transnational, cost-effective and comparable assessment of municipal
        mobility systems.
      </Typography>
    </Box>
  );
};

export const AboutIndicators = () => {
  return <Box>About Indicators</Box>;
};

export const AboutKeyFigures = () => {
  return <Box>About KeyFigures</Box>;
};
