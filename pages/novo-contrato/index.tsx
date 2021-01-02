//Import NextJS
import Head from 'next/head'

//Import Custom Components
import TabelaVendedores from '../../components/novo-contrato/TabelaVendedores';
import NovoVendedorPF from '../../components/novo-contrato/ModalNovoVendedorPF/modalNovoVendedorPF';
import DadosGerais from '../../components/novo-contrato/DadosGerais'

//Import Firebase
import 'firebase/auth';
import 'firebase/firestore';
import firebase from 'firebase/app';

//Import Custom Styles
import { SectionDiv } from '../../components/novo-contrato/pageStyles'

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

const solicitarContrato = () => {

  var content = null;

  if (firebase.auth().currentUser !== null) {
    content = (
      <>
        <Head>
          <title>Novo contrato</title>
        </Head>

        <SectionDiv >
          <DadosGerais />
        </SectionDiv>

        <SectionDiv style={{ marginTop: 10 }}>
          <NovoVendedorPF />
          <TabelaVendedores />
        </SectionDiv>

        <SectionDiv style={{ marginTop: 10 }}>
          <NovoVendedorPF />
          <TabelaVendedores />
        </SectionDiv>
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