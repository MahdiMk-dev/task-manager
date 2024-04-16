// reducers/columnReducer.js

const initialState = {
    columns: [],
    loading: true,
    error: null
  };
  
  const columnReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'GET_ALL_COLUMNS':
        return {
          ...state,
          columns: action.payload,
          loading: false
        };
      case 'CREATE_COLUMN':
        return {
          ...state,
          columns: [...state.columns, action.payload],
          loading: false
        };
      case 'UPDATE_COLUMN':
        return {
          ...state,
          columns: state.columns.map(column =>
            column._id === action.payload._id ? action.payload : column
          ),
          loading: false
        };
      case 'DELETE_COLUMN':
        return {
          ...state,
          columns: state.columns.filter(column => column._id !== action.payload),
          loading: false
        };
      default:
        return state;
    }
  };
  
  export default columnReducer;
  