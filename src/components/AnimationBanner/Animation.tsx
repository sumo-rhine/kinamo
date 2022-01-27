import useStyles from "./styles";
import { Box } from "@mui/material";
import Fade from "@mui/material/Fade";
import { useEffect, useState } from "react";

interface AnimationProps {
  id: number;
}

const Animation: React.FC<AnimationProps> = (props) => {
  const [loading, setLoading] = useState(true);
  const [id, setID] = useState(props.id);

  useEffect(() => {
    setLoading(false);
    // console.log("set loading: false");
    setTimeout(() => {
      // console.log("set id");
      setID(props.id);
    }, 1000);
    setTimeout(() => {
      // console.log("set loading: true");
      setLoading(true);
    }, 3000);
  }, [props.id]);

  const classes = useStyles();
  return (
    <Fade in={loading} timeout={1000}>
      <Box sx={{ position: "absolute" }}>
        <Box className={classes.banner}>
          <img
            alt="img"
            className={classes.parks}
            src={`/assets/banner/${id.toString()}_park.png`}
            onError={(e: any) => (
              (e.target.onError = null), (e.target.src = "")
            )}
          />
          <img
            alt="img"
            className={classes.pois}
            src={`/assets/banner/${id.toString()}_pois.png`}
            onError={(e: any) => (
              (e.target.onError = null),
              (e.target.src = "/assets/banner/102_pois.png")
            )}
          />
          <img
            alt="img"
            className={classes.streets}
            src={`/assets/banner/${id.toString()}_streets.png`}
            onError={(e: any) => (
              (e.target.onError = null),
              (e.target.src = "/assets/banner/102_streets.png")
            )}
          />
        </Box>
      </Box>
    </Fade>
  );
};

export default Animation;
