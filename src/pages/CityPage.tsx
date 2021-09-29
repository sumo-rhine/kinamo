import AnimationBanner from "../components/AnimationBanner/AnimationBanner";
import { useState, useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router";

import { Box, CircularProgress } from "@mui/material";

import Header from "../components/Header/Header";
import { AppState } from "../models/AppState";
import { City } from "../models/FullDataset";
import CityTab from "../components/CityTab/CityTab";

interface CityPageProps {
  cities: City[];
}

const CityPage: React.FC<CityPageProps> = (props) => {
  // load the city id from the url
  const { cityId } = useParams<{ cityId: string }>();
  // #58
  // state for storing the current city
  const [city, setCity] = useState<City | null>(null);

  /**
   * Filter the cities array for the correct city
   * @param cities Array of cities
   * @param cityId the requested city
   */
  const filterCity = () => {
    //DEV: here we could add handling for unknown cities, as the user might just change the url
    const city = props.cities
      .filter((city) => city.id === Number(cityId))
      .pop();

    // we can replace the setCity(null) with setCity(errorMessage) for the case
    // that a city was requested, that does not exist
    return city ? setCity(city) : setCity(null);
  };

  // useEffect for start filtering whenever the params or props change
  // i.e. the user selects a new city from the within the cityPage
  useEffect(() => {
    filterCity();
  }, [cityId, props]);

  console.log(city);
  // return the page
  return (
    <Box>
      <Header cityName={city?.city} />
      {
        /* Switch the city variable - if null, no city is (yet) loaded */
        city ? (
          <Box>
            <AnimationBanner cityId={city.id}></AnimationBanner>
            <CityTab city={city}></CityTab>
            {/* <pre>{JSON.stringify(city, undefined, 4)}</pre> */}
          </Box>
        ) : (
          <CircularProgress
            color="secondary"
            sx={{
              marginLeft: "auto",
              marginRight: "auto",
              marginTop: "5rem",
              display: "block",
            }}
          />
        )
      }
    </Box>
  );
};

const mapStateToProps = (state: AppState) => {
  return {
    cities: state.data.cities,
  };
};

export default connect(mapStateToProps)(CityPage);
