import * as React from "react";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";

import TextField from "@mui/material/TextField";

function SignInPage() {
  const navigate = useNavigate();

  // Handle navigation to account
  function handleGoToAccount() {
    navigate("/account");
  }
    function handleGoToSignUp() {
    navigate('/signup');
  }

  return (
    <div>
      <div className="login-container">
        <h2>
          Signin to your <br />
          PopX account
        </h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

        <Box
          className="box"
          component="form"
          sx={{ "& .MuiTextField-root": { m: 1, width: "100%" } }}
          noValidate
          autoComplete="off"
        >
          <div>
            <TextField
              required
              id="outlined-required"
              label="Email Address"
              sx={{
                "& .MuiInputLabel-root": {
                  // Targets the label
                  color: "blue",
                },
              }}
              placeholder="Enter email address"
            />
          </div>
        </Box>
        <Box
          component="form"
          sx={{ "& .MuiTextField-root": { m: 1, width: "100%" } }}
          noValidate
          autoComplete="off"
        >
          <div>
            <TextField
              required
              id="outlined-required"
              label="Password"
              sx={{
                "& .MuiInputLabel-root": {
                  // Targets the label
                  color: "blue",
                },
              }}
              placeholder="Enter password"
            />
          </div>
        </Box>

        <button type="submit" className="login-btn" onClick={handleGoToAccount}>
          Login
        </button>
        <button type="submit"  onClick={handleGoToSignUp}>
          Don't have an account? Sign Up
        </button>
      </div>
    </div>
  );
}

export default SignInPage;
