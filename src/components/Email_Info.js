import React, { Component } from 'react';

export class Email_Info extends Component {
  render() {
    return (
      <div>
          <form>
              <label>Email:</label>
              <input type="email"></input><br/>

              <label>Password:</label>
              <input type="password"></input><br/>
          </form>
          <button>Save and Continue</button>
      </div>
    )
  }
}

export default Email_Info;
