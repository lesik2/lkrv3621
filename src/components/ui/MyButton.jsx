import React, { useState } from 'react'
import '../../styles/MyButton.css';

export default function MyButton({text, onClick,padding, fontSize,type}) {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked(true);
    setTimeout(()=>{
      setClicked(false);
    },200)
  }
  return (
    <div onClick={onClick}>
      <button type={type} style={{padding:padding, fontSize: fontSize}} onClick={handleClick} className={clicked?'custom-button clicked':'custom-button'}>
        {text}
      </button>
    </div>
  )
}
