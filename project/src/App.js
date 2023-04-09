import React from 'react'
import './App.css'
import { Link } from 'react-router-dom'
import DarkMode from './Components/DarkMode'

const App = () => {

  return (
    <div className='nav'>
         <ul>
            <li><Link to='/home'>Home</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/docs'>Docs</Link></li>
        </ul>
        
    </div>
  )
}

export default App