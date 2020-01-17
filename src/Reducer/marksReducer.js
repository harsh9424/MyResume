import {
    REQUEST_MARKS_DATA,
    REQUEST_MARKS_DATA_SUCCESS,
    REQUEST_MARKS_DATA_ERROR
  } from "../Constants/markConstants";
  
  export const initialMarksData = {
    loading: false,
    marks: [10,20,20],
    error: ""
  };
  
  const marksDataReducer = (state = initialMarksData, action) => {

    switch (action.type) {
      case REQUEST_MARKS_DATA:
        return { ...state, loading: true }
      case REQUEST_MARKS_DATA_SUCCESS:{
          console.log(action.payload)
        return { ...state, loading: false, marks:[...state.marks,action.payload] }}
      case REQUEST_MARKS_DATA_ERROR:
        return { ...state, error:action.error}
      default:
        return state
    }
  };
  
  export default marksDataReducer
  