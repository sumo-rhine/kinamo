import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import KeyFigureBar from "../KeyFigureBar";
import DoDisturbIcon from "@mui/icons-material/DoDisturb";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";

interface KeyFigureCardProps {
  description: string;
  value: number;
  unit: string;
  short_name: string;
  points: number;
  padding: number;
  elevation: number;
  bar: boolean;
  infoIcon: boolean;
}

interface KeyFigureValuesProps {
  keyFigure: KeyFigureCardProps;
}

const KeyFigureValues: React.FC<KeyFigureValuesProps> = (props) => {
  return (
    <Box>
      <Box sx={{ display: "flex", alignItems: "flex-end" }}>
        <Typography pr={1} variant="h3" fontWeight="fontWeightLight">
          {props.keyFigure.value.toFixed(1)}
        </Typography>
        <Typography
          mb={0.3}
          color="text.secondary"
          variant="h5"
          fontWeight="fontWeightLight"
        >
          {props.keyFigure.unit}
        </Typography>
      </Box>
      {props.keyFigure.bar ? (
        <Box mt={1} sx={{ width: 200 }}>
          <KeyFigureBar points={props.keyFigure.points} />
        </Box>
      ) : (
        <Box
          pt={1}
          style={{
            display: "flex",
            alignItems: "flex-end",
          }}
        >
          <Typography variant="h5" fontWeight="fontWeightLight">
            {props.keyFigure.points} OF 36 CITIES
          </Typography>
        </Box>
      )}
    </Box>
  );
};

const DataFlag = () => {
  return (
    <Box sx={{ position: "absolute", right: 15, bottom: 20 }}>
      <WarningAmberIcon fontSize="large"></WarningAmberIcon>
    </Box>
  );
};

const KeyFigureCard: React.FC<KeyFigureCardProps> = (props) => {
  return (
    <Box sx={{ position: "relative" }}>
      {props.infoIcon && (
        <MoreHorizIcon
          sx={{ position: "absolute", right: 15, top: 10 }}
          fontSize="large"
        />
      )}
      {/* {props.infoIcon && <DataFlag />} */}

      <Box p={props.padding}>
        <Box>
          <Typography
            // color="text.secondary"
            fontWeight="fontWeightLight"
            variant="h6"
          >
            {props.short_name}
          </Typography>
        </Box>
        {props.value === null ? (
          <Box pt={2} sx={{ display: "flex", alignItems: "center" }}>
            <DoDisturbIcon fontSize="large" />
            <Typography pl={1} color="text.secondary" variant="h5">
              KEINE DATEN
            </Typography>
          </Box>
        ) : (
          <KeyFigureValues keyFigure={props} />
        )}
      </Box>
    </Box>
  );
};

export default KeyFigureCard;
