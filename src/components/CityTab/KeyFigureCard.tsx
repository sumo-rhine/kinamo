import { Box } from "@mui/system";
import {
  Card,
  Typography,
  CardContent,
  CardActions,
  Button,
} from "@mui/material";

interface KeyFigureCardProps {
  description: string;
  value: number;
  unit: string;
}

const KeyFigureCard: React.FC<KeyFigureCardProps> = (props) => {
  return (
    <Box p={3}>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {props.unit}
          </Typography>
          <Typography variant="h5" component="div">
            {props.value === null ? "Na" : props.value.toFixed(2)}
          </Typography>
          <Typography variant="body2">{props.description}</Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default KeyFigureCard;
