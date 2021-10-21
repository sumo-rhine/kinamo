import { Box } from "@mui/system";
import StackedBar from "../StackedBar";
import { Indicator } from "../../models/FullDataset";
import { Typography } from "@mui/material";
import Icon from "@mui/material/Icon";
import Grid from "@mui/material/Grid";
interface StackedBarRowProps {
  indicator: Indicator;
  iconSrc: string;
}

const StackedBarRow: React.FC<StackedBarRowProps> = (props) => {
  return (
    <Grid
      container
      ml={10}
      alignItems="flex-end"
      justifyContent="flex-start"
      direction="row"
    >
      <Grid xs={4} item>
        <Box sx={{ display: "flex", alignItems: "flex-end" }}>
          <Icon>
            <img
              alt="img"
              src={props.iconSrc}
              // height={30}
              width={25}
            />
          </Icon>
          <Typography ml={1} fontWeight="fontWeightLight" variant="h5">
            {props.indicator.short_name}
          </Typography>
        </Box>
      </Grid>
      <Grid xs={1} item>
        <Typography mr={1} fontWeight="fontWeightLight" variant="h3">
          {props.indicator.value?.toFixed(1)}
        </Typography>
      </Grid>
      <Grid xs={6} item>
        <Box sx={{ width: 400 }}>
          <StackedBar
            indicator={props.indicator}
            shadow={false}
            rounded={false}
            background="#C4C4C4"
            height={0.8}
            animation="3s"
          />
        </Box>
      </Grid>
    </Grid>
  );
};

export default StackedBarRow;
