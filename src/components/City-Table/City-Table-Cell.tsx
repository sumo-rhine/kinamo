import TableCell from "@mui/material/TableCell";
import Tooltip from "@mui/material/Tooltip";

import { IndicatorStat } from "./City-Table";

interface CityTableCellProps {
  value: number;
  showOption: "number" | "bar";
  stats: IndicatorStat;
  align?: "left" | "right" | "center";
}

const CityTableCell: React.FC<CityTableCellProps> = (props) => {
  let cell: any;
  switch (props.showOption) {
    case "bar":
      const width =
        ((props.value - props.stats.min) /
          (props.stats.max - props.stats.min)) *
        100;
      cell = (
        <Tooltip
          title={`${props.value.toFixed(1)} [${width.toFixed(0)}% of max]`}
        >
          <div
            style={{
              width: "100%",
              height: "0.6rem",
              backgroundColor: "#C4C4C4",
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
