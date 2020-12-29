import {
  ADD_NOVO_CONTRATO_VENDEDORES,
  SET_VALOR_TOTAL_VENDA,
  SET_VALOR_LIQUIDO_VENDA,
  SET_VALOR_CORRETAGEM_VENDA,
  SET_PERCENTUAL_CORRETAGEM_VENDA,

  RESET_NOVO_CONTRATO,
} from "..";

export const addNovoContratoVendedores = (novoContratoVendedores) => ({
  type: ADD_NOVO_CONTRATO_VENDEDORES,
  payload: novoContratoVendedores,
})

export const setValorTotalVenda = (valorTotalVenda) => ({
  type: SET_VALOR_TOTAL_VENDA,
  payload: valorTotalVenda,
})

export const setValorLiquidoVenda = (valorLiquidoVenda) => ({
  type: SET_VALOR_LIQUIDO_VENDA,
  payload: valorLiquidoVenda,
})

export const setValorCorretagemVenda = (valorCorretagemVenda) => ({
  type: SET_VALOR_CORRETAGEM_VENDA,
  payload: valorCorretagemVenda,
})

export const setPercentualCorretagemVenda = (percentualCorretagemVenda) => ({
  type: SET_PERCENTUAL_CORRETAGEM_VENDA,
  payload: percentualCorretagemVenda,
})