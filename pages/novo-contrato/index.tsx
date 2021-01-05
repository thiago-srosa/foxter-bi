//NEXTJS
import Head from 'next/head'
//CUSTOM COMPONENTS
import TabelaVendedores from '../../src/pages/novo-contrato/components/TabelaVendedores';
import NovoVendedorPF from '../../src/pages/novo-contrato/components/ModalNovoVendedorPF/modalNovoVendedorPF';
import DadosGerais from '../../src/pages/novo-contrato/'

//REACT-REDUX
import { useSelector } from "react-redux";
//STORE => TYPE ROOT STATE
import { RootState } from '../../store/reducers'

//Import Custom Styles
import { SectionDiv } from '../../src/pages/novo-contrato/styles'

const SolicitarContrato: React.ElementType = () => {

  const { userIsLoggedIn } = useSelector((state: RootState) => state.user);

  const Content = (): React.ReactElement => {
    if (userIsLoggedIn) {
      return (
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
        </>
      )
    }
    return null
  }

  return (
    <>
      <Content />
    </>
  )
}

export default SolicitarContrato;