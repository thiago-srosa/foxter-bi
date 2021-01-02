export const SET_NOVO_VENDEDOR_PF_NOME_COMPLETO = "SET_NOVO_VENDEDOR_PF_NOME_COMPLETO";
export const SET_NOVO_VENDEDOR_PF_CPF = "SET_NOVO_VENDEDOR_PF_CPF";
export const SET_NOVO_VENDEDOR_PF_RG = "SET_NOVO_VENDEDOR_PF_RG";
export const SET_NOVO_VENDEDOR_PF_EMAIL = "SET_NOVO_VENDEDOR_PF_EMAILS";
export const SET_NOVO_VENDEDOR_PF_TELEFONE = "SET_NOVO_VENDEDOR_PF_TELEFONES";
export const SET_NOVO_VENDEDOR_PF_PROFISSAO = "SET_NOVO_VENDEDOR_PF_PROFISSAO";
export const SET_NOVO_VENDEDOR_PF_ESTADO_CIVIL = "SET_NOVO_VENDEDOR_PF_ESTADO_CIVIL";
export const SET_NOVO_VENDEDOR_PF_REGIME_BENS = "SET_NOVO_VENDEDOR_PF_REGIME_BENS";
export const SET_NOVO_VENDEDOR_PF_LOGRADOURO = "SET_NOVO_VENDEDOR_PF_LOGRADOURO";
export const SET_NOVO_VENDEDOR_PF_NUMERO = "SET_NOVO_VENDEDOR_PF_NUMERO";
export const SET_NOVO_VENDEDOR_PF_COMPLEMENTO = "SET_NOVO_VENDEDOR_PF_COMPLEMENTO";
export const SET_NOVO_VENDEDOR_PF_BAIRRO = "SET_NOVO_VENDEDOR_PF_BAIRRO";
export const SET_NOVO_VENDEDOR_PF_CIDADE = "SET_NOVO_VENDEDOR_PF_CIDADE";
export const SET_NOVO_VENDEDOR_PF_CEP = "SET_NOVO_VENDEDOR_PF_CEP";
export const SET_NOVO_VENDEDOR_PF_OBSERVACAO = "SET_NOVO_VENDEDOR_PF_OBSERVACAO";
export const RESET_NOVO_VENDEDOR_PF = "RESET_NOVO_VENDEDOR_PF";

export interface NovoVendedorPFState {
  novoVendedorPFNomeCompleto: string,
  novoVendedorPFCPF: number,
  novoVendedorPFRG: number,
  novoVendedorPFEmail: string,
  novoVendedorPFTelefone: number,
  novoVendedorPFProfissao: string,
  novoVendedorPFEstadoCivil: string,
  novoVendedorPFRegimeBens: string,
  novoVendedorPFLogradouro: string,
  novoVendedorPFNumero: number,
  novoVendedorPFComplemento: string,
  novoVendedorPFBairro: string,
  novoVendedorPFCidade: string,
  novoVendedorPFCEP: number,
  novoVendedorPFObservacao: string,
};

export interface SetNovoVendedorPFNomecompletoAction {
  type: typeof SET_NOVO_VENDEDOR_PF_NOME_COMPLETO
  payload: string
}
export interface SetNovoVendedorPFCPFAction {
  type: typeof SET_NOVO_VENDEDOR_PF_CPF
  payload: number
}

export interface SetNovoVendedorPFRGAction {
  type: typeof SET_NOVO_VENDEDOR_PF_RG
  payload: number
}

export interface SetNovoVendedorPFEmailAction {
  type: typeof SET_NOVO_VENDEDOR_PF_EMAIL
  payload: string
}

export interface SetNovoVendedorPFTelefoneAction {
  type: typeof SET_NOVO_VENDEDOR_PF_TELEFONE
  payload: number
}

export interface SetNovoVendedorPFProfissaoAction {
  type: typeof SET_NOVO_VENDEDOR_PF_PROFISSAO
  payload: string
}

export interface SetNovoVendedorPFEstadoCivilAction {
  type: typeof SET_NOVO_VENDEDOR_PF_ESTADO_CIVIL
  payload: string
}

export interface SetNovoVendedorPFRegimeBensAction {
  type: typeof SET_NOVO_VENDEDOR_PF_REGIME_BENS
  payload: string
}

export interface SetNovoVendedorPFLogradouro {
  type: typeof SET_NOVO_VENDEDOR_PF_LOGRADOURO
  payload: string
}

export interface SetNovoVendedorPFNumero {
  type: typeof SET_NOVO_VENDEDOR_PF_NUMERO
  payload: number
}

export interface SetNovoVendedorPFComplemento {
  type: typeof SET_NOVO_VENDEDOR_PF_COMPLEMENTO
  payload: string
}

export interface SetNovoVendedorPFBairro {
  type: typeof SET_NOVO_VENDEDOR_PF_BAIRRO
  payload: string
}

export interface SetNovoVendedorPFCidade {
  type: typeof SET_NOVO_VENDEDOR_PF_CIDADE
  payload: string
}

export interface SetNovoVendedorPFCEP {
  type: typeof SET_NOVO_VENDEDOR_PF_CEP
  payload: number
}

export interface SetNovoVendedorPFObservacao {
  type: typeof SET_NOVO_VENDEDOR_PF_OBSERVACAO
  payload: string
}

export interface ResetNovoVendedorPF {
  type: typeof RESET_NOVO_VENDEDOR_PF
}


export type NovoVendedorPFActionTypes =
  SetNovoVendedorPFNomecompletoAction |
  SetNovoVendedorPFCPFAction |
  SetNovoVendedorPFRGAction |
  SetNovoVendedorPFEmailAction |
  SetNovoVendedorPFTelefoneAction |
  SetNovoVendedorPFProfissaoAction |
  SetNovoVendedorPFEstadoCivilAction |
  SetNovoVendedorPFRegimeBensAction |
  SetNovoVendedorPFLogradouro |
  SetNovoVendedorPFNumero |
  SetNovoVendedorPFComplemento |
  SetNovoVendedorPFBairro |
  SetNovoVendedorPFCidade |
  SetNovoVendedorPFCEP |
  SetNovoVendedorPFObservacao |
  ResetNovoVendedorPF
