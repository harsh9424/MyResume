import { combineReducers } from 'redux'
import marksDataReducer from '../Reducer/marksReducer'
import formDataReducer from '../Reducer/formDataReducer'

export default combineReducers({
    markData:marksDataReducer,
    formData:formDataReducer
})