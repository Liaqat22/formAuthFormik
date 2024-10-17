import React from 'react';
import { Button, Typography, Box } from '@mui/material';
import { NavLink } from 'react-router-dom';

function Error404() {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        backgroundColor: '#001f3f', // Dark Blue background color
        textAlign: 'center',
        padding: '20px',
      }}
    >
      {/* Error Image */}
      <img 
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5XKa_k2EF-FazLujKWp_gijPfYNTU6ADkqA&s" 
        alt="404 Error" 
        style={{ width: '100%', maxWidth: '300px', marginBottom: '20px', borderRadius:"2rem" }} 
      />

      {/* Font Awesome Error Icon */}
      <i className="fas fa-exclamation-triangle" style={{ fontSize: '100px', color: '#d32f2f', marginBottom: '20px' }} />

      {/* Error Title */}
      <Typography variant="h2" sx={{ fontWeight: 'bold', color: 'white' }}>
        404 - Page Not Found
      </Typography>

      {/* Error Message */}
      <Typography variant="body1" sx={{ marginTop: '10px', marginBottom: '20px', color: '#cccccc' }}>
        Oops! The page you’re looking for doesn’t exist. It might have been moved or deleted.
      </Typography>

      {/* Go Back Button */}
      <Button
        variant="contained"
        color="primary"
        size="large"
        component = {NavLink}
        to = "/"
        sx={{ padding: '10px 20px', textTransform: 'none' }}
      >
        Go to Homepage
      </Button>
    </Box>
  );
}

export default Error404;
