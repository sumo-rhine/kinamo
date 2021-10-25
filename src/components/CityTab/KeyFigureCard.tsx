import { Box } from "@mui/system";
import {
  Card,
  Typography,
  CardContent,
  // CardActions,
  // Button,
} from "@mui/material";
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
      {/* <CardContent> */}
      <Box
        sx={{}}
        // sx={{
        //   display: "flex",
        //   flexDirection: "column",
        //   justifyContent: "flex-start",
        // }}
      >
        {/* <Typography
            color="text.secondary"
            // fontWeight="fontWeightLight"
            gutterBottom
            variant="h6"
          >
            {props.short_name.toUpperCase()}
          </Typography> */}
        <Box>
          <Typography
            color="text.secondary"
            fontWeight="fontWeightLight"
            // gutterBottom
            variant="h6"
          >
            {props.short_name}
          </Typography>
        </Box>

        <Box sx={{ display: "flex", alignItems: "flex-end" }}>
          <Typography
            pr={1}
            variant="h3"
            fontWeight="fontWeightLight"
            // component="div"
          >
            {props.value === null ? "Na" : props.value.toFixed(1)}
          </Typography>
          <Typography
            // ml={0}
            mb={0.3}
            // color="text.secondary"
            variant="h5"
            fontWeight="fontWeightLight"
            // component="div"
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
              // width: 400,
              alignItems: "flex-end",
            }}
          >
            <Typography variant="h5" fontWeight="fontWeightLight">
              {props.points} OF 36 CITIES
            </Typography>
          </Box>
        )}
      </Box>
      {/* <CardActions> */}
      {/* <Box mt={2}>
            <Button size="small">Info</Button>
          </Box> */}
      {/* </CardActions> */}
      {/* 
          <Typography
            mt={1}
            // mb={0.3}
            variant="h6"
            fontWeight="fontWeightLight"
            component="div"
          >
            {props.points} OF 36
          </Typography> */}
      {/* </Box>  */}
      {/* </CardContent> */}
      {/* </Card> */}
    </Box>
  );
};

export default KeyFigureCard;
