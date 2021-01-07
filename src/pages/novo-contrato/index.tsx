//REACT
import { useEffect } from 'react'
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
} from '../../../store/novoContrato/actions'

//LOADABLE/COMPONENT
import loadable from '@loadable/component'
const Divider = loadable(() => import('@material-ui/core/Divider'))
const OutlinedInput = loadable(() => import('@material-ui/core/OutlinedInput'))
const InputAdornment = loadable(() => import('@material-ui/core/InputAdornment'))
const StyledDivWrapper = loadable(() => import('./components/StyledComponents/StyledDivWrapper'))
const H2 = loadable(() => import('../../components/StyledComponents/StyledH2'))
const Head = loadable(() => import('next/head'))
const TabelaVendedores = loadable(() => import('./components/TabelaVendedores'))
const NovoVendedorPF = loadable(() => import('./components/ModalNovoVendedorPF/modalNovoVendedorPF'))
const NumberFormatCustom = loadable(() => import('../../components/NumberFormatCustom'))
const CustomRadioButtosGroup = loadable(() => import('../novo-contrato/components/CustomRadioButtosGroup'))

const NovoContrato = (): JSX.Element => {

  const { userIsLoggedIn } = useSelector((state: RootState) => state.user)
  const {
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

  return (
    <>
      <SectionDiv >        
        <form className={classes.form} noValidate autoComplete='off'>
          <StyledDivWrapper>
            <H2>Valor total da venda</H2>
            <OutlinedInput
              className={classes.outlinedInputSmall}
              id='ValorTotal'
              startAdornment={<InputAdornment position="start">R$</InputAdornment>}
              required              
              value={novoContratoValorTotalVenda ? novoContratoValorTotalVenda : ''}
              autoComplete='off'
              onChange={e => {
                dispatch(setNovoContratoValorTotalVenda(parseInt(e.target.value)))
                dispatch(setNovoContratoValorLiquidoVenda(null))
                dispatch(setNovoContratoValorCorretagemVenda(null))
                dispatch(setNovoContratoPercentualCorretagemVenda(null))
              }}
              inputComponent={NumberFormatCustom as any}
            />
          </StyledDivWrapper>

          <StyledDivWrapper>            
            <CustomRadioButtosGroup />
          </StyledDivWrapper>

        </form>

        <Divider style={{ margin: '15px 8px 15px 8px' }} />
      </SectionDiv>

      <SectionDiv style={{ marginTop: 10 }}>
        <NovoVendedorPF />
        <TabelaVendedores />
      </SectionDiv>
    </>
  )
}
export default NovoContrato;