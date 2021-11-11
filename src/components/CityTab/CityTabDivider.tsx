import { Box } from "@mui/system";
import Typography from "@mui/material/Typography";

interface CityTabDivider {
  city: string;
}

const CityTabDivider: React.FC<CityTabDivider> = (props) => {
  return (
    <Box
      sx={{
        width: "100%",
        height: 200,
        backgroundColor: "#383C45",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Typography
        ml={20}
        color="white"
        variant="h2"
        fontWeight="fontWeightLight"
      >
        Übersicht
      </Typography>
      <Box>
        <Typography
          mt={1}
          ml={20}
          color="white"
          variant="h5"
          fontWeight="fontWeightLight"
        >
          Entdecke die Indikatoren und Kennzahlen für {props.city}
        </Typography>
        <Typography mt={1} ml={20} color="white" fontWeight="fontWeightLight">
          Durch Anklicken der Icons können die Kennzahlen der Indikatoren
          abgerufen werden
        </Typography>
      </Box>
    </Box>
  );
};

export default CityTabDivider;
