import React, { useState } from 'react'
import Login from './Components/Login'
import SignUp from './Components/SignUp'

function App() {
  const [activePage, setActivePage] = useState('login');
  const handlePageChange = (page) => {
    setActivePage(page);
  };
  // const [isLoginPage, setIsLoginPage] = useState(true);
  // const [activeButton, setActiveButton] = useState('login');
  // function handleClick(e) {
  //   if (e.target.id === activeButton) return;
  //   setActiveButton(e.target.id);
  //   setIsLoginPage(!isLoginPage);
  // }
  return (
    <div>
      {activePage === 'SignUp' ? (
        <Login onSwitchToSignup={() => handlePageChange('SignUp')} />
      ) : (
        <SignUp onSwitchToLogin={() => handlePageChange('Login')} />
      )}
      {/* <header> 
        <button id="login" onClick={handleClick}>Login</button>
        <button id="signup" onClick={handleClick}>Sign Up</button>
      </header> */}
      {/* <main>
        { isLoginPage ? <Login /> : <SignUp />} 
      </main> */}
    </div>
  )

}

export default App
