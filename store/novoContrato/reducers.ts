import {
  NovoContratoState,
  NovoContratoActionTypes,
  SET_NOVO_CONTRATO_VALOR_TOTAL_VENDA,
  SET_NOVO_CONTRATO_VALOR_LIQUIDO_VENDA,
  SET_NOVO_CONTRATO_VALOR_CORRETAGEM_VENDA,
  SET_NOVO_CONTRATO_PERCENTUAL_CORRETAGEM_VENDA,
  ADD_NOVO_CONTRATO_VENDEDORES,
  RESET_NOVO_CONTRATO,
} from './types'

const initialState: NovoContratoState = {
  novoContratoValorTotalVenda: null,
  novoContratoValorLiquidoVenda: null,
  novoContratoValorCorreategemVenda: null,
  novoContratoPercentualComissaoVenda: null,
  novoContratoVendedores: [],
};

function NovoContratoReducer(
  state = initialState,
  action: NovoContratoActionTypes
): NovoContratoState {
  switch (action.type) {

    case SET_NOVO_CONTRATO_VALOR_TOTAL_VENDA:
      return { ...state, novoContratoValorTotalVenda: action.payload };

    case SET_NOVO_CONTRATO_VALOR_LIQUIDO_VENDA:
      return { ...state, novoContratoValorLiquidoVenda: action.payload }

    case SET_NOVO_CONTRATO_VALOR_CORRETAGEM_VENDA:
      return { ...state, novoContratoValorCorreategemVenda: action.payload }

    case SET_NOVO_CONTRATO_PERCENTUAL_CORRETAGEM_VENDA:
      return { ...state, novoContratoPercentualComissaoVenda: action.payload }

    /*
  case ADD_NOVO_CONTRATO_VENDEDORES:
    return { ...state, novoContratoVendedores: [...state.novoContratoVendedores, action.payload] };
    */

    case RESET_NOVO_CONTRATO:
      return initialState;

    default:
      return state;
  }
}

export default NovoContratoReducer;