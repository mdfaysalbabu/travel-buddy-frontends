"use client";

import React, { useState } from "react";
import {
  Container,
  Grid,
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  Divider,
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import EditIcon from "@mui/icons-material/Edit";
import LockIcon from "@mui/icons-material/Lock";
import HistoryIcon from "@mui/icons-material/History";
import PostAddIcon from "@mui/icons-material/PostAdd";

import ChangePassword from "@/components/Profile/ChangePassword";
import ProfilePage from "@/components/Profile/ProfileCard";
import TravelRequestHistory from "@/components/Profile/TravelRequestHistory";
import TravelPosts from "@/components/Profile/MyTravelPosts";
import ProfileEdit from "@/components/Profile/Edit";

const MyProfile = () => {
  const [selectedSection, setSelectedSection] = useState("myProfile");

  const renderSection = () => {
    switch (selectedSection) {
      case "myProfile":
        return <ProfilePage />;
      case "editProfile":
        return <ProfileEdit />;
      case "changePassword":
        return <ChangePassword />;
      case "travelRequest":
        return <TravelRequestHistory />;
      case "travelPosts":
        return <TravelPosts />;
      default:
        return null;
    }
  };

  return (
    <Container maxWidth="lg" sx={{ marginTop: "2rem" }}>
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{
          fontFamily: "Arial, sans-serif",
          color: "#3F51B5",
          fontWeight: 700,
          textTransform: "uppercase",
          letterSpacing: "2px",
          marginBottom: "2rem",
        }}
      >
        My Profile
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} md={4}>
          <Box
            sx={{
              backgroundColor: "#EDE7F6",
              borderRadius: "15px",
              padding: "1rem",
              boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
            }}
          >
            <Typography
              variant="h6"
              gutterBottom
              sx={{
                fontFamily: "Arial, sans-serif",
                color: "#673AB7",
                fontWeight: 600,
                marginBottom: "1rem",
              }}
            >
              Settings
            </Typography>
            <List component="nav">
              <ListItem button onClick={() => setSelectedSection("myProfile")}>
                <AccountCircleIcon />
                <ListItemText
                  primary="Profile"
                  sx={{ marginLeft: "1rem" }}
                />
              </ListItem>
              <Divider />
              <ListItem button onClick={() => setSelectedSection("editProfile")}>
                <EditIcon />
                <ListItemText
                  primary="Edit Profile"
                  sx={{ marginLeft: "1rem" }}
                />
              </ListItem>
              <Divider />
              <ListItem
                button
                onClick={() => setSelectedSection("changePassword")}
              >
                <LockIcon />
                <ListItemText
                  primary="Change Password"
                  sx={{ marginLeft: "1rem" }}
                />
              </ListItem>
              <Divider />
              <ListItem
                button
                onClick={() => setSelectedSection("travelRequest")}
              >
                <HistoryIcon />
                <ListItemText
                  primary="Travel Requests"
                  sx={{ marginLeft: "1rem" }}
                />
              </ListItem>
              <Divider />
              <ListItem
                button
                onClick={() => setSelectedSection("travelPosts")}
              >
                <PostAddIcon />
                <ListItemText
                  primary="Travel Posts"
                  sx={{ marginLeft: "1rem" }}
                />
              </ListItem>
            </List>
          </Box>
        </Grid>
        <Grid item xs={12} md={8}>
          <Box
            sx={{
              backgroundColor: "#EDE7F6",
              borderRadius: "15px",
              padding: "2rem",
              boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
              minHeight: "400px",
            }}
          >
            {renderSection()}
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default MyProfile;

