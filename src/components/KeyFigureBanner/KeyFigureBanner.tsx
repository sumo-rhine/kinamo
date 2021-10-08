import { Box, height } from "@mui/system";
import { City } from "../../models/FullDataset";
import { map, pick, pickBy } from "lodash";
import { Divider, Stack } from "@mui/material";
import {
  ClosedCaptionDisabledOutlined,
  DragIndicatorTwoTone,
} from "@mui/icons-material";
import { useEffect, useState } from "react";
import KeyFigureInfo from "./KeyFigureInfo";
import KeyFigure from "./keyFigureInfo.model";

interface KeyFigureProps {
  city: City;
}
const getKeyFigure = (city: City, keyFigureName: string): any => {
  const keyFigureInfo: any = { name: city.city };
  //   const test = city.area;
  Object.entries(city.indicators).forEach(([name, indicator]) => {
    indicator.keyFigures.map((fig: any) => {
      if (fig.id === keyFigureName) {
        keyFigureInfo["description"] = fig.long_name;
        keyFigureInfo["shortName"] = fig.short_name;
        keyFigureInfo["value"] = fig.value;
        keyFigureInfo["unit"] = fig.unit;
        keyFigureInfo["points"] = Math.abs(fig.points - 37);
      }
    });
  });
  return keyFigureInfo;
};

const KeyFigureBanner: React.FC<KeyFigureProps> = (props) => {
  const [best1, setBest1] = useState<KeyFigure>();
  const [best2, setBest2] = useState<KeyFigure>();
  const [worst1, setWorst1] = useState<KeyFigure>();
  const [worst2, setWorst2] = useState<KeyFigure>();

  useEffect(() => {
    console.log(props.city)
    setBest1(getKeyFigure(props.city, props.city.two_best_keyFigures[0]));
    setBest2(getKeyFigure(props.city, props.city.two_best_keyFigures[1]));
    setWorst1(getKeyFigure(props.city, props.city.two_worst_keyFigures[0]));
    setWorst2(getKeyFigure(props.city, props.city.two_worst_keyFigures[1]));
    //   console.log(best);
    //   console.log("test banner");
  }, [props]);

  return (
    // <Box
    //   sx={{
    //     display: "flex",
    //     width: "100%",
    //     height: 650,
    //     justifyContent: "space-around",
    //     alignItems: "flex-end",
    //     paddingBottom: 10,
    //   }}
    // >
    // <Box sx={{ width: "100%", height: 650 }}>
    // <Box
    // sx={{
    //   width: "100%",
    //   height: 100,
    //   display: "flex",
    //   alignItems: "flex-end",
    // }}
    // >
    <Stack
      mt={70}
      mb={4}
      sx={{ width: "100" }}
      direction="row"
      spacing={10}
      justifyContent="space-around"
      alignItems="flex-end"
      divider={
        <Divider
          style={{ background: "#bcbcbc" }}
          orientation="vertical"
          flexItem
        />
      }
    >
      <KeyFigureInfo info={best1}></KeyFigureInfo>
      <KeyFigureInfo info={best2}></KeyFigureInfo>
      <KeyFigureInfo info={worst1}></KeyFigureInfo>
      <KeyFigureInfo info={worst2}></KeyFigureInfo>
    </Stack>
    // </Box>
  );
};

export default KeyFigureBanner;
