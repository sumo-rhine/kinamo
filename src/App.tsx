import React, { useEffect } from 'react';
import { Dispatch } from 'redux';
import { loadData } from './store/actions';
import { connect } from 'react-redux';
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

// THIS is only development and will be removed later
// HERE the react-router is needed to load one of the layouts:
// - Page layout
// - Permalink layout
import { PageHeader } from 'antd';

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
      <PageHeader title="Hello From Kinamo" />
      <h3>there is no content so far</h3>
    </FirestoreProvider>
  );
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    loadData: () => dispatch(loadData() as any)
  }
}

export default connect(null, mapDispatchToProps)(App);
