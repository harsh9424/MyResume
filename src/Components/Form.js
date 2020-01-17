import React, { Component, createRef } from "react";
import { connect } from "react-redux";
import {
  requestFormData,
  requestFormDataSuccess,
  requestFormDataError
} from "../Action/formAction";

import {
    requestMarksDataSuccess
  } from "../Action/marksAction";

export class Form extends Component {
  nameRef=undefined

  constructor(props) {
      super(props)  
      this.state = {
           
      }
      this.nameRef=React.createRef()
  }

  addHandler=()=>{
      console.log(this.nameRef.current.value)
      this.props.requestFormData()
      this.props.requestFormDataSuccess(this.nameRef.current.value)
  }
  
  addHandlers=()=>{
    console.log(this.nameRef.current.value)
    this.props.requestMarksDataSuccess(this.nameRef.current.value)
}

  render() {
      
    return (
        <div>
            <div>
                <label>Add User Name</label>
                <input type="text" ref={this.nameRef} />&nbsp;
                <button onClick={this.addHandler}>Add</button>
                <button onClick={this.addHandlers}>Add Marks in Forms</button>
            </div>
            <div>
                {this.props.formed.map((elem,index)=>{
                    return <li key={index}>{elem}</li>
                })}
                
            </div>
            <div>
                {console.log(this.props.marks)}
                
            </div>
        </div>);
  }
}

const mapStateToProps = (store) => {
    // here we can access any data memeber present in the store, but we have to inform store 
    // what memebers of state, by returning object of data, 
    // so that store knows on change of which all state data variables
    // component should be re rendered
    console.log('form called')
    const loadings=store.formData.loading
    const formed=store.formData.forms
    const marks=store.markData.marks

    return {loadings,formed,marks}
}

const mapDispatchToProps = {
    requestFormData,requestFormDataSuccess,requestFormDataError,requestMarksDataSuccess
}

export default connect(mapStateToProps, mapDispatchToProps)(Form);
