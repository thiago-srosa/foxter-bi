//import React
import { useEffect } from 'react'

import { register, unregister } from 'next-offline/runtime'

//import  NextJs
import { useRouter } from 'next/router'
import Head from 'next/head'

//Import Redux State
import { storeWrapper } from "../store"

//Import Firebase Hooks
import { useAuthState } from 'react-firebase-hooks/auth'

//import Firebase
import firebase from 'firebase/app'
import 'firebase/auth'

//import Custom Components
import CustomDrawer from '../components/Drawer/index'

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

  useEffect(() => {
    if ("serviceWorker" in navigator) {
      window.addEventListener("load", function () {
        navigator.serviceWorker.register("/sw.js").then(
          function (registration) {
            console.log("Service Worker registration successful with scope: ", registration.scope);
          },
          function (err) {
            console.log("Service Worker registration failed: ", err);
          }
        );
      });
    }
  }, [])

  const { user } = useAuthState(firebase.auth());
  const router = useRouter();

  console.log(router.pathname)

  useEffect(() => {
    user == null ? router.push("/login") : true;
  }, [router.pathname, user])

  return (
    <>
      <Head>
        <meta name='application-name' content='PWA App' />
        <meta name='apple-mobile-web-app-capable' content='yes' />
        <meta name='apple-mobile-web-app-status-bar-style' content='default' />
        <meta name='apple-mobile-web-app-title' content='PWA App' />
        <meta name='description' content='Best PWA App in the world' />
        <meta name='format-detection' content='telephone=no' />
        <meta name='mobile-web-app-capable' content='yes' />
        <meta name='msapplication-config' content='/icons/browserconfig.xml' />
        <meta name='msapplication-TileColor' content='#2B5797' />
        <meta name='msapplication-tap-highlight' content='no' />
        <meta name='theme-color' content='#000000' />
        <meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover' />
        <meta name='twitter:card' content='summary' />
        <meta name='twitter:url' content='https://yourdomain.com' />
        <meta name='twitter:title' content='PWA App' />
        <meta name='twitter:description' content='Best PWA App in the world' />
        <meta name='twitter:image' content='https://yourdomain.com/static/icons/android-chrome-192x192.png' />
        <meta name='twitter:creator' content='@DavidWShadow' />
        <meta property='og:type' content='website' />
        <meta property='og:title' content='PWA App' />
        <meta property='og:description' content='Best PWA App in the world' />
        <meta property='og:site_name' content='PWA App' />
        <meta property='og:url' content='https://yourdomain.com' />
        <meta property='og:image' content='https://yourdomain.com/static/icons/apple-touch-icon.png' />
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;300;400;600;700&display=swap" />
      </Head>
      <CustomDrawer>
        <Component {...pageProps} />
      </CustomDrawer>
    </>
  )
}

export default storeWrapper.withRedux(MyApp)
