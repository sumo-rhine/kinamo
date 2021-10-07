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
      <Card sx={{ minWidth: 300, height: 190 }}>
        <CardContent>
          <Typography color="text.secondary" gutterBottom>
            {props.description}
          </Typography>
          <Box sx={{ display: "flex", alignItems: "flex-end" }}>
            <Typography variant="h5" component="div">
              {props.value === null ? "Na" : props.value.toFixed(2)}
            </Typography>
            <Typography ml={2} mb={0.2} color="text.secondary" component="div">
              {props.unit}
            </Typography>
          </Box>
          {/* <Typography variant="subtitle1" color="text.secondary">
            {props.description}
          </Typography> */}
          <Box pt={4} sx={{ width: 200 }}>
            <KeyFigureBar points={props.points} />
          </Box>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default KeyFigureCard;
