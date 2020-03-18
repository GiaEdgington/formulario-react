import React, { Component } from 'react';

export class StepOne extends Component {

  saveAndContinue = (event) => {
    event.preventDefault();
    this.props.nextStep();
  }

  render() {
    const { values } =  this.props;
    return (
      <div className="container">
          <form className="flex-container">
            <h2>Login Information</h2>
            <label for="userEmail">Email</label>
            <input
              id="userEmail"
              autoComplete="off"
              type="email" 
              onChange = {this.props.handleChange('email')}
              defaultValue={values.email}>
            </input><br/>

            <label for="userPassword">Password</label>
            <input 
              id="userPassword"
              type="password"
              onChange = {this.props.handleChange('password')}
              defaultValue={values.password}>
            </input><br/>
            <div className="continue">
              <span onClick={this.saveAndContinue}>Continue</span>
            </div>
          </form>
      </div> 
    )
  }
}

export default StepOne;
