import * as React from "react";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";

import TextField from "@mui/material/TextField";

export default function SignUpPage() {
  const navigate = useNavigate();

  // Handle navigation to account
  function handleGoToAccount() {
    navigate("/account");
  }
  function handleGoToSignIn() {
    navigate('/signin');
  }
  return (
    <>
      <div className="login-container">
        <br />
        <h2>
          Create your 
          PopX account
        </h2>

        <Box
          component="form"
          sx={{ "& .MuiTextField-root": { m: 1, width: "30ch" } }}
          noValidate
          autoComplete="off"
        >
          <div>
            <TextField
              required
              id="outlined-required"
              label="Full Name"
              sx={{
                "& .MuiInputLabel-root": {
                  // Targets the label
                  color: "blue",
                },
                
                "& .MuiInputLabel-asterisk": {
                  color: "red", // Change the color of the asterisk
                  fontSize: "1.2rem", // Change the font size
                  fontWeight: "bold", // Make it bold
                },
              }}
              placeholder="Marry Doe"
            />
          </div>
        </Box>
        <Box
          component="form"
          sx={{ "& .MuiTextField-root": { m: 1, width: "30ch" } }}
          noValidate
          autoComplete="off"
        >
          <div>
            <TextField
              required
              id="outlined-required"
              label="Phone number"
              sx={{
                "& .MuiInputLabel-root": {
                  // Targets the label
                  color: "blue",
                },
                
                "& .MuiInputLabel-asterisk": {
                  color: "red", // Change the color of the asterisk
                  fontSize: "1.2rem", // Change the font size
                  fontWeight: "bold", // Make it bold
                },
              }}
              placeholder="+91 12345 98765"
            />
          </div>
        </Box>
        <Box
          component="form"
          sx={{ "& .MuiTextField-root": { m: 1, width: "30ch" } }}
          noValidate
          autoComplete="off"
        >
          <div>
            <TextField
              required
              id="outlined-required"
              label="Email address"
              sx={{
                "& .MuiInputLabel-root": {
                  // Targets the label
                  color: "blue",
                },
                
                "& .MuiInputLabel-asterisk": {
                  color: "red", // Change the color of the asterisk
                  fontSize: "1.2rem", // Change the font size
                  fontWeight: "bold", // Make it bold
                },
              }}
              placeholder="name123@gmail.com"
            />
          </div>
        </Box>
        <Box
          component="form"
          sx={{ "& .MuiTextField-root": { m: 1, width: "30ch" } }}
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
                
                "& .MuiInputLabel-asterisk": {
                  color: "red", // Change the color of the asterisk
                  fontSize: "1.2rem", // Change the font size
                  fontWeight: "bold", // Make it bold
                },
              }}
              placeholder="123@#$abcXYZ"
            />
          </div>
        </Box>
        <Box
          component="form"
          sx={{ "& .MuiTextField-root": { m: 1, width: "30ch" } }}
          noValidate
          autoComplete="off"
        >
          <div>
            <TextField
              sx={{
                "& .MuiInputLabel-root": {
                  // Targets the label
                  color: "blue",
                },
               
              }}
              id="outlined-required"
              label="Company name"
              placeholder="Google"
            />
          </div>
        </Box>

        <div className="form-group">
          <p>Are you an Agency?</p>
          <input className="radio-btn" type="radio" name="" id="" />
          <label>Yes</label>
          <input className="radio-btn" type="radio" name="" id="" />
          <label>No</label>
        </div>
        <button type="submit" className="btn" onClick={handleGoToAccount}>
          Create Account
        </button>
        <button type="submit" onClick={handleGoToSignIn}>
          Already have Account? Sign In
        </button>
      </div>
    </>
  );
}
