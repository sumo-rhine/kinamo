import { Box } from "@mui/system";
import StackedBar from "../StackedBar";
import { Indicator } from "../../models/FullDataset";
import { Typography } from "@mui/material";
import Icon from "@mui/material/Icon";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
interface StackedBarRowProps {
  indicator: Indicator;
  iconSrc: string;
}

const StackedBarRow: React.FC<StackedBarRowProps> = (props) => {
  return (
    // <Grid
    //   container
    //   ml={10}
    //   alignItems="flex-end"
    //   justifyContent="flex-start"
    //   direction="row"
    // >
    // <Grid xs={4} item>
    // <Paper>
    <Box pb={2} sx={{ display: "flex" }}>
      <Box pr={3} sx={{ display: "flex", alignItems: "flex-end" }}>
        <Icon style={{ fontSize: 60 }}>
          <img
            style={{
              height: "80%",
              width: "100%",
              opacity: 0.8,
            }}
            alt="img"
            src={props.iconSrc}
            // height={50}
            // width={75}
          />
        </Icon>
      </Box>
      <Box
        sx={{
          width: 300,
          display: "flex",
          justifyContent: "flex-end",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
          }}
        >
          <Typography fontWeight="fontWeightLight" variant="h5">
            {props.indicator.short_name}
          </Typography>
          {/* </Grid> */}
          {/* <Grid xs={1} item> */}
          <Typography fontWeight="fontWeightLight" variant="h4">
            {props.indicator.value?.toFixed(1)}
          </Typography>
        </Box>
        {/* </Grid> */}
        {/* <Grid xs={6} item> */}
        <StackedBar
          indicator={props.indicator}
          shadow={false}
          rounded={false}
          background="#fffaf6"
          height={0.8}
          animation="3s"
        />
      </Box>
    </Box>
    // </Paper>
  );
};

export default StackedBarRow;
