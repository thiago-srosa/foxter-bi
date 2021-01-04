import React from 'react'
//import Google-Button
import GoogleButton from 'react-google-button'
//import React
import { useEffect } from 'react';
//import  NextJs
import { useRouter } from 'next/router'
//import Firebase
import 'firebase/auth';
import firebase from 'firebase/app';
//Import Firebase Hooks
import { useAuthState } from 'react-firebase-hooks/auth'
//Import Styles + Custom Components
import { StyledGoogleLoginContainer } from '../../src/pages/login/styles'

function login() {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider);
}

const LoginPage = () => {

  const router = useRouter();
  const { user } = useAuthState(firebase.auth());

  useEffect(() => {
    user ? router.push("/") : true;
  }, [user])

  return (
    <>
      <StyledGoogleLoginContainer>
        <img src="https://i.ibb.co/NxK6nzL/Logo-3.png" alt="Setores-Foxter-PADRA-O" style={{ width: '240px' }} />
        <div style={{ height: 150 }} />
        <GoogleButton
          onClick={login}
          type='light'
          label='Clique para logar'
        />
      </StyledGoogleLoginContainer>
    </>
  )
}

export default LoginPage;