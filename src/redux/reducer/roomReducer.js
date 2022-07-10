import { ACTION } from "../../constants/ACTION";
//init state
const initState = {
  isLoading : true,
};

//reducer
const roomReducer = (state = initState, action) => {
  switch (action.type) {
    case ACTION.GET_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };

    default:
      return state;
  }
  
};

export default roomReducer;
