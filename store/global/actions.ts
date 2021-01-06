import {
  SET_NOVO_CONTRATO_RADIO_BUTTON_CALCULA_VALOR_NEGOCIACAO,
  GlobalActionTypes,
} from './types'

// TypeScript infers that this function is returning SendMessageAction

export function setNovoContratoRadioButtonCalculaValorNegocicao(selection: string): GlobalActionTypes {
  return {
    type: SET_NOVO_CONTRATO_RADIO_BUTTON_CALCULA_VALOR_NEGOCIACAO,
    payload: selection
  }
}