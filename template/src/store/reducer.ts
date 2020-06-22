import { combineReducers } from 'redux';
import usersReducer from '../features/users/state/reducer';

const reducers = combineReducers({
  users: usersReducer,
});

export default reducers;
