import { ACTION } from "../../constants/ACTION";
//------ action wait to loading data
export const actGetLoading = (boolean) => {
  return {
    type: ACTION.GET_LOADING,
    payload: boolean,
  };
};

export const actGetAllOverViewSuccess = (data) => {
  return {
    type: ACTION.GET_ALL_OVERVIEW_SUCCESS,
    payload: data,
  };
};






