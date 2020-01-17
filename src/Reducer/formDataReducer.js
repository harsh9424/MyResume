import {
  REQUEST_FORM_DATA,
  REQUEST_FORM_DATA_SUCCESS,
  REQUEST_FORM_DATA_ERROR
} from "../Constants/formConstants";

export const initialFormData = {
  loading: false,
  forms: ['apple','banana','guava'],
  error: ""
};

const formDataReducer = (state = initialFormData, action) => {
  switch (action.type) {
    case REQUEST_FORM_DATA:
      return { ...state, loading: true }
    case REQUEST_FORM_DATA_SUCCESS:{
        console.log(action.payload)
      return { ...state, loading: false, forms:[...state.forms,action.payload] }}
    case REQUEST_FORM_DATA_ERROR:
      return { ...state, error:action.error}
    default:
      return state
  }
};

export default formDataReducer
