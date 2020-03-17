import React, { Component } from 'react';
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import Confirmation from './Confirmation';

export class MainForm extends Component {

    state = {
        step: 1,
        email: '',
        password: '',
        name: '',
        age: ''
    };

    nextStep = () => {
        const { step } = this.state;
        this.setState({
            step: step + 1
        })
    };

    prevStep = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1
        })
    };

    handleChange = input => event => {
        this.setState({ [input] : event.target.value })
    };

  render() {
      const { step } = this.state;
      const { email, password, name, age } = this.state;
      const values = { email, password, name, age };

      switch(step) {
        case 1:
            return (
                <StepOne 
                nextStep={this.nextStep}
                handleChange={this.handleChange}
                values={values}
                />
            )

        case 2: return (
            <StepTwo 
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
            />
        )
            
        case 3: return (
            <Confirmation 
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
            />
        )    
      }
  }
}

export default MainForm;
