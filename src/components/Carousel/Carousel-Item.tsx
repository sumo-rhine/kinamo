// import { Container, Box, Paper, Button } from "@material-ui/core";
import { Button, Container, Box, CardMedia } from "@mui/material";
// import { Item } from "./Carousel-Item.model";
import thumbnail from "../../assets/thumbnail/102.png";
import { City } from "../../models/FullDataset";

interface CarouselItemProps {
  city: City;
}

const CarouselItem: React.FC<CarouselItemProps> = (props) => {
  return (
    <Box
      pb={15}
      style={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      <Box>
        <Box m={1} pt={2}>
          <h2>{props.city.city}</h2>
          <p>{props.city.id}</p>
          <Button className="CheckButton">Check it out!</Button>
        </Box>
      </Box>
      <Box>
        <Box m={2} pt={2}>
          <CardMedia
            style={{ height: "300px", width: "500px" }}
            image={thumbnail}
          />
          {/* <p>test</p> */}
        </Box>
      </Box>
    </Box>
  );
};

export default CarouselItem;
