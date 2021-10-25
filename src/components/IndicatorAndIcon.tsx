import { Typography } from "@mui/material";
import { Box } from "@mui/material";

interface IndicatorAndIconProps {
  name: string;
}

const getIconPath = (name: string): any => {
  let path;
  switch (name) {
    case "walkability":
      path = "/assets/icons/walkability.svg";
      break;
    case "bikeability":
      break;
      path = "/assets/icons/bikeability.svg";
    case "public_transport":
      path = "/assets/icons/pt.svg";
      break;
    case "car_integration":
      path = "/assets/icons/car.svg";
      break;
    case "functional_diversity":
      path = "/assets/icons/spatial-structur.svg";
      break;
    case "accessibility":
      path = "/assets/icons/accessibility.svg";
      break;
    case "cross_border":
      path = "/assets/icons/commuting.svg";
      break;
    case "emissions":
      path = "/assets/icons/air-pollution.svg";
      break;
    case "land_use":
      path = "/assets/icons/land-consumption.svg";
      break;
    case "noise_pollution":
      path = "/assets/icons/traffic-noise.svg";
      break;
    case "traffic_safety":
      path = "/assets/icons/safety.svg";
      break;
    case "behavior":
      path = "/assets/icons/modal-choice.svg";
      break;
    default:
      path = "default test";
  }
  return path;
};

const IndicatorAndIcon: React.FC<IndicatorAndIconProps> = (props) => {
  return (
    <Box>
      <Typography>{getIconPath(props.name)}</Typography>
    </Box>
  );
};

export default IndicatorAndIcon;
