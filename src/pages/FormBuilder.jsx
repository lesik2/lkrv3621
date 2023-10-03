import React,{useState} from 'react'
import '../styles/FormBuilder.css';
import MyInput from '../components/ui/MyInput';
import {formData , regValidInputs} from '../data';
import MyButton from '../components/ui/MyButton';
import Builder from '../components/form/Builder';


export default function FormBuilder() {
  const [inputsValue, setInputsValue] = useState({
    textarea: '',
    input: '',
    checkBox: ''
  });
  const [inputsErrors, setInputsErrors]  = useState({
    textarea: false,
    input: false,
    checkBox: false,
  })
  const [build, setBuild] = useState(false);
  const checkValidInputs = () =>{
    const errors = {
      textarea: false,
      input: false,
      checkBox: false,
    }
    if(!regValidInputs.test(inputsValue.textarea) || parseInt(inputsValue.textarea) < 0){
      errors.textarea = true;
    }
    if(!regValidInputs.test(inputsValue.input) || parseInt(inputsValue.input) < 0){
      errors.input = true;
    }
    if(!regValidInputs.test(inputsValue.checkBox) || parseInt(inputsValue.checkBox) < 0){
      errors.checkBox = true;
    }
    setInputsErrors(errors);
    if(Object.values(errors).includes(true)){
      setBuild(false)
    }else{
      setBuild(true);
    }
  }
  const handleInputs = (e)=>{
    const name = e.target.name;
    setInputsValue({...inputsValue,[name]:e.target.value});
    setInputsErrors({
      textarea: false,
      input: false,
      checkBox: false,
    });
    setBuild(false);
    
  }
  const handleSubmit = (e)=>{
    e.preventDefault();
    checkValidInputs();
  }
  return (
    <div className='builder-wrapper'>
      <form className='builder-form' onSubmit={handleSubmit}>
        <h2 className='builder-wrapper__title'>Form Builder</h2>
        {formData.map((item)=>(
          <MyInput
            key={item.id}
            name={item.name}
            placeholder={item.placeholder}
            label={item.label}
            value={inputsValue[item.name]}
            setValue={handleInputs}
            error={inputsErrors[item.name]}
          />
        ))}
        <div className='builder-form__btn'>
          <MyButton 
            type='submit'
            text='build' 
            padding='5px 25px 5px 25px' 
            fontSize='15px'
          />
        </div>
      </form>
      {build ?
        <Builder
          numberOfInputs={inputsValue.input}
          numberOfTextArea = {inputsValue.textarea}
          numberOfCheckBox = {inputsValue.checkBox}
         /> :
        null}
    </div>
  )
}
