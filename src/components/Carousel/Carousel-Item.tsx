// import { Container, Box, Paper, Button } from "@material-ui/core";
import { useState, useEffect } from "react";
import { Button, Container, Box, CardMedia, Typography } from "@mui/material";
// import { Button } from "@material-ui/core";
// import { Item } from "./Carousel-Item.model";
// import thumbnail from "assets/thumbnail/102.png";
import { City } from "../../models/FullDataset";
import KeyFigureBar from "../KeyFigureBar";

interface CarouselItemProps {
  city: City;
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
  console.log(props.city);

  useEffect(() => {
    const cityInfo: any = { cityName: props.city.city };
    const best = props.city.two_best_keyFigures[0];
    console.log(best);
    // const worst = props.city.two_worst_keyFigures[0];
    Object.entries(props.city.indicators).forEach(([name, indicator]) => {
      indicator.keyFigures.map((fig: any) => {
        if (fig.id === best) {
          // console.log(fig);
          cityInfo["keyFigureDescription"] = fig.long_name;
          cityInfo["shortName"] = fig.short_name;
          cityInfo["keyFigureValue"] = fig.value;
          cityInfo["keyFigureUnit"] = fig.unit;
          cityInfo["keyFigurePoints"] = fig.points;
        }
      });
    });
    console.log(cityInfo);
    setData(cityInfo);
  }, [props]);

  if (!data) {
    return <p>404</p>;
  } else {
    return (
      <Box
        pb={20}
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          flexDirection: "row",
          width: "100%",
          height: "500px",
          // alignItems: "flex-start",
        }}
      >
        <Box pt={8}>
          <Box>
            <Typography
              pb={15}
              variant="h3"
              component="h2"
              fontWeight="fontWeightLight"
            >
              {data?.cityName}
            </Typography>
            <Box style={{}}>
              <Typography pr={1} variant="h5">
                {data?.keyFigureValue.toFixed(1)}
                {data?.keyFigureUnit}
              </Typography>
              <Typography
                variant="h6"
                color="text.secondary"
                fontWeight="fontWeightLight"
              >
                {data?.keyFigureDescription}
              </Typography>
            </Box>
            <Box pt={4} style={{ width: 400 }}>
              {/* <KeyFigureBar points={data.keyFigurePoints}></KeyFigureBar> */}
              {data.keyFigurePoints} of 36 Cities
            </Box>
            <Box pt={4}>
              <Button
                // variant="contained"
                href={`/city/${props.city.id}`}
                style={{ padding: ".5rem" }}
                variant="outlined"
              >
                Explore
              </Button>
            </Box>
          </Box>
        </Box>
        <Box>
          <Box>
            <CardMedia
              style={{ width: 500, height: 400 }}
              image="assets/thumbnail/102.png"
            />
            {/* <p>test</p> */}
          </Box>
        </Box>
      </Box>
    );
  }
};

export default CarouselItem;
