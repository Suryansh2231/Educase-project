import React from 'react'

function SignInPage() {
  return (
    <div>
        <div class="login-container">
    <h2>Signin to your <br/>PopX account</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

    <form>
      <div class="form-group">
        <label for="email">Email Address</label>
        <input type="email" id="email" placeholder="Enter email address" required/>
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input type="password" id="password" placeholder="Enter password" required/>
      </div>
      <button type="submit" class="btn">Login</button>
    </form>
  </div>

    </div>
  )
}

export default SignInPage