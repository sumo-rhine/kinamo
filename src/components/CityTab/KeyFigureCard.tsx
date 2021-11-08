import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import KeyFigureBar from "../KeyFigureBar";
import DoDisturbIcon from "@mui/icons-material/DoDisturb";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import Button from "@mui/material/Button";
import KeyFigureInfo from "./KeyFigureInfo";
import Tooltip from "@mui/material/Tooltip";

interface KeyFigureCardProps {
  description: string;
  definition?: any;
  data_source?: any;
  value: number;
  unit: string;
  short_name: string;
  points: number;
  max_points: number;
  padding: number;
  elevation: number;
  bar: boolean;
  infoIcon: boolean;
  quality?: string;
}

interface KeyFigureValuesProps {
  keyFigure: KeyFigureCardProps;
}

const KeyFigureValues: React.FC<KeyFigureValuesProps> = (props) => {
  return (
    <Box>
      <Box sx={{ display: "flex", alignItems: "flex-end" }}>
        <Typography pr={1} variant="h3" fontWeight="fontWeightLight">
          {Number(props.keyFigure.value.toFixed(2)).toLocaleString()}
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
          <KeyFigureBar
            points={props.keyFigure.points}
            max_points={props.keyFigure.max_points}
          />
          <Typography
            mt={0.5}
            variant="h6"
            color="text.secondary"
            fontWeight="fontWeightLight"
          >
            {Math.abs(
              props.keyFigure.points - (props.keyFigure.max_points + 1)
            )}
            er von {props.keyFigure.max_points}
          </Typography>
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

interface DataFlagProps {
  text: any;
}

const DataFlag: React.FC<DataFlagProps> = (props) => {
  return (
    <Box sx={{ position: "absolute", right: 35, bottom: 30 }}>
      <Tooltip placement="left-start" title={props.text!}>
        <WarningAmberIcon></WarningAmberIcon>
      </Tooltip>
    </Box>
  );
};

const KeyFigureCard: React.FC<KeyFigureCardProps> = (props) => {
  // console.log(props);
  return (
    <Box sx={{ position: "relative" }}>
      {props.infoIcon && (
        <Box sx={{ position: "absolute", right: 15, top: 10 }}>
          <KeyFigureInfo
            description={props.description}
            short_name={props.short_name}
            data_source={props.data_source}
            definition={props.definition}
          />
          {/* <MoreHorizIcon fontSize="large" /> */}
        </Box>
      )}
      {props.quality != "ok" && (
        <DataFlag
          text={
            <Box m={3}>
              <Typography variant="h6" fontWeight="fontWeightLight">
                {props.quality!}
              </Typography>
            </Box>
          }
        />
      )}
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
