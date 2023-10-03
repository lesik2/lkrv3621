import React from 'react'
import '../../styles/Builder.css';
import { nameOfInputs } from '../../data';

export default function Builder({numberOfInputs, numberOfTextArea,  numberOfCheckBox}) {
  const createDifferentInputs = (number, nameOfInput) => {
    const inputs = [];
    if(parseInt(number) === 0) return;
    for(let i=0;i<number;i++){
      switch(nameOfInput){
        case nameOfInputs.input:{
          inputs.push(<input key={i} className='build-input' />)
          break;
        }
        case nameOfInputs.textArea:{
          inputs.push(<textarea key={i} className='build-textarea' />)
          break;
        }
        case nameOfInputs.checkBox:{
          inputs.push(<input key={i} className='build-checkbox' type='checkbox' />)
          break;
        }
        default: {
          return null;
        }

      }
    }
    return inputs;
  }
  return (
    <div className='build'>
      <h2 className='build__title'>Form</h2>
      <div className='build__form'>
        {createDifferentInputs(numberOfTextArea, nameOfInputs.textArea)}
        {createDifferentInputs(numberOfInputs, nameOfInputs.input)}
        {createDifferentInputs(numberOfCheckBox, nameOfInputs.checkBox)}
      </div>
    </div>
    
  )
}
