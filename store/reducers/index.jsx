import { combineReducers } from "redux";
import userReducer from "./user";
import globalReducer from "./user";

export default combineReducers({
  user: userReducer,
  global: globalReducer,
});