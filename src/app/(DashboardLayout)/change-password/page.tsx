import React from "react";
import { Box, Typography, TextField, Button, Container } from "@mui/material";

const ChangePassword = () => {
  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography variant="h5" gutterBottom>
          Change Password
        </Typography>
        <Box
          component="form"
          noValidate
          sx={{ width: "100%", mt: 3 }}
          onSubmit={(e) => {
            e.preventDefault();
            // Handle form submission
          }}
        >
          <TextField
            margin="normal"
            required
            fullWidth
            id="currentPassword"
            label="Current Password"
            type="password"
            variant="outlined"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="newPassword"
            label="New Password"
            type="password"
            variant="outlined"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="confirmPassword"
            label="Confirm New Password"
            type="password"
            variant="outlined"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Change Password
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default ChangePassword;
