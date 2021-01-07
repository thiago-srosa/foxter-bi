//REACT
import React, { SyntheticEvent } from 'react'
//REACT-REDUX
import { useSelector, useDispatch } from "react-redux";
//STORE => TYPE ROOT STATE
import { RootState } from '../../../../../store/reducers'
//GLOBAL ACTIONS
import { setNovoContratoRadioButtonCalculaValorNegocicao } from '../../../../../store/novoContrato/actions'
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
//CONSTANTS
import { novoContratoRadioOptions } from '../../../../constants'
//CUSTOM STYLES
import { useStyles } from '../../styles'

function CustomRadioButtosGroup() {

  const classes = useStyles()
  const dispatch = useDispatch()

  const {
    novoContratoRadioButtonCalculaValorNegociacao,
    novoContratoValorTotalVenda,
    novoContratoValorLiquidoVenda,
    novoContratoValorCorretagemVenda,
    novoContratoPercentualCorretagemVenda,
  } = useSelector((state: RootState) => state.novoContrato)

  const handleChangeSelection = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setNovoContratoRadioButtonCalculaValorNegocicao((event.target as HTMLInputElement).value))
  };

  let selectedInput: JSX.Element

  const HandleStartAdorment = (): JSX.Element => {
    switch (novoContratoRadioButtonCalculaValorNegociacao) {
      //valor liquido
      case novoContratoRadioOptions.value1:
        return <InputAdornment position="start">R$</InputAdornment>
      //valor corretagem
      case novoContratoRadioOptions.value2:
        return <InputAdornment position="start">R$</InputAdornment>
      //percentual corretagem
      case novoContratoRadioOptions.value3:
        return <InputAdornment position="start">%</InputAdornment>
      default:
        return <InputAdornment position="start"></InputAdornment>
    }
  }
  let handleValueInput: number

  switch (novoContratoRadioButtonCalculaValorNegociacao) {
    //valor líquido
    case novoContratoRadioOptions.value1:
      handleValueInput = novoContratoValorLiquidoVenda
      break;
    //valor corretagem
    case novoContratoRadioOptions.value2:
      handleValueInput = novoContratoValorCorretagemVenda
      break;
    //percentual corretagem
    case novoContratoRadioOptions.value3:
      handleValueInput = novoContratoPercentualCorretagemVenda
      break;
    //DEFAULT
    default:
      null
  }

  function handleOnchangeInput(inputValue: string): void {
    console.log(inputValue)
    switch (novoContratoRadioButtonCalculaValorNegociacao) {
      //valor liquido
      case novoContratoRadioOptions.value1:
        dispatch(setNovoContratoValorLiquidoVenda(+inputValue))
        dispatch(setNovoContratoValorCorretagemVenda(novoContratoValorTotalVenda - (+inputValue)))
        dispatch(setNovoContratoPercentualCorretagemVenda((novoContratoValorTotalVenda - (+inputValue)) / novoContratoValorTotalVenda * 100))
        break;
      //valor corretagem
      case novoContratoRadioOptions.value2:
        dispatch(setNovoContratoValorCorretagemVenda(+inputValue))
        dispatch(setNovoContratoValorLiquidoVenda(novoContratoValorTotalVenda - (+inputValue)))
        dispatch(setNovoContratoPercentualCorretagemVenda((+inputValue) / novoContratoValorTotalVenda * 100))
        break;
      //percentual corretagem
      case novoContratoRadioOptions.value3:
        dispatch(setNovoContratoPercentualCorretagemVenda(+inputValue))
        dispatch(setNovoContratoValorLiquidoVenda(novoContratoValorTotalVenda - novoContratoValorTotalVenda * (+inputValue) / 100))
        dispatch(setNovoContratoValorCorretagemVenda(novoContratoValorTotalVenda * (+inputValue) / 100))
        break;
    }
  }

  selectedInput = <>
    <H2>Valor líquido da venda</H2>
    <OutlinedInput
      className={classes.outlinedInputSmall}
      style={novoContratoRadioOptions == null ? { display: 'none' } : null}
      id='SelectedInput'
      startAdornment={<HandleStartAdorment />}
      required
      value={handleValueInput}
      autoComplete='off'
      onChange={e => { handleOnchangeInput(e.target.value) }}
      inputComponent={NumberFormatCustom as any}
    />
  </>

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
            <FormControlLabel value={novoContratoRadioOptions.value1} control={<Radio color='primary' />} label='Valor líquido' />
            <FormControlLabel value={novoContratoRadioOptions.value2} control={<Radio color='primary' />} label='Valor corretagem' />
            <FormControlLabel value={novoContratoRadioOptions.value3} control={<Radio color='primary' />} label='Percentual corretagem' />
          </RadioGroup>
        </FormControl>
        {selectedInput}
      </StyledDivWrapperRadio >

      {dadosGeraisCalculados}

    </>
  );
}
export default CustomRadioButtosGroup