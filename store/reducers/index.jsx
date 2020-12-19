import { combineReducers } from "redux";
import globalReducer from "./global";
import userReducer from "./user";
import novoClientePFReducer from "./novoClientePF";

export default combineReducers({
  global: globalReducer,
  user: userReducer,  
  novoClientePF: novoClientePFReducer,
});