import React, { useState } from 'react';
import Login from './Components/Login'
import SignUp from './Components/SignUp'

function App() {
  const [isLoginPage, setIsLoginPage] = useState(true);

  const togglePage = () => {
    setIsLoginPage(!isLoginPage);
  };

  return (
    <>
      <div>
        <button onClick={togglePage}>
            {isLoginPage ? 'Sign Up' : 'Log In'}
        </button>
        {isLoginPage ? <Login /> : <SignUp />}
      </div>
    </>
  )
}

export default App
