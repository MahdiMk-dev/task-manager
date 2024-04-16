
import axios from 'axios';

// Signup action
export const signup = userData => async dispatch => {
  try {
    const res = await axios.post('/api/auth/signup', userData);
    // Handle success response, e.g., redirect to login page
  } catch (err) {
    // Handle error response, e.g., display error message
  }
};

// Login action
export const login = userData => async dispatch => {
  try {
    const res = await axios.post('/api/auth/login', userData);
    // Handle success response, e.g., save token to local storage and redirect to dashboard
  } catch (err) {
    // Handle error response, e.g., display error message
  }
};
