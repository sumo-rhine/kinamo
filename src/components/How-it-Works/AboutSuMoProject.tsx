import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import { Link } from "@mui/material";
import Paper from "@mui/material/Paper";
const AboutSuMoProject = () => {
  return (
    // <Paper>
    <Box sx={{}}>
      <Typography variant="h4" fontWeight="fontWeightLight">
        KINaMo -
        <Box fontWeight="bold" display="inline">
          {" "}
          K
        </Box>
        ommunales
        <Box fontWeight="bold" display="inline">
          {" "}
          I
        </Box>
        nformationsystem für
        <Box fontWeight="bold" display="inline">
          {" "}
          Na
        </Box>
        chaltige
        <Box fontWeight="bold" display="inline">
          {" "}
          Mo
        </Box>
        bilität
      </Typography>
      <Box sx={{}}>
        <Typography
          // component="div"
          fontWeight="fontWeightLight"
          mt={4}
          variant="h6"
        >
          Durch einen automatisierten, datenbasierten Ansatz vereinfacht KINaMo
          die Bewertung der kommunalen Mobilität und macht nachhaltige Mobilität
          auf kommunaler Ebene messbar, sichtbar und vergleichbar.
        </Typography>
        <Typography
          // component="div"
          fontWeight="fontWeightLight"
          mt={1}
          variant="h6"
        >
          Dazu wurde ein Bewertungssystem auf Basis von
          <Box fontWeight="bold" display="inline">
            {" "}
            62 Kennzahlen{" "}
          </Box>
          entwickelt, die in
          <Box fontWeight="bold" display="inline">
            {" "}
            12 Indikatoren{" "}
          </Box>
          gegliedert sind.
        </Typography>
        <Typography
          // component="div"
          fontWeight="fontWeightLight"
          variant="h6"
        >
          Damit bietet die Anwendung erstmals eine frei zugängliche,
          detaillierte Bewertung der kommunalen Mobilität für die Region
          Oberrhein.
        </Typography>
      </Box>
      <img
        alt="images"
        style={{ height: 500 }}
        src="/assets/image/diagram.svg"
      />

      <Typography mt={1} pr={2} fontWeight="fontWeightLight" variant="h6">
        KINaMo ist teil des internationalen Forschungsprojektes SuMo Rhine
        {/* {<Link href="https://sumo-rhine.com/en/"></Link>} */}
      </Typography>
      <Box mt={1} sx={{ display: "flex", alignItems: "center" }}>
        {/* <Paper sx={{ display: "flex", alignItems: "center" }}> */}
        <Box pr={3} pl={3} m={2}>
          <Link href="https://sumo-rhine.com/en/" target="_blank">
            <img
              alt="images"
              style={{ height: 80 }}
              src="/assets/logos/sumo_logo_transparent_background.png"
            />
          </Link>
        </Box>
        <Box m={2}>
          <Link href="https://www.interreg-rhin-sup.eu/" target="_blank">
            <img
              alt="images"
              style={{ height: 80 }}
              src="/assets/logos/interreg-transparent.png"
            />
          </Link>
        </Box>
        <Box m={2}>
          <Link href="https://www.felis.uni-freiburg.de/de" target="_blank">
            <img
              alt="images"
              style={{ height: 80 }}
              src="/assets/logos/felis.png"
            />
          </Link>
        </Box>
        <Box m={2}>
          <Link href="https://www.loerrach.de/willkommen" target="_blank">
            <img
              alt="images"
              style={{ height: 50 }}
              src="/assets/logos/lörrach-transparent.png"
            />
          </Link>
        </Box>
        <Box m={2}>
          <Link href="https://www.here.com" target="_blank">
            <img
              alt="images"
              style={{ height: 80 }}
              src="/assets/logos/here.png"
            />
          </Link>
        </Box>
        {/* </Paper> */}
      </Box>
    </Box>
    // </Paper>
  );
};

export default AboutSuMoProject;
