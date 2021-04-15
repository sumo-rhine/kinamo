import { AnyAction } from "redux";
import * as actions from './actionTypes';


/**
 * Inform the application, that the data from firebase has been loaded.
 * Some components might want to show a spinner or something.
 * @returns AnyAction
 */
export const syncLoadingFinished = (): AnyAction => {
    return {
        type: actions.SYNC_LOADING_FINISHED
    };
}