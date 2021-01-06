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
  setNovoContratoValorTotalVenda,
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
const NumberFormatCustom = loadable(() => import('../../../../components/NumberFormatCustom'))
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
    novoContratoPercentualComissaoVenda,
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

  let content: JSX.Element

  if (novoContratoRadioButtonCalculaValorNegociacao === option.value1) {
    content = <>
      <H2>Valor líquido da venda</H2>
      <OutlinedInput
        className={classes.outlinedInputSmall}
        id='ValorLiquido'
        startAdornment={<InputAdornment position="start">R$</InputAdornment>}
        required
        value={novoContratoValorLiquidoVenda ? novoContratoValorLiquidoVenda : ''}
        autoComplete='off'
        onChange={e => dispatch(setNovoContratoValorLiquidoVenda(parseInt(e.target.value)))}
        inputComponent={NumberFormatCustom as any}
      />
    </>
  }

  if (novoContratoRadioButtonCalculaValorNegociacao === option.value2) {
    content = <>
      <H2>Valor corretagem</H2>
      <OutlinedInput
        className={classes.outlinedInputSmall}
        id='ValorCorretagem'
        startAdornment={<InputAdornment position="start">R$</InputAdornment>}
        required
        value={novoContratoValorCorretagemVenda ? novoContratoValorCorretagemVenda : ''}
        autoComplete='off'
        onChange={e => dispatch(setNovoContratoValorCorretagemVenda(parseInt(e.target.value)))}
        inputComponent={NumberFormatCustom as any}
      />
    </>
  }


  return (
    <>
      <FormControl >
        <RadioGroup name="NovoContratoSelection" value={novoContratoRadioButtonCalculaValorNegociacao} onChange={handleChangeSelection}>
          <FormControlLabel value={option.value1} control={<Radio color='primary' />} label='Valor líquido' />
          <FormControlLabel value={option.value2} control={<Radio color='primary' />} label='Valor corretagem' />
          <FormControlLabel value={option.value3} control={<Radio color='primary' />} label='Percentual corretagem' />
        </RadioGroup>
      </FormControl>
      { content}
    </>
  );
}
export default CustomRadioButtosGroup