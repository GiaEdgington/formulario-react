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
    return (
      <div>
        
      </div>
    )
  }
}

export default Main_Form;
