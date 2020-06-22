import { all, put, call, takeEvery } from 'redux-saga/effects';

import * as api from '../api';
import * as types from './types';
import * as actions from './actions';

function* allUsersRequest() {
    try {
      const response = yield call(api.getUsers);

      const { data, ...meta } = response.data;

      yield put(actions.allUsersSuccess({ data, meta }));
    } catch (err) {
      console.error('allUsersRequest', err);
    }
  }
  
export default function* saga() {
  yield all([
    takeEvery(types.ALL_USERS_REQUEST, allUsersRequest),
  ]);
}