import {
  SET_NOVO_VENDEDOR_NOME_COMPLETO,
  SET_NOVO_VENDEDOR_CPF,
  SET_NOVO_VENDEDOR_RG,
  SET_NOVO_VENDEDOR_EMAIL,
  SET_NOVO_VENDEDOR_TELEFONE,
  SET_NOVO_VENDEDOR_PROFISSAO,
  SET_NOVO_VENDEDOR_ESTADO_CIVIL,
  SET_NOVO_VENDEDOR_REGIME_BENS,
  SET_NOVO_VENDEDOR_LOGRADOURO,
  SET_NOVO_VENDEDOR_NUMERO,
  SET_NOVO_VENDEDOR_COMPLEMENTO,
  SET_NOVO_VENDEDOR_BAIRRO,
  SET_NOVO_VENDEDOR_CIDADE,
  SET_NOVO_VENDEDOR_CEP,
  SET_NOVO_VENDEDOR_OBSERVACAO,
  RESET_NOVO_VENDEDOR,
} from "..";

export const setNovoVendedorNomeCompleto = (nomeCompleto) => ({
  type: SET_NOVO_VENDEDOR_NOME_COMPLETO,
  payload: nomeCompleto,
})

export const setNovoVendedorCPF = (cpf) => ({
  type: SET_NOVO_VENDEDOR_CPF,
  payload: cpf,
})

export const setNovoVendedorRG = (rg) => ({
  type: SET_NOVO_VENDEDOR_RG,
  payload: rg,
})

export const setNovoVendedorEmail = (emails) => ({
  type: SET_NOVO_VENDEDOR_EMAIL,
  payload: emails,
})

export const setNovoVendedorTelefone = (telefones) => ({
  type: SET_NOVO_VENDEDOR_TELEFONE,
  payload: telefones,
})

export const setNovoVendedorProfissao = (profissao) => ({
  type: SET_NOVO_VENDEDOR_PROFISSAO,
  payload: profissao,
})

export const setNovoVendedorEstadoCivil = (estadoCivil) => ({
  type: SET_NOVO_VENDEDOR_ESTADO_CIVIL,
  payload: estadoCivil,
})

export const setNovoVendedorRegimeBens = (regimeBens) => ({
  type: SET_NOVO_VENDEDOR_REGIME_BENS,
  payload: regimeBens,
})

export const setNovoVendedorLogradouro = (logradouro) => ({
  type: SET_NOVO_VENDEDOR_LOGRADOURO,
  payload: logradouro,
})

export const setNovoVendedorNumero = (numero) => ({
  type: SET_NOVO_VENDEDOR_NUMERO,
  payload: numero,
})

export const setNovoVendedorComplemento = (complemento) => ({
  type: SET_NOVO_VENDEDOR_COMPLEMENTO,
  payload: complemento,
})

export const setNovoVendedorBairro = (bairro) => ({
  type: SET_NOVO_VENDEDOR_BAIRRO,
  payload: bairro,
})

export const setNovoVendedorCidade = (cidade) => ({
  type: SET_NOVO_VENDEDOR_CIDADE,
  payload: cidade,
})

export const setNovoVendedorCEP = (cep) => ({
  type: SET_NOVO_VENDEDOR_CEP,
  payload: cep,
})

export const setNovoVendedorObservacao = (observacao) => ({
  type: SET_NOVO_VENDEDOR_OBSERVACAO,
  payload: observacao,
})

export const resetNovoVendedor = () => {
  return {
    type: RESET_NOVO_VENDEDOR,
  };
};