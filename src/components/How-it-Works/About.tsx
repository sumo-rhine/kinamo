import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import { Link } from "@mui/material";
export const AboutSuMoProject = () => {
  return (
    <Box>
      <Typography variant="h5">
        KINaMo - Information System for Municipal Mobility
      </Typography>
      <Typography mt={4} fontWeight="fontWeightLight" variant="subtitle1">
        KINaMo provides detailed
        <Box fontWeight="bold" display="inline">
          {" "}
          assessment of municipal mobility{" "}
        </Box>
        for the Upper Rhine region and is part of the{" "}
        {<Link href="https://sumo-rhine.com/en/">SuMo Rhine Project</Link>}.
      </Typography>
      <Box sx={{ display: "flex" }}>
        <Typography
          component="div"
          fontWeight="fontWeightLight"
          mt={4}
          variant="subtitle1"
        >
          A primary goal of KINaMo is to simplify the evaluation of municipal
          mobility by utilizing an automated, data-based approach that will make
          the state of{" "}
          <Box fontWeight="bold" display="inline">
            Sustainable Mobility{" "}
          </Box>
          visible and{" "}
          <Box fontWeight="bold" display="inline">
            comparable at the municipal level
          </Box>
          .
        </Typography>
      </Box>
    </Box>
  );
};

export const AboutIndicators = () => {
  return <Box>About Indicators</Box>;
};

export const AboutKeyFigures = () => {
  return <Box>About KeyFigures</Box>;
};
