import React from 'react'
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import { Box } from "@mui/material";
import { useNavigate } from 'react-router-dom'



function AccountSettingPage() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/');
  };
  return (
    <div className='account-container'>
        <h2>Account Setting</h2>
        <br />
        <div className='account-box'>
          <div>
             <Box sx={{ position: "relative", display: "inline-block" }}>
      {/* Profile Image */}
         <img className='account-img' src={'./images/Marry-image.png'} alt="" />


      {/* Camera Icon Overlay */}
      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          right: 0,
          backgroundColor: "#3B38A0",
          borderRadius: "50%",
          padding: "4px",
          cursor: "pointer",
          boxShadow: 2,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: '#f7f7f7'
        }}
      >
        <CameraAltIcon fontSize="small" />
      </Box>
    </Box>
        </div>
        <div className='account-detail'>
        <h1>Marry Doe</h1>
        <p>Marry@Gmail.com</p>
        </div>
        </div>
        <p className='account-desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui necessitatibus adipisci dicta labore quae sit totam eius doloribus magnam at modi nisi sequi,</p>
        <br />
        <button className='login-btn' onClick={handleLogout}>
          Logout
        </button>

    </div>
  )
}

export default AccountSettingPage