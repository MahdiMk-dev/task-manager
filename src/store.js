// store.js
import { thunk } from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import authReducer from './reducers/authReducer';
import taskReducer from './reducers/taskReducer';
import columnReducer from './reducers/columnReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  tasks: taskReducer,
  columns: columnReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk)); // Apply thunk middleware

export default store;
