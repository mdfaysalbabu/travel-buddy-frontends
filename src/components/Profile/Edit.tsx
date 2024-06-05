"use client";
import React, { useState } from "react";
import { Container, Typography, TextField, Button, Box } from "@mui/material";
import { useUpdateProfileMutation } from "@/redux/features/auth/authApi";
import { toast } from "sonner";
import PersonIcon from "@mui/icons-material/Person";

const ProfileEdit = () => {
  const [name, setName] = useState("");
  const [updateProfile] = useUpdateProfileMutation();

  const handleSave = async (e:any) => {
    e.preventDefault();
    const toastId = toast.loading("Updating...");
    try {
      const res = await updateProfile({ name });
      if (res?.data?.success === true) {
        toast.success("Profile updated successfully", { id: toastId });
      }
    } catch (error) {
      toast.error("Failed to update profile", { id: toastId });
    }
  };

  return (
    <Container maxWidth="sm" sx={{ marginTop: "2rem" }}>
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{
          fontFamily: "Arial, sans-serif",
          color: "#673AB7",
          fontWeight: 700,
          textTransform: "uppercase",
          marginBottom: "2rem",
        }}
      >
        Edit Profile
      </Typography>
      <Box
        component="form"
        onSubmit={handleSave}
        sx={{
          backgroundColor: "#EDE7F6",
          borderRadius: "15px",
          padding: "2rem",
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
        }}
      >
        <TextField
          fullWidth
          label="Name"
          variant="outlined"
          value={name}
          onChange={(e) => setName(e.target.value)}
          sx={{ marginBottom: "1rem" }}
          InputProps={{
            startAdornment: (
              <PersonIcon sx={{ color: "#673AB7", marginRight: "0.5rem" }} />
            ),
          }}
        />
        <Button
          variant="contained"
          color="primary"
          fullWidth
          type="submit"
          sx={{
            fontFamily: "Arial, sans-serif",
            backgroundColor: "#673AB7",
            "&:hover": { backgroundColor: "#512DA8" },
          }}
        >
          Save Changes
        </Button>
      </Box>
    </Container>
  );
};

export default ProfileEdit;
