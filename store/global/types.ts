export const SET_TOOGLE_ACTION = 'SET_TOOGLE_ACTION'

export interface IGlobalState {
  toogleDrawer: boolean,  
};

export interface SetToogleDrawerAction {
  type: typeof SET_TOOGLE_ACTION
  payload: boolean
}



export type GlobalActionTypes =
  SetToogleDrawerAction 

