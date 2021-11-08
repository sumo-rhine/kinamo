import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { AppState } from "../../models/AppState";
import firebase from "firebase/app";

import * as actions from "./actionTypes";
import { FullDataset, City } from "../../models/FullDataset";
import { syncLoadingFinished } from "./appAction";

/* --------------------------------------------------------------------
 * Redux is synchronous only. Thus, for any asynchornous action
 * we need a synchornous action, that is finally called by the
 * asyncchronous thunk action.
 *
 * These are the SYNC actions, that directly interact with redux
 * -------------------------------------------------------------------*/

/**
 * Synchronize the newly loaded data from the thunk to the redux store.
 * Do not call this function directly. This is called by loadData!
 * @param data - Data from Firebase
 * @returns AnyAction
 */
const syncData = (data: FullDataset): AnyAction => {
  return {
    type: actions.SYNC_DATA,
    data: data,
  };
};

/* --------------------------------------------------------------------
 * These are the Asynchronous actions that handle side effects.
 * This will mainly be interaction with firebase
 * -------------------------------------------------------------------*/

/**
 * Asynchronously load data from firestore. The whole /public/data
 * document is loaded.
 */
export const loadData =
  () => (dispatch: ThunkDispatch<AppState, {}, AnyAction>) => {
    // reach out and convert data into old data model
    firebase.app().firestore().collection("/cities").get().then(response => {
      // get the docs, ignore metadata
      const { docs } = response;

      // map into the document data
      const cities: City[] = docs.map(doc => doc.data() as City);

      // dispatch data
      dispatch(syncData({cities: cities}));
      dispatch(syncLoadingFinished());
      });
  };
