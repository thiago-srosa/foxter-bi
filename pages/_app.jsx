//import React
import { useEffect } from 'react'

//import  NextJs
import { useRouter } from 'next/router'

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
  const { user } = useAuthState(firebase.auth());
  const router = useRouter();

  console.log(router.pathname)

  useEffect(() => {
    user == null ? router.push("/login") : true;
  }, [router.pathname, user])

  return (
    <CustomDrawer>
      <Component {...pageProps} />
    </CustomDrawer>
  )
}

export default storeWrapper.withRedux(MyApp)
