"use client";
import React from "react";
import { Box, Typography, Button, Container, Grid, Paper } from "@mui/material";
import Image from "next/image";
import { useGetTripQuery } from "@/redux/features/trip/tripApi";
import { useAppSelector } from "@/redux/hooks";
import { selectCurrentUser } from "@/redux/features/auth/authSlice";
import { useRequestBuddyMutation } from "@/redux/features/buddy/buddyApi";
import { toast } from "sonner";

const TravelDetailsPage: React.FC = ({ params }: any) => {
  const user = useAppSelector(selectCurrentUser);
  const { data: trip } = useGetTripQuery(params.tripId);
  const [requestBuddy] = useRequestBuddyMutation();

  const handleBuddyReq = async () => {
    const toastId = toast.loading("Requesting...");
    try {
      const userId = { userId: user?.userId };
      const data = {
        tripId: trip?.data?.id,
        userId: userId,
      };
      const res: any = await requestBuddy(data);
      if (res?.data?.success === true) {
        toast.success("Travel buddy request sent successfully", {
          id: toastId,
          duration: 2000,
        });
      }
    } catch (error) {
      toast.error("Something went wrong!", { id: toastId, duration: 2000 });
    }
  };

  return (
    <Container maxWidth="lg" sx={{ marginTop: "2rem", fontFamily: "Montserrat, sans-serif" }}>
      <Paper elevation={4} sx={{ padding: "2rem", borderRadius: "15px", backgroundColor: "#f9f9f9" }}>
        <Typography variant="h3" align="center" gutterBottom sx={{ fontWeight: 700, color: "#34495e" }}>
          Trip to {trip?.data?.destination}
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                borderRadius: "15px",
                overflow: "hidden",
                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
                height: "auto",
                maxHeight: "400px"
              }}
            >
              <Image
                src={trip?.data?.photo || "/default-trip-photo.jpg"}
                alt="Trip Photo"
                width={800}
                height={600}
                layout="responsive"
                objectFit="cover"
                style={{ borderRadius: "15px" }}
              />
            </Box>
            <Box mt={2} sx={{ padding: "1rem", backgroundColor: "#ecf0f1", borderRadius: "15px" }}>
              <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, color: "#34495e" }}>
                Description
              </Typography>
              <Typography variant="body1" sx={{ color: "#7f8c8d" }}>
                {trip?.data?.description}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{ padding: "1rem", backgroundColor: "#ecf0f1", borderRadius: "15px", marginBottom: "1rem" }}>
              <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, color: "#34495e" }}>
                Start Date
              </Typography>
              <Typography variant="body1" sx={{ color: "#7f8c8d" }}>
                {trip?.data?.startDate}
              </Typography>
            </Box>
            <Box sx={{ padding: "1rem", backgroundColor: "#ecf0f1", borderRadius: "15px", marginBottom: "1rem" }}>
              <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, color: "#34495e" }}>
                End Date
              </Typography>
              <Typography variant="body1" sx={{ color: "#7f8c8d" }}>
                {trip?.data?.endDate}
              </Typography>
            </Box>
            <Box sx={{ padding: "1rem", backgroundColor: "#ecf0f1", borderRadius: "15px", marginBottom: "1rem" }}>
              <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, color: "#34495e" }}>
                Travel Type
              </Typography>
              <Typography variant="body1" sx={{ color: "#7f8c8d" }}>
                {trip?.data?.type}
              </Typography>
            </Box>
            <Box sx={{ padding: "1rem", backgroundColor: "#ecf0f1", borderRadius: "15px", marginBottom: "1rem" }}>
              <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, color: "#34495e" }}>
                Location
              </Typography>
              <Typography variant="body1" sx={{ color: "#7f8c8d" }}>
                {trip?.data?.destination}
              </Typography>
            </Box>
            <Box mt={3} textAlign="center">
              <Button
                onClick={handleBuddyReq}
                type="submit"
                variant="contained"
                sx={{
                  padding: "0.75rem 1.5rem",
                  fontWeight: 600,
                  borderRadius: "25px",
                  backgroundColor: "#3498db",
                  "&:hover": { backgroundColor: "#2980b9" },
                }}
              >
                Request to Join Trip
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default TravelDetailsPage;
