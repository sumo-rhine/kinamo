import { Box } from "@mui/material";
import { useState, useEffect } from "react";

import { Indicator } from "../models/FullDataset";

interface StackedBarProps {
  indicator: Indicator;
  height?: number;
  background?: string;
  shadow?: boolean;
  rounded?: boolean;
  animation?: string;
}

// https://hihayk.github.io/scale
// THIS IS HARD CODED AND SHOULD BE PREPARED
const Colors: string[] = [
  "#1A4613",
  "#1A581A",
  "#226A2A",
  "#2A7B3E",
  "#348B54",
  "#3E9A6C",
  "#6BB58F",
  "#9ACFB2",
  "#CAE7D7",
];

const StackedBar: React.FC<StackedBarProps> = (props) => {
  // handle state for this component
  const [indicatorWidth, setIndicatorWidth] = useState<number>(0.05);
  const [stackWidths, setStackWidths] = useState<number[]>([
    0.1, 0.1, 0.1, 0.3,
  ]);

  // we need useEffect as we need to update the component
  // when new props are passed in (i.e. the user selects another city)
  useEffect(() => {
    // calculate the full relative width
    const fullWidth: number = 0.3 + 0.7 * (props.indicator.value! / 10.0);

    // reduce the stackWidths to their sum
    const sum = props.indicator.keyFigures
      .map((fig) => fig.points)
      .reduce((a, b) => a + b, 0);

    // calculate the stack Widths
    const stackWidths = props.indicator.keyFigures.map(
      (fig) => fig.points / sum
    );

    // set the new values
    setIndicatorWidth(fullWidth);
    setStackWidths(stackWidths);
  }, [props]);
  // console.log(props);

  return (
    <Box
      style={{
        width: "100%",
        height: props.height ? `${props.height}rem` : "2rem",
        backgroundColor: props.background ? props.background : "#C4C4C4",
        boxShadow: props.shadow ? "0 2px 4px silver" : "none",
        borderRadius: props.rounded
          ? `${(props.height ? props.height : 2) * 0.3}rem`
          : "none",
        transitionDuration: props.animation ? props.animation : "1.7s",
      }}
    >
      <Box
        style={{
          width: `${indicatorWidth * 100}%`,
          height: "100%",
          boxSizing: "border-box",
          backgroundColor: "white",
          display: "flex",
          transitionDuration: props.animation ? props.animation : "1.7s",
        }}
      >
        {stackWidths.map((stack, index) => {
          return (
            <Box
              style={{
                width: `${stack * 100}%`,
                height: "100%",
                backgroundColor: Colors[index],
                transitionDuration: props.animation ? props.animation : "1.7s",
              }}
            ></Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default StackedBar;
