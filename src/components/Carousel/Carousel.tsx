import React from "react";
import Carousel from "react-material-ui-carousel";

import CarouselItem from "./Carousel-Item";
import { Item } from './Carousel-Item.model';


// DEVELOPMENT ONLY
const ITEMS: Item[] = [
  {
    name: "Random Name #1",
    description: "Probably the most random thing you have ever seen!",
  },
  {
    name: "Random Name #2",
    description: "Probably the most random thing you have ever seen!",
  }
]; 

const CityCarousel: React.FC = (props) => {
  return (
    <Carousel
      index={1}
      animation="slide"
      autoPlay={false}
      navButtonsAlwaysVisible={true}
    >
      {ITEMS.map((item: Item, i: number) => (
        <CarouselItem key={i} item={item} />
      ))}
    </Carousel>
  );
};


export default CityCarousel;
