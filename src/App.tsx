import React from 'react';
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

function App() {
  return (
    <FirestoreProvider {...config} firebase={firebase}>
      <PageHeader title="Hello From Kinamo" />
      <h3>there is no content so far</h3>
    </FirestoreProvider>
  );
}

export default App;
