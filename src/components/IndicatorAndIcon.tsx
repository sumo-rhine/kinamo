import { Typography } from "@mui/material";
import { Box } from "@mui/material";
import Icon from "@mui/material/Icon";
import Button from "@mui/material/Button";
import { HashLink } from "react-router-hash-link";

interface IndicatorAndIconProps {
  name: string;
  tabChanger?: (indicator: string | undefined) => void;
  clickable: boolean;
  pt: number;
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
    <Box pt={props.pt}>
      <Button
        sx={{ borderRadius: 0 }}
        variant={props.clickable ? "outlined" : "text"}
        component={HashLink}
        to="#city-tab"
        smooth={true}
        onClick={() => {
          if (props.tabChanger) props.tabChanger(props.name);
        }}
        disabled={!props.clickable}
      >
        <Box
          sx={{
            display: "flex",
            // flexDirection: "column",
            alignItems: "flex-end",
            // justifyContent: "flex-end",
          }}
        >
          <Typography color="text.secondary" variant="subtitle1" mr={1}>
            {data.name.toUpperCase()}
          </Typography>
          <Icon style={{ fontSize: 35 }}>
            <img
              style={{
                height: "80%",
                opacity: 0.8,
              }}
              alt="img"
              src={data.IconSrc}
            />
          </Icon>
        </Box>
      </Button>
    </Box>

    // <Box sx={{ display: "flex" }} pt={2}>

    // </Box>
  );
};

export default IndicatorAndIcon;
