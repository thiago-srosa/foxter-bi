import {
  SET_USER_IS_LOGGED_IN,
  SET_USER_DISPLAY_NAME,
  SET_USER_IS_ADMIN,
  SET_USER_EMAIL,
  SET_USER_PHOTO_URL,
  RESET_USER,
  UserActionTypes,
} from './types'

// TypeScript infers that this function is returning SendMessageAction
export function setUserIsLoggedIn(isLoggedIn: boolean): UserActionTypes {
  return {
    type: SET_USER_IS_LOGGED_IN,
    payload: isLoggedIn
  }
}

export function setUserDisplayName(displayName: string): UserActionTypes {
  return {
    type: SET_USER_DISPLAY_NAME,
    payload: displayName
  }
}

export function setUserIsAdmin(isAdmin: boolean): UserActionTypes {
  return {
    type: SET_USER_IS_ADMIN,
    payload:isAdmin
  }
}

export function setUserPhotoUrl(photoUrl: string): UserActionTypes {
  return {
    type: SET_USER_PHOTO_URL,
    payload: photoUrl
  }
}

export function setUserEmail(email: string): UserActionTypes {
  return {
    type: SET_USER_EMAIL,
    payload: email
  }
}

export function resetUser(): UserActionTypes {
  return {
    type: RESET_USER,
  }
}
