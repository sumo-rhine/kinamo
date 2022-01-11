import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import RandomAnimationBanner from "../components/AnimationBanner/RandomAnimationBanner";
import Animation from "../components/AnimationBanner/Animation";
import Header from "../components/Header/Header";

const MobileMessage = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        // display: "flex",
        backgroundColor: "black",
        color: "white",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Header cityName="" selectable={false}></Header>
      <Box zIndex={0} position={"absolute"}>
        <Animation id={102} isLoading={false}></Animation>
      </Box>
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
      <Box p={4} zIndex={3} position={"relative"}>
        <Typography align="center" variant="h5" fontWeight="fontWeightLight">
          Entdecke
          <Box fontWeight="Medium" display="inline">
            {" "}
            Nachhaltige Mobilität{" "}
          </Box>
          am Oberrhein
        </Typography>
        <Typography
          align="center"
          pt={4}
          variant="h5"
          fontWeight="fontWeightLight"
        >
          <Box fontWeight="Medium" display="inline">
            {" "}
            KINaMo -
          </Box>
          <Box fontWeight="Medium" display="inline">
            {" "}
            K
          </Box>
          ommunales
          <Box fontWeight="Medium" display="inline">
            {" "}
            I
          </Box>
          nformationsystem für
          <Box fontWeight="Medium" display="inline">
            {" "}
            Na
          </Box>
          chaltige
          <Box fontWeight="Medium" display="inline">
            {" "}
            Mo
          </Box>
          bilität
        </Typography>
        <Typography
          pt={5}
          align="center"
          variant="h6"
          fontWeight="fontWeightLight"
        >
          Bitte besuchen sie die Seite mit einem Desktop Gerät erneut.
        </Typography>
        <Box pt={2}>
          <Typography
            // p={10}
            align="center"
            // variant="h6"
            fontWeight="fontWeightLight"
          >
            KINaMo ist noch nicht für Mobile Endgeräte optimiert.
          </Typography>

          <Typography
            mt={2}
            align="center"
            variant="h6"
            fontWeight="fontWeightLight"
          >
            Danke für ihr Verständnis
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default MobileMessage;
