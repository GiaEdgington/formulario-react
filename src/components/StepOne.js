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
              <label>Email:</label>
              <input
              placeholder="your_email@email.com"
              autoComplete="off"
              type="email" 
              onChange = {this.props.handleChange('email')}
              defaultValue={values.email}>
              </input><br/>

              <label>Password:</label>
              <input 
              placeholder="your_password"
              type="password"
              onChange = {this.props.handleChange('password')}
              defaultValue={values.password}>
              </input><br/>
          </form>
          <div className="arrows">
            <svg xmlns="http://www.w3.org/2000/svg" opacity="0.2" width="24" height="24" viewBox="0 0 24 24"><path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z"/></svg>
            <svg onClick={this.saveAndContinue} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"/></svg>
          </div>
      </div>
    )
  }
}

export default StepOne;
