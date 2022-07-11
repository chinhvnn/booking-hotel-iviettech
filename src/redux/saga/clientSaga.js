import { ACTION } from "../../constants/ACTION";
import { put, takeEvery, takeLeading } from "redux-saga/effects";
import { actGetAllOrderSuccess, actGetLoading } from "../actions/clientAction";
import { getAllOrderAPI } from "../../api/OrderAPI";

//-------- GET ALL Order
function* getAllOrder() {
  yield put(actGetLoading(true));
  const data = yield getAllOrderAPI();
  yield put(actGetAllOrderSuccess(data));
  yield put(actGetLoading(false));
}

function* watchGetAllOrder() {
  yield takeLeading(ACTION.GET_ALL_ORDER, getAllOrder);
}




//--------export
const clientSaga = [watchGetAllOrder() ];
export default clientSaga;
