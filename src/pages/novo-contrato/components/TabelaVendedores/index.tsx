//REACT
import React, { useState } from 'react'
//MATERIAL UI
import { makeStyles } from '@material-ui/core/styles'

//Import React Redux
import { useSelector } from "react-redux"

import { NovoVendedorPFState } from '../../../../../store/novoContrato/novoVendedorPF/types'
import { RootState } from '../../../../../store/reducers'

//LOADABLE/COMPONENT
import loadable from '@loadable/component'

const Input = loadable(() => import('@material-ui/core/Input'))
const InputLabel = loadable(() => import('@material-ui/core/InputLabel'))
const Collapse = loadable(() => import('@material-ui/core/Collapse'))
const IconButton = loadable(() => import('@material-ui/core/IconButton'))
const Typography = loadable(() => import('@material-ui/core/Typography'))
const KeyboardArrowDownIcon = loadable(() => import('@material-ui/icons/KeyboardArrowDown'))
const KeyboardArrowUpIcon = loadable(() => import('@material-ui/icons/KeyboardArrowUp'))


const useStyles = makeStyles({
  inputLabel: {
    fontSize: '12px',
    marginTop: '8px',
  },
  input: {

  }
});

interface ICollapseableRow {
  vendedor: NovoVendedorPFState,
  index: number
}

function CollapseableRow(props: ICollapseableRow) {
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
        {props.vendedor.novoVendedorPFNomeCompleto}
      </div>

      <Collapse in={open} timeout="auto" unmountOnExit>

        <form noValidate autoComplete="off">

          <Typography variant="h6" gutterBottom>
            Dados do vendedor
          </Typography>

          <InputLabel className={classes.inputLabel}>CPF</InputLabel>
          <Input
            className={classes.input}
            fullWidth
            disabled
            value={props.vendedor.novoVendedorPFCPF}
          />

          <InputLabel className={classes.inputLabel}>RG</InputLabel>
          <Input
            className={classes.input}
            fullWidth
            disabled
            value={props.vendedor.novoVendedorPFRG}
          />

          <InputLabel className={classes.inputLabel}>E-mail</InputLabel>
          <Input
            className={classes.input}
            fullWidth
            disabled
            value={props.vendedor.novoVendedorPFEmail}
          />

          <InputLabel className={classes.inputLabel}>Telefone</InputLabel>
          <Input
            className={classes.input}
            fullWidth
            disabled
            value={props.vendedor.novoVendedorPFTelefone}
          />

          <InputLabel className={classes.inputLabel}>Profissão</InputLabel>
          <Input
            className={classes.input}
            fullWidth
            disabled
            value={props.vendedor.novoVendedorPFProfissao}
          />

          <InputLabel className={classes.inputLabel}>Estado civil</InputLabel>
          <Input
            className={classes.input}
            fullWidth
            disabled
            value={props.vendedor.novoVendedorPFEstadoCivil}
          />

          <InputLabel className={classes.inputLabel}>Regime de bens</InputLabel>
          <Input
            className={classes.input}
            fullWidth
            disabled
            value={props.vendedor.novoVendedorPFRegimeBens}
          />

          <InputLabel className={classes.inputLabel}>Logradouro</InputLabel>
          <Input
            className={classes.input}
            fullWidth
            disabled
            value={props.vendedor.novoVendedorPFLogradouro}
          />

          <InputLabel className={classes.inputLabel}>Número</InputLabel>
          <Input
            className={classes.input}
            fullWidth
            disabled
            value={props.vendedor.novoVendedorPFNumero}
          />

          <InputLabel className={classes.inputLabel}>Complemento</InputLabel>
          <Input
            className={classes.input}
            fullWidth
            disabled
            value={props.vendedor.novoVendedorPFComplemento}
          />

          <InputLabel className={classes.inputLabel}>Bairro</InputLabel>
          <Input
            className={classes.input}
            fullWidth
            disabled
            value={props.vendedor.novoVendedorPFBairro}
          />

          <InputLabel className={classes.inputLabel}>Cidade</InputLabel>
          <Input
            className={classes.input}
            fullWidth
            disabled
            value={props.vendedor.novoVendedorPFCidade}
          />

          <InputLabel className={classes.inputLabel}>CEP</InputLabel>
          <Input
            className={classes.input}
            fullWidth
            disabled
            value={props.vendedor.novoVendedorPFCEP}
          />

          <InputLabel className={classes.inputLabel}>Observações</InputLabel>
          <Input
            className={classes.input}
            fullWidth
            disabled
            value={props.vendedor.novoVendedorPFObservacao}
          />

        </form>
      </Collapse>

    </>
  )
}

function Row() {

  const { novoContratoVendedores } = useSelector((state: RootState) => state.novoContrato);

  console.log(novoContratoVendedores)

  return (
    <>
      {
        novoContratoVendedores.map((vendedor, index) => (
          <CollapseableRow vendedor={vendedor} index={index} />
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