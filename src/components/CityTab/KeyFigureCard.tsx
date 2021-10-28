import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import KeyFigureBar from "../KeyFigureBar";

interface KeyFigureCardProps {
  description: string;
  value: number;
  unit: string;
  short_name: string;
  points: number;
  padding: number;
  elevation: number;
  bar: boolean;
}

const KeyFigureCard: React.FC<KeyFigureCardProps> = (props) => {
  return (
    <Box p={props.padding}>
      {/* <Card sx={{ borderRadius: 0 }} elevation={props.elevation}> */}
      <Box sx={{ width: 400 }}>
        <Box>
          <Typography
            // color="text.secondary"
            fontWeight="fontWeightLight"
            variant="h6"
          >
            {props.short_name}
          </Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "flex-end" }}>
          <Typography pr={1} variant="h3" fontWeight="fontWeightLight">
            {props.value === null ? "Na" : props.value.toFixed(1)}
          </Typography>
          <Typography
            mb={0.3}
            color="text.secondary"
            variant="h5"
            fontWeight="fontWeightLight"
          >
            {props.unit}
          </Typography>
        </Box>
        {props.bar ? (
          <Box mt={1} sx={{ width: 200 }}>
            <KeyFigureBar points={props.points} />
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
              {props.points} OF 36 CITIES
            </Typography>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default KeyFigureCard;
