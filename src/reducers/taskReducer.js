
const initialState = {
    tasks: [],
    loading: true,
    error: null
  };
  
  const taskReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'GET_ALL_TASKS':
        return {
          ...state,
          tasks: action.payload,
          loading: false
        };
      case 'CREATE_TASK':
        return {
          ...state,
          tasks: [...state.tasks, action.payload],
          loading: false
        };
      case 'UPDATE_TASK':
        return {
          ...state,
          tasks: state.tasks.map(task =>
            task._id === action.payload._id ? action.payload : task
          ),
          loading: false
        };
      case 'DELETE_TASK':
        return {
          ...state,
          tasks: state.tasks.filter(task => task._id !== action.payload),
          loading: false
        };
      default:
        return state;
    }
  };
  
  export default taskReducer;
  