import { Box } from "@mui/system";
import { City } from "../../models/FullDataset";
import { Typography } from "@mui/material";
import StackedBarRow from "./StackedBarRow";
import Paper from "@mui/material/Paper";
import KeyFigureCard from "../CityTab/KeyFigureCard";

interface CityOverviewProps {
  city: City;
}

const CityOverview: React.FC<CityOverviewProps> = (props) => {
  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "#F8F8F8",
        // height: 800,
        // display: "flex",
        // backgroundImage: `url(${"/assets/thumbnail/102_.png"})`,
        // backgroundSize: "cover",
        // filter: "blur(5px)",
        // resize: "both",
        // overflow: "scroll",
        // alignItems: "center",
        // justifyContent: "center",
        // flexDirection: "row",
      }}
      pt={4}
      pb={20}
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

      <Box mt={10} sx={{ display: "flex" }}>
        <Box
          sx={{
            width: "30%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box>
            <Box>
              <Typography variant="h3" fontWeight="fontWeightLight" pb={0}>
                {props.city.city}
              </Typography>
            </Box>
            <Box sx={{}}>
              <Typography
                variant="h4"
                fontWeight="fontWeightLight"
                pb={3}
                component="div"
              >
                {props.city.country}
              </Typography>
              {/* <Typography variant="h6" color="text.secondary">
                Country
              </Typography> */}
            </Box>

            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <KeyFigureCard
                description={props.city.population.description}
                value={props.city.population.value}
                unit={props.city.population.unit}
                short_name={props.city.population.description}
                points={props.city.population.points}
                padding={1}
                elevation={2}
              />
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <KeyFigureCard
                description={props.city.area.description}
                value={props.city.area.value}
                unit={props.city.area.unit}
                short_name={props.city.area.description}
                points={props.city.area.points}
                padding={1}
                elevation={2}
              />
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <KeyFigureCard
                description={props.city.urban_area.description}
                value={props.city.urban_area.value}
                unit={props.city.urban_area.unit}
                short_name={props.city.urban_area.description}
                points={props.city.urban_area.points}
                padding={1}
                elevation={2}
              />
            </Box>
            {/*             
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
            </Box> */}
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
            iconSrc="/assets/icons/walkability.svg"
          ></StackedBarRow>
          <StackedBarRow
            indicator={props.city.indicators.bikeability}
            iconSrc="/assets/icons/bikeability.svg"
          ></StackedBarRow>
          <StackedBarRow
            indicator={props.city.indicators.public_transport}
            iconSrc="/assets/icons/pt.svg"
          ></StackedBarRow>
          <StackedBarRow
            indicator={props.city.indicators.car_integration}
            iconSrc="/assets/icons/car.svg"
          ></StackedBarRow>
          <StackedBarRow
            indicator={props.city.indicators.functional_diversity}
            iconSrc="/assets/icons/spatial-structur.svg"
          ></StackedBarRow>
          <StackedBarRow
            indicator={props.city.indicators.accessibility}
            iconSrc="/assets/icons/accessibility.svg"
          ></StackedBarRow>
          <StackedBarRow
            indicator={props.city.indicators.cross_border}
            iconSrc="/assets/icons/commuting.svg"
          ></StackedBarRow>
          <StackedBarRow
            indicator={props.city.indicators.emissions}
            iconSrc="/assets/icons/air-pollution.svg"
          ></StackedBarRow>
          <StackedBarRow
            indicator={props.city.indicators.land_use}
            iconSrc="/assets/icons/land-consumption.svg"
          ></StackedBarRow>
          <StackedBarRow
            indicator={props.city.indicators.noise_pollution}
            iconSrc="/assets/icons/traffic-noise.svg"
          ></StackedBarRow>
          <StackedBarRow
            indicator={props.city.indicators.traffic_safety}
            iconSrc="/assets/icons/safety.svg"
          ></StackedBarRow>
        </Box>
      </Box>
    </Box>
  );
};

export default CityOverview;
