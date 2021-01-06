import {
  SET_NOVO_CONTRATO_RADIO_BUTTON_CALCULA_VALOR_NEGOCIACAO,
  SET_TOOGLE_ACTION,
  GlobalActionTypes,
  IGlobalState,
} from './types'

const initialState: IGlobalState = {
  //NOVO CONTRATO
  novoContratoRadioButtonCalculaValorNegociacao: null,
  toogleDrawer: false,
};

function GlobalReducer(
  state = initialState,
  action: GlobalActionTypes
): IGlobalState {
  switch (action.type) {

    case SET_NOVO_CONTRATO_RADIO_BUTTON_CALCULA_VALOR_NEGOCIACAO:
      return { ...state, novoContratoRadioButtonCalculaValorNegociacao: action.payload };
    case SET_TOOGLE_ACTION:
      return { ...state, toogleDrawer: action.payload };
    default:
      return state;
  }
}

export default GlobalReducer;
