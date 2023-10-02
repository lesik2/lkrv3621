import React from 'react'
import MyButton from '../components/ui/MyButton'

export default function Main() {
  return (
    <div style={{ height: '100vh',display: 'flex', justifyContent: 'center','alignItems':'center', backgroundColor: '#fff2e6'}}>
      <MyButton text='Form' onClick={()=>console.log('hi')}/>
    </div>

  )
}
