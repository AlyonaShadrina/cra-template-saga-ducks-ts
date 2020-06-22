import * as types from './types';
import { TAction } from '../../../utils/types';
import { TUser } from '../types';

export const allUsersRequest = (): TAction => ({
  type: types.ALL_USERS_REQUEST,
});

export const allUsersSuccess = (payload: { data: TUser[], meta: any }): TAction => ({
  type: types.ALL_USERS_SUCCESS,
  payload,
});