'use client'
import React, { useState } from 'react';
import {
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  TextField,
  Box,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  SelectChangeEvent,
  IconButton,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from '@mui/icons-material';

const travelPostsAll = [
  {
    id: 1,
    destination: 'Paris, France',
    photo: 'https://source.unsplash.com/featured/?paris',
    description: 'A wonderful trip to Paris visiting the Eiffel Tower and Louvre Museum.',
    startDate: '2023-06-01',
    endDate: '2023-06-07',
  },
  {
    id: 2,
    destination: 'Tokyo, Japan',
    photo: 'https://source.unsplash.com/featured/?tokyo',
    description: 'Exploring the bustling city of Tokyo and its amazing food culture.',
    startDate: '2023-07-10',
    endDate: '2023-07-20',
  },
  // Add more posts as needed
];

const TravelPostsAll = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('');

  const handleSearch = () => {
    console.log(`Searching for: ${searchTerm}`);
  };

  const handleFilterChange = (e: SelectChangeEvent<string>) => {
    setFilter(e.target.value);
  };

  const filteredPosts = travelPostsAll.filter(post =>
    post.destination.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (filter ? post.startDate.split('-')[0] === filter : true)
  );

  return (
    <Container maxWidth="lg" sx={{ marginTop: '2rem' }}>
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{ fontFamily: 'Montserrat, sans-serif', color: '#2c3e50', fontWeight: 700 }}
      >
        Travel Posts
      </Typography>

      <Box sx={{ marginBottom: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', width: '70%' }}>
          <TextField
            variant="outlined"
            label="Search by Destination"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            sx={{ flexGrow: 1, fontFamily: 'Roboto, sans-serif' }}
          />
          <IconButton
            color="primary"
            onClick={handleSearch}
            sx={{ marginLeft: '0.5rem', backgroundColor: '#3498db', color: 'white', '&:hover': { backgroundColor: '#2980b9' } }}
          >
            <SearchIcon />
          </IconButton>
        </Box>
        <FormControl variant="outlined" sx={{ width: '25%' }}>
          <InputLabel>Filter by Year</InputLabel>
          <Select value={filter} onChange={handleFilterChange} label="Filter by Year">
            <MenuItem value=""><em>None</em></MenuItem>
            <MenuItem value="2023">2023</MenuItem>
            <MenuItem value="2022">2022</MenuItem>
            <MenuItem value="2021">2021</MenuItem>
          </Select>
        </FormControl>
      </Box>

      <Grid container spacing={4}>
        {filteredPosts.slice(0, 10).map((post) => (
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
                <Button
                  size="small"
                  color="primary"
                  sx={{ marginTop: '0.5rem', fontFamily: 'Montserrat, sans-serif' }}
                  href={`/travel/${post.id}`}
                >
                  View Details
                  <Link sx={{ marginLeft: '0.5rem' }} />
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '2rem' }}>
        <Button
          variant="contained"
          color="primary"
          href="/travels"
          sx={{ fontFamily: 'Montserrat, sans-serif', backgroundColor: '#3498db', '&:hover': { backgroundColor: '#2980b9' } }}
        >
          See More
        </Button>
      </Box>
    </Container>
  );
};

export default TravelPostsAll;
