import React, { useEffect } from 'react';
import { Dispatch } from 'redux';
import { loadData } from './store/actions';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// load the different Pages for routing
import Permalink from './layouts/Permalink';
import Page from './layouts/Page';

// This is mandatory because App.css loads the ant-design css globally
import './App.css';

// ------------------------------------------------------------
//            Firebase setup
// ------------------------------------------------------------
// this is the config, to make the SDK find the correct backend
import config from './firebase-config';

// Context provider to access the SDK
import { FirestoreProvider } from '@react-firebase/firestore';

// load the firebase SDK itself at App level
import firebase from 'firebase/app';
import 'firebase/firestore';        // this is needed once, so that firebase.app().firestore() is not null anymore

// interface of the props the App receives
interface AppProps {
  loadData: () => void;
}

// The main App itself
const App: React.FC<AppProps> = props =>  {
  // useEffect can be used to cause sideEffects
  // we run the function whenever the props change, which does not happen as the dispather does not change
  // but it is important NOT to add other props to App, as these will cause another loading cycle.
  useEffect(() => props.loadData(), [props]);

  return (
    <FirestoreProvider {...config} firebase={firebase}>
      <BrowserRouter>
        {/* The Switch is important as otherwise the permalink would always load BOTH Routes */}
        <Switch>
          {/* /permalink/* is all redirected to the Permalink component */}
          <Route path="/permalink" render={() => <Permalink />} />
          
          {/* Here we could instread redirect anything to /app, which loads the Page. 
              This would enable us in the future to have two layout like: /app and /mobile 
            */}
          <Route path="/" render={() => <Page />}  />
        </Switch>
      </BrowserRouter>
    </FirestoreProvider>
  );
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    loadData: () => dispatch(loadData() as any)
  }
}

export default connect(null, mapDispatchToProps)(App);
