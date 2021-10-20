import { Box } from "@mui/system";
import StackedBar from "../StackedBar";
import { Indicator } from "../../models/FullDataset";
import { Typography } from "@mui/material";

interface StackedBarRowProps {
  indicator: Indicator;
}

const StackedBarRow: React.FC<StackedBarRowProps> = (props) => {
  return (
    <Box
      p={1}
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
      }}
    >
      <Box sx={{ width: "30%" }}>
        <Typography mr={4} fontWeight="fontWeightLight" variant="h6">
          {props.indicator.short_name}
        </Typography>
      </Box>
      <Box sx={{ width: "70%" }}>
        <StackedBar
          indicator={props.indicator}
          shadow={false}
          rounded={false}
          background="#C4C4C4"
          height={0.8}
          animation="3s"
        />
      </Box>
    </Box>
  );
};

export default StackedBarRow;
