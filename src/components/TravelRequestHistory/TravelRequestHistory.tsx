'use client'
import React from 'react';
import { Container, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

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
      <TableContainer component={Paper} sx={{ marginTop: '2rem', backgroundColor: '#ecf0f1', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)' }}>
        <Table>
          <TableHead>
            <TableRow sx={{ backgroundColor: '#34495e' }}>
              <TableCell sx={{ color: '#ffffff', fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }}>Destination</TableCell>
              <TableCell sx={{ color: '#ffffff', fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }}>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {travelRequests.map((request) => (
              <TableRow key={request.id} sx={{ '&:nth-of-type(even)': { backgroundColor: '#f5f5f5' }, '&:hover': { backgroundColor: '#f0f0f0' } }}>
                <TableCell sx={{ fontFamily: 'Montserrat, sans-serif', color: '#34495e', fontWeight: 600 }}>{request.destination}</TableCell>
                <TableCell sx={{ fontFamily: 'Roboto, sans-serif', color: '#7f8c8d', fontWeight: 400 }}>
                  <Typography
                    variant="body2"
                    sx={{
                      display: 'inline-block',
                      padding: '0.3rem 0.6rem',
                      borderRadius: '12px',
                      color: '#ffffff',
                      backgroundColor: request.status === 'approved' ? '#2ecc71' : request.status === 'pending' ? '#f39c12' : '#e74c3c',
                      fontFamily: 'Roboto, sans-serif',
                      fontWeight: 400
                    }}
                  >
                    {request.status}
                  </Typography>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default TravelRequestHistory;
