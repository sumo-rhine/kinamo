import { Box } from "@mui/system";
import StackedBar from "../StackedBar";
import { Indicator } from "../../models/FullDataset";
import { Typography } from "@mui/material";
import Icon from "@mui/material/Icon";
interface StackedBarRowProps {
  indicator: Indicator;
  iconSrc: string;
}

const StackedBarRow: React.FC<StackedBarRowProps> = (props) => {
  return (
    <Box pb={1} sx={{ display: "flex" }}>
      <Box pr={3} sx={{ display: "flex", alignItems: "flex-end" }}>
        <Icon style={{ fontSize: 55 }}>
          <img
            style={{
              height: "80%",
              width: "100%",
              opacity: 0.8,
            }}
            alt="img"
            src={props.iconSrc}
          />
        </Icon>
      </Box>
      <Box
        sx={{
          width: 600,
          display: "flex",
          justifyContent: "flex-end",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            display: "flex",
          }}
        >
          <Typography fontWeight="fontWeightLight" variant="h6">
            {props.indicator.short_name}
          </Typography>
        </Box>
        {/* <KeyFigureBar points={Math.abs(props.indicator.rank - 37)} /> */}
        <StackedBar
          indicator={props.indicator}
          shadow={true}
          rounded={false}
          background="#C4C4C4"
          height={0.8}
          animation="3s"
        />
      </Box>
      <Box pl={3} sx={{ display: "flex", alignItems: "flex-end" }}>
        <Typography fontWeight="fontWeightLight" variant="h3">
          {props.indicator.value?.toFixed(1).slice(0, 2)}
        </Typography>
        <Typography pb={0.3} fontWeight="fontWeightLight" variant="h5">
          {props.indicator.value?.toFixed(1)[2]}
        </Typography>
      </Box>
    </Box>
  );
};

export default StackedBarRow;
