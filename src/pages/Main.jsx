import React from 'react'
import MyButton from '../components/ui/MyButton'
import {useNavigate} from 'react-router-dom'
import '../styles/BasicPageStyles.css'

export default function Main() {
  const navigate = useNavigate();
  const handleClicked =() => {
    setTimeout(()=>{
      navigate("form");
    },400)
  }
  return (
    <div className='page-wrapper'>
        <MyButton text='Form' onClick={handleClicked}/>
    </div>

  )
}
