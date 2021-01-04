//Import NextJS
import Head from 'next/head'

//Import Firebase Hooks
import { useAuthState } from 'react-firebase-hooks/auth'

//Import Custom Components
import TabelaVendedores from '../../components/novo-contrato/TabelaVendedores';
import NovoVendedorPF from '../../components/novo-contrato/ModalNovoVendedorPF/modalNovoVendedorPF';
import DadosGerais from '../../components/novo-contrato/DadosGerais'

//Import Firebase
import 'firebase/auth';
import 'firebase/firestore';
import firebase from 'firebase/app';

//Import Custom Styles
import { SectionDiv } from '../../src/pages/novo-contrato/pageStyles'

const solicitarContrato: React.ElementType = () => {

  const { user } = useAuthState(firebase.auth());

  var content = null;

  if (user !== null) {
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