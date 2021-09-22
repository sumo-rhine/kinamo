import { Container, Box, Paper, Button } from "@material-ui/core";
import { Item } from "./Carousel-Item.model";
import thumbnail from "../assets/thumbnail/102.png";

interface CarouselItemProps {
  item: Item;
}

const CarouselItem: React.FC<CarouselItemProps> = (props) => {
  return (
    <Container
      style={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      <Box>
        <Box m={2} pt={2}>
          <h2>{props.item.name}</h2>
          <p>{props.item.description}</p>
          <Button className="CheckButton">Check it out!</Button>
        </Box>
      </Box>
      <Box>
        <Box m={2} pt={2}>
          <img
            src={
              props.item.imgSrc
                ? props.item.imgSrc
                : "https://www.fillmurray.com/360/360"
            }
          />
        </Box>
      </Box>
    </Container>
  );
};

export default CarouselItem;
