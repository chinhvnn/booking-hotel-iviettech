import { ACTION } from "../../constants/ACTION";
//init state
const initState = {
  isLoading: true,
  orders: [],
};

//reducer
const clientReducer = (state = initState, action) => {
  switch (action.type) {
    case ACTION.GET_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
    case ACTION.GET_ALL_ORDER_SUCCESS:
      return {
        ...state,
        orders: action.payload,
      };

    default:
      return state;
  }
};

export default clientReducer;
