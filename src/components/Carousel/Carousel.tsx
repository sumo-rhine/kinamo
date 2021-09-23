import React from "react";
import { Box } from "@mui/system";
import Carousel from "react-material-ui-carousel";

import CarouselItem from "./Carousel-Item";
// import { Item } from "./Carousel-Item.model";
import { connect } from "react-redux";
import { AppState } from "../../models/AppState";
import { City } from "../../models/FullDataset";

interface CityCarouselProps {
  cities: City[];
  debug: boolean;
}

const CityCarousel: React.FC<CityCarouselProps> = (props) => {
  // if (props.debug) console.log(props.cities);
  return (
    <Carousel
      index={1}
      animation="slide"
      autoPlay={false}
      navButtonsAlwaysVisible={true}
    >
      {props.cities.map((city) => (
        <CarouselItem key={city.id} city={city} />
      ))}
    </Carousel>
  );
};

const mapStateToProps = (state: AppState) => {
  return {
    cities: state.data.cities,
    debug: state.debug,
  };
};

export default connect(mapStateToProps)(CityCarousel);
