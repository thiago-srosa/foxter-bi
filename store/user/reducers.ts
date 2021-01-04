import {
  SET_USER_IS_LOGGED_IN,
  SET_USER_IS_ADMIN,
  UserActionTypes,
  UserState,
} from './types'

const initialState: UserState = {
  userIsLoggedIn: false,
  userIsAdmin: false,
};

function NovoContratoReducer(
  state = initialState,
  action: UserActionTypes
): UserState {
  switch (action.type) {

    case SET_USER_IS_LOGGED_IN:
      return { ...state, userIsLoggedIn: action.payload };

    case SET_USER_IS_ADMIN:
      return { ...state, userIsAdmin: action.payload }

    default:
      return state;
  }
}

export default NovoContratoReducer;
