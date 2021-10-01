import { Box } from "@mui/system";
import StackedBar from "../StackedBar";
import { City } from "../../models/FullDataset";
import { Typography } from "@mui/material";
import StackedBarRow from "./StackedBarRow";
import Divider from "@mui/material/Divider";
import CityTab from "../CityTab/CityTab";
interface CityOverviewProps {
  city: City;
}

const CityOverview: React.FC<CityOverviewProps> = (props) => {
  return (
    <Box
      sx={{
        width: "100%",
        height: 800,
        // display: "flex",
        // alignItems: "center",
        // justifyContent: "center",
        // flexDirection: "row",
      }}
      mt={10}
    >
      <Divider sx={{ width: "100%" }} textAlign="left">
        <Typography variant="h2">{props.city.city}</Typography>
      </Divider>

      <Box mt={10} sx={{ display: "flex" }}>
        <Box pl={10} sx={{ width: "30%" }}>
          <Box>
            <Box>
              <Typography variant="h5" color="text.secondary" pb={3}>
                Info
              </Typography>
            </Box>
            <Box sx={{}}>
              <Typography variant="h5" pr={3} component="div">
                {props.city.country}
              </Typography>
              <Typography variant="h6" color="text.secondary">
                Country
              </Typography>
            </Box>
            <Box sx={{}}>
              <Typography variant="h5" pt={2} pr={3}>
                {props.city.population.value}
              </Typography>
              <Typography variant="h6" color="text.secondary" component="div">
                {props.city.population.unit}
              </Typography>
            </Box>
            <Box sx={{}}>
              <Typography variant="h5" pt={2} pr={0}>
                {props.city.area.value.toFixed(1)}km²
              </Typography>
              <Typography variant="h6" component="div"></Typography>
              <Typography
                // pl={3}
                color="text.secondary"
                variant="h6"
                component="div"
              >
                {props.city.area.description}
              </Typography>
            </Box>
            <Box sx={{}}>
              <Typography variant="h5" pt={2} pr={0}>
                {props.city.urban_area.value.toFixed(1)}%
              </Typography>
              <Typography
                // pl={3}
                color="text.secondary"
                variant="h6"
                component="div"
              >
                {props.city.urban_area.description}
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            width: "60%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            // alignItems: "center",
          }}
        >
          <StackedBarRow
            indicator={props.city.indicators.walkability}
          ></StackedBarRow>
          <StackedBarRow
            indicator={props.city.indicators.bikeability}
          ></StackedBarRow>
          <StackedBarRow
            indicator={props.city.indicators.public_transport}
          ></StackedBarRow>
          <StackedBarRow
            indicator={props.city.indicators.car_integration}
          ></StackedBarRow>
          <StackedBarRow
            indicator={props.city.indicators.functional_diversity}
          ></StackedBarRow>
          <StackedBarRow
            indicator={props.city.indicators.accessibility}
          ></StackedBarRow>
          <StackedBarRow
            indicator={props.city.indicators.cross_border}
          ></StackedBarRow>
          <StackedBarRow
            indicator={props.city.indicators.emissions}
          ></StackedBarRow>
          <StackedBarRow
            indicator={props.city.indicators.land_use}
          ></StackedBarRow>
          <StackedBarRow
            indicator={props.city.indicators.noise_pollution}
          ></StackedBarRow>
          <StackedBarRow
            indicator={props.city.indicators.traffic_safety}
          ></StackedBarRow>
        </Box>
      </Box>
    </Box>
  );
};

export default CityOverview;
