import { combineReducers } from "redux";

import userReducer from "./user/reducers";
import novoContratoReducer from "./novoContrato/reducers";

export const rootReducer = combineReducers({
  user: userReducer,
  novoContrato: novoContratoReducer,
})

export type RootState = ReturnType<typeof rootReducer>