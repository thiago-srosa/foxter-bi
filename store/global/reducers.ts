import {
  SET_NOVO_CONTRATO_RADIO_BUTTON_CALCULA_VALOR_NEGOCIACAO, 
  GlobalActionTypes,
  IGlobalState,
} from './types'

const initialState: IGlobalState = {
  //NOVO CONTRATO
  NovoContratoRadioButtonCalculaValorNegociacao: null,  
};

function GlobalReducer(
  state = initialState,
  action: GlobalActionTypes
): IGlobalState {
  switch (action.type) {

    case SET_NOVO_CONTRATO_RADIO_BUTTON_CALCULA_VALOR_NEGOCIACAO:
      return { ...state, NovoContratoRadioButtonCalculaValorNegociacao: action.payload };       
    default:
      return state;
  }
}

export default GlobalReducer;
