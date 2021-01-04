export const SET_USER_IS_LOGGED_IN = 'SET_USER_IS_LOGGED_IN'
export const SET_USER_DISPLAY_NAME = 'SET_USER_DISPLAY_NAME'
export const SET_USER_IS_ADMIN = 'SET_USER_IS_ADMIN'
export const SET_USER_PHOTO_URL = 'SET_USER_PHOTO_URL'
export const SET_USER_EMAIL = 'SET_USER_EMAIL'
export const RESET_USER = 'RESET_USER'

export interface IUserState {
  userIsLoggedIn: boolean,
  userDisplayName: string,
  userIsAdmin: boolean,
  userPhotoUrl: string,
  userEmail: string,
};

export interface SetUserIsLoggedInAction {
  type: typeof SET_USER_IS_LOGGED_IN
  payload: boolean
}

export interface SetUserDisplayNameAction {
  type: typeof SET_USER_DISPLAY_NAME
  payload: string
}

export interface SetUserIsAdminAction {
  type: typeof SET_USER_IS_ADMIN
  payload: boolean
}

export interface SetUserPhotoUrlAction {
  type: typeof SET_USER_PHOTO_URL
  payload: string
}

export interface SetUserEmailAction {
  type: typeof SET_USER_EMAIL
  payload: string
}

export interface ResetUserAction {
  type: typeof RESET_USER
}

export type UserActionTypes =
  SetUserIsLoggedInAction |
  SetUserDisplayNameAction |
  SetUserIsAdminAction |
  SetUserEmailAction |
  SetUserPhotoUrlAction |
  ResetUserAction

