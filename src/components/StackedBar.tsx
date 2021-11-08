import { Box, Tooltip, Typography } from "@mui/material";
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

interface StackData {
  width: number;
  name: string;
  value: number;
  unit: string;
}

const StackedBar: React.FC<StackedBarProps> = (props) => {
  // handle state for this component
  const [indicatorWidth, setIndicatorWidth] = useState<number>(0.05);
  // const [stackWidths, setStackWidths] = useState<number[]>([
  //   0.1, 0.1, 0.1, 0.3,
  // ]);

  const [stackData, setStackData] = useState<StackData[]>([]);

  // we need useEffect as we need to update the component
  // when new props are passed in (i.e. the user selects another city)
  useEffect(() => {
    // calculate the full relative width
    // const fullWidth: number = 0.3 + 0.7 * (props.indicator.value! / 10.0);
    const fullWidth: number = props.indicator.value! / 10.0;
    console.log("width:", fullWidth);
    console.log("value:", props.indicator.value);
    // const fullWidth: number = 10.0;

    // reduce the stackWidths to their sum
    const sum = props.indicator.keyFigures
      .map((fig) => fig.points)
      .reduce((a, b) => a + b, 0);

    // calculate the stack Widths
    // const stackWidths = props.indicator.keyFigures.map(
    //   (fig) => fig.points / sum
    // );
    const newStackData: StackData[] = props.indicator.keyFigures.map((fig) => {
      return {
        width: fig.points / sum, // width of the stack, relative to total point sum of all keyFigures
        name: fig.short_name, // name of the keyFigure, change to whatever needed
        value: fig.value!, // change to whatever needed
        unit: fig.unit!,
      };
    });

    // set the new values
    setIndicatorWidth(fullWidth);
    // setStackWidths(stackWidths);
    setStackData(newStackData);
  }, [props]);

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
        {stackData.map((data, index) => {
          return (
            <Tooltip
              title={
                <Box m={2} sx={{ display: "flex", flexDirection: "column" }}>
                  <Typography variant="h5" fontWeight="fontWeightLight">
                    {data.name}
                  </Typography>

                  {data.value != null && (
                    <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                      <Typography
                        mr={1}
                        fontWeight="fontWeightLight"
                        variant="h3"
                      >
                        {data.value.toFixed(1)}
                      </Typography>
                      <Typography
                        mb={0.5}
                        fontWeight="fontWeightLight"
                        variant="h5"
                      >
                        {data.unit}
                      </Typography>
                    </Box>
                  )}
                </Box>
              }
            >
              <Box
                style={{
                  width: `${data.width * 100}%`,
                  height: "100%",
                  backgroundColor: Colors[index],
                  transitionDuration: props.animation
                    ? props.animation
                    : "1.7s",
                }}
              />
            </Tooltip>
          );
        })}
      </Box>
    </Box>
  );
};

export default StackedBar;
