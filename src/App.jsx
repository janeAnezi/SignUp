import React, { useState } from 'react'
import Login from './Components/Login'
import SignUp from './Components/SignUp'

function App() {
  const [activePage, setActivePage] = useState('login');
  const handlePageChange = (page) => {
    setActivePage(page);
  };
  
  return (
    <div>
      {activePage === 'SignUp' ? (
        <SignUp onSwitchToLogin={() => handlePageChange('Login')} />
        
      ) : (
        <Login onSwitchToSignup={() => handlePageChange('SignUp')} />
      )}
      
    </div>
  )

}

export default App
