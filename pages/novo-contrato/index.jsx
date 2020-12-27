//Import Custom Components
import TabelaVendedores from '../../components/novo-contrato/TabelaVendedores';
import NovoVendedorPF from '../../components/novo-contrato/ModalNovoVendedorPF/modalNovoVendedorPF';

import 'firebase/auth';
import 'firebase/firestore';
import firebase from 'firebase/app';

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

  var content = null;

  if (firebase.auth().currentUser !== null) {
    content = (
      <>
        <Head>
          <title>Novo contrato</title>
        </Head>

        <NovoVendedorPF />

        <TabelaVendedores />

      </>
    )
  }



  return (
    <>
      {content}
    </>
  )
}

export default solicitarContrato;