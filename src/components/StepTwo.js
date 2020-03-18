import React, { Component } from 'react';

export class StepTwo extends Component {

  goBack = (event) => {
    event.preventDefault();
    this.props.prevStep();
  }

  saveAndContinue = (event) => {
    event.preventDefault();
    setTimeout(() => {
      this.props.nextStep();
    }, 500); // simulate API load time
  }

  render() {
    const { values } =  this.props;
    return (
      <div className="container">
          <form className="flex-container">
            <h2>Personal Information</h2>
            <label for="userFullName">Full Name</label>
            <input 
              type="text"
              id="userFullName"
              onChange={this.props.handleChange('name')}
              defaultValue={values.name}>
            </input><br/>

            <label for="userAge">Age</label>
            <input 
              type="number"
              id="userAge"
              onChange={this.props.handleChange('age')}
              defaultValue={values.age}>
            </input><br/>
            <div className="submit">
              <span onClick={this.goBack}>Go Back</span>
              <button onClick={this.saveAndContinue}>Submit</button>
            </div> 
          </form>
          
      </div>
    )
  }
}

export default StepTwo;
