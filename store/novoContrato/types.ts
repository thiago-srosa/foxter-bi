//DADOS GERAIS
export const SET_NOVO_CONTRATO_RADIO_BUTTON_CALCULA_VALOR_NEGOCIACAO = 'SET_NOVO_CONTRATO_RADIO_BUTTON_CALCULA_VALOR_NEGOCIACAO'
export const SET_NOVO_CONTRATO_VALOR_TOTAL_VENDA = "SET_NOVO_CONTRATO_VALOR_TOTAL_VENDA";
export const SET_NOVO_CONTRATO_VALOR_LIQUIDO_VENDA = "SET_NOVO_CONTRATO_VALOR_LIQUIDO_VENDA";
export const SET_NOVO_CONTRATO_VALOR_CORRETAGEM_VENDA = "SET_NOVO_CONTRATO_VALOR_CORRETAGEM_VENDA";
export const SET_NOVO_CONTRATO_PERCENTUAL_CORRETAGEM_VENDA = "SET_NOVO_CONTRATO_PERCENTUAL_CORRETAGEM_VENDA";
//DADOS VENDEDORES
export const ADD_NOVO_CONTRATO_VENDEDORES = "ADD_NOVO_CONTRATO_VENDEDORES";
//DADOS INTERNOS
export const SET_NOVO_CONTRATO_EXCLUSIVIDADE = 'SET_NOVO_CONTRATO_EXCLUSIVIDADE'
export const SET_NOVO_CONTRATO_NUMERO_AGS_FOCO = 'SET_NOVO_CONTRATO_NUMERO_AGS_FOCO'
export const SET_NOVO_CONTRATO_CODIGO_OPORTUNIDADE = 'SET_NOVO_CONTRATO_CODIGO_OPORTUNIDADE'
export const SET_NOVO_CONTRATO_ORIGEM_CAPTACAO = 'SET_NOVO_CONTRATO_ORIGEM_CAPTACAO'
//RESET
export const RESET_NOVO_CONTRATO = "RESET_NOVO_CONTRATO";

import { NovoVendedorPFState } from './novoVendedorPF/types'

export interface NovoContratoState {
  //INFORMAÇÕES AUXILIARES PARA O DESENVOLVEDOR
  novoContratoRadioButtonCalculaValorNegociacao: string,
  //DADOS GERAIS DA VENDA
  novoContratoValorTotalVenda: number,
  novoContratoValorLiquidoVenda: number,
  novoContratoValorCorretagemVenda: number,
  novoContratoPercentualCorretagemVenda: number,
  //DADOS INTERNOS
  novoContratoExclusividade: boolean,
  novoContratoNumeroAgsFoco: number,
  novoContratoCodigoOportunidade: number,
  novoContratoOrigemCaptacao: string,
  //VENDEDORES
  novoContratoVendedores: NovoVendedorPFState[],
};

export interface SetNovoContratoNumeroAgsFoco {
  type: typeof SET_NOVO_CONTRATO_NUMERO_AGS_FOCO
  payload: number
}

export interface SetNovoContratoExclusividade {
  type: typeof SET_NOVO_CONTRATO_EXCLUSIVIDADE
  payload: boolean
}

export interface SetNovoContratoCodigoOportunidade {
  type: typeof SET_NOVO_CONTRATO_CODIGO_OPORTUNIDADE
  payload: number
}

export interface SetNovoContratoOrigemCaptacao {
  type: typeof SET_NOVO_CONTRATO_ORIGEM_CAPTACAO
  payload: string
}

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
  SetRadioButtonNovoContratoCalculaValorNegociacaoAction |
  SetNovoContratoNumeroAgsFoco |
  SetNovoContratoExclusividade |
  SetNovoContratoCodigoOportunidade |
  SetNovoContratoOrigemCaptacao