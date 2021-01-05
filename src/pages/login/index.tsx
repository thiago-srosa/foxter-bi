//REACT
import React, { useEffect } from 'react'
//NEXTJS
import { useRouter } from 'next/router'
//REACT-REDUX
import { useSelector, useDispatch } from "react-redux";
//GOOGLE BUTTON
import GoogleButton from 'react-google-button'
//FIREBASE
import 'firebase/auth';
import firebase from 'firebase/app';

//Import Type Root State
import { RootState } from '../../../store/reducers'

//LOADABLE/COMPONENT
import loadable from '@loadable/component'

const StyledDivGoogleLoginWrapper = loadable(() => import('./components/StyledDivGoogleLoginWrapper'))

//Import User Actions
import {
  setUserIsLoggedIn,
  setUserDisplayName,
  setUserEmail,
  setUserPhotoUrl
} from "../../../store/user/actions"

const LoginPage = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const userIsLoggedIn = useSelector((state: RootState) => state.user.userIsLoggedIn);

  function login() {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then(() => {
      dispatch(setUserDisplayName(firebase.auth().currentUser.displayName))
      dispatch(setUserEmail(firebase.auth().currentUser.email))
      dispatch(setUserPhotoUrl(firebase.auth().currentUser.photoURL))
      dispatch(setUserIsLoggedIn(true))
    })
  }

  useEffect(() => {
    userIsLoggedIn ? router.push("/") : true;
  }, [userIsLoggedIn])

  return (
    <>
      <StyledDivGoogleLoginWrapper>
        <img src="https://i.ibb.co/NxK6nzL/Logo-3.png" alt="Setores-Foxter-PADRA-O" style={{ width: '240px' }} />
        <div style={{ height: 150 }} />
        <GoogleButton
          onClick={login}
          type='light'
          label='Clique para logar'
        />
      </StyledDivGoogleLoginWrapper>
    </>
  )
}

export default LoginPage