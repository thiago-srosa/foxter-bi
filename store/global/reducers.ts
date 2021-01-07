import {
  SET_TOOGLE_ACTION,
  GlobalActionTypes,
  IGlobalState,
} from './types'

const initialState: IGlobalState = {
  //NOVO CONTRATO  
  toogleDrawer: false,
};

function GlobalReducer(
  state = initialState,
  action: GlobalActionTypes
): IGlobalState {
  switch (action.type) {

    case SET_TOOGLE_ACTION:
      return { ...state, toogleDrawer: action.payload };
    default:
      return state;
  }
}

export default GlobalReducer;
