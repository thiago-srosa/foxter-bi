import React, { useState } from 'react';

//Material UI
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

//Material UI Icons
import SaveIcon from '@material-ui/icons/Save';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    overflow: 'auto',
    overflowX: 'hidden',
    width: '800px',
    height: 'auto',
    maxWidth: '90%',
    maxHeight: '90%',
    backgroundColor: theme.palette.background.paper,
    border: '0px solid #f1f1f1',
    boxShadow: theme.shadows[5],
    padding: '20px',
    outline: 'none',
    top: '50% ',
    left: '50% ',
    transform: 'translate(-50%, -50%) ',
  },
  root: {
    '& > *': {
      marginTop: '5px',
      marginBottom: '5px',
    },
  },
  inputModal50percentLEFT: {
    width: '50%',
    paddingRight: '15px',
    [theme.breakpoints.down('600')]: {
      width: '100%',
      paddingRight: '0px !important',
    },
  },
  inputModal50percentRIGHT: {
    width: '50%',
    [theme.breakpoints.down('600')]: {
      width: '100%',
    },
  }
}));

export default function SimpleModal() {
  const [inputNomeComprador, setInputNomeComprador] = useState("");
  const [inputCPFComprador, setInputCPFComprador] = useState("");

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const modalBody = (
    <div className={classes.paper}>

      <form className={classes.root} noValidate autoComplete="off">
        <TextField
          id="standard-basic"
          label="Nome completo do cliente"
          fullWidth
          value={inputCPFComprador}
          onChange={e => setInputCPFComprador(e.target.value)}
        />

        <TextField
          className={classes.inputModal50percentLEFT}
          id="standard-basic"
          label="CPF do cliente"
          fullWidth
          value={inputCPFComprador}
          onChange={e => setInputCPFComprador(e.target.value)}
        />

        <TextField
          className={classes.inputModal50percentRIGHT}
          id="standard-basic"
          label="RG do cliente"
          fullWidth
          value={inputCPFComprador}
          onChange={e => setInputCPFComprador(e.target.value)}
        />

        <TextField
          className={classes.inputModal50percentLEFT}
          id="standard-basic"
          label="Email"
          fullWidth
          value={inputCPFComprador}
          onChange={e => setInputCPFComprador(e.target.value)}
        />

        <TextField
          className={classes.inputModal50percentRIGHT}
          id="standard-basic"
          label="Telefone do cliente"
          fullWidth
          value={inputCPFComprador}
          onChange={e => setInputCPFComprador(e.target.value)}
        />

        <TextField
          id="standard-basic"
          label="Profissão"
          fullWidth
          value={inputCPFComprador}
          onChange={e => setInputCPFComprador(e.target.value)}
        />

        <TextField
          className={classes.inputModal50percentLEFT}
          id="standard-basic"
          label="Estado Civil"
          fullWidth
          value={inputCPFComprador}
          onChange={e => setInputCPFComprador(e.target.value)}
        />

        <TextField
          className={classes.inputModal50percentRIGHT}
          id="standard-basic"
          label="Regime de Bens"
          fullWidth
          value={inputCPFComprador}
          onChange={e => setInputCPFComprador(e.target.value)}
        />

        <TextField
          id="standard-basic"
          label="Endereço onde o cliente reside"
          fullWidth
          value={inputCPFComprador}
          onChange={e => setInputCPFComprador(e.target.value)}
        />

        <TextField
          className={classes.inputModal50percentLEFT}
          id="standard-basic"
          label="Bairro da residência do cliente"
          fullWidth
          value={inputCPFComprador}
          onChange={e => setInputCPFComprador(e.target.value)}
        />

        <TextField
          className={classes.inputModal50percentRIGHT}
          id="standard-basic"
          label="Município da residência do cliente"
          fullWidth
          value={inputCPFComprador}
          onChange={e => setInputCPFComprador(e.target.value)}
        />

        <TextField
          id="standard-basic"
          label="CEP da residência do cliente"
          fullWidth
          value={inputCPFComprador}
          onChange={e => setInputCPFComprador(e.target.value)}
        />

        <Button variant="contained" startIcon={<SaveIcon />} size="large" color="primary" href="#contained-buttons">
          Adicionar Cliente
        </Button>

        <Button variant="contained" startIcon={<DeleteIcon />} size="large" color="secondary" href="#contained-buttons">
          Limpar Dados
        </Button>

      </form>

    </div>
  );

  return (
    <>
      <button type="button" onClick={handleOpen}>
        Open Modal
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        disableEnforceFocus
      >
        {modalBody}
      </Modal>
    </>
  );
}