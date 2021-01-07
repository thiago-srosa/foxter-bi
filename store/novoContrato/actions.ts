import {
  SET_NOVO_CONTRATO_RADIO_BUTTON_CALCULA_VALOR_NEGOCIACAO,
  SET_NOVO_CONTRATO_VALOR_TOTAL_VENDA,
  SET_NOVO_CONTRATO_VALOR_LIQUIDO_VENDA,
  SET_NOVO_CONTRATO_VALOR_CORRETAGEM_VENDA,
  SET_NOVO_CONTRATO_PERCENTUAL_CORRETAGEM_VENDA,
  ADD_NOVO_CONTRATO_VENDEDORES,
  RESET_NOVO_CONTRATO,
  NovoContratoActionTypes
} from './types'

import { NovoVendedorPFState } from './novoVendedorPF/types'

// TypeScript infers that this function is returning SendMessageAction
export function setNovoContratoRadioButtonCalculaValorNegocicao(selection: string): NovoContratoActionTypes {
  return {
    type: SET_NOVO_CONTRATO_RADIO_BUTTON_CALCULA_VALOR_NEGOCIACAO,
    payload: selection
  }
}

export const addNovoContratoVendedores = (novoContratoVendedores: NovoVendedorPFState): NovoContratoActionTypes => ({
  type: ADD_NOVO_CONTRATO_VENDEDORES,
  payload: novoContratoVendedores,
})

export function setNovoContratoValorTotalVenda(novoContratoValorTotalVenda: number): NovoContratoActionTypes {
  return {
    type: SET_NOVO_CONTRATO_VALOR_TOTAL_VENDA,
    payload: novoContratoValorTotalVenda
  }
}

export function setNovoContratoValorLiquidoVenda(novoContratoValorLiquidoVenda: number): NovoContratoActionTypes {
  return {
    type: SET_NOVO_CONTRATO_VALOR_LIQUIDO_VENDA,
    payload: novoContratoValorLiquidoVenda
  }
}

export function setNovoContratoValorCorretagemVenda(novoContratoValorCorretagemVenda: number): NovoContratoActionTypes {
  return {
    type: SET_NOVO_CONTRATO_VALOR_CORRETAGEM_VENDA,
    payload: novoContratoValorCorretagemVenda
  }
}

export function setNovoContratoPercentualCorretagemVenda(novoContratoPercentualCorretagemVenda: number): NovoContratoActionTypes {
  return {
    type: SET_NOVO_CONTRATO_PERCENTUAL_CORRETAGEM_VENDA,
    payload: novoContratoPercentualCorretagemVenda
  }
}

export function resetNovoContrato(): NovoContratoActionTypes {
  return {
    type: RESET_NOVO_CONTRATO,
  }
}