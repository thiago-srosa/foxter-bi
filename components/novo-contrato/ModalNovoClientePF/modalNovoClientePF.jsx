import { useState } from 'react';

//CPF Validator
import { cpf } from 'cpf-cnpj-validator';

//Import Material UI
import Modal from '@material-ui/core/Modal';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Button from '@material-ui/core/Button';

//Import Material UI Icons
import SaveIcon from '@material-ui/icons/Save';
import DeleteIcon from '@material-ui/icons/Delete';

//Import styles.jsx
import { AutoCompleteContainer, ButtonsContainer, useStyles } from './styles'

//Import React Redux
import { useSelector, useDispatch } from "react-redux";
import {
  setNovoClienteNomeCompleto,
  setNovoClienteCPF,
  setNovoClienteRG,
  setNovoClienteEmail,
  setNovoClienteTelefone,
  setNovoClienteProfissao,
  setNovoClienteEstadoCivil,
  setNovoClienteRegimeBens,
  setNovoClienteEndereco,
  setNovoClienteBairro,
  setNovoClienteMunicipio,
  setNovoClienteCEP,
  setNovoClienteObservacao,
  resetNovoCliente,
} from "../../../store/actions/novoClientePF";


const NovoClientePF = () => {
  const dispatch = useDispatch();
  const {
    novoClienteNomeCompleto,
    novoClienteCPF,
    novoClienteRG,
    novoClienteEmail,
    novoClienteTelefone,
    novoClienteProfissao,
    novoClienteEstadoCivil,
    novoClienteRegimedeBens,
    novoClienteEndereco,
    novoClienteBairro,
    novoClienteMunicipio,
    novoClienteCEP,
    novoClienteObservacao,
  } = useSelector((state) => state.novoClientePF);

  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const estadoCivil = [
    { title: 'Solteiro' },
    { title: 'Casado' },
    { title: 'Separado' },
    { title: 'Divorciado' },
    { title: 'Viúvo' },
    { title: 'União Estável' },
  ]

  const regimeBens = [
    { title: 'Comunhão parcial de bens' },
    { title: 'Comunhão universal de bens' },
    { title: 'Separação total de bens' },
  ]

  const modalBody = (
    <div className={classes.paper}>

      <form className={classes.root} noValidate autoComplete="on">

        <TextField
          className={classes.textField}
          label="Nome completo do cliente"
          id="nomeCompleto"
          fullWidth
          value={novoClienteNomeCompleto}
          onChange={e => dispatch(setNovoClienteNomeCompleto(e.target.value))}
        />

        <TextField
          className={classes.inputModal50percentLEFT}
          id="CPFCliente"
          label="CPF do cliente"
          fullWidth
          error={novoClienteCPF == "" ? false : (cpf.isValid(novoClienteCPF) ? false : true)}
          value={novoClienteCPF}
          helperText={novoClienteCPF == "" ? false : (cpf.isValid(novoClienteCPF) ? null : "CPF Inválido")}
          onChange={e => dispatch(setNovoClienteCPF(cpf.format(e.target.value)))}
        />

        <TextField
          className={classes.inputModal50percentRIGHT}
          id="RGCliente"
          label="RG do cliente"
          fullWidth
          value={novoClienteRG}
          onChange={e => dispatch(setNovoClienteRG(e.target.value))}
        />

        <TextField
          className={classes.inputModal50percentLEFT}
          id="EmailCliente"
          label="Email"
          fullWidth
          value={novoClienteEmail}
          onChange={e => dispatch(setNovoClienteEmail(e.target.value))}
        />

        <TextField
          className={classes.inputModal50percentRIGHT}
          id="TelefoneCliente"
          label="Telefone do cliente"
          fullWidth
          value={novoClienteTelefone}
          onChange={e => dispatch(setNovoClienteTelefone(e.target.value))}
        />

        <TextField
          className={classes.textField}
          id="ProfissaoCliente"
          label="Profissão"
          fullWidth
          value={novoClienteProfissao}
          onChange={e => dispatch(setNovoClienteProfissao(e.target.value))}
        />

        <AutoCompleteContainer>
          <Autocomplete
            className={classes.inputModal50percentLEFT}
            fullWidth
            options={estadoCivil}
            getOptionLabel={option => typeof option === 'string' ? option : option.title}
            getOptionSelected={(option, value) => option.title === value.title}
            value={novoClienteEstadoCivil}
            onChange={(event, newValue) => dispatch(setNovoClienteEstadoCivil(newValue))}
            renderInput={(params) =>
              <TextField
                {...params}
                autoComplete="off"
                label="Estado Civil"
              />}
          />

          <Autocomplete
            className={classes.inputModal50percentRIGHT}
            fullWidth
            defaultValue=""
            options={regimeBens}
            getOptionLabel={option => typeof option === 'string' ? option : option.title}
            value={novoClienteRegimedeBens}
            getOptionSelected={(option, value) => option.title === value.title}
            onChange={(event, newValue) => dispatch(setNovoClienteRegimeBens(newValue))}
            renderInput={(params) =>
              <TextField
                {...params}
                autoComplete="off"
                label="Regime de Bens"
              />}
          />
        </AutoCompleteContainer>

        <TextField
          className={classes.textField}
          id="EnderecoCliente"
          label="Endereço onde o cliente reside"
          fullWidth
          value={novoClienteEndereco}
          onChange={e => dispatch(setNovoClienteEndereco(e.target.value))}
        />

        <TextField
          className={classes.inputModal50percentLEFT}
          id="BairroCliente"
          label="Bairro da residência do cliente"
          fullWidth
          value={novoClienteBairro}
          onChange={e => dispatch(setNovoClienteBairro(e.target.value))}
        />

        <TextField
          className={classes.inputModal50percentRIGHT}
          id="MunicipioCliente"
          label="Município da residência do cliente"
          fullWidth
          value={novoClienteMunicipio}
          onChange={e => dispatch(setNovoClienteMunicipio(e.target.value))}
        />

        <TextField
          className={classes.textField}
          id="CEPCliente"
          label="CEP da residência do cliente"
          fullWidth
          value={novoClienteCEP}
          onChange={e => dispatch(setNovoClienteCEP(e.target.value))}
        />

        <TextField
          className={classes.textField}
          id="ObservacoesCliente"
          label="Observações:"
          fullWidth
          multiline={true}
          value={novoClienteObservacao}
          onChange={e => dispatch(setNovoClienteObservacao(e.target.value))}
        />
      </form>

      <ButtonsContainer>
        <Button className={classes.buttonLEFT} variant="contained" startIcon={<SaveIcon />} size="large" color="primary" >
          Adicionar Cliente
        </Button>

        <Button
          className={classes.buttonRIGHT}
          variant="contained"
          startIcon={<DeleteIcon />}
          size="large"
          color="secondary"
          onClick={() => dispatch(resetNovoCliente())}
        >
          Limpar Dados
        </Button>
      </ButtonsContainer>

    </div>
  );

  return (
    <>

      <Button variant="contained" size="large" color="primary" onClick={handleOpen}>
        Adicionar Novo Cliente
      </Button>

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

export default NovoClientePF;