export const SET_NOVO_CONTRATO_RADIO_BUTTON_CALCULA_VALOR_NEGOCIACAO = 'SET_NOVO_CONTRATO_RADIO_BUTTON_CALCULA_VALOR_NEGOCIACAO'

export interface IGlobalState {
  NovoContratoRadioButtonCalculaValorNegociacao: string,  
};

export interface SetRadioButtonNovoContratoCalculaValorNegociacaoAction {
  type: typeof SET_NOVO_CONTRATO_RADIO_BUTTON_CALCULA_VALOR_NEGOCIACAO
  payload: string
}

export type GlobalActionTypes =
SetRadioButtonNovoContratoCalculaValorNegociacaoAction

