import React from 'react';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import todoReducer from './reducers/todoReducer';
import TodoContainer from './TodoContainer';

const store = createStore(combineReducers({
  todo: todoReducer
}),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const App = () => (
  <Provider store={store}>
    <TodoContainer/>
  </Provider>
);

export default App;
