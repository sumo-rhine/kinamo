export interface City {
    name: string;
    indicator: number;  
}

/**
 * Data interface
 * @todo implement this
 */
export interface FullDataset {
    cities: City[];                 // TODO I need more here. This is a really important part
    [key: string]: any;             // TODO: BAD IDEA! This needs to be replaced with the actual data model 
}