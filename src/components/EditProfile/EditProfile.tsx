"use client";
import React, { useState } from "react";
import {
  Container,
  Typography,
  Box,
  TextField,
  Button,
  Card,
  Grid,
} from "@mui/material";
import SaveIcon from "@mui/icons-material/Save";
import CancelIcon from "@mui/icons-material/Cancel";

const EditProfile = () => {
  const [formData, setFormData] = useState({
    username: "faysal",
    email: "faysal@gmail.com",
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
    console.log("Profile saved", formData);
  };

  const handleCancel = () => {
    // Implement cancel functionality
    console.log("Edit cancelled");
  };

  return (
    <Container maxWidth="sm" sx={{ marginTop: "2rem" }}>
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{
          fontFamily: "Montserrat, sans-serif",
          color: "#2c3e50",
          fontWeight: 700,
        }}
      >
        Edit Profile
      </Typography>
      <Box sx={{ marginTop: "2rem", marginBottom: "2rem" }}>
        <Card
          sx={{
            padding: "2rem",
            borderRadius: "15px",
            boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                name="username"
                label="Username"
                variant="outlined"
                fullWidth
                value={formData.username}
                onChange={handleChange}
                sx={{ fontFamily: "Roboto, sans-serif", marginBottom: "1rem" }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="email"
                label="Email"
                variant="outlined"
                fullWidth
                value={formData.email}
                onChange={handleChange}
                sx={{ fontFamily: "Roboto, sans-serif", marginBottom: "1rem" }}
              />
            </Grid>
            <Grid
              item
              xs={12}
              sx={{ display: "flex", justifyContent: "space-between" }}
            >
              <Button
                variant="contained"
                color="primary"
                startIcon={<SaveIcon />}
                onClick={handleSave}
                sx={{ fontFamily: "Montserrat, sans-serif" }}
              >
                Save
              </Button>
              <Button
                variant="outlined"
                color="secondary"
                startIcon={<CancelIcon />}
                onClick={handleCancel}
                sx={{ fontFamily: "Montserrat, sans-serif" }}
              >
                Cancel
              </Button>
            </Grid>
          </Grid>
        </Card>
      </Box>
    </Container>
  );
};

export default EditProfile;
