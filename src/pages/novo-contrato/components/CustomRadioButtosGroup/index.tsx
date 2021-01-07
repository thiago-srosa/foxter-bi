//REACT
import React from 'react'
//REACT-REDUX
import { useSelector, useDispatch } from "react-redux";
//STORE => TYPE ROOT STATE
import { RootState } from '../../../../../store/reducers'
//GLOBAL ACTIONS
import { setNovoContratoRadioButtonCalculaValorNegocicao } from '../../../../../store/global/actions'
//NOVO CONTRATO ACTIONS
import {
  setNovoContratoValorLiquidoVenda,
  setNovoContratoValorCorretagemVenda,
  setNovoContratoPercentualCorretagemVenda,
} from '../../../../../store/novoContrato/actions'
//LOADABLE/COMPONENT
import loadable from '@loadable/component'
const FormControl = loadable(() => import('@material-ui/core/FormControl'))
const RadioGroup = loadable(() => import('@material-ui/core/RadioGroup'))
const FormControlLabel = loadable(() => import('@material-ui/core/FormControlLabel'))
const Radio = loadable(() => import('@material-ui/core/Radio'))
const H2 = loadable(() => import('../../../../components/StyledComponents/StyledH2'))
const OutlinedInput = loadable(() => import('@material-ui/core/OutlinedInput'))
const InputAdornment = loadable(() => import('@material-ui/core/InputAdornment'))
const NumberFormat = loadable(() => import('react-number-format'))
const NumberFormatCustom = loadable(() => import('../../../../components/NumberFormatCustom'))
const StyledDivWrapper = loadable(() => import('./components/StyledComponents/StyledDivWrapper'))
const StyledValuesDiv = loadable(() => import('./components/StyledComponents/StyledValuesDiv'))
const StyledDivWrapperRadio = loadable(() => import('./components/StyledComponents/StyledDivWrapperRadio'))
//CUSTOM STYLES
import { useStyles } from '../../styles'

function CustomRadioButtosGroup() {

  const classes = useStyles()
  const dispatch = useDispatch()

  const {
    novoContratoRadioButtonCalculaValorNegociacao
  } = useSelector((state: RootState) => state.global)
  const {
    novoContratoValorTotalVenda,
    novoContratoValorLiquidoVenda,
    novoContratoValorCorretagemVenda,
    novoContratoPercentualCorretagemVenda,
  } = useSelector((state: RootState) => state.novoContrato)

  const handleChangeSelection = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setNovoContratoRadioButtonCalculaValorNegocicao((event.target as HTMLInputElement).value))
  };

  interface IOptions {
    value1: string,
    value2: string,
    value3: string,
  }

  const option: IOptions = {
    value1: 'valor_liquido',
    value2: 'valor_corretagem',
    value3: 'percentual_corretagem'
  }

  let selectedInput: JSX.Element

  if (novoContratoRadioButtonCalculaValorNegociacao === option.value1) {
    selectedInput = <>
      <H2>Valor líquido da venda</H2>
      <OutlinedInput
        className={classes.outlinedInputSmall}
        id='ValorLiquido'
        startAdornment={<InputAdornment position="start">R$</InputAdornment>}
        required
        value={novoContratoValorLiquidoVenda ? novoContratoValorLiquidoVenda : ''}
        autoComplete='off'
        onChange={e => {
          dispatch(setNovoContratoValorLiquidoVenda(parseInt(e.target.value)))
          dispatch(setNovoContratoValorCorretagemVenda(novoContratoValorTotalVenda - parseInt(e.target.value)))
          dispatch(setNovoContratoPercentualCorretagemVenda((novoContratoValorTotalVenda - parseInt(e.target.value)) / novoContratoValorTotalVenda * 100))
        }
        }
        inputComponent={NumberFormatCustom as any}
      />
    </>
  }

  if (novoContratoRadioButtonCalculaValorNegociacao === option.value2) {
    selectedInput = <>
      <H2>Valor corretagem da venda</H2>
      <OutlinedInput
        className={classes.outlinedInputSmall}
        id='ValorCorretagem'
        startAdornment={<InputAdornment position="start">R$</InputAdornment>}
        required
        value={novoContratoValorCorretagemVenda ? novoContratoValorCorretagemVenda : ''}
        autoComplete='off'
        onChange={e => {
          dispatch(setNovoContratoValorCorretagemVenda(parseInt(e.target.value)))
          dispatch(setNovoContratoValorLiquidoVenda(novoContratoValorTotalVenda - parseInt(e.target.value)))
          dispatch(setNovoContratoPercentualCorretagemVenda(parseInt(e.target.value) / novoContratoValorTotalVenda * 100))
        }}
        inputComponent={NumberFormatCustom as any}
      />
    </>
  }

  if (novoContratoRadioButtonCalculaValorNegociacao === option.value3) {
    selectedInput = <>
      <H2>Percentual de corretagem da venda</H2>
      <OutlinedInput
        className={classes.outlinedInputSmall}
        id='ValorCorretagem'
        startAdornment={<InputAdornment position="start">%</InputAdornment>}
        required
        value={novoContratoPercentualCorretagemVenda ? novoContratoPercentualCorretagemVenda : ''}
        autoComplete='off'
        onChange={e => {
          dispatch(setNovoContratoPercentualCorretagemVenda(parseInt(e.target.value)))
          dispatch(setNovoContratoValorCorretagemVenda(novoContratoValorTotalVenda * parseInt(e.target.value) / 100))
          dispatch(setNovoContratoValorLiquidoVenda(novoContratoValorTotalVenda - novoContratoValorTotalVenda * parseInt(e.target.value) / 100))
        }}
        inputComponent={NumberFormatCustom as any}
      />
    </>
  }

  let dadosGeraisCalculados: JSX.Element

  if (novoContratoValorTotalVenda && novoContratoValorLiquidoVenda && novoContratoValorCorretagemVenda && novoContratoPercentualCorretagemVenda) {
    dadosGeraisCalculados = (

      <StyledDivWrapper>
        <H2>Dados gerais da venda:</H2>

        <StyledValuesDiv>
          <span>Proprietário:</span>
          <span>
            <b>
              <NumberFormat
                value={novoContratoValorLiquidoVenda}
                displayType={'text'}
                thousandSeparator='.'
                decimalSeparator=','
                decimalScale={2}
                fixedDecimalScale={true}
                prefix='R$ '
              />
            </b>
          </span>
        </StyledValuesDiv>

        <StyledValuesDiv>
          <span>Corretagem:</span>
          <span>
            <b>
              <NumberFormat
                value={novoContratoValorCorretagemVenda}
                displayType={'text'}
                thousandSeparator='.'
                decimalSeparator=','
                decimalScale={2}
                fixedDecimalScale={true}
                prefix='R$ '
              />
            </b>
          </span>
        </StyledValuesDiv>

        <StyledValuesDiv>
          <span>Corretagem:</span>
          <span>
            <b>
              <NumberFormat
                value={novoContratoPercentualCorretagemVenda}
                displayType={'text'}
                thousandSeparator='.'
                decimalSeparator=','
                decimalScale={2}
                fixedDecimalScale={true}
                prefix='% '
              />
            </b>
          </span>
        </StyledValuesDiv>

        <hr />

        <StyledValuesDiv>
          <span>Valor total:</span>
          <span>
            <b>
              <NumberFormat
                value={novoContratoValorTotalVenda}
                displayType={'text'}
                thousandSeparator='.'
                decimalSeparator=','
                decimalScale={2}
                fixedDecimalScale={true}
                prefix='R$ '
              />
            </b>
          </span>
        </StyledValuesDiv>

      </StyledDivWrapper>
    )
  }


  return (
    <>
      <StyledDivWrapperRadio>
        <H2>Seleciona a melhor opção que completa o valor total:</H2>
        <FormControl >
          <RadioGroup name="NovoContratoSelection" value={novoContratoRadioButtonCalculaValorNegociacao} onChange={handleChangeSelection}>
            <FormControlLabel value={option.value1} control={<Radio color='primary' />} label='Valor líquido' />
            <FormControlLabel value={option.value2} control={<Radio color='primary' />} label='Valor corretagem' />
            <FormControlLabel value={option.value3} control={<Radio color='primary' />} label='Percentual corretagem' />
          </RadioGroup>
        </FormControl>
        {selectedInput}
      </StyledDivWrapperRadio >

      {dadosGeraisCalculados}

    </>
  );
}
export default CustomRadioButtosGroup