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
      sx={
        {
          // overflow: "hidden",
        }
      }
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
        <Box>
          <img
            style={{
              position: "absolute",
              zIndex: 2,
              // height: 800,
              // overflow: "hidden",
              // boxShadow: "0 2px 4px silver",
              // left: 40,
              // filter: "blur(1px)",
              // opacity: 0.8,
            }}
            alt="img"
            src="/assets/thumbnail/102_crop.png"
          />
        </Box>
      </Box>
      <Box
        sx={{
          width: 350,
          backgroundColor: "#F8F8F8070",
          zIndex: 3,
          position: "relative",
        }}
        pt={5}
      >
        <KeyFigureCard
          description={props.city.population.description}
          value={props.city.population.value}
          unit={props.city.population.unit}
          short_name={props.city.population.description}
          points={props.city.population.points}
          max_points={props.city.population.max_points}
          padding={1}
          elevation={0}
          bar={true}
          infoIcon={false}
        />
        <KeyFigureCard
          description={props.city.area.description}
          value={props.city.area.value}
          unit={props.city.area.unit}
          short_name={props.city.area.description}
          points={props.city.area.points}
          max_points={props.city.area.max_points}
          padding={1}
          elevation={0}
          bar={true}
          infoIcon={false}
        />
        <KeyFigureCard
          description={props.city.urban_area.description}
          value={props.city.urban_area.value}
          unit={props.city.urban_area.unit}
          short_name={props.city.urban_area.description}
          points={props.city.urban_area.points}
          max_points={props.city.urban_area.max_points}
          padding={1}
          elevation={0}
          bar={true}
          infoIcon={false}
        />
      </Box>
    </Box>
  );
};

export default CityStats;
