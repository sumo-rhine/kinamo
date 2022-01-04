import useStyles from "./styles";
import { Box } from "@mui/material";

interface AnimationProps {
  id: number;
}

const Animation: React.FC<AnimationProps> = (props) => {
  const classes = useStyles();
  return (
    <Box sx={{ position: "absolute" }}>
      <Box className={classes.banner}>
        <img
          alt="img"
          className={classes.parks}
          src={`/assets/banner/${props.id.toString()}_parks.png`}
          onError={(e: any) => (
            (e.target.onError = null),
            (e.target.src = "/assets/banner/102_parks.png")
          )}
        />
        <img
          alt="img"
          className={classes.pois}
          src={`/assets/banner/${props.id.toString()}_pois.png`}
          onError={(e: any) => (
            (e.target.onError = null),
            (e.target.src = "/assets/banner/102_pois.png")
          )}
        />
        <img
          alt="img"
          className={classes.streets}
          src={`/assets/banner/${props.id.toString()}_streets.png`}
          onError={(e: any) => (
            (e.target.onError = null),
            (e.target.src = "/assets/banner/102_streets.png")
          )}
        />
      </Box>
    </Box>
  );
};

export default Animation;
