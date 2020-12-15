import {
  SET_GLOBAL_TITLE, 
} from "../../actions";

const initialState = {
  globalTitle: "Página Inicial",  
};

const reducer = (state = initialState, action) => {
  switch (action.type) {        
    case SET_GLOBAL_TITLE:
      return { ...state,  globalTitle: action.payload };    
    default:
      return state;
  }
};

export default reducer;