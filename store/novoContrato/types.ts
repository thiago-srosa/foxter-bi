export const SET_NOVO_CONTRATO_RADIO_BUTTON_CALCULA_VALOR_NEGOCIACAO = 'SET_NOVO_CONTRATO_RADIO_BUTTON_CALCULA_VALOR_NEGOCIACAO'
export const SET_NOVO_CONTRATO_VALOR_TOTAL_VENDA = "SET_NOVO_CONTRATO_VALOR_TOTAL_VENDA";
export const SET_NOVO_CONTRATO_VALOR_LIQUIDO_VENDA = "SET_NOVO_CONTRATO_VALOR_LIQUIDO_VENDA";
export const SET_NOVO_CONTRATO_VALOR_CORRETAGEM_VENDA = "SET_NOVO_CONTRATO_VALOR_CORRETAGEM_VENDA";
export const SET_NOVO_CONTRATO_PERCENTUAL_CORRETAGEM_VENDA = "SET_NOVO_CONTRATO_PERCENTUAL_CORRETAGEM_VENDA";
export const ADD_NOVO_CONTRATO_VENDEDORES = "ADD_NOVO_CONTRATO_VENDEDORES";
export const RESET_NOVO_CONTRATO = "RESET_NOVO_CONTRATO";

import { NovoVendedorPFState } from './novoVendedorPF/types'

export interface NovoContratoState {
  novoContratoRadioButtonCalculaValorNegociacao: string,
  novoContratoValorTotalVenda: number,
  novoContratoValorLiquidoVenda: number,
  novoContratoValorCorretagemVenda: number,
  novoContratoPercentualCorretagemVenda: number,
  novoContratoVendedores: NovoVendedorPFState[],
};

export interface SetRadioButtonNovoContratoCalculaValorNegociacaoAction {
  type: typeof SET_NOVO_CONTRATO_RADIO_BUTTON_CALCULA_VALOR_NEGOCIACAO
  payload: string
}

export interface SetNovoContratoValorTotalVendaAction {
  type: typeof SET_NOVO_CONTRATO_VALOR_TOTAL_VENDA
  payload: number
}

export interface SetNovoContratoValorLiquidoVendaAction {
  type: typeof SET_NOVO_CONTRATO_VALOR_LIQUIDO_VENDA
  payload: number
}

export interface SetNovoContratoValorCorretagemVendaAction {
  type: typeof SET_NOVO_CONTRATO_VALOR_CORRETAGEM_VENDA
  payload: number
}

export interface SetNovoContratoPercentualCorretagemVendaAction {
  type: typeof SET_NOVO_CONTRATO_PERCENTUAL_CORRETAGEM_VENDA
  payload: number
}

export interface AddNovoContratoVendedoresAction {
  type: typeof ADD_NOVO_CONTRATO_VENDEDORES
  payload: NovoVendedorPFState
}

export interface ResetNovoContratoAction {
  type: typeof RESET_NOVO_CONTRATO
}

export type NovoContratoActionTypes =
  SetNovoContratoValorTotalVendaAction |
  SetNovoContratoValorLiquidoVendaAction |
  SetNovoContratoValorCorretagemVendaAction |
  SetNovoContratoPercentualCorretagemVendaAction |
  AddNovoContratoVendedoresAction |
  ResetNovoContratoAction |
  SetRadioButtonNovoContratoCalculaValorNegociacaoAction