import { Container, Box, Paper, Button } from '@material-ui/core';
import { Item } from './Carousel-Item.model';

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
          <Paper>
            <Box m={2} pt={2}>
              <h2>{props.item.name}</h2>
              <p>{props.item.description}</p>
              <Button className="CheckButton">Check it out!</Button>
            </Box>
          </Paper>
        </Box>
        <Box>
          <Paper>
            <Box m={2} pt={2}>
              <img src={ props.item.imgSrc ? props.item.imgSrc : "https://www.fillmurray.com/360/360"} />
            </Box>
          </Paper>
        </Box>
      </Container>
    );
  };
  
export default CarouselItem;