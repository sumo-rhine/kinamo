import { Box } from "@mui/system";
import { City } from "../../models/FullDataset";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import KeyFigure from "./keyFigureInfo.model";
import KeyFigureCard from "../CityTab/KeyFigureCard";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import IndicatorAndIcon from "../IndicatorAndIcon";

interface KeyFigureProps {
  city: City;
  tabChanger: (indicator: string | undefined) => void;
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
        keyFigureInfo["points"] = fig.points;
        keyFigureInfo["max_points"] = fig.max_points;
        keyFigureInfo["indicator"] = name;
        keyFigureInfo["quality"] = fig.quality;
      }
    });
  });
  return keyFigureInfo;
};

export const KeyFigureBanner: React.FC<KeyFigureProps> = (props) => {
  const [best1, setBest1] = useState<KeyFigure>();
  const [best2, setBest2] = useState<KeyFigure>();
  const [worst1, setWorst1] = useState<KeyFigure>();
  const [worst2, setWorst2] = useState<KeyFigure>();
  const [value, setValue] = useState<string>("best");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  useEffect(() => {
    setBest1(getKeyFigure(props.city, props.city.two_best_keyFigures[0]));
    setBest2(getKeyFigure(props.city, props.city.two_best_keyFigures[1]));
    setWorst1(getKeyFigure(props.city, props.city.two_worst_keyFigures[0]));
    setWorst2(getKeyFigure(props.city, props.city.two_worst_keyFigures[1]));
    //   console.log(best);
    //   console.log("test banner");
  }, [props]);

  return (
    <Box
      pb={5}
      pt={4}
      // mt={3}
      sx={{
        width: "100%",
        backgroundColor: "#F8F8F8",
        zIndex: 3,
        position: "relative",
      }}
    >
      <Box>
        <Typography ml={20} variant="h3" fontWeight="fontWeightLight">
          Auf einen Blick
        </Typography>
        <Typography mt={1} ml={20} variant="h6" fontWeight="fontWeightLight">
          Entdecke Stärken und Handlungsbedarf von {props.city.city}
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      >
        {!!best1 ? (
          <TabContext value={value}>
            <Box sx={{ borderBottom: 0, borderColor: "divider" }} pl={10}>
              <TabList
                onChange={handleChange}
                aria-label="lab API tabs example"
                orientation="vertical"
                centered
              >
                <Tab sx={{ width: 300 }} label="Stärken" value="best" />
                <Tab label="Handlungsbedarf" value="area_of_action" />
              </TabList>
            </Box>
            <TabPanel
              sx={{
                width: "100%",
              }}
              value={value}
            >
              {value === "best" ? (
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-around",
                  }}
                >
                  <Box sx={{}}>
                    <KeyFigureCard
                      description={(best1 as KeyFigure).description}
                      value={(best1 as KeyFigure).value}
                      unit={(best1 as KeyFigure).unit}
                      short_name={(best1 as KeyFigure).shortName}
                      points={(best1 as KeyFigure).points}
                      max_points={(best1 as KeyFigure).max_points}
                      padding={1}
                      elevation={2}
                      bar={true}
                      infoIcon={false}
                      quality={(best1 as KeyFigure).quality}
                    />
                    <Box pl={4}>
                      <IndicatorAndIcon
                        name={(best1 as KeyFigure).indicator}
                        tabChanger={props.tabChanger}
                      />
                    </Box>
                  </Box>
                  <Box>
                    <KeyFigureCard
                      description={(best2 as KeyFigure).description}
                      value={(best2 as KeyFigure).value}
                      unit={(best2 as KeyFigure).unit}
                      short_name={(best2 as KeyFigure).shortName}
                      points={(best2 as KeyFigure).points}
                      max_points={(best2 as KeyFigure).max_points}
                      padding={1}
                      elevation={2}
                      bar={true}
                      infoIcon={false}
                      quality={(best2 as KeyFigure).quality}
                    />
                    <Box pl={4}>
                      <IndicatorAndIcon
                        name={(best2 as KeyFigure).indicator}
                        tabChanger={props.tabChanger}
                      />
                    </Box>
                  </Box>
                </Box>
              ) : (
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-around",
                  }}
                >
                  <Box>
                    <KeyFigureCard
                      description={(worst1 as KeyFigure).description}
                      value={(worst1 as KeyFigure).value}
                      unit={(worst1 as KeyFigure).unit}
                      short_name={(worst1 as KeyFigure).shortName}
                      points={(worst1 as KeyFigure).points}
                      max_points={(worst1 as KeyFigure).max_points}
                      padding={1}
                      elevation={2}
                      bar={true}
                      infoIcon={false}
                      quality={(worst1 as KeyFigure).quality}
                    />
                    <Box pl={4}>
                      <IndicatorAndIcon
                        name={(worst1 as KeyFigure).indicator}
                        tabChanger={props.tabChanger}
                      />
                    </Box>
                  </Box>
                  <Box>
                    <KeyFigureCard
                      description={(worst2 as KeyFigure).description}
                      value={(worst2 as KeyFigure).value}
                      unit={(worst2 as KeyFigure).unit}
                      short_name={(worst2 as KeyFigure).shortName}
                      points={(worst2 as KeyFigure).points}
                      max_points={(worst2 as KeyFigure).max_points}
                      padding={1}
                      elevation={2}
                      bar={true}
                      infoIcon={false}
                      quality={(worst2 as KeyFigure).quality}
                    />
                    <Box pl={4}>
                      <IndicatorAndIcon
                        name={(worst2 as KeyFigure).indicator}
                        tabChanger={props.tabChanger}
                      />
                    </Box>
                  </Box>
                </Box>
              )}

              {/* {value} */}
            </TabPanel>
            {/* </Box> */}
          </TabContext>
        ) : (
          // <Stack
          //   sx={{ width: "100%" }}
          //   direction="row"
          //   justifyContent="space-around"
          // >
          //   <KeyFigureCard
          //     description={(best1 as KeyFigure).description}
          //     value={(best1 as KeyFigure).value}
          //     unit={(best1 as KeyFigure).unit}
          //     short_name={(best1 as KeyFigure).shortName}
          //     points={(best1 as KeyFigure).points}
          //     padding={1}
          //     elevation={2}
          //     bar={true}
          //   />
          //   <KeyFigureCard
          //     description={(best2 as KeyFigure).description}
          //     value={(best2 as KeyFigure).value}
          //     unit={(best2 as KeyFigure).unit}
          //     short_name={(best2 as KeyFigure).shortName}
          //     points={(best2 as KeyFigure).points}
          //     padding={1}
          //     elevation={2}
          //     bar={true}
          //   />
          //   <KeyFigureCard
          //     description={(worst2 as KeyFigure).description}
          //     value={(worst2 as KeyFigure).value}
          //     unit={(worst2 as KeyFigure).unit}
          //     short_name={(worst2 as KeyFigure).shortName}
          //     points={(worst2 as KeyFigure).points}
          //     padding={1}
          //     elevation={2}
          //     bar={true}
          //   />
          //   <KeyFigureCard
          //     description={(worst1 as KeyFigure).description}
          //     value={(worst1 as KeyFigure).value}
          //     unit={(worst1 as KeyFigure).unit}
          //     short_name={(worst1 as KeyFigure).shortName}
          //     points={(worst1 as KeyFigure).points}
          //     padding={1}
          //     elevation={2}
          //     bar={true}
          //   />
          //   {/* <KeyFigureInfo info={best1}></KeyFigureInfo>
          // <KeyFigureInfo info={best2}></KeyFigureInfo>
          // <KeyFigureInfo info={worst1}></KeyFigureInfo>
          // <KeyFigureInfo info={worst2}></KeyFigureInfo> */}
          // </Stack>
          <Box>Loading</Box>
        )}
      </Box>
    </Box>
  );
};

// export const KeyFigureBannerLight: React.FC<KeyFigureProps> = (props) => {
//   const [best1, setBest1] = useState<KeyFigure>();
//   const [best2, setBest2] = useState<KeyFigure>();
//   const [worst1, setWorst1] = useState<KeyFigure>();
//   const [worst2, setWorst2] = useState<KeyFigure>();

//   useEffect(() => {
//     setBest1(getKeyFigure(props.city, props.city.two_best_keyFigures[0]));
//     setBest2(getKeyFigure(props.city, props.city.two_best_keyFigures[1]));
//     setWorst1(getKeyFigure(props.city, props.city.two_worst_keyFigures[0]));
//     setWorst2(getKeyFigure(props.city, props.city.two_worst_keyFigures[1]));
//     //   console.log(best);
//     //   console.log("test banner");
//   }, [props]);

//   return (
//     <Box sx={{ width: "100%", color: "white" }}>
//       <Stack
//         mt={74}
//         // mb={2}
//         // sx={{ width: "200" }}
//         direction="row"
//         // spacing={10}
//         ml={18}
//         justifyContent="space-around"
//         // alignItems="flex-start"
//         divider={
//           <Divider
//             style={{ background: "#bcbcbc" }}
//             orientation="vertical"
//             variant="middle"
//             light={true}
//             flexItem
//           />
//         }
//       >
//         <KeyFigureInfo info={best1}></KeyFigureInfo>
//         {/* <KeyFigureInfo info={best2}></KeyFigureInfo> */}
//         <KeyFigureInfo info={worst1}></KeyFigureInfo>
//         {/* <KeyFigureInfo info={worst2}></KeyFigureInfo> */}
//       </Stack>
//     </Box>
//     // </Box>
//   );
// };
