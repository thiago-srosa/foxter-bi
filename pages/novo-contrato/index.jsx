import { useStyles } from './styles'
import TextField from '@material-ui/core/TextField';

import { useState } from 'react';
import { Auth } from '../../components/Auth';

import SimpleModal from './modalNovoClienteCPF';

import 'firebase/auth';
import firebase from 'firebase/app';
import 'firebase/firestore';

import Head from 'next/head'

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