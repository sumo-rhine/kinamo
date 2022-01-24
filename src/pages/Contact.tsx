import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { Typography, Box, Link } from "@mui/material";

const Contact = () => {
  return (
    <Box>
      <Header cityName="wähle deine Kommune"></Header>
      <Box ml={10}>
        <h2>Kontakt</h2>
        <h4>
          Professur für Fernerkundung und Landschaftsinformationssysteme - FeLIS
        </h4>
        <Box pl={2}>
          <p>Tennenbacherstr. 4</p>
          <p>D-79106 Freiburg </p>
          <p>Tel. +49-(0)761-203-3694</p>
          <p>Fax. +49-(0)761-203-3701</p>
          <Link
            //   sx={{ color: "white" }}
            href="mailto:ferninfo@felis.uni-freiburg.de"
          >
            ferninfo@felis.uni-freiburg.de
          </Link>
        </Box>

        <h4>Prof. Dr. Barbara Koch</h4>
        <Box pl={2}>
          <p>Projektleitung Felis</p>
          <Link
            //   sx={{ color: "white" }}
            href="mailto:barbara.koch@uni-freiburg.de"
          >
            barbara.koch@uni-freiburg.de
          </Link>
        </Box>

        <h4>MSc. Janusch Vajna-Jehle</h4>
        <Box pl={2}>
          <p>Wissenschaftlicher Mitarbeiter</p>
          <p>Entwicklung und technische Umsetzung</p>
          {/* <p>E-mail: janusch.jehle@uni-freiburg.de</p> */}
          <Link
            //   sx={{ color: "white" }}
            href="mailto:janusch.jehle@uni-freiburg.de"
          >
            janusch.jehle@uni-freiburg.de
          </Link>
        </Box>
        {/* <a href="mailto:janusch.jehle@uni-freiburg.de"></a> */}
      </Box>
    </Box>
  );
};

export default Contact;
