import React, { Component } from 'react';

export class StepOne extends Component {
  render() {
    return (
      <div className="container">
          <form className="flex-container">
              <label>Email:</label>
              <input 
              value=""
              placeholder="your_email@email.com"
              autocomplete="off"
              type="email"></input><br/>

              <label>Password:</label>
              <input 
              value=""
              placeholder="your_password"
              type="password"></input><br/>
          </form>
          <div className="buttons">
            <button>Save and Continue</button>
          </div>
         
      </div>
    )
  }
}

export default StepOne;
