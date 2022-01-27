import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// Load Redux and inject the Provider at higher level than App
// in order to make App load the data, as there is no authentication
// that has to take place first
import { Provider } from "react-redux";
import store from "./store/store";

// initialize Firebase Analytics
// import * as analytics from "./analytics";
// analytics.init();

// initialize the firebase app
import firebase from "firebase/app";
import config from "./firebase-config";
firebase.initializeApp(config);


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
