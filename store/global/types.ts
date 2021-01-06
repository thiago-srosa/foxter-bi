export const SET_NOVO_CONTRATO_RADIO_BUTTON_CALCULA_VALOR_NEGOCIACAO = 'SET_NOVO_CONTRATO_RADIO_BUTTON_CALCULA_VALOR_NEGOCIACAO'
export const SET_TOOGLE_ACTION = 'SET_TOOGLE_ACTION'

export interface IGlobalState {
  toogleDrawer: boolean,
  novoContratoRadioButtonCalculaValorNegociacao: string,
};

export interface SetToogleDrawerAction {
  type: typeof SET_TOOGLE_ACTION
  payload: boolean
}

export interface SetRadioButtonNovoContratoCalculaValorNegociacaoAction {
  type: typeof SET_NOVO_CONTRATO_RADIO_BUTTON_CALCULA_VALOR_NEGOCIACAO
  payload: string
}

export type GlobalActionTypes =
  SetToogleDrawerAction |
  SetRadioButtonNovoContratoCalculaValorNegociacaoAction

