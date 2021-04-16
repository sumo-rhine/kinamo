/**
 * Common Indicator interface.
 * Do not use directly
 */
interface Indicator {
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
 * HERE WE HAVE TWO POSSIBILITIES TO IMPLEMENT THE INTERFACE
 */

/**
 * SOLUTION ONE: 
 * subIndicators are actually an array: way more flexible, 
 * very easy interface, more implementation work
 */
export interface MainIndicator extends Indicator {
    subIndicators: SubIndicator[];
}

/**
 * The other possibility:
 * 
 * not flexible at all, we can never change anythin, complex
 * interface, very easy implementation work
 */
export interface PedestrianIndicator extends Indicator {
    speedLimit: SubIndicator;
    streetDensity: SubIndicator;
    traffic: SubIndicator;
}

/**
 * City
 * A city represents a full set of indicators. 
 * Cities are guaranteed to look always the same
 */
export interface City {
    id: number;
    name: string;
    description: string;
    population: number;
    size: number;
    // HERE WE HAVE BASICALLY THE SAME OPTIONS TO INCLUDE THE MAIN INDICATORS
}

/**
 * Data interface
 * @todo implement this
 */
export interface FullDataset {
    cities: City[];                 // TODO I need more here. This is a really important part
    [key: string]: any;             // TODO: BAD IDEA! This needs to be replaced with the actual data model 
}