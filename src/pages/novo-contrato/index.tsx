//REACT
import { useEffect, useRef } from 'react'
//NEXTJS
import { useRouter } from 'next/router'
//REACT-REDUX
import { useSelector, useDispatch } from "react-redux";
//STORE => TYPE ROOT STATE
import { RootState } from '../../../store/reducers'
//Import Custom Styles
import { SectionDiv } from './styles'
import { useStyles } from './styles'
import {
  resetNovoContrato,
} from '../../../store/novoContrato/actions'
//LOADABLE/COMPONENT
import loadable from '@loadable/component'
const CustomDivider = loadable(() => import('../../components/CustomDivider'))
const H1 = loadable(() => import('../../components/StyledComponents/StyledH1'))
const H2 = loadable(() => import('../../components/StyledComponents/StyledH2'))
const Head = loadable(() => import('next/head'))
const TabelaVendedores = loadable(() => import('./components/TabelaVendedores'))
const NovoVendedorPF = loadable(() => import('./components/ModalNovoVendedorPF/modalNovoVendedorPF'))
const Button = loadable(() => import('@material-ui/core/Button'))
const ProgressBar = loadable(() => import('./components/ProgressBar/'))
const StyledContentSidebar = loadable(() => import('../../components/StyledComponents/StyledContentSidebar'))
const DadosGerais = loadable(() => import('./components/DadosGerais'))
const DadosInternos = loadable(() => import('./components/DadosInternos'))
const Sidebar = loadable(() => import('./components/Sidebar'))

const NovoContrato = (): JSX.Element => {

  const { userIsLoggedIn } = useSelector((state: RootState) => state.user)

  useEffect(() => {
    !userIsLoggedIn ? router.push("/login") : null;
  }, [userIsLoggedIn])

  const refDadosGerais = useRef()
  const refDadosInternos = useRef()

  const router = useRouter()
  const classes = useStyles()
  const dispatch = useDispatch()

  function handleResetNovoContrato(): void {
    dispatch(resetNovoContrato())
  }

  return (
    <>
      <Head>
        <title>Novo contrato</title>
      </Head>

      <H1>Novo contrato</H1>

      <ProgressBar />

      <StyledContentSidebar >

        <form className={classes.form} noValidate autoComplete='off'>

          <DadosGerais refDadosGerais={refDadosGerais} />
          <CustomDivider  />
          <DadosInternos refDadosInternos={refDadosInternos} />

        </form>

        <SectionDiv style={{ marginTop: 10 }}>
          <NovoVendedorPF />
          <TabelaVendedores />
        </SectionDiv>   

        <Button
          variant="contained"
          onClick={handleResetNovoContrato}
          size="large"
          color="secondary"
          style={{ width: '200px', placeSelf: 'center' }}
        >
          RESETAR CONTRATO
        </Button>

      </StyledContentSidebar>

      <Sidebar
        refDadosGerais={refDadosGerais}
      />

    </>
  )
}
export default NovoContrato;