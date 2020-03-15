import React, { Component } from 'react'

export class StepTwo extends Component {
  render() {
    return (
      <div>
          <form>
            <label>Full Name:</label>
            <input type="text"></input><br/>

            <label>Age:</label>
            <input type="number"></input><br/>
          </form>
          <div>
            <button>Go Back</button>
            <button>Save and Continue</button>
          </div>
      </div>
    )
  }
}

export default StepTwo;
