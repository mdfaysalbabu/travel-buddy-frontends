"use client";

import React, { useState } from "react";
import {
  Container,
  Grid,
  Typography,
  TextField,
  Button,
  Box,
  IconButton,
} from "@mui/material";

import Link from "next/link";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useRouter } from "next/navigation";

const TravelEdit = () => {
  const router = useRouter();
//   const { id } = router.query; // Assuming the ID of the trip is passed as a query parameter

  const [formData, setFormData] = useState({
    destination: "Tokyo, Japan",
    description:
      "Exploring the bustling city of Tokyo and its amazing food culture.",
    startDate: "2023-07-10",
    endDate: "2023-07-20",
    budget: 3000,
    type: "Vacation",
    photo: "",
    activities: ["Sightseeing", "Food Tour"],
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Logic to submit form data
    console.log("Form data submitted:", formData);
  };

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Box display="flex" alignItems="center" mb={4}>
        <Link href="/travel-posts" passHref>
          <IconButton component="a" color="primary">
            <ArrowBackIcon />
          </IconButton>
        </Link>
        <Typography
          variant="h4"
          component="h1"
          sx={{
            ml: 2,
            fontFamily: "Montserrat, sans-serif",
            color: "#2c3e50",
            fontWeight: 700,
          }}
        >
          Edit Travel Post
        </Typography>
      </Box>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              name="destination"
              label="Destination"
              variant="outlined"
              fullWidth
              required
              value={formData.destination}
              onChange={handleChange}
              sx={{ backgroundColor: "#ecf0f1", borderRadius: "8px" }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="description"
              label="Detailed Description"
              variant="outlined"
              fullWidth
              required
              multiline
              rows={4}
              value={formData.description}
              onChange={handleChange}
              sx={{ backgroundColor: "#ecf0f1", borderRadius: "8px" }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              name="startDate"
              label="Start Date"
              variant="outlined"
              type="date"
              fullWidth
              required
              value={formData.startDate}
              onChange={handleChange}
              sx={{ backgroundColor: "#ecf0f1", borderRadius: "8px" }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              name="endDate"
              label="End Date"
              variant="outlined"
              type="date"
              fullWidth
              required
              value={formData.endDate}
              onChange={handleChange}
              sx={{ backgroundColor: "#ecf0f1", borderRadius: "8px" }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              name="budget"
              label="Budget"
              variant="outlined"
              type="number"
              fullWidth
              required
              value={formData.budget}
              onChange={handleChange}
              sx={{ backgroundColor: "#ecf0f1", borderRadius: "8px" }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              name="type"
              label="Type"
              variant="outlined"
              fullWidth
              required
              value={formData.type}
              onChange={handleChange}
              sx={{ backgroundColor: "#ecf0f1", borderRadius: "8px" }}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              component="label"
              fullWidth
              color="primary"
              sx={{
                backgroundColor: "#2980b9",
                color: "#fff",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              Upload Photos
              <input
                type="file"
                hidden
                accept="image/*"
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    photo: e.target.files
                      ? URL.createObjectURL(e.target.files[0])
                      : formData.photo,
                  })
                }
              />
            </Button>
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="activities"
              label="Activities (comma separated)"
              variant="outlined"
              fullWidth
              required
              value={formData.activities.join(", ")}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  activities: e.target.value
                    .split(",")
                    .map((act) => act.trim()),
                })
              }
              sx={{ backgroundColor: "#ecf0f1", borderRadius: "8px" }}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              type="submit"
              variant="contained"
              fullWidth
              sx={{
                backgroundColor: "#27ae60",
                color: "#fff",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              Save Changes
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default TravelEdit;
