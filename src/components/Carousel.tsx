import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button, Container, Box } from "@material-ui/core";

// export interface item {
//   name: string;
//   description: string;
//   key: any;
// }

// interface items extends Array<item> {}

const CityCarousel: React.FC = (props) => {
  const items = [
    {
      name: "Random Name #1",
      description: "Probably the most random thing you have ever seen!",
    },
    {
      name: "Random Name #2",
      description: "Probably the most random thing you have ever seen!",
    },
  ];
  return (
    <Carousel
      index={1}
      animation="slide"
      autoPlay={false}
      navButtonsAlwaysVisible={true}
    >
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
};

interface ItemProps {
  item: {
    name: string;
    description: string;
  };
}

const Item: React.FC<ItemProps> = (props) => {
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
            <img src="https://www.fillmurray.com/360/360"></img>
          </Box>
        </Paper>
      </Box>
    </Container>
  );
};

export default CityCarousel;
