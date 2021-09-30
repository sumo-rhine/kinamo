/* tslint:disable */

import React from "react";
import Header from "../components/Header/Header";
import AnimationBanner from "../components/AnimationBanner/AnimationBanner";
import CityTab from "../components/CityTab/CityTab";
import StackedBar from "../components/StackedBar";
import { Box } from "@mui/system";
import { City } from "../models/FullDataset";


const sampleCity: City = {
  "country": "Hilfe",
  "two_best_keyFigures": ['foo', 'bar'],
  "two_worst_keyFigures": ['foo', 'bar'],
  "id": 4,
  "city": "Aarau",
  "population": {
    "value": 21268,
    "description": "Population",
    "unit": "Inhabitants"
  },
  "area": {
    "value": 12.372840779057052,
    "description": "Area",
    "unit": "km^2"
  },
  "urban_area": {
    "value": 0.4850277174609915,
    "description": "Share of urban area",
    "unit": "%"
  },
  "indicators": {
    "walkability": {
      "short_name": "Pedestrian Friendliness",
      "description": "...",
      "value": 5.515873015873016,
      "rank": 14,
      "keyFigures": [
        {
          "short_name": "Speed Limit",
          "long_name": "Share of streets with speed limit of 30 km/h or lower",
          "unit": "%",
          "definition": "...",
          "value": 0.6141583724947473,
          "points": 14,
          "data_source": ["HERE Map Data"]
        },
        {
          "short_name": "Streets Density",
          "long_name": "Density of streets accessible by pedestrians",
          "unit": "km/km^2",
          "definition": "...",
          "value": 15.63008868624681,
          "points": 31,
          "data_source": ["HERE Map Data"]
        },
        {
          "short_name": "Low Traffic",
          "long_name": "Share of streets with low traffic volume",
          "definition": "Low traffic is defied as ...",
          "unit": "%",
          "value": 0.8002327699451627,
          "points": 9,
          "data_source": ["HERE Traffic Data"]
        },
        {
          "short_name": "Car-free Streets",
          "long_name": "Share of car-free streets",
          "definition": "Share of the streets network not accessible by cars.",
          "unit": "%",
          "value": 0.1103163655300217,
          "points": 23,
          "data_source": ["HERE Map Data"]
        },
        {
          "short_name": "Green Area",
          "long_name": "Share of green spaces within the urban area",
          "definition": "The share of green spaces are defined as areas with a Normalized Difference Vegetation Index (NDVI) of 0.7 or higher.",
          "unit": "%",
          "value": 0.0551892314626761,
          "points": 18,
          "data_source": ["Sentinel 2 Satellite imagery"]
        },
        {
          "short_name": "Amenities",
          "long_name": "Density of pedestrian-friendly amenities (Cafes, restaurants, bars ...)",
          "definition": "Density of pedestrian-friendly amenities such as shopping, restaurants, bars, cafes parks and recreation areas.",
          "unit": "no/km^2",
          "value": 47.99063605450096,
          "points": 35,
          "data_source": ["HERE Map Data"]
        },
        {
          "short_name": "Population near Parks",
          "long_name": "Share of population with access to recreational areas",
          "definition": "Share of population within 10 minutes walk to recreational areas or parks",
          "unit": "%",
          "value": 40.72913825328271,
          "points": 13,
          "data_source": [
            "HERE Map Data",
            "OpenStreetMap",
            "Global Human Settlement Layer (GHSL)"
          ]
        }
      ]
    },
    "bikeability": {
      "short_name": "Bikeability",
      "description": "...",
      "value": 5.515873015873016,
      "rank": 14,
      "keyFigures": [
        {
          "short_name": "Speed Limit",
          "long_name": "Share of streets with speed limit of 30 km/h or lower",
          "unit": "%",
          "definition": "...",
          "value": 0.6141583724947473,
          "points": 14,
          "data_source": ["HERE Map Data"]
        },
        {
          "short_name": "Low Traffic",
          "long_name": "Share of streets with low traffic volume",
          "definition": "Low traffic is defied as ...",
          "unit": "%",
          "value": 0.8002327699451627,
          "points": 9,
          "data_source": ["HERE Traffic Data"]
        },
        {
          "short_name": "Heavy Vehicles",
          "long_name": "Share of streets not accessible by heavy vehicles",
          "definition": "...",
          "unit": "%",
          "value": 2.749105803335332,
          "points": 13,
          "data_source": ["HERE Map Data"]
        },
        {
          "short_name": "Bike Sharing",
          "long_name": "Number of bikesharing bikes ",
          "definition": "Number of bikesharing bikes per 1000 Inhabitants. Bike rental stations are not included into the analysis",
          "unit": "no/1000 Inhabitants",
          "value": 0.1488563183869165,
          "points": 22,
          "data_source": [
            "nextbike",
            "donkey-republic",
            "pickebike",
            "carvelo2go",
            "rent a bike",
            "velocite",
            "velohop",
            "call-a-bike",
            "publiebike"
          ]
        },
        {
          "short_name": "Slope",
          "long_name": "Mean height difference per 1000 m",
          "definition": "Slope is computed as the mean height difference per 1000 meters within the urban area",
          "unit": "m/km",
          "value": 3.147130580364258,
          "points": 6,
          "data_source": ["ALOS World 3D"]
        }
      ]
    },
    "public_transport": {
      "short_name": "Public Transport",
      "description": "...",
      "value": 7.048611111111109,
      "rank": 4,
      "keyFigures": [
        {
          "short_name": "Service Frequency",
          "long_name": "Average number of trips per station",
          "unit": "mean trips/workday",
          "definition": "Average number of trips over all stations within the municipality.",
          "value": 178.89583333333337,
          "points": 29,
          "data_source": ["HERE Public Transport API"]
        },
        {
          "short_name": "Service Duration",
          "long_name": "Average service availability per station",
          "definition": "Average service availability over all stations within the municipality.",
          "unit": "hours",
          "value": 21.940972222222207,
          "points": 34,
          "data_source": ["HERE Public Transport API"]
        },
        {
          "short_name": "Stops Density",
          "long_name": "Public transport stations density",
          "definition": "Number of public transport stations per km2 in",
          "unit": "stops/km^2",
          "value": 7.998439342416828,
          "points": 14,
          "data_source": ["HERE Public Transport API"]
        },
        {
          "short_name": "Population near Stops",
          "long_name": "Share of population with access to public transport stops",
          "definition": "Share of population within 5 minute walking distance to stops.",
          "unit": "%",
          "value": 0.7240517641221973,
          "points": 19,
          "data_source": ["HERE Public Transport API"]
        },
        {
          "short_name": "Barrier-free",
          "long_name": "Share of barrier-free stations",
          "definition": "Percentage of accessible and partially accessible public transport stations. A barrier-free station is defined as a station that is accessible to wheelchair users without assistance, i.e. without steps or steep inclines. Limited accessibility is defined as stations with small steps, less than 7.5 cm. Stations that do not meet these criteria are therefore not defined as barrier-free.",
          "unit": "%",
          "value": 1.0,
          "points": 31,
          "data_source": ["wheelmap.org"]
        },
        {
          "short_name": "Price",
          "long_name": "Cost of a one-way trip",
          "definition": "Cost of a one-way trip within the city.",
          "unit": "euro",
          "value": 2.7,
          "points": 12,
          "data_source": ["operator websites"]
        },
        {
          "short_name": "Intermodal Connection",
          "long_name": "Share stops with access to bike-carsharing or car parking places",
          "definition": "Share of public transport stations within 2 minute walk to bikesharing or carsharing stations or car parking places.",
          "unit": "%",
          "value": 0.3725490196078431,
          "points": 32,
          "data_source": ["operator websites"]
        }
      ]
    },
    "car_integration": {
      "short_name": "Car Integration",
      "description": "...",
      "value": 7.182539682539682,
      "rank": 1,
      "keyFigures": [
        {
          "short_name": "Pollution Regulation",
          "long_name": "Share of area with pollution regulation",
          "unit": "%",
          "definition": "Share of are with pollution regulation",
          "value": 42,
          "points": 17,
          "data_source": ["HERE Map Data"]
        },
        {
          "short_name": "Fuel Stations",
          "long_name": "Fuel stations density",
          "definition": "Number of Fuel stations within the municipal boundary.",
          "unit": "no/km^2",
          "value": 2.2308589808629544,
          "points": 33,
          "data_source": ["HERE Map Data"]
        },
        {
          "short_name": "One Way Streets",
          "long_name": "Share of one-way streets",
          "definition": "Ratio of length of oneway streets and total road network length in urban area",
          "unit": "%",
          "value": 0.1082394367585763,
          "points": 24,
          "data_source": ["HERE Map Data"]
        },
        {
          "short_name": "Car Sharing",
          "long_name": "Density of carsharing cars",
          "definition": "Number of car sharing cars in the urban area per 1000 inhabitants",
          "unit": "no/1000 Inhabitants",
          "value": 1.1412317742996931,
          "points": 34,
          "data_source": ["HERE Map Data"]
        },
        {
          "short_name": "Parking Place",
          "long_name": "Number of car parking capacity",
          "definition": "number of car parking places in urban area per 1000 inhabitants",
          "unit": "no/1000 Inhabitants",
          "value": 168.35649609560258,
          "points": 33,
          "data_source": ["parkopedia.com"]
        },
        {
          "short_name": "Parking Price",
          "long_name": "Average price for 2 hour parking",
          "definition": "Mean price of all parking places within the city for a 2 hour period",
          "unit": "euro",
          "value": 3.567167698202181,
          "points": 8,
          "data_source": ["parkopedia.com"]
        },
        {
          "short_name": "Congestion",
          "long_name": "Share of congested road network",
          "definition": "Ratio of contested road network during peak times to the city road network",
          "unit": "%",
          "value": 0.7442940204496311,
          "points": 32,
          "data_source": ["HERE Traffic"]
        },
        {
          "short_name": "EV Charging",
          "long_name": "EV charing station density",
          "definition": "Number of EV charging stations per 1000 Inhabitants",
          "unit": "no/1000 Inhabitants",
          "value": 0.1488563183869165,
          "points": 15,
          "data_source": ["openchargemap.org"]
        }
      ]
    },
    "noise_pollution": {
      "short_name": "Noise Pollution",
      "description": "...",
      "value": 2.7777777777777777,
      "rank": 27,
      "keyFigures": [
        {
          "short_name": "Road Day",
          "long_name": "Share of population exposed to road traffic noise by day",
          "unit": "%",
          "definition": "Share of population with an annual average day exposure above 55db from road traffic",
          "value": 0.2760016044935973,
          "points": 10,
          "data_source": ["EU Environmental Noise Directive"]
        },
        {
          "short_name": "Road Night",
          "long_name": "Share of population exposed to road traffic noise by night",
          "definition": "Share of population with an annual average night exposure above 55db from road traffic ",
          "unit": "%",
          "value": 0.1616771403432489,
          "points": 5,
          "data_source": ["EU Environmental Noise Directive"]
        },
        {
          "short_name": "Rail Day",
          "long_name": "Share of population exposed to rail traffic noise by day",
          "definition": "Share of population with an annual average day exposure of rail noise above 55db",
          "unit": "%",
          "value": 0.0793494729261476,
          "points": 24,
          "data_source": ["EU Environmental Noise Directive"]
        },
        {
          "short_name": "Rail Night",
          "long_name": "Share of population exposed to rail traffic noise by night",
          "definition": "Share of population with an annual average night exposure above 55db  from rail traffic ",
          "unit": "%",
          "value": 0.0230753852920115,
          "points": 28,
          "data_source": ["EU Environmental Noise Directive"]
        }
      ]
    },
    "land_use": {
      "short_name": "Land Use",
      "description": "...",
      "value": 7.9123821713095985,
      "rank": 6,
      "keyFigures": [
        {
          "short_name": "Streets Length",
          "long_name": "Length of the road network",
          "unit": "km/Inhabitant",
          "definition": "Length of the road network per inhabitant.",
          "value": 7.667444677067921,
          "points": 27,
          "data_source": ["HERE Map Data"]
        },
        {
          "short_name": "Streets Area",
          "long_name": "Area of the road network",
          "definition": "Area of the road network per inhabitant.",
          "unit": "km/Inhabitant",
          "value": 1.119090896576254,
          "points": 35,
          "data_source": ["HERE Map Data"]
        }
      ]
    },
    "traffic_safety": {
      "short_name": "Traffic Safety",
      "description": "...",
      "value": 2.6157407407407405,
      "rank": 34,
      "keyFigures": [
        {
          "short_name": "Motorized Accidents",
          "long_name": "Number of Accidents with motorized vehicles",
          "unit": "no/1000 Inhabitants",
          "definition": "Number of accidents with motorized vehicles involved.",
          "value": 2.6977829536017124,
          "points": 12,
          "data_source": [
            "INSEE for France",
            "geo.admin.ch for Switzerland",
            "Unfallatlas for Germany",
            "All data for the year 2018"
          ]
        },
        {
          "short_name": "Bike Accidents",
          "long_name": "Number of accidents with bicyclists",
          "definition": "Number of accidents with bicycles involved.",
          "unit": "no/1000 Inhabitants",
          "value": 11.673099318468948,
          "points": 1,
          "data_source": [
            "INSEE for France",
            "geo.admin.ch for Switzerland",
            "Unfallatlas for Germany",
            "All data for the year 2018"
          ]
        },
        {
          "short_name": "Pedestrian Accidents",
          "long_name": "Number of accidents with pedestrians",
          "unit": "no/1000 Inhabitants",
          "definition": "Number of accidents with pedestrians involved.",
          "value": 4.098554871817987,
          "points": 2,
          "data_source": ["HERE Map Data"]
        },
        {
          "short_name": "Motorized Fatalities",
          "long_name": "Share of deadly motorized accidents",
          "unit": "%",
          "definition": "Percent of deadly accidents of all accidents with motorised vehicles involved.",
          "value": 0.0,
          "points": 25,
          "data_source": [
            "INSEE for France",
            "geo.admin.ch for Switzerland",
            "Unfallatlas for Germany",
            "All data for the year 2018"
          ]
        },
        {
          "short_name": "Bike Fatalities",
          "long_name": "Share of deadly accidents with bicycles",
          "definition": "Percent of deadly accidents of all accidents with bicycles involved.",
          "unit": "%",
          "value": 0.8888888888888888,
          "points": 7,
          "data_source": [
            "INSEE for France",
            "geo.admin.ch for Switzerland",
            "Unfallatlas for Germany",
            "All data for the year 2018"
          ]
        },
        {
          "short_name": "Pedestrian Fatalities",
          "long_name": "Share of deadly accidents with pedestrains",
          "unit": "no/1000 Inhabitants",
          "definition": "Percent of deadly accidents of all accidents with pedestrians involved",
          "value": 4.098554871817987,
          "points": 2,
          "data_source": ["HERE Map Data"]
        }
      ]
    },
    "emissions": {
      "short_name": "Emissions",
      "description": "...",
      "value": 0.5555555555555556,
      "rank": 35,
      "keyFigures": [
        {
          "short_name": "PM10",
          "long_name": "Annual PM10 emissions from road traffic",
          "unit": "kg/Inhabitants/year",
          "definition": "Sum of yearly PM10 emissions for all street segments within the municipality.",
          "value": 2.6977829536017124,
          "points": 12,
          "data_source": ["Atmo-VISION Traffic Model"]
        },
        {
          "short_name": "PM25",
          "long_name": "Annual PM25 emissions from road traffic",
          "definition": "Sum of yearly PM25 emissions for all street segments within the municipality.",
          "unit": "kg/Inhabitants/year",
          "value": 42,
          "points": 2,
          "data_source": ["Atmo-VISION Traffic Model"]
        },
        {
          "short_name": "NO2",
          "long_name": "Annual NO2 emissions from road traffic",
          "unit": "kg/Inhabitants/year",
          "definition": "Sum of yearly NO2 emissions for all street segments within the municipality.",
          "value": 42,
          "points": 2,
          "data_source": ["Atmo-VISION Traffic Model"]
        },
        {
          "short_name": "CO2",
          "long_name": "Annual CO2 emissions from road traffic",
          "unit": "kg/Inhabitants/year",
          "definition": "Sum of yearly CO2 emissions for all street segments within the municipality.",
          "value": 8.548805225631396,
          "points": 4,
          "data_source": ["Atmo-VISION Traffic Model"]
        }
      ]
    },
    "cross_border": {
      "short_name": "Cross-border Connectivity",
      "description": "...",
      "value": 4.305555555555555,
      "rank": 28,
      "keyFigures": [
        {
          "short_name": "Public Transport Connectivity",
          "long_name": "Public transport travel time to regional centers",
          "unit": "minutes",
          "definition": "Average travel time with public transport to regional centers defined as cities with population higher 100 000 Inhabitants (Freiburg im Breisgau, Karlsruhe, Strasbourg, Mulhouse, Basel)",
          "value": 103.4,
          "points": 11,
          "data_source": ["HERE Public Transport API"]
        },
        {
          "short_name": "Car Connectivity",
          "long_name": "Car travel time to regional centers",
          "unit": "minutes",
          "definition": "Average travel time with car to regional centers defined as cities with population higher 100 000 Inhabitants (Freiburg im Breisgau, Karlsruhe, Strasbourg, Mulhouse, Basel)",
          "value": 96.42333333333332,
          "points": 6,
          "data_source": ["HERE Routing API"]
        },
        {
          "short_name": "Public Transport Speed",
          "long_name": "Public transport travel speed to regional centers",
          "unit": "km/h",
          "definition": "Average travel speed with public transport to regional centers defined as cities with population higher 100 000 Inhabitants (Freiburg im Breisgau, Karlsruhe, Strasbourg, Mulhouse, Basel)",
          "value": 70.13106382978724,
          "points": 28,
          "data_source": ["HERE Public Transport API"]
        },
        {
          "short_name": "Car Travel Speed",
          "long_name": "Car travel speed to regional centers",
          "unit": "km/h",
          "definition": "Average travel speed with car to regional centers defined as cities with population higher 100 000 Inhabitants (Freiburg im Breisgau, Karlsruhe, Strasbourg, Mulhouse, Basel)",
          "value": 88.02769730701421,
          "points": 17,
          "data_source": ["HERE Routing API"]
        }
      ]
    },
    "functional_diversity": {
      "short_name": "Functional Diversity",
      "description": "...",
      "value": 8.944444444444445,
      "rank": 2,
      "keyFigures": [
        {
          "short_name": "Business Density",
          "long_name": "Number of businesses",
          "unit": "no/1000 Inhabitants",
          "definition": "Number of Businesses defined as the biggest regional employer",
          "value": 0.0992375455912776,
          "points": 22,
          "data_source": ["HERE Map Data"]
        },
        {
          "short_name": "Education Density",
          "long_name": "Number of education services",
          "unit": "no/1000 Inhabitants",
          "definition": "Number of education facilities defined as higher education and schools.",
          "value": 4.316833233220579,
          "points": 36,
          "data_source": ["HERE Map Data"]
        },
        {
          "short_name": "Medical Services Density",
          "long_name": "Number of medical services",
          "unit": "no/1000 Inhabitants",
          "definition": "Number of medical services defined as Hospitals, Doctors ...",
          "value": 5.95425273547666,
          "points": 34,
          "data_source": ["HERE Map Data"]
        },
        {
          "short_name": "Shopping Density",
          "long_name": "Number of shopping activities",
          "unit": "no/1000 Inhabitants",
          "definition": "Number of shopping facilities defined ...",
          "value": 9.3283292855801,
          "points": 34,
          "data_source": ["HERE Map Data"]
        },
        {
          "short_name": "Leisure Density",
          "long_name": "Number of leisure activities",
          "unit": "no/1000 Inhabitants",
          "definition": "Number of leisure activities defined as park recreation, restaurants or entertainment facilities.",
          "value": 5.507683780315911,
          "points": 35,
          "data_source": ["HERE Map Data"]
        }
      ]
    },
    "accessibility": {
      "short_name": "Accessibility",
      "description": "...",
      "value": 7.986111111111112,
      "rank": 8,
      "keyFigures": [
        {
          "short_name": "Bike Accessibility",
          "long_name": "Number of accessible urban functions by bike",
          "unit": "no/1000 Inhabitants",
          "definition": "Number of Businesses defined as the biggest regional employer",
          "value": 273.279315701238,
          "points": 30,
          "data_source": ["HERE Map Data"]
        },
        {
          "short_name": "Public Transport Accessibility",
          "long_name": "Number of accessible urban functions by public transport",
          "unit": "no/1000 Inhabitants",
          "definition": "Number of education facilities defined as higher education and schools.",
          "value": 53.594593951681375,
          "points": 28,
          "data_source": ["HERE Map Data"]
        },
        {
          "short_name": "Walk Accessibility",
          "long_name": "Number of accessible urban functions by walk",
          "unit": "no/1000 Inhabitants",
          "definition": "Number of medical services defined as Hospitals, Doctors ...",
          "value": 35.38932439637547,
          "points": 28,
          "data_source": ["HERE Map Data"]
        },
        {
          "short_name": "Car Accessibility",
          "long_name": "Number of accessible urban functions by car",
          "unit": "no/1000 Inhabitants",
          "definition": "Number of shopping facilities defined ...",
          "value": 387.1476440470106,
          "points": 29,
          "data_source": ["HERE Map Data"]
        }
      ]
    },
    "behavior": {
      "short_name": "Behavior",
      "description": "...",
      "value": 1.6342465519180154,
      "rank": 34,
      "keyFigures": [
        {
          "short_name": "Modal Share Public Transport",
          "long_name": "Number of accessible urban functions by bike",
          "unit": "no/1000 Inhabitants",
          "definition": "Number of Businesses defined as the biggest regional employer",
          "value": 1.8808016741777553,
          "points": 4,
          "data_source": ["HERE Map Data"]
        },
        {
          "short_name": "Modal Share Bike",
          "long_name": "Number of accessible urban functions by public transport",
          "unit": "no/1000 Inhabitants",
          "definition": "Number of education facilities defined as higher education and schools.",
          "value": 2.3665396694045957,
          "points": 8,
          "data_source": ["HERE Map Data"]
        },
        {
          "short_name": "Modal Share Walk",
          "long_name": "Number of accessible urban functions by walk",
          "unit": "no/1000 Inhabitants",
          "definition": "Number of medical services defined as Hospitals, Doctors ...",
          "value": 8.110595610779153,
          "points": 28,
          "data_source": ["HERE Map Data"]
        },
        {
          "short_name": "Registered E-Cars",
          "long_name": "Number of accessible urban functions by car",
          "unit": "no/1000 Inhabitants",
          "definition": "Number of shopping facilities defined ...",
          "value": 8.65176404946577,
          "points": 32,
          "data_source": ["HERE Map Data"]
        },
        {
          "short_name": "Registered Cars",
          "long_name": "Number of accessible urban functions by car",
          "unit": "no/1000 Inhabitants",
          "definition": "Number of shopping facilities defined ...",
          "value": 7.880004871641809,
          "points": 6,
          "data_source": ["HERE Map Data"]
        }
      ]
    }
  }
}

const SamplePage: React.FC = () => {
  return (
    <Box>
      <Header cityName={sampleCity.city}></Header>
      {/* <AnimationBanner cityId={102}></AnimationBanner> */}
      {/* <CityTab></CityTab> */}
      <Box sx={{width: '400px', p: 3}}>
        <h2>Walkability</h2>
        <StackedBar indicator={sampleCity.indicators.walkability} shadow={true} rounded={true}/>
      </Box>

      <Box sx={{width: '400px', p: 3}}>
        <h2>Public Transport</h2>
        <StackedBar indicator={sampleCity.indicators.public_transport} shadow={false} rounded={false} height={1.2}/>
      </Box>

      <Box sx={{width: '400px', p: 3}}>
        <h2>Emissions</h2>
        <StackedBar indicator={sampleCity.indicators.emissions} shadow={true} rounded={false} background="white"/>
      </Box>

      <Box sx={{width: '400px', p: 3}}>
        <h2>Animation speed</h2>
        <StackedBar indicator={sampleCity.indicators.car_integration} shadow={false} rounded={false} background="white" height={0.8} animation="3s"/>
        <StackedBar indicator={sampleCity.indicators.car_integration} shadow={false} rounded={false} background="white" height={0.8} animation="2.5s"/>
        <StackedBar indicator={sampleCity.indicators.car_integration} shadow={false} rounded={false} background="white" height={0.8} animation="2s"/>
        <StackedBar indicator={sampleCity.indicators.car_integration} shadow={false} rounded={false} background="white" height={0.8} animation="1.5s"/>
        <StackedBar indicator={sampleCity.indicators.car_integration} shadow={false} rounded={false} background="white" height={0.8} animation="1.s"/>
        <StackedBar indicator={sampleCity.indicators.car_integration} shadow={false} rounded={false} background="white" height={0.8} animation="0.6s"/>
      </Box>
    </Box>

    
    
  );
};

export default SamplePage;
