import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { reducer } from "./reducers";

/**
 * Build a Thunk-aware middleware composer for Redux
 * This uses either the default Redux composer or the redux-devtools composer,
 * if the extension is present on the window object
 *
 * You need to install the Chrome extension Redux-devtools to make use of this
 */
const composeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

/**
 * Build the Redux store
 * Compose the middleware into the store, which is Redux-Thunk for async actions
 * and the Redux devtools, if present on the browser
 */
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

export default store;
