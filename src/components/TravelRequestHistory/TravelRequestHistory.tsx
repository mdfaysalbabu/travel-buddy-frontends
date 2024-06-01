'use client'
import React from 'react';
import { Container, Grid, Card, CardContent, Typography } from '@mui/material';

const travelRequests = [
  {
    id: 1,
    destination: 'Paris, France',
    status: 'pending',
  },
  {
    id: 2,
    destination: 'Tokyo, Japan',
    status: 'approved',
  },
  {
    id: 3,
    destination: 'New York, USA',
    status: 'rejected',
  },
  // Add more requests as needed
];

const TravelRequestHistory = () => {
  return (
    <Container maxWidth="lg" sx={{ marginTop: '2rem' }}>
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{ fontFamily: 'Montserrat, sans-serif', color: '#2c3e50', fontWeight: 700 }}
      >
        Travel Request History
      </Typography>
      <Grid container spacing={4}>
        {travelRequests.map((request) => (
          <Grid item key={request.id} xs={12} sm={6} md={4}>
            <Card
              sx={{
                backgroundColor: '#ecf0f1',
                borderRadius: '15px',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                '&:hover': {
                  transform: 'scale(1.05)',
                  transition: 'transform 0.3s',
                },
              }}
            >
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h6"
                  component="h2"
                  sx={{ fontFamily: 'Montserrat, sans-serif', color: '#34495e', fontWeight: 600 }}
                >
                  {request.destination}
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="p"
                  sx={{ fontFamily: 'Roboto, sans-serif', color: '#7f8c8d', fontWeight: 400 }}
                >
                  Status: {request.status}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default TravelRequestHistory;
