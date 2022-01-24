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
        <p>Tennenbacherstr. 4</p>
        <p>D-79106 Freiburg </p>
        <p>Tel. +49-(0)761-203-3694</p>
        <p>Fax. +49-(0)761-203-3701</p>
        <p>E-mail: ferninfo@felis.uni-freiburg.de</p>

        <h4>Prof. Dr. Barbara Koch</h4>
        <p>Projektleitung Felis</p>
        <p>E-mail: barbara.koch@uni-freiburg.de</p>

        <h4>Janusch Vajna-Jehle</h4>
        <p>Entwicklung und Umsetzung</p>
        <p>E-mail: janusch.jehle@uni-freiburg.de</p>
        <a href="mailto:janusch.jehle@uni-freiburg.de"></a>
      </Box>
    </Box>
  );
};

export default Contact;
