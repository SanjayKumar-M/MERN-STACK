import React, { useState } from 'react';

const DarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div>
      <h1>My Website</h1>
      <button onClick={handleToggle}>
        {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      </button>
      <div
        style={{
          background: isDarkMode ? 'black' : 'white',
          color: isDarkMode ? 'white' : 'black',
          height: '100vh',
          padding: '1rem',
        }}
      >
        <h2>Hello, Sanjay</h2>
       
       
      </div>
    </div>
  );
};

export default DarkMode;
