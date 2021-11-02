import { useState, useEffect } from "react";
import { Button, Box, CardMedia, Typography } from "@mui/material";
import { City } from "../../models/FullDataset";
import { HashLink } from "react-router-hash-link";
import Stack from "@mui/material/Stack";

interface CarouselItemProps {
  city: City;
  nextHandler: any;
}

interface CityInfoData {
  cityName: string;
  shortName: string;
  keyFigureDescription: string;
  keyFigureValue: number;
  keyFigureUnit: string;
  keyFigurePoints: number;
}

const CarouselItem: React.FC<CarouselItemProps> = (props) => {
  const [data, setData] = useState<CityInfoData>();

  useEffect(() => {
    const cityInfo: any = { cityName: props.city.city };
    const best = props.city.two_best_keyFigures[0];
    Object.entries(props.city.indicators).forEach(([name, indicator]) => {
      indicator.keyFigures.map((fig: any) => {
        if (fig.id === best) {
          cityInfo["keyFigureDescription"] = fig.long_name;
          cityInfo["shortName"] = fig.short_name;
          cityInfo["keyFigureValue"] = fig.value;
          cityInfo["keyFigureUnit"] = fig.unit;
          cityInfo["keyFigurePoints"] = Math.abs(fig.points - 37);
        }
      });
    });
    setData(cityInfo);
  }, [props]);

  if (!data) {
    return <p>404</p>;
  } else {
    return (
      <Box
        pb={15}
        // pr={10}
        // pl={10}
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          flexDirection: "row",
          width: "100%",
          height: "300px",
          // alignItems: "flex-start",
        }}
      >
        <Box pt={10}>
          <Box>
            <Typography
              pb={0.5}
              // variant="subtitle2"
              variant="h6"
              color="text.secondary"
              fontWeight="fontWeightLight"
            >
              Top Kenzzahl
            </Typography>
            <Typography pb={5} variant="h4" fontWeight="fontWeightLight">
              {data?.cityName}
            </Typography>

            <Typography
              variant="h6"
              // color="text.secondary"
              fontWeight="fontWeightLight"
            >
              {data?.shortName}
            </Typography>
            <Box sx={{ display: "flex", alignItems: "flex-end" }}>
              <Typography pr={1} variant="h3" fontWeight="fontWeightLight">
                {data?.keyFigureValue.toFixed(1)}
              </Typography>
              <Typography variant="h5" fontWeight="fontWeightLight">
                {data?.keyFigureUnit}
              </Typography>
            </Box>
            <Box
              pt={1}
              pl={1}
              style={{
                display: "flex",
                width: 400,
                alignItems: "flex-end",
              }}
            >
              <Typography variant="h5" fontWeight="fontWeightLight">
                {data.keyFigurePoints} OF 36 CITIES
              </Typography>
              {/* <Box mb={0.4}></Box> */}
              {/* <KeyFigureBar points={data.keyFigurePoints}></KeyFigureBar> */}
            </Box>
            <Box pt={5}>
              <Stack direction="row" spacing={2}>
                <Button
                  sx={{ borderRadius: 0 }}
                  variant="outlined"
                  component={HashLink}
                  to={`/city/${props.city.id}#top`}
                  smooth={true}
                  style={{ padding: ".5rem" }}
                >
                  {data.cityName}
                </Button>
                <Button onClick={props.nextHandler}>Nächste</Button>
              </Stack>
            </Box>
          </Box>
        </Box>
        <Box>
          <Box pt={15}>
            <CardMedia
              style={{ width: 500, height: 400 }}
              image="assets/thumbnail/102_.png"
            />
            {/* <p>test</p> */}
          </Box>
        </Box>
      </Box>
    );
  }
};

export default CarouselItem;
