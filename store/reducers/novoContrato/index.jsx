import { HYDRATE } from "next-redux-wrapper";
import {
  SET_VALOR_TOTAL_VENDA,
  SET_VALOR_LIQUIDO_VENDA,
  SET_VALOR_CORRETAGEM_VENDA,
  SET_PERCENTUAL_CORRETAGEM_VENDA,
  ADD_NOVO_CONTRATO_VENDEDORES,
  RESET_NOVO_CONTRATO,
} from "../../actions";

const initialState = {
  novoContratoValorTotalVenda: '',
  novoContratoValorLiquidoVenda: '',
  novoContratoValorCorreategemVenda: '',
  novoContratoPercentualComissaoVenda: '',
  novoContratoVendedores: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case HYDRATE:
      return { ...state, ...action.payload.novoClientePF };

    case SET_VALOR_TOTAL_VENDA:
      //console.log(action.payload)
      return { ...state, novoContratoValorTotalVenda: action.payload };
    case SET_VALOR_LIQUIDO_VENDA:
      return { ...state, novoContratoValorLiquidoVenda: action.payload }
    case SET_VALOR_CORRETAGEM_VENDA:
      return { ...state, novoContratoValorCorreategemVenda: action.payload }
    case SET_PERCENTUAL_CORRETAGEM_VENDA:
      return { ...state, novoContratoPercentualComissaoVenda: action.payload }

    case ADD_NOVO_CONTRATO_VENDEDORES:
      return { ...state, novoContratoVendedores: [...state.novoContratoVendedores, action.payload] };

    case RESET_NOVO_CONTRATO:
      return initialState;
    default:
      return state;
  }
};

export default reducer;