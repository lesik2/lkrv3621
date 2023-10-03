import React from 'react'
import MyButton from '../components/ui/MyButton'
import {useNavigate} from 'react-router-dom'

export default function Main() {
  const navigate = useNavigate();
  const handleClicked =() => {
    setTimeout(()=>{
      navigate("form");
    },400)
  }
  return (
    <div style={{ height: '100vh',display: 'flex', justifyContent: 'center','alignItems':'center', backgroundColor: '#fff2e6'}}>
        <MyButton text='Form' onClick={handleClicked}/>
    </div>

  )
}
