import firebase from "firebase/app";
//import config from "./firebase-config";
import "firebase/analytics"; // this is needed only once as it loades the analytics module

(window as any).ga_consent = false;

/**
 * Initialize Google Analytics
 * Call this function once in the application to enable analytics
 */
export const init = () => {
  //firebase.initializeApp(config);
  firebase.app().analytics();
  (window as any).ga_consent = true;
};

/**
 * Log event
 * @param pageName 
 * @param extra 
 */
export const event = (event_name: string, extra: { [key: string]: any } = {}) => {
  if ((window as any).ga_consent) {
    firebase.app().analytics().logEvent(event_name, extra);
  }
}

/**
 * Log a page_view event to GA.
 * @param pageName string - human readable name of the page
 * @param extra object - any extra information passed to GA
 */
export const pageview = (
  pageName: string,
  extra: { [key: string]: string } = {}
) => {
  if ((window as any).ga_consent) {
    firebase.analytics().logEvent("page_view", {
      page_title: pageName,
      ...extra,
    });
  } else {
    console.log('pageview event blocked.')
  }
};
