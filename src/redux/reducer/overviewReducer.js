import { ACTION } from "../../constants/ACTION";
//init state
const initState = {
  isLoading: true,
  overview: [],
};

//reducer
const overviewReducer = (state = initState, action) => {
  switch (action.type) {
    case ACTION.GET_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
    case ACTION.GET_ALL_OVERVIEW_SUCCESS:
      return {
        ...state,
        overview: action.payload,
      };

    default:
      return state;
  }
};

export default overviewReducer;
