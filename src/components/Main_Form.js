import React, { Component } from 'react';
import Step_One from './Step_One';
import Step_Two from './Step_Two';
import Step_Three from './Step_Three';

export class Main_Form extends Component {

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
    return (
      <div>
        
      </div>
    )
  }
}

export default Main_Form;
