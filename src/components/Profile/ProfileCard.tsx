"use client";
import React from "react";
import {
  Container,
  Box,
  Card,
  CardContent,
  Typography,
  Avatar,
} from "@mui/material";
import { useGetProfileQuery } from "@/redux/features/auth/authApi";


const ProfilePage = () => {
  const { data: user } = useGetProfileQuery(undefined);

  return (
    <Container maxWidth="sm" sx={{ mt: 5 }}>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Card
          sx={{
            width: "100%",
            textAlign: "center",
            backgroundColor: "#f0f0f0", // Light grey background
            borderRadius: "20px",
            boxShadow: "0 8px 16px rgba(0, 0, 0, 0.1)",
          }}
        >
          <CardContent>
            <Avatar
              alt={user?.data?.name}
              src="https://images.pexels.com/photos/11725367/pexels-photo-11725367.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              sx={{
                width: 120,
                height: 120,
                margin: "auto",
                marginBottom: 2,
                border: "4px solid #ffffff", // White border
                borderRadius: "50%", // Circular avatar
              }}
            />
            <Typography
              variant="h5"
              component="div"
              sx={{
                color: "#2c3e50", // Dark blue text color
                fontWeight: 700,
                marginBottom: 1,
                fontFamily: "'Indie Flower', cursive", // Stylish font
              }}
            >
              {user?.data?.name}
            </Typography>
            <Typography
              variant="body2"
              color="#34495e"
              sx={{ marginBottom: 2, fontFamily: "'Roboto', sans-serif" }} // Roboto font
            >
              {user?.data?.email}
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
};

export default ProfilePage;
