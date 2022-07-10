import { ACTION } from "../../constants/ACTION";
import { put, takeEvery, takeLeading } from "redux-saga/effects";
import { actGetAllRoomSuccess, actGetLoading } from "../actions/roomAction";
import { getAllRoomAPI } from "../../api/RoomAPI";

//-------- GET ALL TASK
function* getAllRoom() {
  yield put(actGetLoading(true));
  const data = yield getAllRoomAPI();
  yield put(actGetAllRoomSuccess(data));
  yield put(actGetLoading(false));
}

function* watchGetAllRoom() {
  yield takeLeading(ACTION.GET_ALL_ROOM, getAllRoom);
}


//--------export
const roomSaga = [watchGetAllRoom()];
export default roomSaga;
