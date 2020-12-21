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
  setNovoVendedorNomeCompleto,
  setNovoVendedorCPF,
  setNovoVendedorRG,
  setNovoVendedorEmail,
  setNovoVendedorTelefone,
  setNovoVendedorProfissao,
  setNovoVendedorEstadoCivil,
  setNovoVendedorRegimeBens,
  setNovoVendedorEndereco,
  setNovoVendedorBairro,
  setNovoVendedorMunicipio,
  setNovoVendedorCEP,
  setNovoVendedorObservacao,
  resetNovoVendedor,
} from "../../../store/actions/novoVendedorPF";

import {
  addNovoContratoVendedores,
} from "../../../store/actions/novoContrato";


const NovoVendedorPF = () => {
  const dispatch = useDispatch();
  const {
    novoVendedorNomeCompleto,
    novoVendedorCPF,
    novoVendedorRG,
    novoVendedorEmail,
    novoVendedorTelefone,
    novoVendedorProfissao,
    novoVendedorEstadoCivil,
    novoVendedorRegimedeBens,
    novoVendedorEndereco,
    novoVendedorBairro,
    novoVendedorMunicipio,
    novoVendedorCEP,
    novoVendedorObservacao,
  } = useSelector((state) => state.novoVendedorPF);

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

  function handleClickChangeEstadoCivil(newValue) {
    newValue !== null ? dispatch(setNovoVendedorEstadoCivil(newValue.title)) : dispatch(setNovoVendedorEstadoCivil(null))
  }

  function handleClickChangeRegimeBens(newValue) {
    newValue !== null ? dispatch(setNovoVendedorRegimeBens(newValue.title)) : dispatch(setNovoVendedorRegimeBens(null))
  }



  function handleClickAddVendedorPF() {
    dispatch(addNovoContratoVendedores({
      novoVendedorNomeCompleto: novoVendedorNomeCompleto,
      novoVendedorCPF: novoVendedorCPF,
      novoVendedorRG: novoVendedorRG,
      novoVendedorEmail: novoVendedorEmail,
      novoVendedorTelefone: novoVendedorTelefone,
      novoVendedorProfissao: novoVendedorProfissao,
      novoVendedorEstadoCivil: novoVendedorEstadoCivil,
      novoVendedorRegimedeBens: novoVendedorRegimedeBens,
      novoVendedorEndereco: novoVendedorEndereco,
      novoVendedorBairro: novoVendedorBairro,
      novoVendedorMunicipio: novoVendedorMunicipio,
      novoVendedorCEP: novoVendedorCEP,
      novoVendedorObservacao: novoVendedorObservacao,
    }))

    dispatch(resetNovoVendedor())
  }

  const modalBody = (
    <div className={classes.paper}>

      <form className={classes.root} noValidate autoComplete="on">

        <TextField
          className={classes.textField}
          label="Nome completo do vendedor"
          id="nomeCompleto"
          fullWidth
          required
          value={novoVendedorNomeCompleto}
          onChange={e => dispatch(setNovoVendedorNomeCompleto(e.target.value))}
        />

        <TextField
          className={classes.inputModal50percentLEFT}
          id="CPFVendedor"
          label="CPF do vendedor"
          fullWidth
          required
          error={novoVendedorCPF == "" ? false : (cpf.isValid(novoVendedorCPF) ? false : true)}
          value={novoVendedorCPF}
          helperText={novoVendedorCPF == "" ? false : (cpf.isValid(novoVendedorCPF) ? null : "CPF Inválido")}
          onChange={e => dispatch(setNovoVendedorCPF(cpf.format(e.target.value)))}
        />

        <TextField
          className={classes.inputModal50percentRIGHT}
          id="RGVendedor"
          label="RG do vendedor"
          fullWidth
          required
          value={novoVendedorRG}
          onChange={e => dispatch(setNovoVendedorRG(e.target.value))}
        />

        <TextField
          className={classes.inputModal50percentLEFT}
          id="EmailVendedor"
          label="Email"
          fullWidth
          required
          value={novoVendedorEmail}
          onChange={e => dispatch(setNovoVendedorEmail(e.target.value))}
        />

        <TextField
          className={classes.inputModal50percentRIGHT}
          id="TelefoneVendedor"
          label="Telefone do vendedor"
          fullWidth
          value={novoVendedorTelefone}
          onChange={e => dispatch(setNovoVendedorTelefone(e.target.value))}
        />

        <TextField
          className={classes.textField}
          id="ProfissaoVendedor"
          label="Profissão"
          required
          fullWidth
          value={novoVendedorProfissao}
          onChange={e => dispatch(setNovoVendedorProfissao(e.target.value))}
        />

        <AutoCompleteContainer>
          <Autocomplete
            className={classes.inputModal50percentLEFT}
            fullWidth
            options={estadoCivil}
            getOptionLabel={option => typeof option === 'string' ? option : option.title}
            getOptionSelected={(option, value) => option.title === value}
            value={novoVendedorEstadoCivil}
            onChange={(event, newValue) => handleClickChangeEstadoCivil(newValue)}
            renderInput={(params) =>
              <TextField
                {...params}
                required
                autoComplete="off"
                label="Estado Civil"
              />}
          />
          {novoVendedorEstadoCivil === null || novoVendedorEstadoCivil === "Solteiro" ? null :
            <Autocomplete
              className={classes.inputModal50percentRIGHT}
              fullWidth
              defaultValue=""
              options={regimeBens}
              getOptionLabel={option => typeof option === 'string' ? option : option.title}
              value={novoVendedorRegimedeBens}
              getOptionSelected={(option, value) => option.title === value}
              onChange={(event, newValue) => handleClickChangeRegimeBens(newValue)}
              renderInput={(params) =>
                <TextField
                  {...params}
                  required
                  autoComplete="off"
                  label="Regime de Bens"
                />}
            />}
        </AutoCompleteContainer>


        <TextField
          className={classes.textField}
          id="EnderecoVendedor"
          label="Endereço onde o vendedor reside"
          fullWidth
          required
          value={novoVendedorEndereco}
          onChange={e => dispatch(setNovoVendedorEndereco(e.target.value))}
        />

        <TextField
          className={classes.inputModal50percentLEFT}
          id="BairroVendedor"
          label="Bairro da residência do vendedor"
          fullWidth
          required
          value={novoVendedorBairro}
          onChange={e => dispatch(setNovoVendedorBairro(e.target.value))}
        />

        <TextField
          className={classes.inputModal50percentRIGHT}
          id="MunicipioVendedor"
          label="Município da residência do vendedor"
          fullWidth
          required
          value={novoVendedorMunicipio}
          onChange={e => dispatch(setNovoVendedorMunicipio(e.target.value))}
        />

        <TextField
          className={classes.textField}
          id="CEPVendedor"
          label="CEP da residência do vendedor"
          fullWidth
          required
          value={novoVendedorCEP}
          onChange={e => dispatch(setNovoVendedorCEP(e.target.value))}
        />

        <TextField
          className={classes.textField}
          id="ObservacoesVendedor"
          label="Observações:"
          fullWidth
          multiline={true}
          value={novoVendedorObservacao}
          onChange={e => dispatch(setNovoVendedorObservacao(e.target.value))}
        />
      </form>

      <ButtonsContainer>
        <Button
          className={classes.buttonLEFT}
          variant="contained"
          startIcon={<SaveIcon />}
          size="large"
          color="primary"
          onClick={() => handleClickAddVendedorPF()}
        >
          Adicionar Vendedor
        </Button>

        <Button
          className={classes.buttonRIGHT}
          variant="contained"
          startIcon={<DeleteIcon />}
          size="large"
          color="secondary"
          onClick={() => dispatch(resetNovoVendedor())}
        >
          Limpar Dados
        </Button>
      </ButtonsContainer>

    </div >
  );

  return (
    <>

      <Button variant="contained" size="large" color="primary" onClick={handleOpen}>
        Adicionar Novo Vendedor
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

export default NovoVendedorPF;