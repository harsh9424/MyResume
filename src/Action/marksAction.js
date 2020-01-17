import {
    REQUEST_MARKS_DATA,
    REQUEST_MARKS_DATA_SUCCESS,
    REQUEST_MARKS_DATA_ERROR
  } from "../Constants/markConstants";
  
  export const requestMarksData=()=>({
      type:REQUEST_MARKS_DATA
  })
  
  export const requestMarksDataSuccess=(response)=>{
      console.log(response)
      return {
      type:REQUEST_MARKS_DATA_SUCCESS,
      payload:response
  }}
  
  export const requestMarksDataError=(error)=>({
      type:REQUEST_MARKS_DATA_ERROR,
      error:error
  })