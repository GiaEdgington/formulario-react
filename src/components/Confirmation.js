import React, { Component } from 'react'

export class Confirmation extends Component {

  goBack = (event) => {
    event.preventDefault();
    this.props.prevStep();
  }
   
  render() {
    const { values } = this.props;
    var firstName = values.name.replace(/ .*/,'');
    return (
      <div className="container">
        <div className="flex-container">
          {firstName ? 
          <h1>Thank you, {firstName},<br/>for signing up!</h1>
          :
          <h1>Thank you, Dear User,<br/>for signing up!</h1>
          }
          <h3>Here are your details:</h3>
          <h4>NAME</h4>
          <p>{values.name}</p>
          <h4>AGE</h4>
          <p>{values.age}</p>
          <h4>EMAIL</h4>
          <p>{values.email}</p>
        </div>
      </div>
    )
  }
}

export default Confirmation;
