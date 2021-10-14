import { Box } from "@mui/system";
import KeyFigure from "./keyFigureInfo.model";
import { Typography } from "@mui/material";

interface KeyFigureInfoProps {
  info: KeyFigure | undefined;
}

const KeyFigureInfo: React.FC<KeyFigureInfoProps> = (props) => {
  return (
    <Box pl={0} pr={20} sx={{ zIndex: 1, color: "#eeeeee" }}>
      {/* <Typography variant="subtitle2" color="grey" fontWeight="fontWeightLight">
        {props.info?.shortName}
      </Typography> */}
      <Box>
        <Typography variant="h6" fontWeight="fontWeightLight">
          {props.info?.description}
        </Typography>
      </Box>
      <Box sx={{ display: "flex", alignItems: "flex-end" }}>
        <Typography pr={1} variant="h5">
          {props.info?.value != null
            ? props.info?.value.toFixed(1)
            : "No Value"}
        </Typography>
        <Typography pr={1} variant="h6" fontWeight="fontWeightLight">
          {props.info?.unit}
        </Typography>
      </Box>
      <Box>
        <Typography fontWeight="fontWeightLight" variant="h6">
          {props.info?.points} OF 36 CITIES
        </Typography>
      </Box>
    </Box>
  );
};

export default KeyFigureInfo;
