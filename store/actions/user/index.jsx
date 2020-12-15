import {
  SET_USER_PHOTO_URL,
  SET_USER_IS_ADMIN,
  USER_RESET,
  SET_USER_AUTHENTICATION
} from "..";

export const setUserAuthentication = () => ({
  type: SET_USER_AUTHENTICATION,  
})

export const setUserIsAdmin = () => ({
  type: SET_USER_IS_ADMIN,  
})

export const setUserPhotoURL = (url) => ({
  type: SET_USER_PHOTO_URL,
  payload: url,
});

export const userReset = () => {
  return {
    type: USER_RESET,
  };
};