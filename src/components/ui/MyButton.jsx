import React, { useState } from 'react'
import '../../styles/MyButton.css';

export default function MyButton({text, onClick}) {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked(true);
    setTimeout(()=>{
      setClicked(false);
    },200)
  }
  return (
    <div onClick={onClick}>
      <button onClick={handleClick} className={clicked?'custom-button clicked':'custom-button'}>
        {text}
      </button>
    </div>
  )
}
