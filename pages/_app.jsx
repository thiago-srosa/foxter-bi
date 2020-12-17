import React from 'react'
import { storeWrapper } from "../store";

import CustomDrawer from '../components/Drawer/index'

import firebase from 'firebase/app';
import 'firebase/auth';

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: "AIzaSyBAPFmFw6QdZkSDlApluWgnEkYtTsHJjSY",
    authDomain: "foxter-bi-e59ee.firebaseapp.com",
    projectId: "foxter-bi-e59ee",
    storageBucket: "foxter-bi-e59ee.appspot.com",
    messagingSenderId: "202407320050",
    appId: "1:202407320050:web:592fcd912382725c46736b",
    measurementId: "G-BHMKVX63H0"
  })
} else {
  firebase.app(); // if already initialized, use that one
}

function MyApp({ Component, pageProps }) {

  return (   
      <CustomDrawer>
        <Component {...pageProps} />
      </CustomDrawer>    
  )
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default storeWrapper.withRedux(MyApp);