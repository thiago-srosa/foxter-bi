export const SET_USER_IS_LOGGED_IN = "SET_USER_IS_LOGGED_IN";
export const SET_USER_IS_ADMIN = "SET_USER_IS_ADMIN";
export const RESET_USER = "RESET_USER";

export interface UserState {
  userIsLoggedIn: boolean,
  userIsAdmin: boolean,
};

export interface SetUserIsLoggedInAction {
  type: typeof SET_USER_IS_LOGGED_IN
  payload: boolean
}

export interface SetUserIsAdminAction {
  type: typeof SET_USER_IS_ADMIN
  payload: boolean
}

export interface ResetUserAction {
  type: typeof RESET_USER
}

export type UserActionTypes =
  SetUserIsLoggedInAction |
  SetUserIsAdminAction |
  ResetUserAction
