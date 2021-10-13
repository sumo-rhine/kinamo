// import { Container, Box, Paper, Button } from "@material-ui/core";
import { useState, useEffect } from "react";
import { Button, Container, Box, CardMedia, Typography } from "@mui/material";
// import { Button } from "@material-ui/core";
// import { Item } from "./Carousel-Item.model";
// import thumbnail from "assets/thumbnail/102.png";
import { City } from "../../models/FullDataset";
import KeyFigureBar from "../KeyFigureBar";
import { Link } from "react-router-dom";

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
              pb={8}
              variant="h3"
              component="h2"
              fontWeight="fontWeightLight"
            >
              {data?.cityName}
            </Typography>
            <Box style={{}}>
              <Typography
                variant="h6"
                color="text.secondary"
                fontWeight="fontWeightLight"
              >
                {data?.keyFigureDescription}
              </Typography>
              <Typography pr={1} variant="h5">
                {data?.keyFigureValue.toFixed(1)}
                {data?.keyFigureUnit}
              </Typography>
            </Box>
            <Box
              pt={4}
              style={{
                display: "flex",
                width: 400,
                alignItems: "flex-end",
              }}
            >
              <Typography mr={1} variant="h5" fontWeight="fontWeightLight">
                {data.keyFigurePoints}
              </Typography>
              <Box mb={0.4}>OF 36 CITIES</Box>
              {/* <KeyFigureBar points={data.keyFigurePoints}></KeyFigureBar> */}
            </Box>
            <Box pt={2}>
              <Button
                variant="outlined"
                // href={`/city/${props.city.id}`}
                component={Link}
                to={`/city/${props.city.id}`}
                style={{ padding: ".5rem" }}
                // variant="outlined"
              >
                Explore
              </Button>
            </Box>
          </Box>
        </Box>
        <Box>
          <Box pt={15}>
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
