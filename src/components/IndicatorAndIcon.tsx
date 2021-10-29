import { Typography } from "@mui/material";
import { Box } from "@mui/material";
import Icon from "@mui/material/Icon";
import Button from "@mui/material/Button";
import { HashLink } from "react-router-hash-link";

interface IndicatorAndIconProps {
  name: string;
  tabChanger: (indicator: string | undefined) => void;
}

export const getIconPath = (name: string): any => {
  let path;
  let indicator;

  switch (name) {
    case "walkability":
      path = "/assets/icons/walkability.svg";
      indicator = "Fußgänger Freundlichkeit";
      break;
    case "bikeability":
      path = "/assets/icons/bikeability.svg";
      indicator = "Fahrrad Freundlichkeit";
      break;
    case "public_transport":
      path = "/assets/icons/pt.svg";
      indicator = "ÖPNV";
      break;
    case "car_integration":
      path = "/assets/icons/car.svg";
      indicator = "Auto";
      break;
    case "functional_diversity":
      path = "/assets/icons/spatial-structur.svg";
      indicator = "Raum Struktur";
      break;
    case "accessibility":
      path = "/assets/icons/accessibility.svg";
      indicator = "Erreichbarkeit";
      break;
    case "cross_border":
      path = "/assets/icons/commuting.svg";
      indicator = "Regionale Anbindung";
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
      indicator = "Lärm Belastung";
      break;
    case "traffic_safety":
      path = "/assets/icons/safety.svg";
      indicator = "Verkehrs Sicherheit";
      break;
    case "behavior":
      path = "/assets/icons/modal-choice.svg";
      indicator = "Verkehrs Verhalten";
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
    <Box pt={4}>
      <Button
        sx={{ borderRadius: 0 }}
        variant="outlined"
        component={HashLink}
        to="#city-tab"
        smooth={true}
        onClick={() => props.tabChanger(props.name)}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-end",
          }}
        >
          <Icon style={{ fontSize: 25 }}>
            <img
              style={{
                height: "80%",
                opacity: 0.8,
              }}
              alt="img"
              src={data.IconSrc}
            />
          </Icon>
          <Typography color="text.secondary" variant="subtitle2" ml={1}>
            {data.name.toUpperCase()}
          </Typography>
        </Box>
      </Button>
    </Box>

    // <Box sx={{ display: "flex" }} pt={2}>

    // </Box>
  );
};

export default IndicatorAndIcon;
