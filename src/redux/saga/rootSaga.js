import { all } from '@redux-saga/core/effects';
import roomSaga from './roomSaga';
import clientSaga from './clientSaga'
import overviewSaga from './overviewSaga';

function* rootSaga() {
	yield all([...roomSaga, ...clientSaga, ...overviewSaga]);
}

export default rootSaga;