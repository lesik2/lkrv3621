import React, { useState } from 'react'
import '../../styles/MyButton.css';

export default function MyButton({text, onClick,type, size}) {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked(true);
    setTimeout(()=>{
      setClicked(false);
    },200)
  }
  return (
    <div onClick={onClick}>
      <button type={type} onClick={handleClick} className={`${clicked?'custom-button clicked':'custom-button'} ${size==='small'?'custom-button__small':''}`}>
        {text}
      </button>
    </div>
  )
}
