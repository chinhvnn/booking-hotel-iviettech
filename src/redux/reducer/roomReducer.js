import { ACTION } from "../../constants/ACTION";
//init state
const initState = {
  isLoading: true,
  roomData: [],
  roomServiceData: [],
};

//reducer
const roomReducer = (state = initState, action) => {
  switch (action.type) {
    case ACTION.GET_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
    case ACTION.GET_ALL_ROOM_SUCCESS:
      return {
        ...state,
        roomData: action.payload,
      };
    case ACTION.GET_ALL_SERVICE_SUCCESS:
      return {
        ...state,
        roomServiceData: action.payload,
      };

    default:
      return state;
  }
};

export default roomReducer;
