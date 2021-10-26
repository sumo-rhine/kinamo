import { Box } from "@mui/system";
import { City } from "../../models/FullDataset";
import { Typography } from "@mui/material";
// import StackedBarRow from "./StackedBarRow";
import KeyFigureCard from "../CityTab/KeyFigureCard";

interface CityStatsProps {
  city: City;
}

const CityStats: React.FC<CityStatsProps> = (props) => {
  return (
    <Box
      sx={{
        overflow: "hidden",
      }}
    >
      <Box>
        <Box>
          <Typography variant="h3" fontWeight="fontWeightLight" pb={0}>
            {props.city.city}
          </Typography>
          <Typography
            variant="h4"
            fontWeight="fontWeightLight"
            pb={10}
            component="div"
          >
            {props.city.country}
          </Typography>
        </Box>
        <Box sx={{}}>
          <img
            style={{
              position: "absolute",
              height: 600,
              // boxShadow: "0 2px 4px silver",
              left: 40,
              filter: "blur(1px)",
              opacity: 0.7,
            }}
            alt="img"
            src="/assets/thumbnail/102_crop.png"
          />
        </Box>
      </Box>
      <Box pt={5}>
        <KeyFigureCard
          description={props.city.population.description}
          value={props.city.population.value}
          unit={props.city.population.unit}
          short_name={props.city.population.description}
          points={props.city.population.points}
          padding={1}
          elevation={0}
          bar={true}
        />
        <KeyFigureCard
          description={props.city.area.description}
          value={props.city.area.value}
          unit={props.city.area.unit}
          short_name={props.city.area.description}
          points={props.city.area.points}
          padding={1}
          elevation={0}
          bar={true}
        />
        <KeyFigureCard
          description={props.city.urban_area.description}
          value={props.city.urban_area.value}
          unit={props.city.urban_area.unit}
          short_name={props.city.urban_area.description}
          points={props.city.urban_area.points}
          padding={1}
          elevation={0}
          bar={true}
        />
      </Box>
    </Box>
  );
};

export default CityStats;
