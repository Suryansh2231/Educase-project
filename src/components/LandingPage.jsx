import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

function LandingPage() {
  const navigate = useNavigate();
    function handleGoToSignUp() {
    navigate('/signup');
  }
  return (
    <div className='page'>
        <h1>Welcome to PopX</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        <button className='sign-up-btn' onClick={handleGoToSignUp}
      >Create Account</button>
        <button className='login-btn'>Already Resistered? Login</button>
    </div>
  )
}

export default LandingPage