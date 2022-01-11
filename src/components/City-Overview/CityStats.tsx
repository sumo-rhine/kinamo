import { Box } from "@mui/system";
import { City } from "../../models/FullDataset";
import { Typography } from "@mui/material";
// import StackedBarRow from "./StackedBarRow";
import KeyFigureCard from "../CityTab/KeyFigureCard";

interface CityStatsProps {
  city: City;
}

const CityStats: React.FC<CityStatsProps> = (props) => {
  // console.log(props.city);
  return (
    <Box
      sx={{
        overflow: "hidden",
      }}
    >
      <Box>
        <Box pr={3}>
          <Typography variant="h3" fontWeight="fontWeightLight" pb={0}>
            {props.city.city}
          </Typography>
          <Typography
            variant="h4"
            fontWeight="fontWeightLight"
            pb={5}
            component="div"
          >
            {props.city.country}
          </Typography>
        </Box>
        <Box>
          <img
            style={{
              position: "absolute",
              zIndex: 0,
              // height: 600,
              // overflow: "hidden",
              // boxShadow: "0 2px 4px silver",
              // left: 40,
              // filter: "blur(1px)",
              opacity: 0.8,
            }}
            alt="img"
            src={`/assets/thumbnail/${props.city.id.toString()}.png`}
            onError={(e: any) => (
              (e.target.onError = null),
              (e.target.src = "/assets/thumbnail/102.png")
            )}
            // src={
            //   props.city.id === 826
            //     ? "/assets/thumbnail/826.png"
            //     : "/assets/thumbnail/102_crop.png"
            // }
          />
        </Box>
      </Box>
      <Box
        sx={{
          // width: 450,
          // backgroundColor: "black",
          backgroundColor: "#F8F8F880",
          zIndex: 3,
          position: "relative",
        }}
        // pt={0}
      >
        <KeyFigureCard
          description={props.city.population.description}
          value={props.city.population.value}
          unit={props.city.population.unit}
          short_name={props.city.population.description}
          points={props.city.population.points}
          max_points={props.city.population.max_points}
          padding={0.5}
          elevation={0}
          bar={true}
          infoIcon={false}
          quality={"ok"}
        />
        <KeyFigureCard
          description={props.city.area.description}
          value={props.city.area.value}
          unit={props.city.area.unit}
          short_name={props.city.area.description}
          points={props.city.area.points}
          max_points={props.city.area.max_points}
          padding={0.5}
          elevation={0}
          bar={true}
          infoIcon={false}
          quality={"ok"}
        />
        <KeyFigureCard
          description={props.city.urban_area.description}
          value={props.city.urban_area.value}
          unit={props.city.urban_area.unit}
          short_name={props.city.urban_area.description}
          points={props.city.urban_area.points}
          max_points={props.city.urban_area.max_points}
          padding={0.5}
          elevation={0}
          bar={true}
          infoIcon={false}
          quality={"ok"}
        />
        <KeyFigureCard
          description={props.city.population_desity.description}
          value={props.city.population_desity.value}
          unit={props.city.population_desity.unit}
          short_name={props.city.population_desity.description}
          points={props.city.population_desity.points}
          max_points={props.city.population_desity.max_points}
          padding={0.5}
          elevation={0}
          bar={true}
          infoIcon={false}
          quality={"ok"}
        />
      </Box>
    </Box>
  );
};

export default CityStats;
