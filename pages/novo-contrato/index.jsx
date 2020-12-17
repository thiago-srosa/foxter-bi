import useStyles from '../../components/test/styles'

import { useState } from 'react';
import { Auth } from '../../components/Auth';

import SimpleModal from '../../components/test/modalNovoClienteCPF';

import 'firebase/auth';
import firebase from 'firebase/app';
import 'firebase/firestore';

import Head from 'next/head'

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

const db = firebase.firestore();

const createGroceryList = () => {
  return db.collection('contratos')
    .add({
      created: firebase.firestore.FieldValue.serverTimestamp(),
      email: firebase.auth().currentUser.email,
      user: firebase.auth().currentUser.displayName,
    });
};

const solicitarContrato = () => {

  const classes = useStyles();

  Auth();

  var content = null;



  const [compradores, setCompradores] = useState([]);

  if (firebase.auth().currentUser !== null) {
    content = (
      <>
        <Head>
          <title>Novo contrato</title>
        </Head>


        <button onClick={() => clickaction(inputNomeComprador, inputCPFComprador)} >CLICK MEx</button>
        <button onClick={() => createGroceryList()} >CLICK MEx</button>
        <SimpleModal />


        { compradores.map((item, index) => (<p key={index}>Nome: {item.nomecomprador} - CPF: {item.cpfcomprador}</p>))}
      </>
    )
  }

  const clickaction = () => {
    setCompradores([
      ...compradores,
      {
        nomecomprador: inputNomeComprador,
        cpfcomprador: inputCPFComprador,
      }
    ])
  }

  return (
    <>
      {content}
    </>
  )
}

export default solicitarContrato;