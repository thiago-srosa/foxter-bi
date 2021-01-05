//IMPORT REACT
import React from 'react'
//CUSTOM STYLES
import { useStyles } from './styles'
//REACT-NUMBER-FORMAT
import NumberFormat from 'react-number-format';
//REACT-REDUX
import { useSelector, useDispatch } from "react-redux";
//STORE => TYPE ROOT STATE
import { RootState } from '../../../store/reducers'
//STORE => USER ACTIONS
import {
  setNovoContratoValorTotalVenda,
  setNovoContratoValorLiquidoVenda,
  setNovoContratoValorCorretagemVenda,
  setNovoContratoPercentualCorretagemVenda,
} from "../../../store/novoContrato/actions";
//LOADABLE/COMPONENT
import loadable from '@loadable/component'

const TextField = loadable(() => import('@material-ui/core/TextField'))
const H2 = loadable(() => import('./StyledH2'))

interface NumberFormatCustomProps {
  inputRef: (instance: NumberFormat | null) => void;
  onChange: (event: { target: { name: string; value: string } }) => void;
  name: string;
  prefix: string;
}

function NumberFormatCustom(props: NumberFormatCustomProps) {
  const { inputRef, onChange, prefix, ...other } = props;

  return (
    <NumberFormat
      {...other}
      getInputRef={inputRef}
      onValueChange={(values) => {
        onChange({
          target: {
            name: props.name,
            value: values.value,
          },
        });
      }}
      thousandSeparator='.'
      isNumericString
      decimalSeparator=','
      fixedDecimalScale={true}
      decimalScale={2}
      prefix={props.prefix}
    />
  );
}

const DadosGerais = (): React.ReactElement => {
  const classes = useStyles();

  const dispatch = useDispatch();

  const {
    novoContratoValorTotalVenda,
    novoContratoValorLiquidoVenda,
    novoContratoValorCorreategemVenda,
    novoContratoPercentualComissaoVenda,
  } = useSelector((state: RootState) => state.novoContrato);


  return (
    <>
      <H2>Dados Gerais da Venda</H2>
      <form className={classes.form} noValidate autoComplete='off'>

        <TextField
          id='valorTotalVenda'
          label='Valor total'
          autoComplete='off'
          value={novoContratoValorTotalVenda ? novoContratoValorTotalVenda : ''}
          onChange={(event) => { dispatch(setNovoContratoValorTotalVenda(+event.target.value)) }}
          InputProps={{
            inputComponent: NumberFormatCustom as any,
            inputProps: { prefix: 'R$ ' }
          }}
        />

        <TextField
          id='valorCorretagem'
          label='Valor corretagem'
          autoComplete='off'
          value={novoContratoValorCorreategemVenda ? novoContratoValorCorreategemVenda : ''}
          onChange={(event) => { dispatch(setNovoContratoValorCorretagemVenda(+event.target.value)) }}
          InputProps={{
            inputComponent: NumberFormatCustom as any,
            inputProps: { prefix: 'R$ ' }
          }}
        />

        <TextField
          id='valorLiquido'
          label='Valor líquido'
          autoComplete='off'
          value={novoContratoValorLiquidoVenda ? novoContratoValorLiquidoVenda : ''}
          onChange={(event) => { dispatch(setNovoContratoValorLiquidoVenda(+event.target.value)) }}
          InputProps={{
            inputComponent: NumberFormatCustom as any,
            inputProps: { prefix: 'R$ ' }
          }}
        />

        <TextField
          id='valorCorretagem'
          label='% corretagem'
          autoComplete='off'
          value={novoContratoPercentualComissaoVenda ? novoContratoPercentualComissaoVenda : ''}
          onChange={(event) => { dispatch(setNovoContratoPercentualCorretagemVenda(+event.target.value)) }}
          InputProps={{
            inputComponent: NumberFormatCustom as any,
            inputProps: { prefix: '% ' }
          }}
        />

      </form>
    </>
  )
}

export default DadosGerais;