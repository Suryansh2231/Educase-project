import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LandingPage from './components/landingPage'
import SignIn from './components/SignInPage'
import Account from './components/SignUpPage'
import AccountSetting from './components/AccountSettingPage'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='parent'>
      <LandingPage/>
      <SignIn/>
      <Account/>
      <AccountSetting/> 
      </div>

    </>
  )
}

export default App
