import React, { Component, createRef } from "react";
import { connect } from "react-redux";
import {
  requestMarksData,
  requestMarksDataSuccess,
} from "../Action/marksAction";


class Mark extends Component {
  formRef=undefined

  constructor(props) {
      super(props)  
      this.state = {
           
      }
      this.formRef=React.createRef()
  }

  addHandler=()=>{
      console.log(this.formRef.current.value)
      this.props.requestMarksDataSuccess(this.formRef.current.value)
  }
  
  render() {
      
    return (
        <div>
            <div>
                <label>Add User Name</label>
                <input type="text" ref={this.formRef} />&nbsp;
                <button onClick={this.addHandler}>Add</button>
            </div>
            <div>
            {this.props.marks.map((elem,index)=>{
                return <li key={index}>{elem}</li>
            })}
            </div>
                
        </div>);
  }
}

const mapStateToProps = (store) => {
    // here we can access any data memeber present in the store, but we have to inform store 
    // what memebers of state, by returning object of data, 
    // so that store knows on change of which all state data variables
    // component should be re rendered
    console.log('Marks called')
    const marks=store.markData.marks
    
    return {marks}
}

const mapDispatchToProps = {
    requestMarksData, requestMarksDataSuccess
}

export default connect(mapStateToProps, mapDispatchToProps)(Mark)
