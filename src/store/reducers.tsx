import { Reducer } from "redux";
import { AppState } from "../models/AppState";
import * as actions from './actions/actionTypes';

/**
 * This is the initial state of the application, before
 * anything has ever happened to it.
 */
const initialState: AppState = {
    data: {cities: []},
    loading: true
};


// Main Redux Reducer
export const reducer: Reducer = (state: AppState= initialState, action) => {
    // switch the requested action
    switch (action.type) {
        case actions.SYNC_DATA:
            
            // TODO: HERE is the place, where we would split the data into more atomic entries
            return {
                ...state,
                data: JSON.parse(JSON.stringify(action.data))
            }
        case actions.SYNC_LOADING_FINISHED:
            return {
                ...state,
                loading: false
            }
    }
    // return the new state
    return state;
}