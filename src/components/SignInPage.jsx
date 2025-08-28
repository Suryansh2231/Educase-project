import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";

function SignInPage() {
  const navigate = useNavigate();

  // Handle navigation to account
  
  
function handleGoToAccount(e) {
    e.preventDefault();
    setLoginError('');
    
    if (validateForm()) {
      const storedUser = localStorage.getItem('user');
      
      if (!storedUser) {
        setLoginError('User not found. Please sign up first.');
        return;
      }
      
      const userData = JSON.parse(storedUser);
      
      if (userData.email !== formData.email) {
        setLoginError('User not found. Please check your email.');
        return;
      }
      
      if (userData.password !== formData.password) {
        setLoginError('Incorrect password. Please try again.');
        return;
      }
      
      navigate('/account');
    }
  }
  
  function handleGoToSignUp() {
    navigate("/signup");
  }
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [loginError, setLoginError] = useState("");

  const validateForm = () => {
    const newErrors = {};

    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Email is invalid";
    if (!formData.password.trim()) newErrors.password = "Password is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  function handleGoToAccount(e) {
    e.preventDefault();
    setLoginError("");

    if (validateForm()) {
      const storedUser = localStorage.getItem("user");

      if (!storedUser) {
        setLoginError("User not found. Please sign up first.");
        return;
      }

      const userData = JSON.parse(storedUser);

      if (userData.email !== formData.email) {
        setLoginError("User not found. Please check your email.");
        return;
      }

      if (userData.password !== formData.password) {
        setLoginError("Incorrect password. Please try again.");
        return;
      }

      navigate("/account");
    }
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
              label="Email Address"
              type="email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              error={!!errors.email}
              helperText={errors.email}
              sx={{
                "& .MuiInputLabel-root": {
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
              label="Password"
              type="password"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
              error={!!errors.password}
              helperText={errors.password}
              sx={{
                "& .MuiInputLabel-root": {
                  color: "blue",
                },
              }}
              placeholder="Enter password"
            />
          </div>
        </Box>

        {loginError && (
          <p style={{ color: "red", fontSize: "14px", textAlign: "center" }}>
            {loginError}
          </p>
        )}
        <button type="submit" className="login-btn" onClick={handleGoToAccount}>
          Login
        </button>
        <button type="submit" onClick={handleGoToSignUp}>
          Don't have an account? Sign Up
        </button>
      </div>
    </div>
  );
}

export default SignInPage;
