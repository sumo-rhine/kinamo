import { Box } from "@mui/system";
import Tooltip from "@mui/material/Tooltip";
import { Typography } from "@mui/material";
interface KeyFigureBarProps {
  points: number;
  max_points: number;
}

const KeyFigureToolTip = (points: number, max_points: number): any => {
  return (
    <Box
      p={3}
      sx={{
        display: "flex",
        alignItems: "flex-end",
      }}
    >
      <Typography variant="h2" fontWeight="fontWeightLight">
        {Math.abs(points - (max_points + 1))}
      </Typography>
      <Typography pl={0.5} pb={0.9} variant="h5" fontWeight="fontWeightLight">
        ER VON {max_points}
      </Typography>
    </Box>
  );
};

const KeyFigureBar: React.FC<KeyFigureBarProps> = (props) => {
  return (
    <Tooltip
      placement="left-start"
      arrow
      title={KeyFigureToolTip(props.points, props.max_points)}
    >
      <Box
        style={{
          width: "100%",
          height: "0.6rem",
          backgroundColor: "#C4C4C4",
          transitionDuration: "1.7s",
        }}
      >
        <Box
          style={{
            backgroundColor: "#8BC34A",
            boxShadow: "0 2px 4px silver",
            // props.points < 7.2
            //   ? "red"
            //   : props.points > 28.8
            //   ? "#acff5e"
            //   : "#8BC34A",

            height: "100%",
            width: `${(props.points! / props.max_points) * 100}%`,
            transitionDuration: "1s",
          }}
        >
          {/* {props.points} */}
        </Box>
      </Box>
    </Tooltip>
  );
};

export default KeyFigureBar;
