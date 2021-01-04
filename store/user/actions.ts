import {
  SET_USER_IS_LOGGED_IN,
  SET_USER_IS_ADMIN,
  UserActionTypes,
} from './types'

// TypeScript infers that this function is returning SendMessageAction
export function SetUserIsLoggedIn(userIsLoggedIn: boolean): UserActionTypes {
  return {
    type: SET_USER_IS_LOGGED_IN,
    payload: userIsLoggedIn
  }
}

export function SetUserIsAdmin(userIsAdmin: boolean): UserActionTypes {
  return {
    type: SET_USER_IS_ADMIN,
    payload: userIsAdmin
  }
}
