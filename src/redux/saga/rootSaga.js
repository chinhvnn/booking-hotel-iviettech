import { all } from '@redux-saga/core/effects';
import roomSaga from './roomSaga';

function* rootSaga() {
	yield all([...roomSaga]);
}

export default rootSaga;