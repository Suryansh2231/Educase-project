import React from 'react'
import { useNavigate } from 'react-router-dom'

function LandingPage() {
  const navigate = useNavigate();

  // Handle navigation to Sign Up
  function handleGoToSignUp() {
    navigate('/signup');
  }

  // Handle navigation to Sign In
  function handleGoToSignIn() {
    navigate('/signin');
  }

  return (
    <div className='page'>   
     <div className='login-container'>
      <h2>Welcome to PopX</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>

      <button 
        className='sign-up-btn' 
        onClick={handleGoToSignUp}
      >
        Create Account
      </button>

      <button 
        className='login-btn' 
        onClick={handleGoToSignIn}
      >
        Already Registered? Login
      </button>
    </div>
    </div>

  )
}

export default LandingPage
