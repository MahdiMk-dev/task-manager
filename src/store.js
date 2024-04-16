// store.js

import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import authReducer from './reducers/authReducer';
import taskReducer from './reducers/taskReducer';
import columnReducer from './reducers/columnReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  tasks: taskReducer,
  columns: columnReducer
});

const initialState = {
  auth: {
    token: null,
    isAuthenticated: null,
    loading: true,
    user: null
  },
  tasks: {
    tasks: [],
    loading: true,
    error: null
  },
  columns: {
    columns: [],
    loading: true,
    error: null
  }
};

const store = createStore(rootReducer, initialState, applyMiddleware(thunk));

export default store;
