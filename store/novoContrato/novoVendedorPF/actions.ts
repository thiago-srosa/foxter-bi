import {
  SET_NOVO_VENDEDOR_PF_NOME_COMPLETO,
  SET_NOVO_VENDEDOR_PF_CPF,
  SET_NOVO_VENDEDOR_PF_RG,
  SET_NOVO_VENDEDOR_PF_EMAIL,
  SET_NOVO_VENDEDOR_PF_TELEFONE,
  SET_NOVO_VENDEDOR_PF_PROFISSAO,
  SET_NOVO_VENDEDOR_PF_ESTADO_CIVIL,
  SET_NOVO_VENDEDOR_PF_REGIME_BENS,
  SET_NOVO_VENDEDOR_PF_LOGRADOURO,
  SET_NOVO_VENDEDOR_PF_NUMERO,
  SET_NOVO_VENDEDOR_PF_COMPLEMENTO,
  SET_NOVO_VENDEDOR_PF_BAIRRO,
  SET_NOVO_VENDEDOR_PF_CIDADE,
  SET_NOVO_VENDEDOR_PF_CEP,
  SET_NOVO_VENDEDOR_PF_OBSERVACAO,
  RESET_NOVO_VENDEDOR_PF,
} from './types';

export const setNovoVendedorPFNomeCompleto = (nomeCompleto: string) => ({
  type: SET_NOVO_VENDEDOR_PF_NOME_COMPLETO,
  payload: nomeCompleto,
})

export const setNovoVendedorPFCPF = (cpf: string) => ({
  type: SET_NOVO_VENDEDOR_PF_CPF,
  payload: cpf,
})

export const setNovoVendedorPFRG = (rg: number) => ({
  type: SET_NOVO_VENDEDOR_PF_RG,
  payload: rg,
})

export const setNovoVendedorPFEmail = (emails: string) => ({
  type: SET_NOVO_VENDEDOR_PF_EMAIL,
  payload: emails,
})

export const setNovoVendedorPFTelefone = (telefones: number) => ({
  type: SET_NOVO_VENDEDOR_PF_TELEFONE,
  payload: telefones,
})

export const setNovoVendedorPFProfissao = (profissao: string) => ({
  type: SET_NOVO_VENDEDOR_PF_PROFISSAO,
  payload: profissao,
})

export const setNovoVendedorPFEstadoCivil = (estadoCivil: string) => ({
  type: SET_NOVO_VENDEDOR_PF_ESTADO_CIVIL,
  payload: estadoCivil,
})

export const setNovoVendedorPFRegimeBens = (regimeBens: string) => ({
  type: SET_NOVO_VENDEDOR_PF_REGIME_BENS,
  payload: regimeBens,
})

export const setNovoVendedorPFLogradouro = (logradouro: string) => ({
  type: SET_NOVO_VENDEDOR_PF_LOGRADOURO,
  payload: logradouro,
})

export const setNovoVendedorPFNumero = (numero: number) => ({
  type: SET_NOVO_VENDEDOR_PF_NUMERO,
  payload: numero,
})

export const setNovoVendedorPFComplemento = (complemento: string) => ({
  type: SET_NOVO_VENDEDOR_PF_COMPLEMENTO,
  payload: complemento,
})

export const setNovoVendedorPFBairro = (bairro: string) => ({
  type: SET_NOVO_VENDEDOR_PF_BAIRRO,
  payload: bairro,
})

export const setNovoVendedorPFCidade = (cidade: string) => ({
  type: SET_NOVO_VENDEDOR_PF_CIDADE,
  payload: cidade,
})

export const setNovoVendedorPFCEP = (cep: number) => ({
  type: SET_NOVO_VENDEDOR_PF_CEP,
  payload: cep,
})

export const setNovoVendedorPFObservacao = (observacao: string) => ({
  type: SET_NOVO_VENDEDOR_PF_OBSERVACAO,
  payload: observacao,
})

export const resetNovoVendedorPF = () => {
  return {
    type: RESET_NOVO_VENDEDOR_PF,
  };
};