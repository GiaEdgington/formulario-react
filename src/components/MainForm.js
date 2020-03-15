import React, { Component } from 'react';
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import StepThree from './StepThree';

export class MainForm extends Component {

    state = {
        step: 1,
        email: '',
        password: '',
        name: '',
        age: ''
    }

  render() {
      const { step } = this.state;
      const { email, password, name, age } = this.state;
      const values = { email, password, name, age };

      switch(step) {
        case 1:
            return (
                <StepOne />
            )
            

        case 2: return (
            <StepTwo />
        )
            
        
        case 3: return (
            <StepThree />
        )    
      }
  }
}

export default MainForm;
