import React from 'react';
import { Provider } from 'react-redux';

import Users from './pages/Users'
import './App.css';
import configureStore from './store';

const store = configureStore();

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Users />
      </Provider>
    </div>
  );
}

export default App;
