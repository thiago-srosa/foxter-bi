import {
  SET_USER_IS_LOGGED_IN,
  SET_USER_IS_ADMIN,
  RESET_USER,
  UserActionTypes,
} from './types'

// TypeScript infers that this function is returning SendMessageAction
export function setUserIsLoggedIn(userIsLoggedIn: boolean): UserActionTypes {
  return {
    type: SET_USER_IS_LOGGED_IN,
    payload: userIsLoggedIn
  }
}

export function setUserIsAdmin(userIsAdmin: boolean): UserActionTypes {
  return {
    type: SET_USER_IS_ADMIN,
    payload: userIsAdmin
  }
}

export function resetUser(): UserActionTypes {
  return {
    type: RESET_USER,
  }
}
