import * as types from './types';
import * as actions from './actions';
import { InferValueTypes } from '../../../utils/types';

const initialState = {
  data: [],
  meta: {},
  loading: false,
};

type TActions = ReturnType<InferValueTypes <typeof actions>>;

const userReducer = (state = initialState, action: TActions) => {
  const { type, payload } = action;

  switch (type) {
    case types.ALL_USERS_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }
    case types.ALL_USERS_SUCCESS: {
      return {
        ...state,
        ...payload,
        loading: false,
      };
    }

    default:
      return state;
  }
};

export default userReducer;
