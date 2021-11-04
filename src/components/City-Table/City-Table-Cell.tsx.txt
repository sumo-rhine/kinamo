import TableCell from "@mui/material/TableCell";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import { IndicatorStat } from "./City-Table";
import Box from "@mui/material/Box";

interface CityTableCellProps {
  value: number;
  showOption: "number" | "bar";
  stats: IndicatorStat;
  align?: "left" | "right" | "center";
  // rank: number;
}

const CityTableCell: React.FC<CityTableCellProps> = (props) => {
  let cell: any;
  switch (props.showOption) {
    case "bar":
      // const width =
      //   ((props.value - props.stats.min) /
      //     (props.stats.max - props.stats.min)) *
      //   100;
      const width = (props.value / 10) * 100;
      cell = (
        <Tooltip
          title={
            // <Box>
            <Box
              p={3}
              sx={{
                display: "flex",
                alignItems: "flex-end",
              }}
            >
              <Typography variant="h2" fontWeight="fontWeightLight">
                {props.value.toFixed(1)}
              </Typography>
              <Typography
                pl={0.5}
                pb={0.9}
                variant="h5"
                fontWeight="fontWeightLight"
              >
                VON 10
              </Typography>
              {/* <Typography variant="h5" fontWeight="fontWeightLight">
                {props.rank}ER VON 36
              </Typography> */}
            </Box>
            // `${props.value.toFixed(1)} [${width.toFixed(0)}% of max]`
          }
        >
          <div
            style={{
              width: "100%",
              height: "0.6rem",
              backgroundColor: "#C4C4C4",
              // boxShadow: "0 1px 2px silver",
              //   borderRadius: ".3rem",
            }}
          >
            <div
              style={{
                backgroundColor: "#8BC34A",
                // width < 25 ? "#C26A4A" : width > 75 ? "#8BC34A" : "#4AC29A",
                height: "100%",
                width: `${width.toFixed(0)}%`,
                // borderRadius: '.3rem'
              }}
            ></div>
          </div>
        </Tooltip>
      );
      break;

    default:
      cell = props.value.toFixed(1);
      break;
  }
  return (
    <TableCell align={props.align ? props.align : "right"}>{cell}</TableCell>
  );
};

export default CityTableCell;
