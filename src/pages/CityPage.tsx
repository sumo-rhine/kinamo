import AnimationBanner from "../components/AnimationBanner/AnimationBanner";
import CityOverview from "../components/City-Overview/CityOverview";
import { useState, useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router";
import { Box, CircularProgress } from "@mui/material";
// import { cloneDeep } from "lodash";
import Header from "../components/Header/Header";
import { AppState } from "../models/AppState";
import { City } from "../models/FullDataset";
import CityTab from "../components/CityTab/CityTab";
import { KeyFigureBanner } from "../components/KeyFigureBanner/KeyFigureBanner";
import CityTabDivider from "../components/CityTab/CityTabDivider";
import Footer from "../components/Footer/Footer";
import * as analytics from "../analytics";

// import AboutProps from "../components/How-it-Works/About.model";
interface CityPageProps {
  cities: City[];
}

const CityPage: React.FC<CityPageProps> = (props) => {
  // const [active, setActive] = useState(false);

  // load the city id from the url
  const { cityId } = useParams<{ cityId: string }>();
  // #58
  // state for storing the current city
  const [city, setCity] = useState<City | null>(null);

  // create a state for the programatically opened tab on scroll
  const [extOpenTab, setExtOpenTab] = useState<string | undefined>(undefined);

  // create a function to change the extOpenTab from outside of this component
  const tabChanger = (indicator: string | undefined) =>
    setExtOpenTab(indicator);

  /**
   * Filter the cities array for the correct city
   * @param cities Array of cities
   * @param cityId the requested city
   */
  const filterCity = () => {
    //DEV: here we could add handling for unknown cities, as the user might just change the url
    // maybe the props.cities is mutated somewhere, then we need the slower but saver cloneDeep Aproach
    // const city = cloneDeep(props.cities).filter((city) => city.id === Number(cityId)).pop();
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
    if (city) analytics.event(city?.city);
  }, [cityId, props]);

  // return the page
  return (
    <Box>
      <div id="top" />
      <Header cityName={city?.city} selectable={true} />
      {
        /* Switch the city variable - if null, no city is (yet) loaded */
        city ? (
          <Box>
            <AnimationBanner city={city}></AnimationBanner>
            <CityOverview city={city}></CityOverview>
            <KeyFigureBanner city={city} tabChanger={tabChanger} />
            <CityTabDivider city={city.city} />
            <CityTab city={city} changeTab={extOpenTab}></CityTab>
            <Footer />
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
