import React from 'react'
import '../Counter.css'
import { useState } from 'react'
import Props from '../Components/Props';
const About = () => {
  
  const [mess,setMess] = useState('');
  const [buton,setButon] = useState('Display Message');
  
  const handle = () =>{
    
    if(buton === 'Display Message'){
      setButon('Displayed Successfully');
      setMess("Hello Sanjay")
    }
    else{
      setButon('Display Message');
      setMess("")
    }
  }
  return (
    <div className='middle'>
      <h1>{mess}</h1>
      <button onClick={handle}>{buton}</button>
      <Props name='Sanjay'></Props>
    </div>

  )
}

export default About