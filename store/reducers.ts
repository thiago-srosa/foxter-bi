import { combineReducers } from "redux";

import userReducer from "./user/reducers";
import novoContratoReducer from "./novoContrato/reducers";

export default combineReducers({
  user: userReducer,  
  novoContrato: novoContratoReducer,
});