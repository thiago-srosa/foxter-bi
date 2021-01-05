//REACT
import { useEffect } from 'react'
//NEXTJS
import Head from 'next/head'
import { useRouter } from 'next/router'
//CUSTOM COMPONENTS
import TabelaVendedores from './components/TabelaVendedores';
import NovoVendedorPF from './components/ModalNovoVendedorPF/modalNovoVendedorPF';
//REACT-REDUX
import { useSelector, useDispatch } from "react-redux";
//STORE => TYPE ROOT STATE
import { RootState } from '../../../store/reducers'
//Import Custom Styles
import { SectionDiv } from './styles'
import { useStyles } from './styles'
import H2 from './StyledH2'
import StyledDivWrapper from './StyledDivWrapper'
import StyledDivLabelTextField from './StyledDivLabelTextField'
import TextField from '@material-ui/core/TextField';
import Divider from '@material-ui/core/Divider';
import {
  setNovoContratoValorTotalVenda,
  setNovoContratoValorLiquidoVenda,
  setNovoContratoValorCorretagemVenda,
  setNovoContratoPercentualCorretagemVenda,
} from '../../../store/novoContrato/actions'
import NumberFormatCustom from 'react-number-format'

const SolicitarContrato: React.ElementType = () => {

  const { userIsLoggedIn } = useSelector((state: RootState) => state.user)
  const {
    novoContratoValorTotalVenda,
    novoContratoValorLiquidoVenda,
    novoContratoValorCorreategemVenda,
    novoContratoPercentualComissaoVenda,
  } = useSelector((state: RootState) => state.novoContrato)
  const router = useRouter()
  const classes = useStyles()
  const dispatch = useDispatch()

  useEffect(() => {
    !userIsLoggedIn ? router.push("/login") : null;
  }, [userIsLoggedIn])

  const Content = (): React.ReactElement => {
    if (userIsLoggedIn) {
      return (
        <>
          <Head>
            <title>Novo contrato</title>
          </Head>

          <SectionDiv >
            <H2>Dados gerais da venda</H2>
            <form className={classes.form} noValidate autoComplete='off'>
              <StyledDivWrapper>
                <StyledDivLabelTextField>Valor total da venda</StyledDivLabelTextField>
                <TextField
                  id='valorTotalVenda'
                  variant="outlined"
                  autoComplete='off'
                  value={novoContratoValorTotalVenda ? novoContratoValorTotalVenda : ''}
                  onChange={(event) => { dispatch(setNovoContratoValorTotalVenda(+event.target.value)) }}
                  InputProps={{
                    inputComponent: NumberFormatCustom as any,
                    inputProps: { prefix: 'R$ ' }
                  }}
                />
              </StyledDivWrapper>

              <StyledDivWrapper>
                <StyledDivLabelTextField>Valor líquido</StyledDivLabelTextField>
                <TextField
                  id='valorLiquido'
                  variant="outlined"
                  autoComplete='off'
                  value={novoContratoValorLiquidoVenda ? novoContratoValorLiquidoVenda : ''}
                  onChange={(event) => { dispatch(setNovoContratoValorLiquidoVenda(+event.target.value)) }}
                  InputProps={{
                    inputComponent: NumberFormatCustom as any,
                    inputProps: { prefix: 'R$ ' }
                  }}
                />
              </StyledDivWrapper>

              <StyledDivWrapper>
                <StyledDivLabelTextField>Corretagem (R$)</StyledDivLabelTextField>
                <TextField
                  id='valorCorretagem'
                  variant="outlined"
                  autoComplete='off'
                  value={novoContratoValorCorreategemVenda ? novoContratoValorCorreategemVenda : ''}
                  onChange={(event) => { dispatch(setNovoContratoValorCorretagemVenda(+event.target.value)) }}
                  InputProps={{
                    inputComponent: NumberFormatCustom as any,
                    inputProps: { prefix: 'R$ ' }
                  }}
                />
              </StyledDivWrapper>

              <StyledDivWrapper>
                <StyledDivLabelTextField>Corretagem (%)</StyledDivLabelTextField>
                <TextField
                  id='valorCorretagem'
                  variant="outlined"
                  autoComplete='off'
                  value={novoContratoPercentualComissaoVenda ? novoContratoPercentualComissaoVenda : ''}
                  onChange={(event) => { dispatch(setNovoContratoPercentualCorretagemVenda(+event.target.value)) }}
                  InputProps={{
                    inputComponent: NumberFormatCustom as any,
                    inputProps: { prefix: '% ' }
                  }}
                />
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
    return null
  }

  return (
    <>
      <Content />
    </>
  )
}

export default SolicitarContrato;