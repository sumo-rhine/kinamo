import { Box } from "@mui/system";
import Typography from "@mui/material/Typography";

const DividerOverview: React.FC = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: 200,
        backgroundColor: "#383C45",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Typography
        ml={20}
        color="white"
        variant="h2"
        fontWeight="fontWeightLight"
      >
        Übersicht
      </Typography>
      <Box ml={20}>
        <Typography
          mt={1}
          color="white"
          variant="h5"
          fontWeight="fontWeightLight"
        >
          Vergleiche und Sortiere die Kommunen nach den 12 KINaMo Indikatoren
        </Typography>
        <Box
          mt={2}
          style={{
            width: 300,
            height: "0.6rem",
            backgroundColor: "#C4C4C4",
            transitionDuration: "1.7s",
            // boxShadow: "0 2px 4px silver",
          }}
        >
          <Box
            style={{
              backgroundColor: "#8BC34A",

              height: "100%",
              width: `${(24 / 36) * 100}%`,
              transitionDuration: "1s",
            }}
          ></Box>
          <Box mt={0.5} sx={{ display: "flex", color: "white" }}>
            <Typography variant="h5" fontWeight="fontWeightLight">
              0
            </Typography>
            <Box sx={{ width: 200 }}></Box>
            <Box sx={{ width: 100 }}>
              <Typography variant="h4" fontWeight="fontWeightLight">
                7
              </Typography>
            </Box>
            <Box>
              <Typography variant="h5" fontWeight="fontWeightLight">
                10
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default DividerOverview;
