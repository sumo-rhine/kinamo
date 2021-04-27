/**
 * Common Indicator interface.
 * Do not use directly
 */
export interface Indicator {
    value: number;
    name: string;
    description: string;
    unit: '%' | 'km / km^2' | 'no / km^2'
}

/**
 * SubIndicator
 * technically the same as Indicator.
 * This is the exported member to tell SubIndicators
 * and MainIndicators apart
 */
export type SubIndicator = Indicator;

/**
 * Pedestiran indices
 */
export interface PedestrianIndicator extends Indicator {
    subIndicators: {
        speedLimit: SubIndicator;
        streetsDensity: SubIndicator;
        traffic: SubIndicator;
        shareGreen: SubIndicator;
        carFreeArea: SubIndicator;
        facilities: SubIndicator;
    }
}

export interface MainIndicators {
    pedestrian: PedestrianIndicator
}

/**
 * This can be used as a placeholder whenever any kind of indicator is
 * needed, at any level of nesting. 
 */
export type AnyIndicator = SubIndicator | PedestrianIndicator;

/**
 * City
 * A city represents a full set of indicators. 
 * Cities are guaranteed to look always the same
 */
export interface City {
    // general city info
    id: number;
    name: string;
    description: string;
    population: number;
    size: number;
    indicators: MainIndicators;
}

/**
 * Data interface
 * @todo implement this
 */
export interface FullDataset {
    cities: City[];
    lastUpdate: {seconds: number, nanoseconds: number};
    md5sum: string;
}
