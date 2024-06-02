'use client'
import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Box } from '@mui/material';

const ProfileEdit = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');

  const handleSave = () => {
    // Implement save functionality
    console.log('Profile saved');
  };

  return (
    <Container maxWidth="sm" sx={{ marginTop: '2rem' }}>
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{ fontFamily: 'Montserrat, sans-serif', color: '#2c3e50', fontWeight: 700 }}
      >
        Edit Profile
      </Typography>
      <Box sx={{ backgroundColor: '#ecf0f1', borderRadius: '15px', padding: '2rem', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)' }}>
        <TextField
          fullWidth
          label="Username"
          variant="outlined"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          sx={{ marginBottom: '1rem' }}
        />
        <TextField
          fullWidth
          label="Email"
          variant="outlined"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          sx={{ marginBottom: '1rem' }}
        />
        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={handleSave}
          sx={{ fontFamily: 'Montserrat, sans-serif', backgroundColor: '#3498db', '&:hover': { backgroundColor: '#2980b9' } }}
        >
          Save Changes
        </Button>
      </Box>
    </Container>
  );
};

export default ProfileEdit;
