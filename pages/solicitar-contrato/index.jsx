import { useState } from 'react';
import { Auth } from '../../components/Auth'

import firebase from 'firebase/app';
import 'firebase/auth';

import Head from 'next/head'

const solicitarContrato = () => {
  Auth();

  var content = null;

  const [inputNomeComprador, setInputNomeComprador] = useState("");
  const [inputCPFComprador, setInputCPFComprador] = useState("");

  const [compradores, setCompradores] = useState([]);

  if (firebase.auth().currentUser !== null) {
    content = (
      <>
      <Head>
        <title>My page title</title>        
      </Head>
        <input value={inputNomeComprador} onChange={e => setInputNomeComprador(e.target.value)} type="text" />
        <input value={inputCPFComprador} onChange={e => setInputCPFComprador(e.target.value)} type="text" />

        <button onClick={() => clickaction(inputNomeComprador, inputCPFComprador)} >CLICK MEx</button>

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