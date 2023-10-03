import React from 'react'
import '../../styles/MyInput.css';
import { errorMessage } from '../../data';

export default function MyInput({name,label,placeholder, value, setValue,error}) {

  return (
    <div className='input-wrapper'>
      <div className='input-container'>
        <input
          className={error?'my-input input-error':'my-input'} 
          name={name}
          id={label}
          autoComplete='off'
          placeholder={placeholder}
          value={value}
          onChange={setValue}
        />
        {error?<p  className='helper-text'>{errorMessage}</p>: null}
      </div>
      
      <label className='input-wrapper__label'  htmlFor={label}>{label}</label>
    </div>
  )
}