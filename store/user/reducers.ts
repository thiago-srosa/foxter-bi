import {
  SET_USER_IS_LOGGED_IN,
  SET_USER_DISPLAY_NAME,
  SET_USER_IS_ADMIN,
  SET_USER_PHOTO_URL,
  SET_USER_EMAIL,
  RESET_USER,
  UserActionTypes,
  IUserState,
} from './types'

const initialState: IUserState = {
  userIsLoggedIn: false,
  userDisplayName: null,
  userIsAdmin: false,
  userPhotoUrl: null,
  userEmail: null,
};

function UserReducer(
  state = initialState,
  action: UserActionTypes
): IUserState {
  switch (action.type) {

    case SET_USER_IS_LOGGED_IN:
      return { ...state, userIsLoggedIn: action.payload };
    case SET_USER_DISPLAY_NAME:
      return { ...state, userDisplayName: action.payload }
    case SET_USER_IS_ADMIN:
      return { ...state, userIsAdmin: action.payload }
    case SET_USER_PHOTO_URL:
      return { ...state, userPhotoUrl: action.payload }
    case SET_USER_EMAIL:
      return { ...state, userEmail: action.payload }
    case RESET_USER:
      return initialState
    default:
      return state;
  }
}

export default UserReducer;
