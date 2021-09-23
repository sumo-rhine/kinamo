import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button, Container, Box, CardMedia } from "@material-ui/core";
import thumbnail from "../assets/thumbnail/102.png";

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
      rank: "12 out of 12",
    },
    {
      name: "Random Name #2",
      description: "Probably the most random thing you have ever seen!",
      rank: "12 out of 12",
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
    rank: string;
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
        <Box m={1} pt={2}>
          <h2>{props.item.name}</h2>
          <p>{props.item.description}</p>
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
    </Container>
  );
};

export default CityCarousel;
