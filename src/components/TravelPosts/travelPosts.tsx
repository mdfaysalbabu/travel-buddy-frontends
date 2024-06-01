'use client'
import React from 'react';
import { Container, Grid, Card, CardMedia, CardContent, CardActions, Typography, Button, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Link from 'next/link';

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
      <Grid container spacing={4}>
        {travelPosts.map((post) => (
          <Grid item key={post.id} xs={12} sm={6} md={4}>
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
              <CardMedia
                component="img"
                alt={post.destination}
                height="200"
                image={post.photo}
                title={post.destination}
                sx={{ borderTopLeftRadius: '15px', borderTopRightRadius: '15px' }}
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="h2"
                  sx={{ fontFamily: 'Montserrat, sans-serif', color: '#34495e', fontWeight: 600 }}
                >
                  {post.destination}
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="p"
                  sx={{ fontFamily: 'Roboto, sans-serif', color: '#7f8c8d', fontWeight: 400 }}
                >
                  {post.description}
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="p"
                  sx={{ marginTop: '0.5rem', fontFamily: 'Roboto, sans-serif', color: '#95a5a6' }}
                >
                  Travel Dates: {post.startDate} - {post.endDate}
                </Typography>
              </CardContent>
              <CardActions sx={{ justifyContent: 'space-between' }}>
                <Link href={`/travel-edit?id=${post.id}`} passHref>
                  <Button
                    size="small"
                    color="primary"
                    sx={{ fontFamily: 'Montserrat, sans-serif', color: 'white' }}
                  >
                    <EditIcon /> Edit
                  </Button>
                </Link>
                <IconButton size="small" color="secondary" onClick={() => handleDelete(post.id)}>
                  <DeleteIcon sx={{ color: '#e74c3c' }} />
                </IconButton>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default TravelPosts;
