import {
  SET_NOVO_VENDEDOR_PF_NOME_COMPLETO,
  SET_NOVO_VENDEDOR_PF_CPF,
  SET_NOVO_VENDEDOR_PF_RG,
  SET_NOVO_VENDEDOR_PF_EMAIL,
  SET_NOVO_VENDEDOR_PF_TELEFONE,
  SET_NOVO_VENDEDOR_PF_PROFISSAO,
  SET_NOVO_VENDEDOR_PF_ESTADO_CIVIL,
  SET_NOVO_VENDEDOR_PF_REGIME_BENS,
  SET_NOVO_VENDEDOR_PF_CEP,
  SET_NOVO_VENDEDOR_PF_LOGRADOURO,
  SET_NOVO_VENDEDOR_PF_NUMERO,
  SET_NOVO_VENDEDOR_PF_COMPLEMENTO,
  SET_NOVO_VENDEDOR_PF_BAIRRO,
  SET_NOVO_VENDEDOR_PF_CIDADE,
  SET_NOVO_VENDEDOR_PF_OBSERVACAO,
  RESET_NOVO_VENDEDOR_PF,
  NovoVendedorPFState,
  NovoVendedorPFActionTypes,
} from "./types";

const initialState: NovoVendedorPFState = {
  novoVendedorPFNomeCompleto: null,
  novoVendedorPFCPF: null,
  novoVendedorPFRG: null,
  novoVendedorPFEmail: null,
  novoVendedorPFTelefone: null,
  novoVendedorPFProfissao: null,
  novoVendedorPFEstadoCivil: null,
  novoVendedorPFRegimeBens: null,
  novoVendedorPFLogradouro: null,
  novoVendedorPFNumero: null,
  novoVendedorPFComplemento: null,
  novoVendedorPFBairro: null,
  novoVendedorPFCidade: null,
  novoVendedorPFCEP: null,
  novoVendedorPFObservacao: null,
};

export function NovoVendedorPFReducer(
  state = initialState,
  action: NovoVendedorPFActionTypes
): NovoVendedorPFState {

  switch (action.type) {
    case SET_NOVO_VENDEDOR_PF_NOME_COMPLETO:
      return { ...state, novoVendedorPFNomeCompleto: action.payload };
    case SET_NOVO_VENDEDOR_PF_CPF:
      return { ...state, novoVendedorPFCPF: action.payload };
    case SET_NOVO_VENDEDOR_PF_RG:
      return { ...state, novoVendedorPFRG: action.payload };
    case SET_NOVO_VENDEDOR_PF_EMAIL:
      return { ...state, novoVendedorPFEmail: action.payload };
    case SET_NOVO_VENDEDOR_PF_TELEFONE:
      return { ...state, novoVendedorPFTelefone: action.payload };
    case SET_NOVO_VENDEDOR_PF_PROFISSAO:
      return { ...state, novoVendedorPFProfissao: action.payload };
    case SET_NOVO_VENDEDOR_PF_ESTADO_CIVIL:
      return { ...state, novoVendedorPFEstadoCivil: action.payload };
    case SET_NOVO_VENDEDOR_PF_REGIME_BENS:
      return { ...state, novoVendedorPFRegimeBens: action.payload };
    case SET_NOVO_VENDEDOR_PF_LOGRADOURO:
      return { ...state, novoVendedorPFLogradouro: action.payload };
    case SET_NOVO_VENDEDOR_PF_NUMERO:
      return { ...state, novoVendedorPFNumero: action.payload };
    case SET_NOVO_VENDEDOR_PF_COMPLEMENTO:
      return { ...state, novoVendedorPFComplemento: action.payload };
    case SET_NOVO_VENDEDOR_PF_BAIRRO:
      return { ...state, novoVendedorPFBairro: action.payload };
    case SET_NOVO_VENDEDOR_PF_CIDADE:
      return { ...state, novoVendedorPFCidade: action.payload };
    case SET_NOVO_VENDEDOR_PF_CEP:
      return { ...state, novoVendedorPFCEP: action.payload };
    case SET_NOVO_VENDEDOR_PF_OBSERVACAO:
      return { ...state, novoVendedorPFObservacao: action.payload };
    case RESET_NOVO_VENDEDOR_PF:
      return initialState;
    default:
      return state;
  }
};

export default NovoVendedorPFReducer;
