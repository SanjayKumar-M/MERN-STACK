import React from 'react'
import { Link } from 'react-router-dom'

const navigation = () => {
  return (
    <div>
        <ul>
            <li><Link to='/home'>Home</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/docs'>Docs</Link></li>
        </ul>
    </div>
  )
}

export default navigation