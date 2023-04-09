import React, { useState } from 'react'


const DarkMode = () => {
  const [dark] = useState(false);

  return (
    <div>
        <h1 style={{color : dark ? "black" : "gold"}}>This is Conditional Rendering</h1>
        {dark && <button >Click here to change</button>}
    </div>
  )
}

export default DarkMode