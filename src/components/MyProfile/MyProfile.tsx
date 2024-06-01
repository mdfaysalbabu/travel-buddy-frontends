'use client'
import React from 'react';
import { Container, Typography, Box, Card, Button } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import LockIcon from '@mui/icons-material/Lock';

const MyProfile = () => {
  const handleEditProfile = () => {
    // Implement edit profile functionality
    console.log('Edit Profile');
  };

  const handleChangePassword = () => {
    // Implement change password functionality
    console.log('Change Password');
  };

  return (
    <Container maxWidth="sm" sx={{ marginTop: '2rem' }}>
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{ fontFamily: 'Montserrat, sans-serif', color: '#2c3e50', fontWeight: 700 }}
      >
        My Profile
      </Typography>
      <Box sx={{ marginTop: '2rem', marginBottom: '2rem' }}>
        <Card sx={{ padding: '2rem', borderRadius: '15px', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)' }}>
          <Typography variant="h5" sx={{ fontFamily: 'Montserrat, sans-serif', color: '#34495e', fontWeight: 600 }}>
            User Account Information
          </Typography>
          <Typography variant="body1" sx={{ fontFamily: 'Roboto, sans-serif', color: '#7f8c8d', marginTop: '1rem' }}>
            Username: faysal
          </Typography>
          <Typography variant="body1" sx={{ fontFamily: 'Roboto, sans-serif', color: '#7f8c8d' }}>
            Email: faysal@gmail.com
          </Typography>
          <Box sx={{ marginTop: '2rem', display: 'flex', justifyContent: 'space-between' }}>
            <Button
              variant="contained"
              color="primary"
              startIcon={<EditIcon />}
              onClick={handleEditProfile}
              sx={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              Edit Profile
            </Button>
            <Button
              variant="outlined"
              color="secondary"
              startIcon={<LockIcon />}
              onClick={handleChangePassword}
              sx={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              Change Password
            </Button>
          </Box>
        </Card>
      </Box>
    </Container>
  );
};

export default MyProfile;
