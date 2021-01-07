import {
  NovoContratoState,
  NovoContratoActionTypes,
  SET_NOVO_CONTRATO_RADIO_BUTTON_CALCULA_VALOR_NEGOCIACAO,
  SET_NOVO_CONTRATO_VALOR_TOTAL_VENDA,
  SET_NOVO_CONTRATO_VALOR_LIQUIDO_VENDA,
  SET_NOVO_CONTRATO_VALOR_CORRETAGEM_VENDA,
  SET_NOVO_CONTRATO_PERCENTUAL_CORRETAGEM_VENDA,
  ADD_NOVO_CONTRATO_VENDEDORES,
  RESET_NOVO_CONTRATO,
} from './types'

const initialState: NovoContratoState = {
  novoContratoRadioButtonCalculaValorNegociacao: null,
  novoContratoValorTotalVenda: null,
  novoContratoValorLiquidoVenda: null,
  novoContratoValorCorretagemVenda: null,
  novoContratoPercentualCorretagemVenda: null,
  novoContratoVendedores: [],
};

function NovoContratoReducer(
  state = initialState,
  action: NovoContratoActionTypes
): NovoContratoState {
  switch (action.type) {

    case SET_NOVO_CONTRATO_RADIO_BUTTON_CALCULA_VALOR_NEGOCIACAO:
      return { ...state, novoContratoRadioButtonCalculaValorNegociacao: action.payload };

    case SET_NOVO_CONTRATO_VALOR_TOTAL_VENDA:
      return { ...state, novoContratoValorTotalVenda: action.payload };

    case SET_NOVO_CONTRATO_VALOR_LIQUIDO_VENDA:
      return { ...state, novoContratoValorLiquidoVenda: action.payload }

    case SET_NOVO_CONTRATO_VALOR_CORRETAGEM_VENDA:
      return { ...state, novoContratoValorCorretagemVenda: action.payload }

    case SET_NOVO_CONTRATO_PERCENTUAL_CORRETAGEM_VENDA:
      return { ...state, novoContratoPercentualCorretagemVenda: action.payload }

    case ADD_NOVO_CONTRATO_VENDEDORES:
      return { ...state, novoContratoVendedores: [...state.novoContratoVendedores, action.payload] };


    case RESET_NOVO_CONTRATO:
      return initialState;

    default:
      return state;
  }
}

export default NovoContratoReducer;