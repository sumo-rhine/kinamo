/**
 * Common Indicator interface.
 * Do not use directly
 */
export interface BaseIndicator {
  short_name: string;
  value: number;
}

/**
 * Main Indicator.
 * These interfaces describe objects, which are child members
 * of each city instance. They contain 'KeyFigures' aka. Subindicators.
 */
export interface Indicator extends BaseIndicator {
  description: string;
  rank: number;
  keyFigures: KeyFigure[];
}

/**
 * KeyFigures are 'SubIndicators'
 */
export interface KeyFigure extends BaseIndicator {
  long_name: string;
  definition: string;
  unit: "%" | "km/km^2" | "no/km^2";
  points: number;
  data_source: string[];
}

/**
 * Common interface to describe additional City properties, which are
 * not inheriting from BaseIndicators
 */
export interface CityProperty {
  value: number;
  description: string;
  unit: "Inhabitants" | "km^2" | "%";
}

/**
 * Common interface to all Indicators available to each city.
 */
export interface MainIndicators {
  walkability: Indicator;
  bikeability: Indicator;
  public_transport: Indicator;
  car_integration: Indicator;
  noise_pollution: Indicator;
  land_use: Indicator;
  traffic_safety: Indicator;
  emissions: Indicator;
  cross_border: Indicator;
  functional_diversity: Indicator;
  accessibility: Indicator;
  behavior: Indicator;
}

/**
 * City
 * A city represents a full set of indicators.
 * Cities are guaranteed to look always the same
 */
export interface City {
  // general city info
  id: number;
  city: string;
  country: string;
  population: CityProperty;
  area: CityProperty;
  urban_area: CityProperty;
  indicators: MainIndicators;
}

/**
 * Data interface
 * @todo implement this
 */
export interface FullDataset {
  cities: City[];
  lastUpdate: { seconds: number; nanoseconds: number };
  md5sum: string;
}
