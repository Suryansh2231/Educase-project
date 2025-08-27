import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Routes } from 'react-router-dom'
import App from './App.jsx'
import LandingPage from './components/landingPage.jsx'
import SignUpPage from './components/SignUpPage.jsx'
import SignInPage from './components/SignInPage.jsx'
import AccountSettingPage from './components/AccountSettingPage.jsx'

const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element= {<LandingPage/>}>
          <Route path='signup' element= {<SignUpPage/>}/>
          <Route path='signin' element= {<SignInPage/>}/>
          <Route path='account' element= {<AccountSettingPage/>}/>
      
      </Route>
    )
)
 
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
