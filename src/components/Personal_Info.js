import React, { Component } from 'react'

export class Personal_Info extends Component {
  render() {
    return (
      <div>
          <form>
            <label>Email:</label>
            <input type="email"></input><br/>

            <label>Password:</label>
            <input type="password"></input><br/>
          </form>
          <div>
            <button>Go Back</button>
            <button>Save and Continue</button>
          </div>
      </div>
    )
  }
}

export default Personal_Info
