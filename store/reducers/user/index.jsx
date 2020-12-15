import { HYDRATE } from "next-redux-wrapper";
import {
  SET_USER_AUTHENTICATION,
  SET_USER_IS_ADMIN,
  SET_USER_PHOTO_URL,
  USER_RESET
} from "../../actions";

const initialState = {
  userAuthentication: null,
  userIsAdmin: false,
  userPhotoURL: "/",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case HYDRATE:
      return { ...state, ...action.payload.user };
    case SET_USER_AUTHENTICATION:
      return { ...state, userAuthentication: true };
    case SET_USER_IS_ADMIN:
      return { ...state, userIsAdmin: true };
    case SET_USER_PHOTO_URL:
      return { ...state, userPhotoURL: action.payload };
    case USER_RESET:
      return initialState;
    default:
      return state;
  }
};

export default reducer;