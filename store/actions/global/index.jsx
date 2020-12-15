import {
  SET_GLOBAL_TITLE
} from "..";

export const seGlobaltitle = (globalTitle) => ({
  type: SET_GLOBAL_TITLE,
  payload: globalTitle,
});
