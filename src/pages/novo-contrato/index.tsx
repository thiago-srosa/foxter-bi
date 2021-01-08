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
  setNovoContratoValorTotalVenda,
  setNovoContratoValorLiquidoVenda,
  setNovoContratoValorCorretagemVenda,
  setNovoContratoPercentualCorretagemVenda,
  resetNovoContrato,
} from '../../../store/novoContrato/actions'
//LOADABLE/COMPONENT
import loadable from '@loadable/component'
const Divider = loadable(() => import('@material-ui/core/Divider'))
const OutlinedInput = loadable(() => import('@material-ui/core/OutlinedInput'))
const InputAdornment = loadable(() => import('@material-ui/core/InputAdornment'))
const StyledDivWrapper = loadable(() => import('./components/StyledComponents/StyledDivWrapper'))
const H1 = loadable(() => import('../../components/StyledComponents/StyledH1'))
const H2 = loadable(() => import('../../components/StyledComponents/StyledH2'))
const H3 = loadable(() => import('../../components/StyledComponents/StyledH3'))
const Head = loadable(() => import('next/head'))
const TabelaVendedores = loadable(() => import('./components/TabelaVendedores'))
const NovoVendedorPF = loadable(() => import('./components/ModalNovoVendedorPF/modalNovoVendedorPF'))
const NumberFormatCustom = loadable(() => import('../../components/NumberFormatCustom'))
const CustomRadioButtosGroup = loadable(() => import('../novo-contrato/components/CustomRadioButtosGroup'))
const Button = loadable(() => import('@material-ui/core/Button'))
const ProgressBar = loadable(() => import('./components/ProgressBar/'))
const StyledContentSidebar = loadable(() => import('../../components/StyledComponents/StyledContentSidebar'))
const Sidebar = loadable(() => import('./components/Sidebar'))

//CONSTANTES
import { novoContratoRadioOptions } from '../../constants'

const NovoContrato = (): JSX.Element => {

  const refDadosGerais = useRef()


  const { userIsLoggedIn } = useSelector((state: RootState) => state.user)
  const {
    novoContratoRadioButtonCalculaValorNegociacao,
    novoContratoValorTotalVenda,
    novoContratoValorLiquidoVenda,
    novoContratoValorCorretagemVenda,
    novoContratoPercentualCorretagemVenda,
  } = useSelector((state: RootState) => state.novoContrato)

  const router = useRouter()
  const classes = useStyles()
  const dispatch = useDispatch()

  useEffect(() => {
    !userIsLoggedIn ? router.push("/login") : null;
  }, [userIsLoggedIn])

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
          <StyledDivWrapper>
            <H2 ref={refDadosGerais}>Dados gerais</H2>
            <H3>Valor total da venda</H3>
            <OutlinedInput
              className={classes.outlinedInputSmall}
              id='ValorTotal'
              startAdornment={<InputAdornment position="start">R$</InputAdornment>}
              required
              value={novoContratoValorTotalVenda ? novoContratoValorTotalVenda : ''}
              autoComplete='off'
              onChange={e => {
                dispatch(setNovoContratoValorTotalVenda(parseInt(e.target.value)))

                switch (novoContratoRadioButtonCalculaValorNegociacao) {
                  //RADIO BUTTON= valor-liquido
                  case novoContratoRadioOptions.value1:
                    dispatch(setNovoContratoValorCorretagemVenda(parseInt(e.target.value) - novoContratoValorLiquidoVenda))
                    dispatch(setNovoContratoPercentualCorretagemVenda((parseInt(e.target.value) - novoContratoValorLiquidoVenda) / parseInt(e.target.value) * 100))
                    break;
                  //RADIO BUTTON = valor corretagem
                  case novoContratoRadioOptions.value2:
                    dispatch(setNovoContratoValorLiquidoVenda(parseInt(e.target.value) - novoContratoValorCorretagemVenda))
                    dispatch(setNovoContratoPercentualCorretagemVenda(novoContratoValorCorretagemVenda / parseInt(e.target.value) * 100))
                    break;
                  //RADIO BUTTON = pertual corretagem
                  case novoContratoRadioOptions.value3:
                    dispatch(setNovoContratoValorCorretagemVenda(parseInt(e.target.value) * novoContratoPercentualCorretagemVenda / 100))
                    dispatch(setNovoContratoValorLiquidoVenda(parseInt(e.target.value) - parseInt(e.target.value) * novoContratoPercentualCorretagemVenda / 100))
                    break;
                  default:
                    null
                }
              }}
              inputComponent={NumberFormatCustom as any}
            />
          </StyledDivWrapper>


          <StyledDivWrapper>
            <CustomRadioButtosGroup />
          </StyledDivWrapper>

        </form>

        <SectionDiv style={{ marginTop: 10 }}>
          <NovoVendedorPF />
          <TabelaVendedores />
        </SectionDiv>

        <Divider style={{ margin: '15px 0px 15px 0px' }} />
        <H2>Dados internos</H2>

        <Divider style={{ margin: '15px 0px 15px 0px' }} />

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