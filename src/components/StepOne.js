import React, { Component } from 'react';

export class StepOne extends Component {

  state = {
    errors: false
  }

  saveAndContinue = (event) => {
    event.preventDefault();

    if(!this.props.values.email || !this.props.values.password){
      this.setState({ errors: true })
    } else {
      this.props.nextStep();
    }
  }

  render() {
    const { values } =  this.props;
    return (
      <div className="container">
          <form className="flex-container" onSubmit={this.saveAndContinue}>
            <h2>Login Information</h2>
            {this.state.errors ? <span className="error">*Field is required.</span>
            :
            <div></div>}
            <label htmlFor="userEmail">Email</label>
            <input
              type="email" 
              className="inputClass"
              id="userEmail"
              onChange = {this.props.handleChange('email')}
              defaultValue={values.email} 
              required />
            <br/>

            <label htmlFor="userPassword">Password</label>
            <input 
              id="userPassword"
              className="inputClass"
              type="password"
              onChange = {this.props.handleChange('password')}
              defaultValue={values.password} 
              required />
            <br/>
            <div className="continue">
              <input type="submit" value="Continue"/>
            </div>
          </form>
      </div> 
    )
  }
}

export default StepOne;
