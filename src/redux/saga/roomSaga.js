import { ACTION } from "../../constants/ACTION";
import { put, takeEvery, takeLeading } from "redux-saga/effects";
import { actGetAllRoomSuccess, actGetAllServiceSuccess, actGetLoading } from "../actions/roomAction";
import { getAllRoomAPI } from "../../api/RoomAPI";
import { getAllServiceAPI } from "../../api/RoomServiceAPI";

//-------- GET ALL ROOM
function* getAllRoom() {
  yield put(actGetLoading(true));
  const data = yield getAllRoomAPI();
  yield put(actGetAllRoomSuccess(data));
  yield put(actGetLoading(false));
}

function* watchGetAllRoom() {
  yield takeLeading(ACTION.GET_ALL_ROOM, getAllRoom);
}

//-------- GET ALL ROOM SERVICE
function* getAllService() {
  yield put(actGetLoading(true));
  const data = yield getAllServiceAPI();
  yield put(actGetAllServiceSuccess(data));
  yield put(actGetLoading(false));
}

function* watchGetAllService() {
  yield takeLeading(ACTION.GET_ALL_SERVICE, getAllService);
}


//--------export
const roomSaga = [watchGetAllRoom(), watchGetAllService()];
export default roomSaga;
