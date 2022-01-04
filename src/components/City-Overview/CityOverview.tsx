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
      // ml={2}
      // mr={2}
      sx={{
        width: "100%",
        backgroundColor: "#F8F8F8",
        display: "flex",
        zIndex: 1,
        justifyContent: "space-around",
      }}
    >
      <CityStats city={props.city} />
      <CityBarChart city={props.city} />
    </Box>
  );
};

export default CityOverview;
