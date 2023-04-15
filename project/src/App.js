import React from 'react'
import './App.css'
import { Link } from 'react-router-dom'


const App = () => {

  return (
    <div>
     
        <nav>
          <div>
              <p>MERN</p>
          </div>
          <ul>
            
            <li><Link to='/home'>Home</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/docs'>Docs</Link></li>
            
          </ul>
        </nav>
        
        <div className='content'>

        <p>Click here to view the projects and topics Covered</p>
        
      
        </div>
         
        
    </div>
  )
}

export default App