import { Box } from "@mui/system";
import { City } from "../../models/FullDataset";
import StackedBarRow from "./StackedBarRow";

interface CityBarChartProps {
  city: City;
}

const CityBarChart: React.FC<CityBarChartProps> = (props) => {
  return (
    <Box
      // pt={10}
      sx={
        {
          // display: "flex",
          // width: "100%",
          // justifyContent: "space-around",
        }
      }
    >
      <Box
        sx={{ backgroundColor: "#F8F8F870", zIndex: 3, position: "relative" }}
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
        <StackedBarRow
          indicator={props.city.indicators.behavior}
          iconSrc="/assets/icons/modal-choice.svg"
        ></StackedBarRow>
      </Box>
    </Box>
  );
};

export default CityBarChart;
