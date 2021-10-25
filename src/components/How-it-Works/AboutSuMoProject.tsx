import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import { Link } from "@mui/material";

const AboutSuMoProject = () => {
  return (
    <Box sx={{ maxWidth: 1200 }}>
      <Typography variant="h4" fontWeight="fontWeightLight">
        KINaMo - Information System for Municipal Mobility
      </Typography>

      <Box sx={{ display: "flex" }}>
        <Typography
          component="div"
          fontWeight="fontWeightLight"
          mt={4}
          variant="h6"
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
      <Box mt={4}></Box>
      <img
        alt="images"
        style={{ height: 500 }}
        src="/assets/image/diagram.svg"
      />
      <Typography mt={6} fontWeight="fontWeightLight" variant="h6">
        KINaMo provides detailed
        <Box fontWeight="bold" display="inline">
          {" "}
          assessment of municipal mobility{" "}
        </Box>
        for the Upper Rhine region and is part of the{" "}
        {<Link href="https://sumo-rhine.com/en/">SuMo Rhine Project</Link>}.
      </Typography>
    </Box>
  );
};

export default AboutSuMoProject;
