import { useEffect, useState } from 'react';

//Import Axios
import axios from 'axios';

//CPF Validator
import { cpf } from 'cpf-cnpj-validator';

//EMAIL Validor
import * as EmailValidator from 'email-validator';

//CEP Validator
import isValidCep from '@brazilian-utils/is-valid-cep';

//Import Material UI Components
import Modal from '@material-ui/core/Modal';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Button from '@material-ui/core/Button';

//Import Material UI Icons
import CloseIcon from '@material-ui/icons/Close';

//Import Material UI Icons
import SaveIcon from '@material-ui/icons/Save';
import DeleteIcon from '@material-ui/icons/Delete';

//Import styles.jsx
import {
  AutoCompleteContainer,
  ButtonsContainer,
  HeaderContainer,
  CloseIconContainer,
  H2,
  useStyles,
} from './styles'

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
  setNovoVendedorLogradouro,
  setNovoVendedorNumero,
  setNovoVendedorComplemento,
  setNovoVendedorBairro,
  setNovoVendedorCidade,
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
    novoVendedorRegimeBens,
    novoVendedorLogradouro,
    novoVendedorNumero,
    novoVendedorComplemento,
    novoVendedorBairro,
    novoVendedorCidade,
    novoVendedorCEP,
    novoVendedorObservacao,
  } = useSelector((state) => state.novoVendedorPF);

  const classes = useStyles();

  const [open, setOpen] = useState(false);
  const [erroNovoVendedorNomeCompleto, setErroNovoVendedorNomeCompleto] = useState(false);
  const [erroNovoVendedorCPF, setErroNovoVendedorCPF] = useState(false);
  const [erroNovoVendedorRG, setErroNovoVendedorRG] = useState(false);
  const [erroNovoVendedorEmail, setErroNovoVendedorEmail] = useState(false);
  const [erroNovoVendedorProfissao, setErroNovoVendedorProfissao] = useState(false);
  const [erroNovoVendedorEstadoCivil, setErroNovoVendedorEstadoCivil] = useState(false);
  const [erroNovoVendedorRegimeBens, setErroNovoVendedorRegimeBens] = useState(false);
  const [erroNovoVendedorNumero, setErroNovoVendedorNumero] = useState(false);
  const [erroNovoVendedorCEP, setErroNovoVendedorCEP] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCEPchange = (postalCode) => {
    dispatch(setNovoVendedorCEP(postalCode))
    if (postalCode.length === 8) {
      const cepPromisse = axios.get('https://viacep.com.br/ws/' + postalCode + '/json/')
      cepPromisse.then((result) => {
        if (!result.data.erro) {
          dispatch(setNovoVendedorCEP(postalCode))
          dispatch(setNovoVendedorCidade(result.data.localidade))
          dispatch(setNovoVendedorBairro(result.data.bairro))
          dispatch(setNovoVendedorLogradouro(result.data.logradouro))
          setErroNovoVendedorCEP(false)
        }
        else {
          console.log('CEP error')
          dispatch(setNovoVendedorCEP(postalCode))
          dispatch(setNovoVendedorCidade(''))
          dispatch(setNovoVendedorBairro(''))
          dispatch(setNovoVendedorLogradouro(''))
          setErroNovoVendedorCEP(true)
        }
      }).catch(() => console.log('Erro na busca do CEP'))
    }
    else {
      dispatch(setNovoVendedorCEP(postalCode))
      dispatch(setNovoVendedorCidade(''))
      dispatch(setNovoVendedorBairro(''))
      dispatch(setNovoVendedorLogradouro(''))
    }
  }

  const estadoCivil = [
    { title: 'Solteiro(a)' },
    { title: 'Casado(a)' },
    { title: 'Separado(a)' },
    { title: 'Divorciado(a)' },
    { title: 'Viúvo(a)' },
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
    var erro = 0;

    if (!novoVendedorNomeCompleto) {
      erro++
      setErroNovoVendedorNomeCompleto(true)
    } else { setErroNovoVendedorNomeCompleto(false) }

    if (!cpf.isValid(novoVendedorCPF)) {
      erro++
      setErroNovoVendedorCPF(true)
    } else { setErroNovoVendedorCPF(false) }

    if (!novoVendedorRG) {
      erro++
      setErroNovoVendedorRG(true)
    } else { setErroNovoVendedorRG(false) }

    if (!EmailValidator.validate(novoVendedorEmail)) {
      erro++
      setErroNovoVendedorEmail(true)
    } else { setErroNovoVendedorEmail(false) }

    if (!novoVendedorProfissao) {
      erro++
      setErroNovoVendedorProfissao(true)
    } else { setErroNovoVendedorProfissao(false) }

    if (!novoVendedorEstadoCivil) {
      erro++
      setErroNovoVendedorEstadoCivil(true)
    } else { setErroNovoVendedorEstadoCivil(false) }

    if (!novoVendedorNumero) {
      erro++
      setErroNovoVendedorNumero(true)
    } else { setErroNovoVendedorNumero(false) }

    if (novoVendedorCEP.length !== 8) {
      erro++
      setErroNovoVendedorCEP(true)
    } 

    if (
      novoVendedorEstadoCivil === "Casado(a)" ||
      novoVendedorEstadoCivil === "União Estável"
    ) {
      if (!novoVendedorRegimeBens) {
        erro++
        setErroNovoVendedorRegimeBens(true)
      } else { setErroNovoVendedorRegimeBens(false) }
    }

    if (erro === 0) {
      dispatch(addNovoContratoVendedores({
        novoVendedorNomeCompleto: novoVendedorNomeCompleto,
        novoVendedorCPF: novoVendedorCPF,
        novoVendedorRG: novoVendedorRG,
        novoVendedorEmail: novoVendedorEmail,
        novoVendedorTelefone: novoVendedorTelefone,
        novoVendedorProfissao: novoVendedorProfissao,
        novoVendedorEstadoCivil: novoVendedorEstadoCivil,
        novoVendedorRegimeBens: novoVendedorRegimeBens,
        novoVendedorLogradouro: novoVendedorLogradouro,
        novoVendedorNumero: novoVendedorNumero,
        novoVendedorComplemento: novoVendedorComplemento,
        novoVendedorBairro: novoVendedorBairro,
        novoVendedorCidade: novoVendedorCidade,
        novoVendedorCEP: novoVendedorCEP,
        novoVendedorObservacao: novoVendedorObservacao,
      }))
      dispatch(resetNovoVendedor())
      handleClose();
    }
  }

  const modalBody = (
    <>

      <div className={classes.paper}>

        <HeaderContainer>
          <H2>Adicionar novo VENDEDOR</H2>
          <CloseIconContainer onClick={() => handleClose()}><CloseIcon fontSize='large' /></CloseIconContainer>
        </HeaderContainer>

        <form className={classes.root} noValidate autoComplete='off'>

          <TextField
            className={classes.textField}
            label="Nome completo do vendedor"
            id="nomeCompleto"
            fullWidth
            required
            value={novoVendedorNomeCompleto}
            autoComplete='off'
            error={erroNovoVendedorNomeCompleto}
            onChange={e => dispatch(setNovoVendedorNomeCompleto(e.target.value))}
          />

          <TextField
            className={classes.inputModal50percentLEFT}
            id="CPFVendedor"
            label="CPF do vendedor"
            fullWidth
            required
            autoComplete='off'
            error={novoVendedorCPF.length >= 14 ? !cpf.isValid(novoVendedorCPF) : erroNovoVendedorCPF}
            value={novoVendedorCPF}
            helperText={erroNovoVendedorCPF ? 'CPF Inválido' : null}
            onChange={e => dispatch(setNovoVendedorCPF(cpf.format(e.target.value)))}
          />

          <TextField
            className={classes.inputModal50percentRIGHT}
            id="RGVendedor"
            label="RG do vendedor"
            fullWidth
            required
            error={erroNovoVendedorRG}
            value={novoVendedorRG}
            autoComplete='off'
            onChange={e => dispatch(setNovoVendedorRG(e.target.value))}
          />

          <TextField
            className={classes.inputModal50percentLEFT}
            id="EmailVendedor"
            label="E-mail"
            error={erroNovoVendedorEmail}
            helperText={erroNovoVendedorEmail ? "E-mail Inválido" : false}
            fullWidth
            required
            error={erroNovoVendedorEmail}
            autoComplete='off'
            value={novoVendedorEmail}
            onChange={e => dispatch(setNovoVendedorEmail(e.target.value))}
          />

          <TextField
            className={classes.inputModal50percentRIGHT}
            value={novoVendedorTelefone}
            label="Telefone"
            id="TelefoneVendedor"
            fullWidth
            autoComplete='off'
            onChange={e => dispatch(setNovoVendedorTelefone(e.target.value.replace(/\D/g, "")))}
          />

          <TextField
            className={classes.textField}
            id="ProfissaoVendedor"
            label="Profissão"
            required
            fullWidth
            error={erroNovoVendedorProfissao}
            value={novoVendedorProfissao}
            autoComplete='off'
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
                  error={erroNovoVendedorEstadoCivil}
                  autoComplete='off'
                  label='Situação Civil'
                />}
            />
            {(novoVendedorEstadoCivil === null ||
              novoVendedorEstadoCivil === "Solteiro(a)" ||
              novoVendedorEstadoCivil === "Separado(a)" ||
              novoVendedorEstadoCivil === "Divorciado(a)" ||
              novoVendedorEstadoCivil === "Viúvo(a)"
            ) ? null :
              <Autocomplete
                className={classes.inputModal50percentRIGHT}
                fullWidth
                options={regimeBens}
                getOptionLabel={option => typeof option === 'string' ? option : option.title}
                value={novoVendedorRegimeBens}
                getOptionSelected={(option, value) => option.title === value}
                onChange={(event, newValue) => dispatch(setNovoVendedorRegimeBens(newValue))}
                renderInput={(params) =>
                  <TextField
                    {...params}
                    required
                    error={erroNovoVendedorRegimeBens}
                    autoComplete="off"
                    label="Regime de Bens"
                  />}
              />}
          </AutoCompleteContainer>

          <TextField
            className={classes.textField}
            id="CEPVendedor"
            label="CEP da residência do vendedor"
            fullWidth
            required
            autoComplete='off'
            error={erroNovoVendedorCEP}
            helperText={erroNovoVendedorCEP ? "CEP Inválido" : null}
            value={novoVendedorCEP}
            onChange={e => handleCEPchange(e.target.value)}
          />

          <TextField
            className={classes.textField}
            id="LogradouroVendedor"
            label="Logradouro"
            fullWidth
            disabled
            autoComplete='off'
            value={novoVendedorLogradouro}
          />

          <TextField
            className={classes.inputModal50percentLEFT}
            id="Numero"
            label="Número"
            fullWidth
            required
            autoComplete='off'
            error={erroNovoVendedorNumero}
            value={novoVendedorNumero}
            onChange={e => dispatch(setNovoVendedorNumero(e.target.value))}
          />

          <TextField
            className={classes.inputModal50percentRIGHT}
            id="Complemento"
            label="Complemento"
            fullWidth
            autoComplete='off'
            value={novoVendedorComplemento}
            onChange={e => dispatch(setNovoVendedorComplemento(e.target.value))}
          />

          <TextField
            className={classes.inputModal50percentLEFT}
            id="BairroVendedor"
            label="Bairro"
            fullWidth
            autoComplete='off'
            disabled
            value={novoVendedorBairro}
          />

          <TextField
            className={classes.inputModal50percentRIGHT}
            id="CidadeVendedor"
            label='Cidade'
            fullWidth
            autoComplete='off'
            value={novoVendedorCidade}
            disabled
          />

          <TextField
            className={classes.textField}
            id="ObservacoesVendedor"
            label="Observações:"
            fullWidth
            autoComplete='off'
            rows={3}
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
    </>
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