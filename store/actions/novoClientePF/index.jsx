import {
  SET_NOVO_CLIENTE_NOME_COMPLETO,
  SET_NOVO_CLIENTE_CPF,
  SET_NOVO_CLIENTE_RG,
  SET_NOVO_CLIENTE_EMAIL,
  SET_NOVO_CLIENTE_TELEFONE,
  SET_NOVO_CLIENTE_PROFISSAO,
  SET_NOVO_CLIENTE_ESTADO_CIVIL,
  SET_NOVO_CLIENTE_REGIME_BENS,
  SET_NOVO_CLIENTE_ENDERECO,
  SET_NOVO_CLIENTE_BAIRRO,
  SET_NOVO_CLIENTE_MUNICIPIO,
  SET_NOVO_CLIENTE_CEP,
  SET_NOVO_CLIENTE_OBSERVACAO,
  RESET_NOVO_CLIENTE,
} from "..";

export const setNovoClienteNomeCompleto = (nomeCompleto) => ({
  type: SET_NOVO_CLIENTE_NOME_COMPLETO,
  payload: nomeCompleto,
})

export const setNovoClienteCPF = (cpf) => ({
  type: SET_NOVO_CLIENTE_CPF,
  payload: cpf,
})

export const setNovoClienteRG = (rg) => ({
  type: SET_NOVO_CLIENTE_RG,
  payload: rg,
})

export const setNovoClienteEmail = (emails) => ({
  type: SET_NOVO_CLIENTE_EMAIL,
  payload: emails,
})

export const setNovoClienteTelefone = (telefones) => ({
  type: SET_NOVO_CLIENTE_TELEFONE,
  payload: telefones,
})

export const setNovoClienteProfissao = (profissao) => ({
  type: SET_NOVO_CLIENTE_PROFISSAO,
  payload: profissao,
})

export const setNovoClienteEstadoCivil = (estadoCivil) => ({
  type: SET_NOVO_CLIENTE_ESTADO_CIVIL,
  payload: estadoCivil,
})

export const setNovoClienteRegimeBens = (regimeBens) => ({
  type: SET_NOVO_CLIENTE_REGIME_BENS,
  payload: regimeBens,
})

export const setNovoClienteEndereco = (endereco) => ({
  type: SET_NOVO_CLIENTE_ENDERECO,
  payload: endereco,
})

export const setNovoClienteBairro = (bairro) => ({
  type: SET_NOVO_CLIENTE_BAIRRO,
  payload: bairro,
})

export const setNovoClienteMunicipio = (municipio) => ({
  type: SET_NOVO_CLIENTE_MUNICIPIO,
  payload: municipio,
})

export const setNovoClienteCEP = (cep) => ({
  type: SET_NOVO_CLIENTE_CEP,
  payload: cep,
})

export const setNovoClienteObservacao = (observacao) => ({
  type: SET_NOVO_CLIENTE_OBSERVACAO,
  payload: observacao,
})

export const resetNovoCliente = () => {
  return {
    type: RESET_NOVO_CLIENTE,
  };
};