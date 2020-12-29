import React from 'react'

//Import Material-UI
import TextField from '@material-ui/core/TextField';

//Import styles
import { H2, useStyles } from './styles'

//Import react-number-format
import NumberFormat from 'react-number-format';

//Import React Redux
import { useSelector, useDispatch } from "react-redux";
import {
  setValorTotalVenda,
  setValorLiquidoVenda,
  setValorCorretagemVenda,
  setPercentualCorretagemVenda,
} from "../../../store/actions/novoContrato";

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

const DadosGerais = () => {
  const classes = useStyles();

  const dispatch = useDispatch();
  const {
    novoContratoValorTotalVenda,
    novoContratoValorLiquidoVenda,
    novoContratoValorCorreategemVenda,
    novoContratoPercentualComissaoVenda,
  } = useSelector((state) => state.novoContrato);

  return (
    <>
      <H2>Dados Gerais da Venda</H2>
      <form className={classes.root} noValidate autoComplete='off'>
        <TextField
          id="valorBrutoVenda"
          label="Valor total"
          fullWidth
          required
          autoComplete='off'
          type='number'
        />

        <TextField
          id="valorComissaoVenda"
          label="Valor da comissão"
          fullWidth
          required
          autoComplete='off'
          type='number'
        />

        <TextField
          id="valorLiquidoVenda"
          label="Valor líquido"
          fullWidth
          required
          autoComplete='off'
          type='number'
        />

        <TextField
          id="percentualComissaoVenda"
          label="% comissão"
          fullWidth
          required
          autoComplete='off'
          type='number'
        />

        <TextField
          label="Valor total"
          value={novoContratoValorTotalVenda}
          onChange={(event) => { dispatch(setValorTotalVenda(event.target.value)) }}
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