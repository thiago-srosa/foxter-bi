import { HYDRATE } from "next-redux-wrapper";
import {
  ADD_NOVO_CONTRATO_VENDEDORES,
  RESET_NOVO_CONTRATO,
} from "../../actions";

const initialState = {
  novoContratoVendedores: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case HYDRATE:
      return { ...state, ...action.payload.novoClientePF };
    case ADD_NOVO_CONTRATO_VENDEDORES:
      return { ...state, novoContratoVendedores: [...state.novoContratoVendedores, action.payload] };
    case RESET_NOVO_CONTRATO:
      return initialState;
    default:
      return state;
  }
};

export default reducer;