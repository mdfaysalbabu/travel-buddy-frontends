'use client'
import React, { useState } from 'react';
import { Container, Typography, Box, TextField, Button, Card, Grid } from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';
import SaveIcon from '@mui/icons-material/Save';

const ChangePassword = () => {
  const [formData, setFormData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSave = () => {
    // Implement save functionality
    console.log('Password changed', formData);
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
      <Box sx={{ marginTop: '2rem', marginBottom: '2rem' }}>
        <Card sx={{ padding: '2rem', borderRadius: '15px', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)' }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                name="currentPassword"
                label="Current Password"
                variant="outlined"
                type="password"
                fullWidth
                value={formData.currentPassword}
                onChange={handleChange}
                sx={{ fontFamily: 'Roboto, sans-serif', marginBottom: '1rem' }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="newPassword"
                label="New Password"
                variant="outlined"
                type="password"
                fullWidth
                value={formData.newPassword}
                onChange={handleChange}
                sx={{ fontFamily: 'Roboto, sans-serif', marginBottom: '1rem' }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="confirmPassword"
                label="Confirm New Password"
                variant="outlined"
                type="password"
                fullWidth
                value={formData.confirmPassword}
                onChange={handleChange}
                sx={{ fontFamily: 'Roboto, sans-serif', marginBottom: '1rem' }}
              />
            </Grid>
            <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
              <Button
                variant="contained"
                color="primary"
                startIcon={<SaveIcon />}
                onClick={handleSave}
                sx={{ fontFamily: 'Montserrat, sans-serif', backgroundColor: '#3498db', '&:hover': { backgroundColor: '#2980b9' } }}
              >
                Save
              </Button>
            </Grid>
          </Grid>
        </Card>
      </Box>
    </Container>
  );
};

export default ChangePassword;
