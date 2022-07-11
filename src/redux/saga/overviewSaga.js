import { ACTION } from "../../constants/ACTION";
import { put, takeEvery, takeLeading } from "redux-saga/effects";
import { actGetAllOverViewSuccess, actGetLoading } from "../actions/overviewAction ";
import { getAllOverviewAPI } from "../../api/OverviewAPI ";

//-------- GET ALL Order
function* getAllOverview() {
  yield put(actGetLoading(true));
  const data = yield getAllOverviewAPI();
  yield put(actGetAllOverViewSuccess(data));
  yield put(actGetLoading(false));
}

function* watchGetAllOverview() {
  yield takeLeading(ACTION.GET_ALL_OVERVIEW, getAllOverview);
}




//--------export
const overviewSaga = [watchGetAllOverview()];
export default overviewSaga;
