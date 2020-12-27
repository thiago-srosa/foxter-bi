import {
  SET_USER_IS_ADMIN,
  USER_RESET,
} from "..";

export const setUserIsAdmin = () => ({
  type: SET_USER_IS_ADMIN,  
})

export const userReset = () => {
  return {
    type: USER_RESET,
  };
};