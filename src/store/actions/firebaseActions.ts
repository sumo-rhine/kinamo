import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { AppState } from "../../models/AppState";
import firebase from "firebase/app";

import * as actions from "./actionTypes";
import { FullDataset } from "../../models/FullDataset";
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
export const loadData = () => (
  dispatch: ThunkDispatch<AppState, {}, AnyAction>
) => {
  // reach out to firebase and load /public/data
  firebase
    .app()
    .firestore()
    .doc("/public/data")
    .get()
    .then((doc) => {
      if (!doc.exists) {
        console.log("The data can't be found in firestore.");
      } else {
        // fetch the document data
        const data = doc.data() as FullDataset;

        // dispatch the synchronous action
        dispatch(syncData(data));
        dispatch(syncLoadingFinished());
      }
    })
    .catch((error) => console.log(`Cant reach firebase: ${error}`));
};
