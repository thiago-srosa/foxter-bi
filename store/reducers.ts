import { combineReducers } from 'redux'

import globalReducer from './global/reducers'
import userReducer from './user/reducers'
import novoContratoReducer from './novoContrato/reducers'
import novoVendedorPFReducer from './novoContrato/novoVendedorPF/reducers'

export const rootReducer = combineReducers({
  global: globalReducer,
  user: userReducer,
  novoContrato: novoContratoReducer,
  novoVendedorPF: novoVendedorPFReducer,
})

export type RootState = ReturnType<typeof rootReducer>