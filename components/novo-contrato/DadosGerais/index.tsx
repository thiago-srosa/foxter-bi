//IMPORT REACT
import React from 'react'
//MATERIAL-UI
import TextField from '@material-ui/core/TextField';
//CUSTOM STYLES
import { H2, useStyles } from './styles'
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

function NumberFormatCustom(props) {
  const { inputRef, onChange, ...other } = props;

  return (
    <NumberFormat
      {...other}
      getInputRef={inputRef}
      onValueChange={(values) => {
        onChange({
          target: {
            value: values.value,
          },
        });
      }}
      thousandSeparator='.'
      isNumericString
      decimalSeparator=','
      fixedDecimalScale={true}
      decimalScale={2}
      prefix="R$ "
    />
  );
}

const DadosGerais = (): React.ReactElement => {
  const classes = useStyles();

  const dispatch = useDispatch();
  
  /*  const {
      novoContratoValorTotalVenda,
      novoContratoValorLiquidoVenda,
      novoContratoValorCorreategemVenda,
      novoContratoPercentualComissaoVenda,
    } = useSelector((state: RootState) => state.novoContrato);
  */

  return (
    <>
      <H2>Dados Gerais da Venda</H2>
      <form className={classes.root} noValidate autoComplete='off'>
        <TextField
          id="valorBrutoVenda"
          label="Valor total"
          fullWidth
          required
          onChange={(event) => { dispatch(setNovoContratoValorTotalVenda(+event.target.value)) }}
          autoComplete='off'
          type='number'
        />

        <TextField
          id="valorComissaoVenda"
          label="Valor da comissão"
          fullWidth
          required
          onChange={(event) => { dispatch(setNovoContratoValorCorretagemVenda(+event.target.value)) }}
          autoComplete='off'
          type='number'
        />

        <TextField
          id="valorLiquidoVenda"
          label="Valor líquido"
          fullWidth
          required
          onChange={(event) => { dispatch(setNovoContratoValorLiquidoVenda(+event.target.value)) }}
          autoComplete='off'
          type='number'
        />

        <TextField
          id="percentualComissaoVenda"
          label="% comissão"
          fullWidth
          onChange={(event) => { dispatch(setNovoContratoPercentualCorretagemVenda(+event.target.value)) }}
          required
          autoComplete='off'
          type='number'
        />

        <TextField
          label="Valor total"
          //value={novoContratoValorTotalVenda}
          onChange={(event) => { dispatch(setNovoContratoValorTotalVenda(+event.target.value)) }}
          id="valorTotalVenda"
          InputProps={{
            inputComponent: NumberFormatCustom,
          }}
        />
      </form>
    </>
  )
}

export default DadosGerais;