import React from 'react'
import '../Counter.css'
import { useState } from 'react'
const About = () => {
  const [num,setNum] = useState('');
  const handleClick = () =>{
    const parsedNum = parseInt(num);
    if(parsedNum%2 === 0){
      setNum("Even");
    }
    else{
      setNum("Odd");
    }
  }
  return (
    <div className='middle'>
      <input placeholder='Enter the number'  onChange={(event) => setNum(event.target.value)} />
      <button onClick={handleClick}> Odd or Even</button>
      <h2>The Number is {num}</h2>
    </div>

  )
}

export default About