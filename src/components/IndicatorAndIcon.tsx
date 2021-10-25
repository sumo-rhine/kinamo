import { Typography } from "@mui/material";
import { Box } from "@mui/material";
import Icon from "@mui/material/Icon";
import Button from "@mui/material/Button";

interface IndicatorAndIconProps {
  name: string;
}

const getIconPath = (name: string): any => {
  let path;
  let indicator;

  switch (name) {
    case "walkability":
      path = "/assets/icons/walkability.svg";
      indicator = "Fußgängerfreundlichkeit";
      break;
    case "bikeability":
      path = "/assets/icons/bikeability.svg";
      indicator = "Fahrradfreundlichkeit";
      break;
    case "public_transport":
      path = "/assets/icons/pt.svg";
      indicator = "ÖPNV";
      break;
    case "car_integration":
      path = "/assets/icons/car.svg";
      indicator = "KFZ";
      break;
    case "functional_diversity":
      path = "/assets/icons/spatial-structur.svg";
      indicator = "Stadtplanung";
      break;
    case "accessibility":
      path = "/assets/icons/accessibility.svg";
      indicator = "Erreichbarkeit";
      break;
    case "cross_border":
      path = "/assets/icons/commuting.svg";
      indicator = "Pendel Optionen";
      break;
    case "emissions":
      indicator = "Emissionen";
      path = "/assets/icons/air-pollution.svg";
      break;
    case "land_use":
      path = "/assets/icons/land-consumption.svg";
      indicator = "Landnutzung";
      break;
    case "noise_pollution":
      path = "/assets/icons/traffic-noise.svg";
      indicator = "Verkehrslärm";
      break;
    case "traffic_safety":
      path = "/assets/icons/safety.svg";
      indicator = "Verkehrssicherheit";
      break;
    case "behavior":
      path = "/assets/icons/modal-choice.svg";
      indicator = "Verkehrsverhalten";
      break;
    default:
      path = "default test";
      indicator = "default test";
  }
  return { name: indicator, IconSrc: path };
};

const IndicatorAndIcon: React.FC<IndicatorAndIconProps> = (props) => {
  const data = getIconPath(props.name);
  return (
    // <Box pt={2}>
    //   <Button sx={{ borderRadius: 0 }} variant="outlined">
    //     {data.name}
    //   </Button>
    // </Box>

    <Box sx={{ display: "flex" }} pt={2}>
      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <Icon style={{ fontSize: 40 }}>
          <img
            style={{
              height: "80%",
              opacity: 0.8,
            }}
            alt="img"
            src={data.IconSrc}
          />
        </Icon>
        <Typography fontWeight={1} color="text.secondary" ml={1}>
          {data.name.toUpperCase()}
        </Typography>
      </Box>
    </Box>
  );
};

export default IndicatorAndIcon;
