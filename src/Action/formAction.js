import {
  REQUEST_FORM_DATA,
  REQUEST_FORM_DATA_SUCCESS,
  REQUEST_FORM_DATA_ERROR
} from "../Constants/formConstants";

export const requestFormData=()=>({
    type:REQUEST_FORM_DATA
})

export const requestFormDataSuccess=(response)=>({
    type:REQUEST_FORM_DATA_SUCCESS,
    payload:response
})

export const requestFormDataError=(error)=>({
    type:REQUEST_FORM_DATA_ERROR,
    error:error
})