import { combineReducers } from "redux";
import globalReducer from "./global";
import userReducer from "./user";
import novoContratoReducer from "./novoContrato";
import novoVendedorPFReducer from "./novoVendedorPF";

export default combineReducers({
  global: globalReducer,
  user: userReducer,  
  novoContrato: novoContratoReducer, 
  novoVendedorPF: novoVendedorPFReducer,
});