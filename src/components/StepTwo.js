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
            <label>Full Name</label>
            <input 
              type="text"
              placeholder="Your Name"
              onChange={this.props.handleChange('name')}
              defaultValue={values.name}>
            </input><br/>

            <label>Age</label>
            <input 
              type="number"
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
