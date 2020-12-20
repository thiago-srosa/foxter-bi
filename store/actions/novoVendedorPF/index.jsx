import {
  SET_NOVO_VENDEDOR_NOME_COMPLETO,
  SET_NOVO_VENDEDOR_CPF,
  SET_NOVO_VENDEDOR_RG,
  SET_NOVO_VENDEDOR_EMAIL,
  SET_NOVO_VENDEDOR_TELEFONE,
  SET_NOVO_VENDEDOR_PROFISSAO,
  SET_NOVO_VENDEDOR_ESTADO_CIVIL,
  SET_NOVO_VENDEDOR_REGIME_BENS,
  SET_NOVO_VENDEDOR_ENDERECO,
  SET_NOVO_VENDEDOR_BAIRRO,
  SET_NOVO_VENDEDOR_MUNICIPIO,
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

export const setNovoVendedorEndereco = (endereco) => ({
  type: SET_NOVO_VENDEDOR_ENDERECO,
  payload: endereco,
})

export const setNovoVendedorBairro = (bairro) => ({
  type: SET_NOVO_VENDEDOR_BAIRRO,
  payload: bairro,
})

export const setNovoVendedorMunicipio = (municipio) => ({
  type: SET_NOVO_VENDEDOR_MUNICIPIO,
  payload: municipio,
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