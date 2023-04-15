import React from 'react'
import { useState } from 'react'
import '../Counter.css'
const Counter = () => {

    const [count, setCount] = useState(0);
    const Increment= () =>{
        setCount(count+1);
    }
    const Decrement = () =>{
        setCount(count-1);
    }
  return (
    <div className='middle'>
        <h1>{count}</h1>
        <button onClick={Increment} className='btn'>Click here to incement</button>
        <button onClick={Decrement} className='btn'>Click Here to Decrement</button>
    </div>
  )
}

export default Counter