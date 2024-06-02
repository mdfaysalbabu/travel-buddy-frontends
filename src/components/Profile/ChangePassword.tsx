'use client'
import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Box } from '@mui/material';

const ChangePassword = () => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleChangePassword = () => {
    // Implement change password functionality
    console.log('Password changed');
  };

  return (
    <Container maxWidth="sm" sx={{ marginTop: '2rem' }}>
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{ fontFamily: 'Montserrat, sans-serif', color: '#2c3e50', fontWeight: 700 }}
      >
        Change Password
      </Typography>
      <Box sx={{ backgroundColor: '#ecf0f1', borderRadius: '15px', padding: '2rem', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)' }}>
        <TextField
          fullWidth
          label="Current Password"
          type="password"
          variant="outlined"
          value={currentPassword}
          onChange={(e) => setCurrentPassword(e.target.value)}
          sx={{ marginBottom: '1rem' }}
        />
        <TextField
          fullWidth
          label="New Password"
          type="password"
          variant="outlined"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          sx={{ marginBottom: '1rem' }}
        />
        <TextField
          fullWidth
          label="Confirm New Password"
          type="password"
          variant="outlined"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          sx={{ marginBottom: '1rem' }}
        />
        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={handleChangePassword}
          sx={{ fontFamily: 'Montserrat, sans-serif', backgroundColor: '#3498db', '&:hover': { backgroundColor: '#2980b9' } }}
        >
          Change Password
        </Button>
      </Box>
    </Container>
  );
};

export default ChangePassword;
