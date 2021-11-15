import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";

const MobileMessage = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        display: "flex",
        backgroundColor: "black",
        color: "white",
      }}
    >
      <Box>
        {/* <img
          style={{keyFigureDescription
            position: "absolute",
            zIndex: 2,
            // height: 800,
            // overflow: "hidden",
            // boxShadow: "0 2px 4px silver",
            // left: 40,
            filter: "blur(1px)",
            opacity: 0.3,
          }}
          alt="img"
          src="/assets/thumbnail/102_crop.png" */}
        {/* /> */}
      </Box>
      <Box sx={{}}>
        <Typography
          mt={10}
          m={6}
          align="center"
          variant="h6"
          fontWeight="fontWeightLight"
        >
          Sie sind auf der KINaMo Webseite, die Applikation befindet momentan
          noch in der Entwicklung und ist noch nicht für mobile Geräte
          optimiert.
        </Typography>
        <Typography
          m={6}
          align="center"
          variant="h4"
          fontWeight="fontWeightLight"
        >
          Bitte besuchen sie die Seite mit einem Desktop Gerät erneut.
        </Typography>
        <Typography
          m={6}
          align="center"
          variant="h6"
          fontWeight="fontWeightLight"
        >
          Danke für ihr Verständnis
        </Typography>
      </Box>
    </Box>
  );
};

export default MobileMessage;
