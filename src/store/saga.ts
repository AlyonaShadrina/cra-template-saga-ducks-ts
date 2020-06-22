import { all, spawn } from 'redux-saga/effects';
import usersSaga from '../features/users/state/saga';

export default function* rootSaga() {
  yield all([spawn(usersSaga)]);
}
