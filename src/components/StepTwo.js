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
            <button onClick={this.saveAndContinue}>Submit</button>
          </form>
          <div className="arrows">
            <svg onClick={this.goBack} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z"/></svg>
            <svg xmlns="http://www.w3.org/2000/svg" opacity="0.2" width="24" height="24" viewBox="0 0 24 24"><path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"/></svg>
          </div> 
      </div>
    )
  }
}

export default StepTwo;
