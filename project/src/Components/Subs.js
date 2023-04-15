import React,{useState} from 'react'
import '../App.css'

const Subs = () => {

    const [sub,unsub] = useState("Welcome all to our Youtube channel");
    const [buton, setbuton] = useState("Subscribe")

    const handle = () =>{
        if(sub === "Welcome all to our Youtube channel"){
            unsub("You are Subscribed");
            setbuton("Subscribed")
        }
        else{
            unsub("Welcome all to our Youtube channel")
            setbuton("Unsubsribed")
        }
    }
   
  return (
    <div className='nav'>
        <div className='yout'>{sub}</div>
        <button onClick={handle} className='btn'>{buton}</button>
    </div>
  )
}

export default Subs