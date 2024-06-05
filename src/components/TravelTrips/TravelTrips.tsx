"use client";
// Imports
import { useState } from "react";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { useGetAllTripsQuery } from "@/redux/features/trip/tripApi";
import {
  Box,
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Button,
  Link,
  TextField,
  InputAdornment,
} from "@mui/material";
import { motion } from "framer-motion";
import SearchIcon from '@mui/icons-material/Search';

const cardVariants = {
  offscreen: {
    y: 300,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

const TravelTips = () => {
  const [destination, setDestination] = useState("");
  const [travelDates, setTravelDates] = useState("");
  const [travelType, setTravelType] = useState("");
  const [query, setQuery] = useState({});

  const { data: trips } = useGetAllTripsQuery(query);

  const handleSearch = (event:any) => {
    event.preventDefault();
    const newQuery = {
      destination,
      startDate: travelDates,
      type: travelType,
    };
    setQuery(newQuery);
  };

  return (
    <>
      <Box
        component="form"
        onSubmit={handleSearch}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 2,
          marginTop: "10px",
          padding: "10px 20px",
          backgroundColor: "teal",
          borderRadius: "10px",
          boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.3)",
        }}
      >
        <TextField
          label="Destination"
          variant="filled"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          sx={{
            width: "250px",
            backgroundColor: "#fff",
            borderRadius: "10px",
            '& .MuiFilledInput-underline:before': {
              borderBottomColor: 'transparent',
            },
            '& .MuiFilledInput-underline:after': {
              borderBottomColor: 'transparent',
            },
          }}
        />
        <TextField
          label="Travel Dates"
          type="date"
          value={travelDates}
          onChange={(e) => setTravelDates(e.target.value)}
          InputLabelProps={{ shrink: true }}
          variant="filled"
          sx={{
            width: "250px",
            backgroundColor: "#fff",
            borderRadius: "10px",
            '& .MuiFilledInput-underline:before': {
              borderBottomColor: 'transparent',
            },
            '& .MuiFilledInput-underline:after': {
              borderBottomColor: 'transparent',
            },
          }}
        />
        <TextField
          label="Travel Type"
          variant="filled"
          value={travelType}
          onChange={(e) => setTravelType(e.target.value)}
          sx={{
            width: "250px",
            backgroundColor: "#fff",
            borderRadius: "10px",
            '& .MuiFilledInput-underline:before': {
              borderBottomColor: 'transparent',
            },
            '& .MuiFilledInput-underline:after': {
              borderBottomColor: 'transparent',
            },
          }}
        />
        <Button
          type="submit"
          variant="contained"
          sx={{
            height: "50px",
            borderRadius: "25px",
            backgroundColor: "#FF4081",
            color: "#fff",
            padding: "0 30px",
            fontSize: "1rem",
            "&:hover": {
              backgroundColor: "#d32f2f",
            },
          }}
        >
          Search
        </Button>
      </Box>
      <Box sx={{ marginTop: "20px" }}>
      <Container maxWidth="lg">
          <Typography
            variant="h4"
            component="h2"
            textAlign="center"
            fontWeight="bold"
            mb={4}
            sx={{ color: "#333", textTransform: "uppercase", letterSpacing: 1 }}
          >
            Travel Tips and Guides
          </Typography>
          <Grid container spacing={4}>
            {trips?.data?.map((trip:any) => (
              <Grid item xs={12} sm={6} md={4} key={trip.id}>
                <motion.div
                  initial="offscreen"
                  whileInView="onscreen"
                  viewport={{ once: true, amount: 0.8 }}
                  variants={cardVariants}
                >
                  <Card
                    sx={{
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      boxShadow: 3,
                      borderRadius: 3,
                      overflow: "hidden",
                      transition: "transform 0.3s ease-in-out",
                      "&:hover": {
                        transform: "scale(1.05)",
                      },
                    }}
                  >
                    <CardMedia
                      component="img"
                      height="200"
                      image={trip?.photo}
                      alt={trip?.destination}
                      sx={{ filter: "brightness(0.85)" }}
                    />
                    <CardContent
                      sx={{
                        flexGrow: 1,
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        background:
                          "linear-gradient(to bottom right, #ffffff, #f0f2f5)",
                      }}
                    >
                      <Box>
                        <LocationOnIcon sx={{ color: "#f44336", fontSize: 30, mb: 1 }} />
                        <Typography
                          variant="h6"
                          component="h3"
                          fontWeight="bold"
                          sx={{ color: "#444", mb: 1 }}
                        >
                          {trip.destination}
                        </Typography>
                        <Typography
                          variant="body2"
                          color="textSecondary"
                          mb={1}
                        >
                          {trip?.description}
                        </Typography>
                        <Typography
                          variant="body2"
                          color="textSecondary"
                          mb={2}
                        >
                          Travel Dates: {trip?.startDate} - {trip?.endDate}
                        </Typography>
                      </Box>
                      <Link href={`trip-details/${trip.id}`}>
                        <Button
                          variant="contained"
                          sx={{
                            backgroundColor: "teal",
                            color: "#fff",
                            "&:hover": {
                              backgroundColor: "#1976d2",
                            },
                          }}
                          fullWidth
                        >
                          View Details
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default TravelTips;
