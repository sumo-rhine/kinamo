import { FullDataset } from "./FullDataset";

/**
 * With Redux, the WHOLE application-wide state will be stored
 * in one single 'store'. This is the interface of that object.
 * This interface declares the data, settings and whatsoever 
 * to the whole application.
 * Anthing statefull goes into this interface
 */
export interface AppState {
    data: FullDataset;
}