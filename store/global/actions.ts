import {  
  SET_TOOGLE_ACTION,
  GlobalActionTypes,
} from './types'

// TypeScript infers that this function is returning SendMessageAction


export function setToogleDrawer(toogleDrawer: boolean): GlobalActionTypes {
  return {
    type: SET_TOOGLE_ACTION,
    payload: toogleDrawer
  }
}