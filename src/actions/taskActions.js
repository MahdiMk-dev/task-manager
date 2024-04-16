
import axios from 'axios';

// Get all tasks action
export const getAllTasks = () => async dispatch => {
  try {
    const res = await axios.get('/api/tasks');
    dispatch({ type: 'GET_ALL_TASKS', payload: res.data });
  } catch (err) {
    // Handle error response
  }
};

// Create task action
export const createTask = taskData => async dispatch => {
  try {
    const res = await axios.post('/api/tasks', taskData);
    dispatch({ type: 'CREATE_TASK', payload: res.data });
  } catch (err) {
    // Handle error response
  }
};

// Update task action
export const updateTask = (taskId, taskData) => async dispatch => {
  try {
    const res = await axios.put(`/api/tasks/${taskId}`, taskData);
    dispatch({ type: 'UPDATE_TASK', payload: res.data });
  } catch (err) {
    // Handle error response
  }
};

// Delete task action
export const deleteTask = taskId => async dispatch => {
  try {
    const res = await axios.delete(`/api/tasks/${taskId}`);
    dispatch({ type: 'DELETE_TASK', payload: taskId });
  } catch (err) {
    // Handle error response
  }
};
