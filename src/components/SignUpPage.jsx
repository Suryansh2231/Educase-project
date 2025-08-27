import React from 'react'

function SignUpPage() {
  return (
    <div>
        <div class="login-container">
    <h2>Create your <br/>PopX account</h2>
    <form>
      <div class="form-group">
        <label for="email">Email Address</label>
        <input type="email" id="email" placeholder="Enter email address" required/>
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input type="password" id="password" placeholder="Enter password" required/>
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input type="password" id="password" placeholder="Enter password" required/>
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input type="password" id="password" placeholder="Enter password" required/>
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input type="password" id="password" placeholder="Enter password" required/>
      </div>
      <div className="form-group">
        <p>Are you an Agency?</p>
        <label>Yes</label>
        <input type="checkbox" name="" id="" />
        <label>No</label>
        <input type="checkbox" name="" id="" />
      </div>
      <button type="submit" class="btn">Login</button>
    </form>
  </div>
    </div>
  )
}

export default SignUpPage