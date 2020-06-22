import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './reducer';
import rootSaga from './saga';

const sagaMiddleware = createSagaMiddleware();

const bindMiddleware = (middleware: any[]) => {
  if (process.env.NODE_ENV === 'production') {
    applyMiddleware(...middleware);
  }
  return composeWithDevTools(applyMiddleware(...middleware));
};

const configureStore = (initialState = {}) => {
  const store = createStore(rootReducer, initialState, bindMiddleware([sagaMiddleware]));

  sagaMiddleware.run(rootSaga);

  return store;
};

export default configureStore;
