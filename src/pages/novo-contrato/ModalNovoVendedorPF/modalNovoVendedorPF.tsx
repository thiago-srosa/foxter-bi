//REACT
import { useState } from 'react'
//AXIOS
import axios from 'axios'
//CPF VALIDATOR
import { cpf } from 'cpf-cnpj-validator'
//EMAIL VALIDATOR
import * as EmailValidator from 'email-validator'
//REACT-REDUX
import { useSelector, useDispatch } from "react-redux";
//STORE => NOVO_VENDEDOR_PF  ACTIONS
import {
  setNovoVendedorPFNomeCompleto,
  setNovoVendedorPFCPF,
  setNovoVendedorPFRG,
  setNovoVendedorPFEmail,
  setNovoVendedorPFTelefone,
  setNovoVendedorPFProfissao,
  setNovoVendedorPFEstadoCivil,
  setNovoVendedorPFRegimeBens,
  setNovoVendedorPFLogradouro,
  setNovoVendedorPFNumero,
  setNovoVendedorPFComplemento,
  setNovoVendedorPFBairro,
  setNovoVendedorPFCidade,
  setNovoVendedorPFCEP,
  setNovoVendedorPFObservacao,
  resetNovoVendedorPF,
} from "../../../../store/novoContrato/novoVendedorPF/actions";
//STORE => NOVO CONTRATO ACTIONS
import { addNovoContratoVendedores } from "../../../../store/novoContrato/actions";
//STORE => TYPE ROOT STATE
import { RootState } from '../../../../store/reducers'
//LOADABLE/COMPONENT
import loadable from '@loadable/component'

const CloseIcon = loadable(() => import('@material-ui/icons/Close'))
const SaveIcon = loadable(() => import('@material-ui/icons/Save'))
const DeleteIcon = loadable(() => import('@material-ui/icons/Delete'))
const Modal = loadable(() => import('@material-ui/core/Modal'))
const TextField = loadable(() => import('@material-ui/core/TextField'))
const Autocomplete = loadable(() => import('@material-ui/lab/Autocomplete'))
const Button = loadable(() => import('@material-ui/core/Button'))

//CUSTOM COMPONENTS
import {
  AutoCompleteContainer,
  ButtonsContainer,
  HeaderContainer,
  CloseIconContainer,
  H2,
  useStyles,
} from './styles'


const NovoVendedorPF = () => {
  const dispatch = useDispatch();
  const {
    novoVendedorPFNomeCompleto,
    novoVendedorPFCPF,
    novoVendedorPFRG,
    novoVendedorPFEmail,
    novoVendedorPFTelefone,
    novoVendedorPFProfissao,
    novoVendedorPFEstadoCivil,
    novoVendedorPFRegimeBens,
    novoVendedorPFLogradouro,
    novoVendedorPFNumero,
    novoVendedorPFComplemento,
    novoVendedorPFBairro,
    novoVendedorPFCidade,
    novoVendedorPFCEP,
    novoVendedorPFObservacao,
  } = useSelector((state: RootState) => state.novoVendedorPF);

  const classes = useStyles();

  const [open, setOpen] = useState(false);
  const [erroNovoVendedorPFNomeCompleto, setErroNovoVendedorPFNomeCompleto] = useState(false);
  const [erroNovoVendedorPFCPF, setErroNovoVendedorPFCPF] = useState(false);
  const [erroNovoVendedorPFRG, setErroNovoVendedorPFRG] = useState(false);
  const [erroNovoVendedorPFEmail, setErroNovoVendedorPFEmail] = useState(false);
  const [erroNovoVendedorPFProfissao, setErroNovoVendedorPFProfissao] = useState(false);
  const [erroNovoVendedorPFEstadoCivil, setErroNovoVendedorPFEstadoCivil] = useState(false);
  const [erroNovoVendedorPFRegimeBens, setErroNovoVendedorPFRegimeBens] = useState(false);
  const [erroNovoVendedorPFNumero, setErroNovoVendedorPFNumero] = useState(false);
  const [erroNovoVendedorPFCEP, setErroNovoVendedorPFCEP] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCEPchange = (postalCode) => {
    dispatch(setNovoVendedorPFCEP(postalCode))
    if (postalCode.length === 8) {
      const cepPromisse = axios.get('https://viacep.com.br/ws/' + postalCode + '/json/')
      cepPromisse.then((result) => {
        if (!result.data.erro) {
          dispatch(setNovoVendedorPFCEP(postalCode))
          dispatch(setNovoVendedorPFCidade(result.data.localidade))
          dispatch(setNovoVendedorPFBairro(result.data.bairro))
          dispatch(setNovoVendedorPFLogradouro(result.data.logradouro))
          setErroNovoVendedorPFCEP(false)
        }
        else {
          console.log('CEP error')
          dispatch(setNovoVendedorPFCEP(postalCode))
          dispatch(setNovoVendedorPFCidade(''))
          dispatch(setNovoVendedorPFBairro(''))
          dispatch(setNovoVendedorPFLogradouro(''))
          setErroNovoVendedorPFCEP(true)
        }
      }).catch(() => console.log('Erro na busca do CEP'))
    }
    else {
      dispatch(setNovoVendedorPFCEP(postalCode))
      dispatch(setNovoVendedorPFCidade(''))
      dispatch(setNovoVendedorPFBairro(''))
      dispatch(setNovoVendedorPFLogradouro(''))
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
    newValue !== null ? dispatch(setNovoVendedorPFEstadoCivil(newValue.title)) : dispatch(setNovoVendedorPFEstadoCivil(null))
  }

  function handleClickChangeRegimeBens(newValue) {
    newValue !== null ? dispatch(setNovoVendedorPFRegimeBens(newValue.title)) : dispatch(setNovoVendedorPFRegimeBens(null))
  }

  function handleClickAddVendedorPF() {
    var erro = 0;

    if (!novoVendedorPFNomeCompleto) {
      erro++
      setErroNovoVendedorPFNomeCompleto(true)
    } else { setErroNovoVendedorPFNomeCompleto(false) }

    if (!cpf.isValid(novoVendedorPFCPF.toString())) {
      erro++
      setErroNovoVendedorPFCPF(true)
    } else { setErroNovoVendedorPFCPF(false) }

    if (!novoVendedorPFRG) {
      erro++
      setErroNovoVendedorPFRG(true)
    } else { setErroNovoVendedorPFRG(false) }

    if (!EmailValidator.validate(novoVendedorPFEmail)) {
      erro++
      setErroNovoVendedorPFEmail(true)
    } else { setErroNovoVendedorPFEmail(false) }

    if (!novoVendedorPFProfissao) {
      erro++
      setErroNovoVendedorPFProfissao(true)
    } else { setErroNovoVendedorPFProfissao(false) }

    if (!novoVendedorPFEstadoCivil) {
      erro++
      setErroNovoVendedorPFEstadoCivil(true)
    } else { setErroNovoVendedorPFEstadoCivil(false) }

    if (!novoVendedorPFNumero) {
      erro++
      setErroNovoVendedorPFNumero(true)
    } else { setErroNovoVendedorPFNumero(false) }

    if (novoVendedorPFCEP.toString().length !== 8) {
      erro++
      setErroNovoVendedorPFCEP(true)
    }

    if (
      novoVendedorPFEstadoCivil === "Casado(a)" ||
      novoVendedorPFEstadoCivil === "União Estável"
    ) {
      if (!novoVendedorPFRegimeBens) {
        erro++
        setErroNovoVendedorPFRegimeBens(true)
      } else { setErroNovoVendedorPFRegimeBens(false) }
    }

    if (erro === 0) {
      dispatch(addNovoContratoVendedores({
        novoVendedorPFNomeCompleto: novoVendedorPFNomeCompleto,
        novoVendedorPFCPF: novoVendedorPFCPF,
        novoVendedorPFRG: novoVendedorPFRG,
        novoVendedorPFEmail: novoVendedorPFEmail,
        novoVendedorPFTelefone: novoVendedorPFTelefone,
        novoVendedorPFProfissao: novoVendedorPFProfissao,
        novoVendedorPFEstadoCivil: novoVendedorPFEstadoCivil,
        novoVendedorPFRegimeBens: novoVendedorPFRegimeBens,
        novoVendedorPFLogradouro: novoVendedorPFLogradouro,
        novoVendedorPFNumero: novoVendedorPFNumero,
        novoVendedorPFComplemento: novoVendedorPFComplemento,
        novoVendedorPFBairro: novoVendedorPFBairro,
        novoVendedorPFCidade: novoVendedorPFCidade,
        novoVendedorPFCEP: novoVendedorPFCEP,
        novoVendedorPFObservacao: novoVendedorPFObservacao,
      }))
      dispatch(resetNovoVendedorPF())
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
            value={novoVendedorPFNomeCompleto}
            autoComplete='off'
            error={erroNovoVendedorPFNomeCompleto}
            onChange={e => dispatch(setNovoVendedorPFNomeCompleto(e.target.value))}
          />

          <TextField
            className={classes.inputModal50percentLEFT}
            id="CPFVendedor"
            label="CPF do vendedor"
            fullWidth
            required
            autoComplete='off'
            // error={novoVendedorPFCPF.toString().length >= 14 ? !cpf.isValid(novoVendedorPFCPF.toString()) : erroNovoVendedorPFCPF}
            value={novoVendedorPFCPF}
            helperText={erroNovoVendedorPFCPF ? 'CPF Inválido' : null}
            onChange={e => dispatch(setNovoVendedorPFCPF(+cpf.format(e.target.value)))}
          />

          <TextField
            className={classes.inputModal50percentRIGHT}
            id="RGVendedor"
            label="RG do vendedor"
            fullWidth
            required
            error={erroNovoVendedorPFRG}
            value={novoVendedorPFRG}
            autoComplete='off'
            onChange={e => dispatch(setNovoVendedorPFRG(+e.target.value))}
          />

          <TextField
            className={classes.inputModal50percentLEFT}
            id="EmailVendedor"
            label="E-mail"
            error={erroNovoVendedorPFEmail}
            helperText={erroNovoVendedorPFEmail ? "E-mail Inválido" : false}
            fullWidth
            required
            //error={erroNovoVendedorPFEmail}
            autoComplete='off'
            value={novoVendedorPFEmail}
            onChange={e => dispatch(setNovoVendedorPFEmail(e.target.value))}
          />

          <TextField
            className={classes.inputModal50percentRIGHT}
            value={novoVendedorPFTelefone}
            label="Telefone"
            id="TelefoneVendedor"
            fullWidth
            autoComplete='off'
            onChange={e => dispatch(setNovoVendedorPFTelefone(+e.target.value.replace(/\D/g, "")))}
          />

          <TextField
            className={classes.textField}
            id="ProfissaoVendedor"
            label="Profissão"
            required
            fullWidth
            error={erroNovoVendedorPFProfissao}
            value={novoVendedorPFProfissao}
            autoComplete='off'
            onChange={e => dispatch(setNovoVendedorPFProfissao(e.target.value))}
          />

          <AutoCompleteContainer>
            <Autocomplete
              className={classes.inputModal50percentLEFT}
              fullWidth
              options={estadoCivil}
              //getOptionLabel={option => typeof option === 'string' ? option : option.title}
              //getOptionSelected={(option, value) => option.title === value}
              value={novoVendedorPFEstadoCivil}
              onChange={(event, newValue) => handleClickChangeEstadoCivil(newValue)}
              renderInput={(params) =>
                <TextField
                  {...params}
                  required
                  error={erroNovoVendedorPFEstadoCivil}
                  autoComplete='off'
                  label='Situação Civil'
                />}
            />
            {(novoVendedorPFEstadoCivil === null ||
              novoVendedorPFEstadoCivil === "Solteiro(a)" ||
              novoVendedorPFEstadoCivil === "Separado(a)" ||
              novoVendedorPFEstadoCivil === "Divorciado(a)" ||
              novoVendedorPFEstadoCivil === "Viúvo(a)"
            ) ? null :
              <Autocomplete
                className={classes.inputModal50percentRIGHT}
                fullWidth
                options={regimeBens}
                //getOptionLabel={option => typeof option === 'string' ? option : option.title}
                value={novoVendedorPFRegimeBens}
                //getOptionSelected={(option, value) => option.title === value}
                //onChange={(event, newValue) => dispatch(setNovoVendedorPFRegimeBens(newValue))}
                renderInput={(params) =>
                  <TextField
                    {...params}
                    required
                    error={erroNovoVendedorPFRegimeBens}
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
            error={erroNovoVendedorPFCEP}
            helperText={erroNovoVendedorPFCEP ? "CEP Inválido" : null}
            value={novoVendedorPFCEP}
            onChange={e => handleCEPchange(e.target.value)}
          />

          <TextField
            className={classes.textField}
            id="LogradouroVendedor"
            label="Logradouro"
            fullWidth
            disabled
            autoComplete='off'
            value={novoVendedorPFLogradouro}
          />

          <TextField
            className={classes.inputModal50percentLEFT}
            id="Numero"
            label="Número"
            fullWidth
            required
            autoComplete='off'
            error={erroNovoVendedorPFNumero}
            value={novoVendedorPFNumero}
            onChange={e => dispatch(setNovoVendedorPFNumero(+e.target.value))}
          />

          <TextField
            className={classes.inputModal50percentRIGHT}
            id="Complemento"
            label="Complemento"
            fullWidth
            autoComplete='off'
            value={novoVendedorPFComplemento}
            onChange={e => dispatch(setNovoVendedorPFComplemento(e.target.value))}
          />

          <TextField
            className={classes.inputModal50percentLEFT}
            id="BairroVendedor"
            label="Bairro"
            fullWidth
            autoComplete='off'
            disabled
            value={novoVendedorPFBairro}
          />

          <TextField
            className={classes.inputModal50percentRIGHT}
            id="CidadeVendedor"
            label='Cidade'
            fullWidth
            autoComplete='off'
            value={novoVendedorPFCidade}
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
            value={novoVendedorPFObservacao}
            onChange={e => dispatch(setNovoVendedorPFObservacao(e.target.value))}
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
            onClick={() => dispatch(resetNovoVendedorPF())}
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