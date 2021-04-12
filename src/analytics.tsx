import firebase from 'firebase/app';
import config from './firebase-config';
import 'firebase/analytics';        // this is needed only once as it loades the analytics module

/**
 * Initialize Google Analytics
 * Call this function once in the application to enable analytics
 */
export const init = () => {
    firebase.initializeApp(config);
    firebase.app().analytics();
}

/**
 * Log a page_view event to GA.
 * @param pageName string - human readable name of the page
 * @param extra object - any extra information passed to GA
 */
export const pageview = (pageName: string, extra: {[key: string]: string}= {}) => {
    firebase.analytics().logEvent('page_view', {
        'page_title': pageName,
        ...extra
    });
};
