'use client'

import React, { useState } from 'react';
import { Container, Grid, Box, Typography, List, ListItem, ListItemText, Divider } from '@mui/material';


import ProfileEdit from '../Profile/Edit';
import ChangePassword from '../Profile/ChangePassword';

const MyProfile = () => {
  const [selectedSection, setSelectedSection] = useState('editProfile');

  const renderSection = () => {
    switch (selectedSection) {
      case 'editProfile':
        return <ProfileEdit />;
      case 'changePassword':
        return <ChangePassword />;
      default:
        return null;
    }
  };

  return (
    <Container maxWidth="lg" sx={{ marginTop: '2rem' }}>
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{ fontFamily: 'Montserrat, sans-serif', color: '#2c3e50', fontWeight: 700 }}
      >
        My Profile
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} md={4}>
          <Box
            sx={{
              backgroundColor: '#ecf0f1',
              borderRadius: '15px',
              padding: '1rem',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
            }}
          >
            <Typography
              variant="h6"
              gutterBottom
              sx={{ fontFamily: 'Montserrat, sans-serif', color: '#34495e', fontWeight: 600 }}
            >
              Settings
            </Typography>
            <List component="nav">
              <ListItem button onClick={() => setSelectedSection('editProfile')}>
                <ListItemText primary="Edit Profile" />
              </ListItem>
              <Divider />
              <ListItem button onClick={() => setSelectedSection('changePassword')}>
                <ListItemText primary="Change Password" />
              </ListItem>
              <Divider />
            </List>
          </Box>
        </Grid>
        <Grid item xs={12} md={8}>
          <Box
            sx={{
              backgroundColor: '#ecf0f1',
              borderRadius: '15px',
              padding: '2rem',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
              minHeight: '400px',
            }}
          >
            
                <div>{renderSection()}</div>
              
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default MyProfile;
