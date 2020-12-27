import { HYDRATE } from "next-redux-wrapper";
import {
  SET_USER_IS_ADMIN,
  USER_RESET
} from "../../actions";

const initialState = {
  userIsAdmin: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case HYDRATE:
      return { ...state, ...action.payload.user };    
    case SET_USER_IS_ADMIN:
      return { ...state, userIsAdmin: true };    
    case USER_RESET:
      return initialState;
    default:
      return state;
  }
};

export default reducer;