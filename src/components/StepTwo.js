import React, { Component } from 'react';

export class StepTwo extends Component {

  state={
    errors: false
  }

  goBack = (event) => {
    event.preventDefault();
    this.props.prevStep();
  }

  saveAndContinue = (event) => {
    event.preventDefault();
    
    if(!this.props.values.name){
      this.setState({ errors: true })
    } else {
      setTimeout(() => {
        this.props.nextStep();
      }, 500); // simulate API load time
    }
  }

  render() {
    const { values } =  this.props;
    return (
      <div className="container">
          <form className="flex-container" onSubmit={this.saveAndContinue}>
            <h2>Personal Information</h2>
            {this.state.errors ? <span className="error">*Field is required.</span>
            :
            <div></div>}
            <label htmlFor="userFullName">Full Name</label>
            <input 
              type="text"
              className="inputClass"
              id="userFullName"
              onChange={this.props.handleChange('name')}
              defaultValue={values.name}
              required />
              <br/>

            <label htmlFor="userAge">Age</label>
            <input 
              type="number"
              className="inputClass"
              id="userAge"
              onChange={this.props.handleChange('age')}
              defaultValue={values.age}>
            </input><br/>
            <div className="submit">
              <span onClick={this.goBack}>Go Back</span>
              <button type="submit">Submit</button>
            </div> 
          </form>
      </div>
    )
  }
}

export default StepTwo;
