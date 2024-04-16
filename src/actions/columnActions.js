// actions/columnActions.js

import axios from 'axios';

// Get all columns action
export const getAllColumns = () => async dispatch => {
  try {
    const res = await axios.get('/api/columns');
    dispatch({ type: 'GET_ALL_COLUMNS', payload: res.data });
  } catch (err) {
    // Handle error response
  }
};

// Create column action
export const createColumn = columnData => async dispatch => {
  try {
    const res = await axios.post('/api/columns', columnData);
    dispatch({ type: 'CREATE_COLUMN', payload: res.data });
  } catch (err) {
    // Handle error response
  }
};

// Update column action
export const updateColumn = (columnId, columnData) => async dispatch => {
  try {
    const res = await axios.put(`/api/columns/${columnId}`, columnData);
    dispatch({ type: 'UPDATE_COLUMN', payload: res.data });
  } catch (err) {
    // Handle error response
  }
};

// Delete column action
export const deleteColumn = columnId => async dispatch => {
  try {
    const res = await axios.delete(`/api/columns/${columnId}`);
    dispatch({ type: 'DELETE_COLUMN', payload: columnId });
  } catch (err) {
    // Handle error response
  }
};
