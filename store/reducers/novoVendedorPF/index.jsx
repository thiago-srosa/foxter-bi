import { HYDRATE } from "next-redux-wrapper";
import {
  SET_NOVO_VENDEDOR_NOME_COMPLETO,
  SET_NOVO_VENDEDOR_CPF,
  SET_NOVO_VENDEDOR_RG,
  SET_NOVO_VENDEDOR_EMAIL,
  SET_NOVO_VENDEDOR_TELEFONE,
  SET_NOVO_VENDEDOR_PROFISSAO,
  SET_NOVO_VENDEDOR_ESTADO_CIVIL,
  SET_NOVO_VENDEDOR_REGIME_BENS,
  SET_NOVO_VENDEDOR_CEP,
  SET_NOVO_VENDEDOR_LOGRADOURO,
  SET_NOVO_VENDEDOR_NUMERO,
  SET_NOVO_VENDEDOR_COMPLEMENTO,
  SET_NOVO_VENDEDOR_BAIRRO,
  SET_NOVO_VENDEDOR_CIDADE,
  SET_NOVO_VENDEDOR_OBSERVACAO,
  RESET_NOVO_VENDEDOR,
} from "../../actions";

const initialState = {
  novoVendedorNomeCompleto: '',
  novoVendedorCPF: '',
  novoVendedorRG: '',
  novoVendedorEmail: '',
  novoVendedorTelefone: '',
  novoVendedorProfissao: '',
  novoVendedorEstadoCivil: null,
  novoVendedorRegimeBens: null,
  novoVendedorLogradouro: '',
  novoVendedorNumero: '',
  novoVendedorComplemento: '',
  novoVendedorBairro: '',
  novoVendedorCidade: '',
  novoVendedorCEP: '',
  novoVendedorObservacao: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case HYDRATE:
      return { ...state, ...action.payload.novoVendedorPF };
    case SET_NOVO_VENDEDOR_NOME_COMPLETO:
      return { ...state, novoVendedorNomeCompleto: action.payload };
    case SET_NOVO_VENDEDOR_CPF:
      return { ...state, novoVendedorCPF: action.payload };
    case SET_NOVO_VENDEDOR_RG:
      return { ...state, novoVendedorRG: action.payload };
    case SET_NOVO_VENDEDOR_EMAIL:
      return { ...state, novoVendedorEmail: action.payload };
    case SET_NOVO_VENDEDOR_TELEFONE:
      return { ...state, novoVendedorTelefone: action.payload };
    case SET_NOVO_VENDEDOR_PROFISSAO:
      return { ...state, novoVendedorProfissao: action.payload };
    case SET_NOVO_VENDEDOR_ESTADO_CIVIL:
      return { ...state, novoVendedorEstadoCivil: action.payload };
    case SET_NOVO_VENDEDOR_REGIME_BENS:
      return { ...state, novoVendedorRegimeBens: action.payload };
    case SET_NOVO_VENDEDOR_LOGRADOURO:
      return { ...state, novoVendedorLogradouro: action.payload };
    case SET_NOVO_VENDEDOR_NUMERO:
      return { ...state, novoVendedorNumero: action.payload };
    case SET_NOVO_VENDEDOR_COMPLEMENTO:
      return { ...state, novoVendedorComplemento: action.payload };
    case SET_NOVO_VENDEDOR_BAIRRO:
      return { ...state, novoVendedorBairro: action.payload };
    case SET_NOVO_VENDEDOR_CIDADE:
      return { ...state, novoVendedorCidade: action.payload };
    case SET_NOVO_VENDEDOR_CEP:
      return { ...state, novoVendedorCEP: action.payload };
    case SET_NOVO_VENDEDOR_OBSERVACAO:
      return { ...state, novoVendedorObservacao: action.payload };
    case RESET_NOVO_VENDEDOR:
      return initialState;
    default:
      return state;
  }
};

export default reducer;