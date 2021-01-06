//REACT
import React, { useEffect } from 'react'
//NEXTJS
import { useRouter } from 'next/router'
//REACT-REDUX
import { useSelector, useDispatch } from "react-redux";
//FIREBASE
import 'firebase/auth';
import firebase from 'firebase/app';
//STATE TYPES
import { RootState } from '../../../store/reducers'
//Import User Actions
import {
  setUserIsLoggedIn,
  setUserDisplayName,
  setUserEmail,
  setUserPhotoUrl
} from "../../../store/user/actions"
//LOADABLE/COMPONENT
import loadable from '@loadable/component'
const StyledDivGoogleLoginWrapper = loadable(() => import('./components/StyledDivGoogleLoginWrapper'))
const GoogleButton = loadable(() => import('react-google-button'))

const LoginPage = (): JSX.Element => {

  const dispatch = useDispatch();
  const router = useRouter();
  const userIsLoggedIn = useSelector((state: RootState) => state.user.userIsLoggedIn);

  useEffect(() => {
    userIsLoggedIn ? router.push("/") : true;
  }, [userIsLoggedIn])

  function login(): void {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then(() => {
      dispatch(setUserDisplayName(firebase.auth().currentUser.displayName))
      dispatch(setUserEmail(firebase.auth().currentUser.email))
      dispatch(setUserPhotoUrl(firebase.auth().currentUser.photoURL))
      dispatch(setUserIsLoggedIn(true))
    })
  }

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