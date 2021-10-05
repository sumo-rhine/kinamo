import { Box } from "@mui/system";
import KeyFigure from "./keyFigureInfo.model";
import { Typography } from "@mui/material";
interface KeyFigureInfoProps {
  info: KeyFigure | undefined;
}

const KeyFigureInfo: React.FC<KeyFigureInfoProps> = (props) => {
  return (
    <Box pl={3} pr={3} sx={{ color: "#eeeeee" }}>
      <Typography variant="subtitle2" color="grey" fontWeight="fontWeightLight">
        {props.info?.shortName}
      </Typography>
      <Box sx={{ display: "flex", alignItems: "flex-end" }}>
        <Typography pr={1} variant="h5">
          {props.info?.value.toFixed(1)}
        </Typography>
        <Typography pr={1} variant="subtitle1" fontWeight="fontWeightLight">
          {props.info?.unit}
        </Typography>
      </Box>
      <Box>
        <Typography
          variant="subtitle2"
          color="grey"
          fontWeight="fontWeightLight"
        >
          {props.info?.description}
        </Typography>
      </Box>
      <Box>
        <Typography>{props.info?.points} OF 36 CITIES</Typography>
      </Box>
    </Box>
  );
};

export default KeyFigureInfo;
