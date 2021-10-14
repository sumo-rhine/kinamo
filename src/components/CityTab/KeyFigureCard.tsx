import { Box } from "@mui/system";
import {
  Card,
  Typography,
  CardContent,
  CardActions,
  Button,
} from "@mui/material";
import KeyFigureBar from "../KeyFigureBar";

interface KeyFigureCardProps {
  description: string;
  value: number;
  unit: string;
  short_name: string;
  points: number;
}

const KeyFigureCard: React.FC<KeyFigureCardProps> = (props) => {
  return (
    <Box p={3}>
      <Card>
        <CardContent>
          <Box
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
            <Box mb={2}>
              <Typography
                // color="text.secondary"
                fontWeight="fontWeightLight"
                gutterBottom
                variant="h6"
              >
                {props.description}
              </Typography>
            </Box>

            <Box sx={{ display: "flex", alignItems: "flex-end" }}>
              <Typography
                variant="h4"
                fontWeight="fontWeightLight"
                component="div"
              >
                {props.value === null ? "Na" : props.value.toFixed(2)}
              </Typography>
              <Typography
                // ml={0}
                mb={0.3}
                variant="h5"
                fontWeight="fontWeightLight"
                component="div"
              >
                {props.unit}
              </Typography>
            </Box>
            <Box sx={{ width: 300 }}>
              <KeyFigureBar points={props.points} />
            </Box>
          </Box>
          {/* <CardActions> */}
          <Box mt={2}>
            <Button size="small">Learn More</Button>
          </Box>
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
        </CardContent>
      </Card>
    </Box>
  );
};

export default KeyFigureCard;
