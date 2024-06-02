'use client'

import React from 'react';
import { Container, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton, Button } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Link from 'next/link';
import Image from 'next/image';

const travelPosts = [
  {
    id: 1,
    destination: 'Paris, France',
    photo: 'https://source.unsplash.com/featured/?travel',
    description: 'A wonderful trip to Paris visiting the Eiffel Tower and Louvre Museum.',
    startDate: '2023-06-01',
    endDate: '2023-06-07',
  },
  {
    id: 2,
    destination: 'Tokyo, Japan',
    photo: 'https://source.unsplash.com/featured/?travel',
    description: 'Exploring the bustling city of Tokyo and its amazing food culture.',
    startDate: '2023-07-10',
    endDate: '2023-07-20',
  },
  // Add more posts as needed
];

const TravelPosts = () => {
  const handleEdit = (id: number) => {
    // Implement edit functionality
    console.log(`Edit post ${id}`);
  };

  const handleDelete = (id: number) => {
    // Implement delete functionality
    console.log(`Delete post ${id}`);
  };

  return (
    <Container maxWidth="lg" sx={{ marginTop: '2rem' }}>
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{ fontFamily: 'Montserrat, sans-serif', color: '#2c3e50', fontWeight: 700 }}
      >
        My Travel Posts
      </Typography>
      <TableContainer component={Paper} sx={{ marginTop: '2rem', backgroundColor: '#ecf0f1', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)' }}>
        <Table>
          <TableHead>
            <TableRow sx={{ backgroundColor: '#34495e' }}>
              <TableCell sx={{ color: '#ffffff', fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }}>Photo</TableCell>
              <TableCell sx={{ color: '#ffffff', fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }}>Destination</TableCell>
              <TableCell sx={{ color: '#ffffff', fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }}>Description</TableCell>
              <TableCell sx={{ color: '#ffffff', fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }}>Travel Dates</TableCell>
              <TableCell sx={{ color: '#ffffff', fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }}>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {travelPosts.map((post) => (
              <TableRow key={post.id} sx={{ '&:nth-of-type(even)': { backgroundColor: '#f5f5f5' }, '&:hover': { backgroundColor: '#f0f0f0' } }}>
                <TableCell>
                  <Image src={post.photo} alt={post.destination} width={100} height={100} style={{ borderRadius: '5px' }} />
                </TableCell>
                <TableCell sx={{ fontFamily: 'Montserrat, sans-serif', color: '#34495e', fontWeight: 600 }}>{post.destination}</TableCell>
                <TableCell sx={{ fontFamily: 'Roboto, sans-serif', color: '#7f8c8d', fontWeight: 400 }}>{post.description}</TableCell>
                <TableCell sx={{ fontFamily: 'Roboto, sans-serif', color: '#95a5a6' }}>{post.startDate} - {post.endDate}</TableCell>
                <TableCell>
                  <Link href={`/travel-edit?id=${post.id}`} passHref>
                    <Button
                      size="small"
                      color="primary"
                      sx={{ fontFamily: 'Montserrat, sans-serif', color: 'white', marginRight: '0.5rem', backgroundColor: '#3498db', '&:hover': { backgroundColor: '#2980b9' } }}
                    >
                      <EditIcon /> Edit
                    </Button>
                  </Link>
                  <IconButton size="small" color="secondary" onClick={() => handleDelete(post.id)}>
                    <DeleteIcon sx={{ color: '#e74c3c' }} />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default TravelPosts;
