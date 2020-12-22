import React, { useState } from 'react';

//Import Material UI
import { FormControl, InputLabel, Input } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import TextField from '@material-ui/core/TextField';

//Import React Redux
import { useSelector, useDispatch } from "react-redux";

const useStyles = makeStyles({
  inputLabel: {
    fontSize: '12px',
    marginTop: '8px',
  },
  input: {

  }
});


function CollapseableRow({ vendedor, index }) {
  const [open, setOpen] = useState(false);

  const classes = useStyles();

  function handleClickCollapse() {
    setOpen(!open)
  }

  return (
    <>

      <div>
        <IconButton aria-label="expand row" size="small" onClick={() => handleClickCollapse()}>
          {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
        </IconButton>
        {vendedor.novoVendedorNomeCompleto}
      </div>

      <Collapse in={open} timeout="auto" unmountOnExit>

        <form noValidate autoComplete="off">

          <Typography variant="h6" gutterBottom component="div">
            Dados do vendedor
          </Typography>

          <InputLabel className={classes.inputLabel}>CPF</InputLabel>
          <Input
            className={classes.input}
            fullWidth
            disabled
            value={vendedor.novoVendedorCPF}
          />

          <InputLabel className={classes.inputLabel}>RG</InputLabel>
          <Input
            className={classes.input}
            fullWidth
            disabled
            value={vendedor.novoVendedorRG}
          />

          <InputLabel className={classes.inputLabel}>E-mail</InputLabel>
          <Input
            className={classes.input}
            fullWidth
            disabled
            value={vendedor.novoVendedorEmail}
          />

          <InputLabel className={classes.inputLabel}>Telefone</InputLabel>
          <Input
            className={classes.input}
            fullWidth
            disabled
            value={vendedor.novoVendedorTelefone}
          />

          <InputLabel className={classes.inputLabel}>Profissão</InputLabel>
          <Input
            className={classes.input}
            fullWidth
            disabled
            value={vendedor.novoVendedorProfissao}
          />

          <InputLabel className={classes.inputLabel}>Estado civil</InputLabel>
          <Input
            className={classes.input}
            fullWidth
            disabled
            value={vendedor.novoVendedorEstadoCivil}
          />

          <InputLabel className={classes.inputLabel}>Regime de bens</InputLabel>
          <Input
            className={classes.input}
            fullWidth
            disabled
            value={vendedor.novoVendedorRegimeBens}
          />

          <InputLabel className={classes.inputLabel}>Endereço</InputLabel>
          <Input
            className={classes.input}
            fullWidth
            disabled
            value={vendedor.novoVendedorEndereco}
          />

          <InputLabel className={classes.inputLabel}>Bairro</InputLabel>
          <Input
            className={classes.input}
            fullWidth
            disabled
            value={vendedor.novoVendedorBairro}
          />

          <InputLabel className={classes.inputLabel}>Cidade</InputLabel>
          <Input
            className={classes.input}
            fullWidth
            disabled
            value={vendedor.novoVendedorMunicipio}
          />

          <InputLabel className={classes.inputLabel}>CEP</InputLabel>
          <Input
            className={classes.input}
            fullWidth
            disabled
            value={vendedor.novoVendedorCEP}
          />

          <InputLabel className={classes.inputLabel}>Observações</InputLabel>
          <Input
            className={classes.input}
            fullWidth
            disabled
            value={vendedor.novoVendedorObservacao}
          />

        </form>
      </Collapse>

    </>
  )
}

function Row() {

  const { novoContratoVendedores } = useSelector((state) => state.novoContrato);

  console.log(novoContratoVendedores)

  return (
    <>
      {
        novoContratoVendedores.map((vendedor, index) => (
          <CollapseableRow key={index} vendedor={vendedor} index={index} />
        ))
      }
    </>
  );
}

export default function CollapsibleTable() {
  return (
    <Row />
  );
}