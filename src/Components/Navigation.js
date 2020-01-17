import React, { Component } from "react";
import "../Components/navigation.css";

export class Navigation extends Component {

  constructor(props) {
      super(props)
  
      this.state = {
           open:false
      }
  }

  toggleHandler=()=>{
      
    this.setState({open:!this.state.open})
    console.log(this.state.open)
  }
  
  render() {
    return (
      <div>
        <div className={`sidebar ${this.state.open ?'open':''}`}>
          <div className="header">
            <h1>Resume</h1>
            <button
              type="button"
              className="btn btn-default"
              aria-label="Left Align"
              onClick={this.toggleHandler}
            ><i className="material-icons large">apps</i></button>
          </div>
          <div className="profile-image">
            <img src="profile.jpg" />
          </div>

          <div className="menu-drawer">
            <div className="icons"><a href="#contact">Home</a><i className="material-icons">home</i></div>
            <div className="icons"><a>Admission</a><i className="material-icons">account_balance</i></div>
            <div className="icons"><a>Explore</a><i className="material-icons">explore</i></div>
            <div className="icons"><a href="#research">Research</a><i className="material-icons">contact_phone</i></div>
            <div className="icons"><a>Home</a><i className="material-icons large">home</i></div>
            <div className="icons"><a>Admission</a><i className="material-icons">account_balance</i></div>
            <div className="icons"><a>Explore</a><i className="material-icons">explore</i></div>
            <div className="icons"><a>Contact</a><i className="material-icons">contact_phone</i></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Navigation;
