import { Box } from "@mui/system";
import { City } from "../../models/FullDataset";
import CityBarChart from "./CityBarChart";
import CityStats from "./CityStats";

interface CityOverviewProps {
  city: City;
}

const CityOverview: React.FC<CityOverviewProps> = (props) => {
  return (
    <Box
      pt={10}
      pb={10}
      // ml={10}
      sx={{
        width: "100%",
        backgroundColor: "#F8F8F8",
        // height: 800,
        display: "flex",
        zIndex: 1,
        // overflow: "hidden",
        // backgroundImage: `url(${"/assets/thumbnail/102_.png"})`,
        // backgroundSize: "cover",
        // filter: "blur(5px)",
        // resize: "both",
        // overflow: "scroll",
        // alignItems: "center",
        justifyContent: "space-around",
        // flexDirection: "column",
      }}
      // pt={4}
      // pb={20}
    >
      {/* <Paper
        style={{
          width: "100%",
        }}
        // src="/assets/thumbnail/102_.png"
      /> */}
      {/* <Divider sx={{ width: "100%" }} textAlign="left">
        <Typography variant="h2">{props.city.city}</Typography>
      </Divider> */}

      <CityStats city={props.city} />
      <CityBarChart city={props.city} />
    </Box>
  );
};

export default CityOverview;
