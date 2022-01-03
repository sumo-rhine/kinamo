import { Box } from "@mui/system";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";

const DividerOverview: React.FC = () => {
  return (
    <Box
      sx={{
        minHeight: 200,
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
          Vergleichen und sortieren Sie die Gemeinden nach den 12
          KINaMo-Indikatoren.
        </Typography>
        <Typography mt={1} color="white" fontWeight="fontWeightLight">
          Durch Anklicken der Icons kann die Tabelle sortiert werden, die
          Kommune kann über den Namen ausgewählt werden.
        </Typography>
        <Tooltip
          title={
            <Box
              p={3}
              sx={{
                display: "flex",
                alignItems: "flex-end",
              }}
            >
              <Typography variant="h5" fontWeight="fontWeightLight">
                Die Indikatoren haben einen Wert zwischen 0 und 10
              </Typography>
              <Typography
                pl={0.5}
                pb={0.9}
                variant="h5"
                fontWeight="fontWeightLight"
              >
                {/* VON 10 */}
              </Typography>
              {/* <Typography variant="h5" fontWeight="fontWeightLight">
                  {props.rank}ER VON 36
                </Typography> */}
            </Box>
            // `${props.value.toFixed(1)} [${width.toFixed(0)}% of max]`
          }
        >
          <Box
            mt={2}
            style={{
              width: 300,
              height: "0.6rem",
              backgroundColor: "#C4C4C4",
              transitionDuration: "1.7s",
              // boxShadow: "0 2px 4px silver",
            }}
            display={{ lg: "none", xl: "block" }}
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
        </Tooltip>
      </Box>
    </Box>
  );
};

export default DividerOverview;
