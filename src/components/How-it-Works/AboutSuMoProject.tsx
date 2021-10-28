import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import { Link } from "@mui/material";

const AboutSuMoProject = () => {
  return (
    <Box sx={{ maxWidth: 1000 }}>
      <Typography mt={5} variant="h4" fontWeight="fontWeightLight">
        KINaMo -
        <Box fontWeight="bold" display="inline">
          {" "}
          K
        </Box>
        ommunalen
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
          component="div"
          fontWeight="fontWeightLight"
          mt={4}
          variant="h6"
        >
          Ziel von KINaMo ist es, die Bewertung kommunaler Mobilität durch einen
          automatisierten, datenbasierten Ansatz zu vereinfachen und damit den
          Stand der nachhaltigen Mobilität auf kommunaler Ebene messbar,
          sichtbar und vergleichbar zu machen.
        </Typography>
        <Typography
          component="div"
          fontWeight="fontWeightLight"
          mt={1}
          variant="h6"
        >
          Dafür wurde ein umfanreiches Bewertungssystem entwickelt welches aus
          <Box fontWeight="bold" display="inline">
            {" "}
            84 Kennzahlen{" "}
          </Box>
          besteht, die in
          <Box fontWeight="bold" display="inline">
            {" "}
            12 Indikatoren{" "}
          </Box>
          organisiert werden.
        </Typography>
      </Box>
      <img
        alt="images"
        style={{ height: 500 }}
        src="/assets/image/diagram.svg"
      />

      <Typography mt={1} fontWeight="fontWeightLight" variant="h6">
        Die Applikation liefert damit erstmals eine frei zugängliche
        detaillierte Bewertung der kommunalen Mobilität für die Region
        Oberrhein.
      </Typography>
      <Box sx={{ display: "flex" }}>
        <Typography mt={1} pr={3} fontWeight="fontWeightLight" variant="h6">
          KINaMo ist teil des internationalen Forschungsprojektes:{"  "}
          {<Link href="https://sumo-rhine.com/en/">SuMo Rhine</Link>}.
        </Typography>
        <img
          alt="images"
          style={{ height: 70 }}
          src="/assets/logos/sumo-logo.jpg"
        />
      </Box>
    </Box>
  );
};

export default AboutSuMoProject;
