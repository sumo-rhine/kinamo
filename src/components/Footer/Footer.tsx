import { Typography, Box, Link, Button, Divider } from "@mui/material";
import { HashLink } from "react-router-hash-link";
const Footer = () => {
  return (
    <Box sx={{ width: "100%" }}>
      <Box
        sx={{
          backgroundColor: "#383C45",
          height: 5,
        }}
      ></Box>
      {/* <Divider></Divider> */}

      <Box sx={{ display: "flex", justifyContent: "space-around" }}>
        <Box m={2}>
          <Link href="https://www.interreg-rhin-sup.eu/" target="_blank">
            <img
              alt="images"
              style={{ height: 50 }}
              src="/assets/logos/interreg.png"
            />
          </Link>
        </Box>
        <Box pr={3} pl={3} m={2}>
          <Link href="https://uni-freiburg.de/" target="_blank">
            <img
              alt="images"
              style={{ height: 50 }}
              src="/assets/logos/uni-freiburg.jpeg"
            />
          </Link>
        </Box>
        <Box m={2}>
          <Link href="https://www.kit.edu/" target="_blank">
            <img
              alt="images"
              style={{ height: 50 }}
              src="/assets/logos/kit.png"
            />
          </Link>
        </Box>
        <Box m={2}>
          <Link href="https://www.unistra.fr/" target="_blank">
            <img
              alt="images"
              style={{ height: 50 }}
              src="/assets/logos/uni-strasbourg.png"
            />
          </Link>
        </Box>
        <Box m={2}>
          <Link href="https://www.loerrach.de/willkommen" target="_blank">
            <img
              alt="images"
              style={{ height: 50 }}
              src="/assets/logos/lörrach.png"
            />
          </Link>
        </Box>
        <Box m={2}>
          <Link href="https://www.cnrs.fr/" target="_blank">
            <img
              alt="images"
              style={{ height: 50 }}
              src="/assets/logos/cnrs.png"
            />
          </Link>
        </Box>
        <Box m={2}>
          <Link href="https://www.strasbourg.archi.fr/" target="_blank">
            <img
              alt="images"
              style={{ height: 50 }}
              src="/assets/logos/architects.png"
            />
          </Link>
        </Box>
        <Box m={2}>
          <Link href="https://www.here.com" target="_blank">
            <img
              alt="images"
              style={{ height: 50 }}
              src="/assets/logos/here.png"
            />
          </Link>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          backgroundColor: "#383C45",
          color: "white",
          height: 40,
        }}
      >
        <Box>
          <Button
            sx={{ color: "white" }}
            component={HashLink}
            to="/impressum#top"
          >
            Impressum
          </Button>
        </Box>
        <Box>
          <Button
            sx={{ color: "white" }}
            component={HashLink}
            to="/contact#top"
          >
            Kontakt
          </Button>
        </Box>
        <Box>
          <Button
            sx={{ color: "white" }}
            component={HashLink}
            to="/privacy#top"
          >
            Datenschutzerklärung
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
