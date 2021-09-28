// import { Container, Box, Paper, Button } from "@material-ui/core";
import { Button, Container, Box, CardMedia, Typography } from "@mui/material";
// import { Button } from "@material-ui/core";
// import { Item } from "./Carousel-Item.model";
// import thumbnail from "assets/thumbnail/102.png";
import { City } from "../../models/FullDataset";

interface CarouselItemProps {
  city: City;
}

const CarouselItem: React.FC<CarouselItemProps> = (props) => {
  return (
    <Box
      pb={10}
      style={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "flex-start",
      }}
    >
      <Box pt={8}>
        <Box m={2} pl={15}>
          <Typography
            pb={15}
            variant="h3"
            component="h2"
            fontWeight="fontWeightLight"
          >
            {props.city.city}
          </Typography>
          <Box style={{ display: "flex", alignItems: "flex-end" }}>
            <Typography pr={0} variant="h3">
              {props.city.indicators.noise_pollution.keyFigures[0].value.toFixed(
                2
              )}
            </Typography>
            <Typography pr={5} variant="h3">
              {props.city.indicators.noise_pollution.keyFigures[0].unit}
            </Typography>
            <Typography variant="subtitle1">
              {props.city.indicators.noise_pollution.keyFigures[0].definition}
            </Typography>
          </Box>
          <Box pt={2}>
            <Button
              // variant="contained"
              href={`/city/${props.city.id}`}
              style={{ padding: ".5rem" }}
            >
              Explore
            </Button>
          </Box>
        </Box>
      </Box>
      <Box>
        <Box m={2} pt={8} pr={10}>
          <CardMedia
            style={{ height: "300px", width: "500px" }}
            image="assets/thumbnail/102.png"
          />
          {/* <p>test</p> */}
        </Box>
      </Box>
    </Box>
  );
};

export default CarouselItem;
